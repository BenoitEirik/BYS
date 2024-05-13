<script lang="ts" setup>
const { t } = useI18n()

const range = ref({
  start: null as null | Date,
  end: new Date()
})

const placeholder = computed(() => {
  if (range.value.start === null) {
    return ''
  } else {
    return `${t('blocks.daterange.label_from')} ${range.value.start.getFullYear()}-${String(range.value.start.getMonth() + 1).padStart(2, '0')}-${String(range.value.start.getDate()).padStart(2, '0')}` +
    ` ${t('blocks.daterange.label_to')} ${range.value.end.getFullYear()}-${String(range.value.end.getMonth() + 1).padStart(2, '0')}-${String(range.value.end.getDate()).padStart(2, '0')}`
  }
})
</script>

<template>
  <BlockWrapper :title="$t('blocks.daterange.title')">
    <template #input>
      <div class="flex items-center justify-between w-full gap-2">
        <VDatePicker v-model.range="range">
          <template #default="{ togglePopover }">
            <button class="w-full p-1 px-2 bg-white border rounded-md" @click="togglePopover">
              {{ placeholder === '' ? $t('blocks.daterange.placeholder') : placeholder }}
            </button>
          </template>
        </VDatePicker>
      </div>
    </template>
  </BlockWrapper>
</template>
