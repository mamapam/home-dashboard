<template>
  <div class="grid grid-cols-3 gap-3 p-3 max-h-full max-w-full">
    <div class="grid grid-rows-8 gap-3">
      <div class="row-span-1 flex self-center">
        <slot name="item1"></slot>
      </div>
      <div class="row-start-2 row-span-3">
        <slot name="item2"></slot>
      </div>
      <div class="row-start-5 row-span-4">
        <slot name="item3"></slot>
      </div>
    </div>

    <div class="grid grid-rows-2 gap-3">
      <div><slot name="item4"></slot></div>
      <div><slot name="item5"></slot></div>
    </div>

    <div class="grid grid-rows-3 gap-3">
      <div><slot name="item6"></slot></div>
      <div><slot name="item7"></slot></div>
      <div><slot name="item8"></slot></div>
    </div>
  </div>
</template>
