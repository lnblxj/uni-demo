
<template>
	<view>
		<u-row>
				<text>忽如一夜春风来，千树万树梨花开</text>
		</u-row>
		<u-row>
				<u-rate :count="4" v-model="rate_value"></u-rate>
		</u-row>
	</view>
</template>

<script setup>
	const rate_value = 0 
</script>

<style>

</style>