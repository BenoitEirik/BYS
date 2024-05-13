<script lang="ts" setup>
const dateAfter = ref<null | Date>(null)
const dateBefore = ref<null | Date>(null)

const placeholderAfter = computed(() => {
  if (dateAfter.value === null) {
    return ''
  } else {
    return `${dateAfter.value.getFullYear()}-${String(dateAfter.value.getMonth() + 1).padStart(2, '0')}-${String(dateAfter.value.getDate()).padStart(2, '0')}`
  }
})

const placeholderBefore = computed(() => {
  if (dateBefore.value === null) {
    return ''
  } else {
    return `${dateBefore.value.getFullYear()}-${String(dateBefore.value.getMonth() + 1).padStart(2, '0')}-${String(dateBefore.value.getDate()).padStart(2, '0')}`
  }
})
</script>

<template>
  <BlockWrapper :title="$t('blocks.daterange.title')">
    <template #input>
      <div class="flex justify-between w-full gap-2">
        <span class="text-nowrap">Après :</span>
        <VDatePicker v-model="dateAfter">
          <template #default="{ togglePopover }">
            <button class="w-full p-1 px-2 bg-white border rounded-md" @click="togglePopover">
              {{ placeholderAfter === '' ? $t('blocks.daterange.placeholder_after') : placeholderAfter }}
            </button>
          </template>
        </VDatePicker>
      </div>
      <div class="flex items-center justify-between w-full gap-2">
        <span class="text-nowrap">Avant :</span>
        <VDatePicker v-model="dateBefore">
          <template #default="{ togglePopover }">
            <button class="w-full p-1 px-2 bg-white border rounded-md" @click="togglePopover">
              {{ placeholderBefore === '' ? $t('blocks.daterange.placeholder_before') : placeholderBefore }}
            </button>
          </template>
        </VDatePicker>
      </div>
    </template>
  </BlockWrapper>
</template>
