<template>
  <h1 :id="id" class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
    <a v-if="id && generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
defineProps<{ id?: string }>()
const heading = 1
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>