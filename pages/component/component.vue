<template>
  <view class="component-demo">
    <view class="title">button</view>
    <button type="primary">button</button>
  </view>

  <view class="component-demo">
    <view class="title">checkbox-group</view>
    <checkbox-group>
      <label>
        <checkbox value="cb" checked="true" color="#FFCC33" style="transform:scale(0.7)" />选中
      </label>
      <label>
        <checkbox value="cb" color="#FFCC33" style="transform:scale(0.7)" />未选中
      </label>
    </checkbox-group>
  </view>

  <view class="component-demo">
    <view class="title">editor</view>
    <editor id="editor" class="ql-container" placeholder="请输入你的内容"></editor>
  </view>
</template>

<script>
</script>

<style>
  .component-demo {
    text-align: center;
    padding-bottom: 20rpx;
    border-bottom: 1rpx solid red;
  }

  .title {
    margin: 4rpx 0;
    font-size: 16px;
  }

  .container {
    padding: 10px;
  }

  #editor {
    width: 100%;
    height: 100px;
    background-color: #ccc;
  }
</style>
