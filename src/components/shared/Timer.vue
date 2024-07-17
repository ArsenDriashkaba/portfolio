<script setup lang="ts">
import { useSetTimer } from '@/composables/useSetTimer';
import { computed, SVGAttributes } from 'vue';
import { Button } from '../elements';

const DEFAULT_CIRCLE_PROPS = {
  circleDiameter: 48,
  'stroke-width': 4,
} as const;

type CircleProps = SVGAttributes & {
  circleDiameter?: number;
  bgCircleClassName?: string;
  progressCircleClassName?: string;
};

export type TimerProps = {
  interval: number; // in seconds
  circleProps?: CircleProps;
};

const props = withDefaults(defineProps<TimerProps>(), {
  circleProps: {
    circleDiameter: 48,
    'stroke-width': 4,
  },
});

const { seconds, isRunning, startTimer } = useSetTimer(props.interval);

const parsedStrokeWidth = computed(() => {
  const strokeWidth = props.circleProps['stroke-width'];

  return typeof strokeWidth === 'string'
    ? parseFloat(strokeWidth)
    : strokeWidth || DEFAULT_CIRCLE_PROPS['stroke-width'];
});
const viewBoxDims = computed(
  () =>
    (props.circleProps.circleDiameter || DEFAULT_CIRCLE_PROPS.circleDiameter) +
    parsedStrokeWidth.value,
);
const circleCenter = computed(() => viewBoxDims.value / 2);
const circleRadius = computed(
  () =>
    props?.circleProps?.r ||
    (props?.circleProps?.circleDiameter ||
      DEFAULT_CIRCLE_PROPS.circleDiameter) / 2,
);
const parsedCircleRadius = computed(() =>
  typeof circleRadius.value === 'string'
    ? parseFloat(circleRadius.value)
    : circleRadius.value,
);
const circumference = computed(() => 2 * Math.PI * parsedCircleRadius.value);
const dash = computed(
  () => circumference.value * (seconds.value / props.interval),
);
</script>

<template>
  <div class="relative w-fit" v-if="isRunning">
    <svg
      class="flex items-center justify-center"
      :height="props.circleProps.circleDiameter"
      :viewBox="`0 0 ${viewBoxDims} ${viewBoxDims}`"
      :width="props.circleProps.circleDiameter"
    >
      <circle
        :class="[
          'stroke-primary-100 transition-all',
          props.circleProps.bgCircleClassName,
        ]"
        :cx="circleCenter"
        :cy="circleCenter"
        fill="none"
        :r="circleRadius"
        :strokeWidth="props.circleProps['stroke-width']"
        v-bind="props.circleProps"
      />
      <circle
        :class="[
          'origin-center -rotate-90 stroke-primary transition-all',
          props.circleProps.progressCircleClassName,
        ]"
        :cx="circleCenter"
        :cy="circleCenter"
        fill="none"
        :r="circleRadius"
        :stroke-dasharray="`${circumference - dash} ${dash}`"
        :stroke-width="props.circleProps['stroke-width']"
        v-bind="props.circleProps"
      />
    </svg>
    <p
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-primary"
      size="lg"
    >
      {{ `${seconds}s` }}
    </p>
  </div>

  <Button v-else @click="startTimer">Start timer</Button>
</template>
