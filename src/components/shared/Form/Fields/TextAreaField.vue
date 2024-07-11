<script setup lang="ts">
import BaseField, { BaseFieldProps } from "../Fields/BaseField.vue";
import { TextArea, TextAreaProps } from "@/components/elements";

type Props = TextAreaProps & BaseFieldProps;

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
    <TextArea
      :placeholder="placeholder"
      :type="type"
      :value="field.value.value"
      @input="field.handleChange"
    />
  </BaseField>
</template>
