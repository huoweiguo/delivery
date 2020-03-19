<template>
	<view class="pages-content">
		<view class="infomation-list">
			<view class="info-status">审核通过</view>
			<view class="info-set">
				<image src="/static/images/person-info.png" />
				<text>个人信息</text>
			</view>
			<view class="info-text">请如实填写相关资料，便于相关人员快速审核</view>
			<button class="info-btn" @click="modifyPerson">修改</button>
		</view>
		
		<view class="infomation-list">
			<view class="info-status">审核通过</view>
			<view class="info-set">
				<image src="/static/images/car-info.png" />
				<text>车辆信息</text>
			</view>
			<view class="info-text">如自带车辆，请填写车辆相关信息</view>
			<button class="info-btn" @click="modifyCar">修改</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			modifyCar () {
				uni.navigateTo({
					url: '/pages/carInfo/carInfo'
				})
			},
			
			modifyPerson () {
				uni.navigateTo({
					url: '/pages/baseInfo/baseInfo'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pages-content {
		padding: 10px;
	}
	.infomation-list {
		background-color: #fff;
		padding: 10px;
		margin-bottom: 10px;
		box-shadow: 5px 5px 10px #bbb;
		.info-status {
			text-align: right;
			color:#f60;
			font-size: 14px;
			margin-bottom: 10px;
		}
		.info-set {
			margin-bottom: 10px;
			image {
				display: block;
				width: 50px;
				height: 50px;
				margin: 0 auto;
			}
			text {
				display: block;
				text-align: center;
				font-size: 16px;
				color: #666;
			}
		}
		.info-text {
			display: block;
			font-size: 13px;
			color: #777;
			text-align: center;
			margin-bottom: 10px;
		}
		.info-btn {
			background-color: #e6ad5f;
			color: #fff;
			width: 100px;
			height: 35px;
			line-height: 35px;
			font-size: 14px;
			text-align: center;
			border-radius: 5px;
			margin: 0 auto;
		}
	}
</style>
