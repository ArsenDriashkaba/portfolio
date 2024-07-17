<script setup lang="ts">
import { computed } from 'vue';
import { IconName } from './Icon/icons';
import Icon from './Icon/Icon.vue';
import Spinner from './Spinner.vue';

const styleVariants = {
  primary: 'bg-primary text-white',
  secondary: 'border border-2 border-solid border-primary text-primary',
  ghost: 'text-primary',
};

export type ButtonProps = {
  variant?: keyof typeof styleVariants;
  type?: HTMLButtonElement['type'];
  iconName?: IconName;
  isLoading?: boolean;
  className?: string;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  type: 'button',
});

const spinnerStyle = computed(() => props.variant === 'primary' && 'white');
</script>

<template>
  <button
    :class="[
      'hover:scale-105 transition ease-in-out py-2 px-5 text-md font-semibold flex items-center whitespace-nowrap',
      styleVariants[variant],
      className,
    ]"
    :type="type"
  >
    <slot />
    <Icon
      :name="iconName"
      v-if="iconName && !isLoading"
      class="ml-2"
      size="sm"
    />
    <Spinner v-if="isLoading" :variant="spinnerStyle" size="sm" />
  </button>
</template>
