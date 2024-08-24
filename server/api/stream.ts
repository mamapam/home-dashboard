import Stream from 'node-rtsp-stream';

export default defineEventHandler(async (event) => {
  // api/stream/cameraId/port
  let cameraIp: string;
  const { cameraId, port } = getQuery(event);
  const { cameraPorch, cameraGarage, cameraBackyard } = useRuntimeConfig();

  if (cameraId === 'porch') {
    cameraIp = cameraPorch;
  }
  else if (cameraId === 'garage') {
    cameraIp = cameraGarage;
  }
  else if (cameraId === 'backyard') {
    cameraIp = cameraBackyard;
  }
  else {
    return { error: 'Invalid camera' };
  }

  new Stream({
    name: cameraId,
    streamUrl: cameraIp,
    wsPort: port,
    ffmpegOptions: {
      '-stats': '',
      '-r': 30
    }
  });
});
