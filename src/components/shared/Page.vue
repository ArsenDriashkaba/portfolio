<script setup lang="ts">
import router from "@/router";
import Button from "../elements/Button.vue";

type Props = {
  hasBackButton?: boolean;
  isError?: boolean;
  isLoading?: boolean;
};
withDefaults(defineProps<Props>(), {
  hasBackButton: true,
});
</script>

<template>
  <header>
    <Button
      iconName="backArrow"
      v-if="hasBackButton"
      variant="ghost"
      @click="router.go(-1)"
      className="!px-0"
      >Back
    </Button>
    <slot name="headerContent" />
  </header>

  <div class="w-full flex items-center justify-center" v-if="isLoading"></div>
  <slot v-else />
</template>
