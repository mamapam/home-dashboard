<script setup lang="ts">
import '~/assets/css/styles.css';

useHead({
  title: 'Home Dashboard',
  meta: [
    {
      name: 'description',
      content: 'Dashboard for everything home.'
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
});
</script>

<template>
  <NuxtPage />
</template>
