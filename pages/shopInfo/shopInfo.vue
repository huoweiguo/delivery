<template>
	<view class="pages-content">
		<view class="shopInfo-header">
			<text>运单号：RS1252617182</text>
			<view class="shop-user">霍维国 <image class="shop-tel" src="/static/images/telephone.png" /></view>
		</view>
		<uni-collapse @change="change">
			<div class="collapse-item">
				<uni-collapse-item title="商品信息" :open="true">
					<ul class="shopInfo-list">
						<li>
							<view class="si-outer">
								<text class="si-outer-name">香葱，小葱，大蒜</text>
								<text>实收：0.98(斤)</text>
							</view> 
							<view class="si-outer">
								<view class="si-inner">实际：<text class="fcred">0.98(斤)</text></view>
								<view class="fcblue"><navigator url="/pages/setShop/setShop">直减</navigator></view>
							</view>
						</li>
						<li>
							<view class="si-outer">
								<text class="si-outer-name">香葱，小葱，大蒜</text>
								<text>实收：0.98(斤)</text>
							</view> 
							<view class="si-outer">
								<view class="si-inner">实际：<text class="fcred">0.98(斤)</text></view>
								<view class="fcblue"><navigator url="/pages/setShop/setShop">直减</navigator></view>
							</view>
						</li>
					</ul>
				</uni-collapse-item>
			</div>
		</uni-collapse>
	</view>
</template>

<script>
	import { uniCollapse, uniCollapseItem } from '@dcloudio/uni-ui'
	export default {
		components: {
			uniCollapse, uniCollapseItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			change (index) {
				console.log(index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shopInfo-header {
		display: flex;
		padding: 0 10px;
		font-size: 14px;
		color: #444;
		line-height: 40px;
		height: 40px;
		justify-content: space-between;
		border-bottom: 1px solid #eee;
		background-color: #fff;
		.shop-user {
			display: flex;
			align-items: center;
		}
		.shop-tel {
			height: 18px;
			width: 18px;
			margin-left: 3px;
		}
	}
	.shopInfo-list {
		border-top: 1px solid #eee;
		li {
			padding: 15px 10px;
			background-color: #fff;
			border-bottom: 1px solid #eee;
			font-size: 14px;
			color: #444;
			.si-outer {
				display: flex;
				justify-content: space-between;
				margin-bottom: 10px;
				line-height: 18px;
				.si-outer-name {
					display: block;
					width: 65%;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
	.collapse-item {
		background-color: #fff;
	}
	.uni-collapse-cell--open {
		background-color: #fff;
	}
	.uni-collapse-cell--hide {
		background-color: #fff;
	}
	.uni-collapse-item {
		font-size: 16px;
	}
	.uni-collapse-cell {
		border-bottom: none;
	}
	
</style>
