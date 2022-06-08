<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="$props.class"
    :viewBox="`0 0 ${width} ${height}`"
  >
    <path :d="svg_path" />
  </svg>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: "fa",
    required: false
  },
  class: String
});

const icon_definition = findIconDefinition({
  prefix: props.type,
  iconName: props.icon
});

const width = ref(icon_definition.icon[0]);
const height = ref(icon_definition.icon[1]);
const svg_path = ref(icon_definition.icon[4]);
</script>