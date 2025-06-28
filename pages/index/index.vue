<template>
	<page>
		<u-navbar title="应用中心" 
		:is-back="false" 
		:height="$globalConfig.NAVBAR.height">
		</u-navbar>
		
		<u-row>
			<u-image src="https://cdn-hsyq-static.shanhutech.cn/bizhi/staticwp/202505/a685db44f09a8ee559a5d9d94fce6103--2367605914.jpg" height="300" fade></u-image>
		</u-row>
		<u-gap />
		<!-- 菜单部分 -->
		<l-transition :visible="true" :appear="true" name="fade-up">
			<u-grid :col="3">
				<u-grid-item>
					<u-icon name="photo" :size="46"></u-icon>
					<view class="grid-text">图片</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="lock" :size="46"></u-icon>
					<view class="grid-text">锁头</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="hourglass" :size="46"></u-icon>
					<view class="grid-text">沙漏</view>
				</u-grid-item>
			</u-grid>
		</l-transition>
			<!-- 底部tabbar -->
			<u-tabbar :list="tabbarData" hide-tab-bar></u-tabbar>
	</page>
</template>

<script setup>
    import {tabbarData} from '@/common/tabbar.ts'
</script>

<style scoped>

</style>
