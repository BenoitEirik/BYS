<script lang="ts" setup>
const selected = ref<string>('')
</script>

<template>
  <BlockWrapper :title="$t('blocks.site.title')">
    <template #input>
      <input type="text" class="w-full px-2 py-1 bg-white border rounded-md"
        :placeholder="$t('blocks.site.placeholder')">
    </template>
  </BlockWrapper>
</template>

<style></style>