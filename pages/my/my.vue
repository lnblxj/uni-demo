<template>
	<page>
		<!-- navbar -->
		<u-navbar title="我的"
		:is-back="false" 
		:height="$globalConfig.NAVBAR.height">
		</u-navbar>
		<democomponent></democomponent>
		<!-- 底部tabbar -->
		<u-tabbar :list="tabbarData"></u-tabbar>
	</page>
</template>

<script setup>
	import {tabbarData} from '@/common/tabbar'
</script>

<style scoped>
	       
</style>
