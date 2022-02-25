<template>
	<view class="index">
		<image class="logo" src="/static/logo.png"></image>
		<view class="content">
			<view class="title">为什么要选择uni-app？</view>
      <view>uni-app在开发者数量、案例、跨端抹平度、扩展灵活性、性能体验、周边生态、学习成本、开发成本等8大关键指标上拥有更强的优势。</view>
      <advantage v-for="(item, index) in advantageData" :key="index" :title="item.title" :listData="item.listData" />
		</view>
	</view>
</template>

<script setup>
import  { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'

import Advantage from '@/components/Advantage.vue'

const advantageData = [
  {
    title: '开发者/案例数量更多',
    listData: [
      '数百万应用、uni统计月活12亿、70+微信/qq群、更高的百度指数',
      '跨端完善度更高，真正落地的提高生产力'
    ]
  },
  {
    title: '平台能力不受限',
    listData: [
      '在跨端的同时，通过条件编译+平台特有API调用，可以优雅的为某平台写个性化代码，调用专有能力而不影响其他平台。',
      '支持原生代码混写和原生sdk集成。'
    ]
  },
  {
    title: '性能体验优秀',
    listData: [
      '加载新页面速度更快、自动diff更新数据。',
      'App端支持原生渲染，可支撑更流畅的用户体验。',
      '小程序端的性能优于市场其他框架。'
    ]
  },
  {
    title: '周边生态丰富',
    listData: [
      '插件市场数千款插件。',
      '支持NPM、支持小程序组件和SDK。',
      '微信生态的各种sdk可直接用于跨平台App。'
    ]
  },
  {
    title: '学习成本低',
    listData: [
      '基于通用的前端技术栈，采用vue语法+微信小程序api，无额外学习成本。'
    ]
  },
  {
    title: '开发成本低',
    listData: [
      '不止开发成本，招聘、管理、测试各方面成本都大幅下降。',
      'HBuilderX是高效开发神器，熟练掌握后研发效率至少翻倍（即便只开发一个平台）。'
    ]
  }
]
</script>

<style>
	.index {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    font-size: 16px;
    color: #333;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

  .content {
    text-align: center;
  }

  .content .title {
    margin-bottom: 10px;
    font-size: 20px;
  }
</style>
