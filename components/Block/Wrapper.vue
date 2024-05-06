<script lang="ts" setup>
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex flex-col max-w-full gap-2 p-3 border rounded-lg shadow-sm">
    <div class="flex items-center w-full gap-4">
      <h3 class="font-medium line-clamp-2 grow">{{ props.title }}</h3>
      <button class="flex items-center justify-center w-8 h-8 font-bold border rounded-full shrink-0"
        v-wave>
        <Icon name="lets-icons:add" size="1.25rem" />
      </button>
    </div>
    <slot name="input" />
    <slot name="advanced" />
  </div>
</template>

<style></style>