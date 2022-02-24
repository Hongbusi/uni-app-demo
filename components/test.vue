<template>
	<view>
    text-component
		{{ counter }}
    <button type="default" @click="handleClick">children btn</button>
	</view>
</template>

<script setup>
defineProps({
  counter: Number
})

const emit = defineEmits(['test-event'])

const handleClick = () => {
  console.log('click')
  emit('test-event')
}
</script>
