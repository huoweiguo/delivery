<template>
	<view class="pages-content">
		<view class="rece-toast">如有退款会退到商户余额，请点击确定完成收款</view>
		<view class="rece-title">上海微核信息技术有限公司</view>
		<view class="rece-smallText">收款小计</view>
		<view class="rece-content">
			<view class="rece-txt">
				<text>贷款应收</text>
				<text>&yen; 20.39</text>
			</view>
			<view class="rece-txt">
				<text>货运应收</text>
				<text>&yen; 12.00</text>
			</view>
			<view class="rece-txt">
				<text>预付款</text>
				<text>&yen; 40.00</text>
			</view>
			<view class="rece-txt">
				<text>待收款</text>
				<text class="fcred">&yen; 40.00</text>
			</view>
			<view class="rece-txt">
				<text>退款余额</text>
				<text class="fcred">&yen; 40.00</text>
			</view>
			<view class="rece-jianmian">已直减2.35元</view>
		</view>
		<view class="rece-set">
			<button class="rec-btn cancel-btn" @click="cancel">取消</button>
			<button class="rec-btn">确定</button>
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
			cancel () {
				uni.navigateTo({
					url: '/pages/deliveryMerchant/deliveryMerchant'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.rece-title {
		font-size: 16px;
		line-height: 20px;
		color: #666;
		text-align: center;
		padding: 10px;
	}
	.rece-smallText {
		display: block;
		font-size: 14px;
		color: #777;
		margin-bottom: 10px;
		padding: 0 10px;
	}
	.rece-content{
		padding: 0 10px;
		background-color: #fff;
		margin-bottom: 10px;
	}
	.rece-txt {
		display: flex;
		height: 35px;
		line-height: 35px;
		color: #777;
		font-size: 14px;
		border-bottom: 1px solid #eee;
		justify-content: space-between;
	}
	.rece-jianmian {
		height: 35px;
		text-align: right;
		color: red;
		line-height: 35px;
		font-size: 14px;
	}
	.rece-set {
		display: flex;
		justify-content: space-between;
		.rec-btn {
			width: 45%;
			height: 35px;
			line-height: 35px;
			background-color: #f60;
			font-size: 16px;
			color: #fff;
		}
		.cancel-btn {
			background-color: transparent;
			border: 1px solid #f1f1f1;
			color: #777;
		}
	}
	.rece-toast {
		padding: 3px 10px;
		background-color:#fefeb4;
		font-size: 14px;
		color: #f30;
		line-height: 22px;
	}
</style>
