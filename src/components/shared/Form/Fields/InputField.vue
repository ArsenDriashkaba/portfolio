<script setup lang="ts">
import BaseField, { BaseFieldProps } from "../Fields/BaseField.vue";
import Input, { type InputProps } from "@/components/elements/Input.vue";

type Props = InputProps<string> & BaseFieldProps;

defineProps<Props>();
</script>

<template>
  <BaseField
    :name="name"
    :label="label"
    :id="id"
    :isRequired="isRequired"
    v-slot="{ field }"
  >
    <Input
      :placeholder="placeholder"
      :type="type"
      :value="field.value.value"
      @input="field.handleChange"
    />
  </BaseField>
</template>
