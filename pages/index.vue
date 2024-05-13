<script lang="ts" setup>

</script>

<template>
  <main class="flex flex-col items-center">
    <section class="flex flex-col items-center justify-evenly basis-2/5">
      <h1 class="text-4xl font-bold">{{ $t('title') }}</h1>
      <Search />
    </section>

    <section class="flex p-4 gap-4 basis-3/5 w-[1000px]">
      <div class="flex flex-col gap-4 basis-1/2 max-w-[50%]">
        <h2 class="text-xl font-bold text-center">{{ $t('operator_categories.keywords') }}</h2>
        <BlockKeywords />
        <BlockLogical />
      </div>

      <div class="flex flex-col gap-4 basis-1/2 max-w-[50%]">
        <h2 class="text-xl font-bold text-center">{{ $t('operator_categories.specific') }}</h2>
        <BlockFiletype />
        <BlockSite />
        <BlockDaterange />
      </div>
    </section>
  </main>
</template>

<style>

</style>