<script setup lang="ts">
import { OhVueIcon } from "oh-vue-icons";
import { IconName, icons } from "./icons";

const sizes = {
  sm: 1,
  md: 1.5,
  lg: 2,
};

const variants = {
  dark: "black",
  light: "white",
  accent: "orange",
};

export type IconProps = {
  name: IconName;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
};

withDefaults(defineProps<IconProps>(), {
  size: "md",
  variant: "accent",
});
</script>

<template>
  <OhVueIcon
    :name="icons[name]"
    :fill="variants[variant]"
    :scale="sizes[size]"
  />
</template>
