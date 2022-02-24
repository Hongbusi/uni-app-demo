<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title" @click="handleClick">{{ counter }}</text>
		</view>

    <view>
      <Test :counter="counter" @test-event="handleClick"></Test>
    </view>
	</view>
</template>

<script setup>
  import  { ref } from 'vue'
  import { onShow } from '@dcloudio/uni-app'
  
  import Test from '../../components/test.vue'
  
  const counter = ref(0)
  const handleClick = () => {
    counter.value++
  }

  onShow(() => {
    console.log('app launch')
  })
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
