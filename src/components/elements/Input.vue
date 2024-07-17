<script setup lang="ts" generic="Value">
import Icon from './Icon/Icon.vue';
import { IconName } from './Icon/icons';

export type InputProps<Value> = {
  modelValue?: Value;
  iconName?: IconName;
  placeholder?: string;
} & /* @vue-ignore */ HTMLInputElement;

withDefaults(defineProps<InputProps<Value>>(), {
  type: 'text',
});
</script>

<template>
  <div class="relative border-none w-full p-0">
    <input
      v-bind="$attrs"
      :class="[
        'relative w-full focus:border-newOrange !focus:outline-none',
        iconName && 'pr-12',
      ]"
      :modelValue="modelValue"
      @input="$emit('update:modelValue', $event.target?.value)"
      :placeholder="placeholder"
    />
    <Icon
      name="search"
      class="absolute right-3 top-1/2 -translate-y-1/2"
      v-if="iconName"
      size="sm"
    />
  </div>
</template>
