<template>
  <div class="grid-container">
    <div class="item1"><slot name="item1"></slot></div>
    <div class="item2"><slot name="item2"></slot></div>
    <div class="item3"><slot name="item3"></slot></div>
    <div class="item4"><slot name="item4"></slot></div>
    <div class="item5"><slot name="item5"></slot></div>
    <div class="item6"><slot name="item6"></slot></div>
    <div class="item7"><slot name="item7"></slot></div>
  </div>
</template>

<style scoped>
  .grid-container {
    display: grid;
    grid-template:
    'info empty camera1'
    'info empty camera1'
    'weather empty camera1'
    'weather empty camera1'
    'weather empty camera2'
    'weather empty camera2'
    'prayer empty camera2'
    'prayer empty camera2'
    'prayer empty camera3'
    'prayer empty camera3'
    'prayer empty camera3'
    'prayer empty camera3';
    grid-gap: 0.75rem;
    padding: 0.75rem;
    height: 100%;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(12, minmax(0, 1fr));

    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  .item1 { grid-area: info}
  .item2 { grid-area: weather}
  .item3 { grid-area: prayer}
  .item4 { grid-area: empty }
  .item5 { grid-area: camera1}
  .item6 { grid-area: camera2}
  .item7 { grid-area: camera3}
</style>
