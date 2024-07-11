<script setup lang="ts" generic="Values extends GenericObject">
import { type FormOptions, GenericObject, useForm } from "vee-validate";

type Emits = {
  (e: "onSubmit", value: Values): void;
};
type Props = {
  formOptions?: FormOptions<Values>;
};

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

const form = useForm<Values>(props.formOptions);

const onSubmit = form.handleSubmit((values) => {
  emit("onSubmit", values);
});
</script>

<template>
  <form @submit="onSubmit">
    <slot />
  </form>
</template>
