<template>
	<view>
    text-component
		{{ counter }}
    <button type="default" @click="handleClick">children btn</button>
	</view>
</template>

<script setup>
// import { defineProps, defineEmits } from 'vue'

defineProps({
  counter: Number
})

const emit = defineEmits(['test-event'])

const handleClick = () => {
  console.log('click')
  emit('test-event')
}
</script>
