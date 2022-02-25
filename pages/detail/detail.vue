<template>
	<view class="detail">
    <view class="title">{{ detailData.title }}</view>
    <view
      class="detail-item"
      v-for="(item, index) in detailData.listData"
      :key="index"
    >
      - {{ item }}
    </view>
    <button class="btn" type="primary" @click="handleBackClick">回到上一页</button>
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

const detailData = ref({
  title: '',
  listData: []
})

onLoad(function(options) {
  const { title, listData } = JSON.parse(options.params)
  detailData.value.title = title
  detailData.value.listData = listData
})

const handleBackClick = () => {
  uni.navigateBack()
}
</script>

<style scoped>
.detail {
  padding: 10px;
}

.title {
  text-align: center;
}

.detail-item {
  margin-top: 10px;
}

.btn {
  margin-top: 20px;
}
</style>
