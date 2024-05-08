<script lang="ts" setup>

</script>

<template>
  <BlockWrapper :title="$t('blocks.keywords.title')">
    <template #input>
      <input type="text" class="w-full p-2 px-3 bg-white border rounded-md" :placeholder="$t('blocks.keywords.placeholder')">
    </template>
    <template #advanced>
      <div class="flex items-center w-full gap-2">
        <input type="checkbox" id="keywords-exact-match" />
        <label for="keywords-exact-match">{{ $t('blocks.keywords.checkbox_exact_match') }}</label>
      </div>

      <div class="flex items-center w-full gap-2">
        <input type="checkbox" id="keywords-intitle" />
        <label for="keywords-intitle">{{ $t('blocks.keywords.checkbox_intitle') }}</label>
      </div>

      <div class="flex items-center w-full gap-2">
        <input type="checkbox" id="keywords-exclude" />
        <label for="keywords-exclude">{{ $t('blocks.keywords.checkbox_exclude') }}</label>
      </div>
    </template>
  </BlockWrapper>
</template>

<style></style>