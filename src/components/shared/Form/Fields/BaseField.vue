<script setup lang="ts">
import { computed } from 'vue';
import { useField } from 'vee-validate';

export type BaseFieldProps = {
  name: string;
  label?: string;
  id?: string;
  isRequired?: boolean;
  wrapperClass?: string;
  type?: HTMLInputElement['type'];
};

const props = defineProps<BaseFieldProps>();

const field = useField(props.name);

const afterStyles = computed(
  () => props.isRequired && 'after:content-["*"] after:text-accent after:pl-1',
);
</script>

<template>
  <div :class="['flex flex-col pt-1 pb-3 w-full', wrapperClass]">
    <label :class="['pb-0.5', afterStyles]">
      {{ label }}
    </label>
    <slot :field="field" />
    <p class="text-accent">{{ field.errorMessage }}</p>
  </div>
</template>
