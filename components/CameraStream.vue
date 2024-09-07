<script lang="ts" setup>
const { streamUrl } = defineProps<{ streamUrl: string }>();
const videoEl = ref<HTMLVideoElement | null>(null);

const startPlay = async (videoEl: HTMLVideoElement, url: string) => {
  const webrtc = new RTCPeerConnection({
    iceServers: [
      {
        urls: ['stun:stun.l.google.com:19302']
      }
    ],
    sdpSemantics: 'unified-plan'
  });

  webrtc.ontrack = function (event) {
    console.log(`${event.streams.length} track(s) delivered`);
    videoEl.srcObject = event.streams[0];
    videoEl.play();
  };

  webrtc.addTransceiver('video', { direction: 'sendrecv' });

  webrtc.onnegotiationneeded = async function handleNegotiationNeeded() {
    const offer = await webrtc.createOffer();
    await webrtc.setLocalDescription(offer);

    fetch(url, {
      method: 'POST',
      body: new URLSearchParams({ data: btoa(webrtc.localDescription!.sdp!) })
    })
      .then(response => response.text())
      .then(data => {
        try {
          webrtc.setRemoteDescription(new RTCSessionDescription({ type: 'answer', sdp: atob(data) }));
        } catch (e) {
          console.warn(e);
        }
      });
  };

  const webrtcSendChannel = webrtc.createDataChannel('rtsptowebSendChannel');
  webrtcSendChannel.onopen = () => {
    console.log(`${webrtcSendChannel.label} has opened`);
    webrtcSendChannel.send('ping');
  };

  webrtcSendChannel.onclose = () => {
    console.log(`${webrtcSendChannel.label} has closed`);
    startPlay(videoEl, url);
  };

  webrtcSendChannel.onmessage = event => console.log(event.data);
};

onMounted(() => {
  if (videoEl.value && streamUrl) {
    startPlay(videoEl.value, streamUrl);
  }
});
</script>

<template>
  <TheCard>
    <video id="webrtc-video" ref="videoEl" controls autoplay muted></video>
  </TheCard>
</template>

<style scoped>
video {
  width: auto;
  height: 100%;
}
</style>
