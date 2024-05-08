<script lang="ts" setup>
const selected = ref<string>('')
</script>

<template>
  <BlockWrapper :title="$t('blocks.logical.title')">
    <template #input>
      <input type="text" class="w-full p-2 px-3 bg-white border rounded-md" :placeholder="$t('blocks.keywords.placeholder')">
      <select v-model="selected" class="p-2 px-3 bg-white border rounded-md">
        <option value="" hidden disabled>{{ $t('blocks.logical.placeholder_select') }}</option>
        <option value="or">{{ $t('blocks.logical.or') }}</option>
        <option value="and">{{ $t('blocks.logical.and') }}</option>
      </select>
      <input type="text" class="w-full p-2 px-3 bg-white border rounded-md" :placeholder="$t('blocks.keywords.placeholder')">
    </template>
    <template #advanced>
      <div class="flex items-center w-full gap-2">
        <input type="checkbox" id="logical-exact-match" />
        <label for="logical-exact-match">{{ $t('blocks.keywords.checkbox_exact_match') }}</label>
      </div>

      <div class="flex items-center w-full gap-2">
        <input type="checkbox" id="logical-exclude" />
        <label for="logical-exclude">{{ $t('blocks.keywords.checkbox_exclude') }}</label>
      </div>
    </template>
  </BlockWrapper>
</template>

<style></style>