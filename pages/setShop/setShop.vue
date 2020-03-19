<template>
	<view class="pages-content">
		<view class="shop-des">
			<view class="des-title">货品信息</view>
			<view class="des-info">
				<text>下单量：1.00(斤)</text>
				<text>发运量：0.98(斤)</text>
			</view>
			<view class="des-title ft14">商户实收：0.98(斤)</view>
		</view>
		
		<view class="info-detail">
			<view class="info-det-input">
				<view class="info-det-inner">实际称量<input type="text" class="info-inp-text"/>斤</view>
			</view>
			<textarea class="info-area" placeholder="请输入调整的原因"></textarea>
		</view>
		<view class="info-detail">
			<view class="info-det-input">
				<view class="info-det-inner">退货数量<input type="text" class="info-inp-text"/>斤</view>
				<input type="button" class="info-btn1" value="全退"/>
			</view>
			<textarea class="info-area" placeholder="请输入退货的原因"></textarea>
		</view>
		<view class="info-detail">
			<view class="info-det-input">
				<view class="info-det-inner">实收补货<input type="text" class="info-inp-text"/>斤</view>
			</view>
			<view class="info-det-input">
				<view class="info-det-inner">总补货数<input type="text" class="info-inp-text"/>斤</view>
			</view>
			<view class="info-det-input">
				<view class="info-det-inner">补货单价<input type="text" class="info-inp-text"/>元</view>
			</view>
		</view>
		
		<view class="info-merc">
			<view class="info-remark">
				<text class="ft14">备注</text>
				<textarea></textarea>
			</view>
			<text class="fcred">商户实收：0.98斤</text>
			<input type="button" class="info-btn2" value="确定调整" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shop-des {
		padding: 15px 10px;
		background-color: #fff;
		border-bottom: 1px solid #eee;
		color: #666;
		margin-bottom: 10px;
		.des-title {
			font-size: 16px;
			margin-bottom: 10px;
			&:last-child {
				margin-bottom: 0;
			}
		}
		.des-info {
			display: flex;
			font-size: 14px;
			justify-content: space-between;
			margin-bottom: 10px;
		}
	}
	.info-detail {
		padding: 15px 10px;
		background-color: #fff;
		color: #444;
		font-size: 14px;
		border-bottom:1px solid #eee;
		.info-det-input {
			display: flex;
			margin-bottom: 10px;
			justify-content: space-between;
			align-items: center;
			.info-det-inner {
				display: flex;
			}
			.info-inp-text {
				width: 100px;
				border-bottom: 1px solid #ccc;
			}
		}
		.info-area {
			outline: none;
			width: 100%;
			height: 70px;
			border: 1px solid #ccc;
			padding: 10px;
			box-sizing: border-box;
		}
		
	}
	.info-btn1 {
		width: 70px;
		height: 30px;
		background-color: #4a9ff8;
		color: #fff;
		font-size: 14px;
		text-align: center;
		border-radius: 3px;
	}
	.info-merc {
		text-align: center;
		font-size: 14px;
		background-color: #fff;
		padding-top: 20px;
		.info-remark {
			text-align: left;
			padding:0 20px;
			margin-bottom: 20px;
			text {
				display: block;
				font-size: 16px;
				color: #444;
				margin-bottom: 10px;
			}
			textarea {
				width: calc(100% - 23px);
				padding: 10px;
				border:1px solid #eee;
				height: 90px;
				outline: none;
			}
		}
		.info-btn2 {
			background-color: #4a9ff8;
			color: #fff;
			margin: 20px;
			height: 40px;
		}
	}
</style>
