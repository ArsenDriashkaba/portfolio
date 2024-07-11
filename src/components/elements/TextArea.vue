<script setup lang="ts">
export type TextAreaProps = {
  placeholder?: string;
};

defineProps<TextAreaProps>();
</script>

<template>
  <textarea class="w-full h-48" :placeholder="placeholder" />
</template>
