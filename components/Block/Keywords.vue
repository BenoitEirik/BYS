<script lang="ts" setup>

</script>

<template>
  <BlockWrapper :title="$t('blocks.keywords.title')">
    <template #input>
      <input type="text" class="w-full p-2 px-3 bg-white border rounded-md" :placeholder="$t('blocks.keywords.placeholder')">
    </template>
    <template #advanced>
      advanceds
    </template>
  </BlockWrapper>
</template>

<style></style>