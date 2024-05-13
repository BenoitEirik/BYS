<script lang="ts" setup>
const selected = ref<string>('')

</script>

<template>
  <BlockWrapper :title="$t('blocks.filetype.title')">
    <template #input>
      <div class="flex items-center w-full gap-2">
        <input type="text" :placeholder="$t('blocks.filetype.placeholder_input')"
          class="w-full px-2 py-1 bg-white border rounded-md">
        <span class="px-2 py-1">{{ $t('blocks.filetype.or') }}</span>
        <!-- https://developers.google.com/search/docs/crawling-indexing/indexable-file-types -->
        <select v-model="selected" class="w-full px-2 py-1 bg-white border rounded-md">
          <option value="" disabled hidden>{{ $t('blocks.filetype.placeholder_select') }}</option>
          <option value="pdf">pdf</option>
          <option value="docx">docx</option>
          <option value="xlsx">xlsx</option>
          <option value="pptx">pptx</option>
          <option value="html">html</option>
          <option value="csv">csv</option>
          <option value="xml">xml</option>
          <option value="htm">htm</option>
          <option value="doc">doc</option>
          <option value="ppt">ppt</option>
          <option value="xls">xls</option>
          <option value="odt">odt</option>
          <option value="odp">odp</option>
          <option value="ods">ods</option>
          <option value="svg">svg</option>
          <option value="rtf">rtf</option>
          <option value="txt">txt</option>
          <option value="cpp">cpp</option>
          <option value="c">c</option>
          <option value="py">py</option>
          <option value="java">java</option>
          <option value="h">h</option>
          <option value="bas">bas</option>
          <option value="cc">cc</option>
          <option value="hpp">hpp</option>
          <option value="cs">cs</option>
          <option value="pl">pl</option>
          <option value="cxx">cxx</option>
          <option value="wml">wml</option>
          <option value="kmz">kmz</option>
          <option value="gpx">gpx</option>
          <option value="kml">kml</option>
          <option value="ps">ps</option>
          <option value="hwp">hwp</option>
          <option value="wap">wap</option>
        </select>
      </div>
    </template>
  </BlockWrapper>
</template>

<style></style>