<template>
	<view class="poplayer" :class="{moveAct: visible === true}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: ['visible']
	}
</script>

<style class="scss" scoped>
	.poplayer {
		position: absolute;
		left: 100%;
		top: 0;
		width: 100%;
		height: 100%;
		transition: 0.3s;
		background-color: #fff;
		z-index: 1000;
	}
	.moveAct {
		left: 0
	}
</style>
