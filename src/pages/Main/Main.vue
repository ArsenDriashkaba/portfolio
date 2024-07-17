<script setup lang="ts">
import { Page, Timer } from '@/components/shared';
</script>

<template>
  <Page>This is a Main Page</Page>
  <Timer :interval="60" />
</template>
