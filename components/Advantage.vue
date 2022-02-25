<template>
	<view class="advantage" @click="handleViewDetailClick">{{ title }}</view>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },

  listData: {
    type: Array,
    default: () => []
  }
})

const handleViewDetailClick = () => {
  uni.navigateTo({
    url: '/pages/detail/detail?params=' + JSON.stringify(props)
  })
}
</script>

<style scoped>
.advantage {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 90%;
  height: 50px;
  border: 1px solid #666;
}
</style>
