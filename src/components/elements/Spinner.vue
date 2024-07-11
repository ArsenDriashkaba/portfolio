<script setup lang="ts">
import Icon from "./Icon/Icon.vue";

type Props = {
  message?: string;
};

defineProps<Props>();
</script>

<template>
  <div class="flex items-center gap-2">
    <h1 v-if="message">{{ message }}</h1>
    <Icon name="loading" animation="spin" speed="slow" v-bind="$attrs" />
  </div>
</template>
