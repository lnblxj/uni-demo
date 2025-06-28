<!-- 关于此组件
此组件定义为全局页面组件，通过定义不同的插槽可实现快速修改全局页面布局 -->
<template>
	<view class="page-container">
		<slot></slot>
	</view>
</template>

<script setup>

</script>

<style>
	.page-container {
		width: 100%;
		height: auto;
		position: relative;
	}
</style>