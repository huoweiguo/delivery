<template>
	<view class="pages-content">
		<s-tabs :effect="true" v-model="activeTab" customClass="tabs-header" lineColor="#4aa0f7" activeColor="#4aa0f7" :nav-per-view="2">
			<s-tab :title="nav1">
				<view class="dm-sort">{{sortStatus}} <image src="/static/images/icon-sort.png" /></view>
				<ul class="dm-list">
					<li>
						<view class="dm-list-text">
							<text class="dm-id">2</text>
							<text class="dm-word">未</text>
							<text class="dm-type">4706027#家庭/个人</text>
						</view>
						<view class="dm-tag">
							<text>订肉禽客户</text>
							<text>订水产客户</text>
							<text>个人</text>
						</view>
						<view class="dm-img-text">
							<view class="dm-inner">
								<image src="/static/images/dm-withdar.png" />
								已预收: 234.52
								<text class="fc-orange">在线支付</text>
							</view>
							
							<text class="fcblue">门头照</text>
						</view>
						<view class="dm-img-text">
							<view class="dm-inner">
								<image src="/static/images/icon-clock.png" />
								06:00 - 08:00
							</view>
						</view>
						<view class="dm-img-text">
							<view class="dm-inner">
								<image src="/static/images/dm-deliver.png" />
								已送达
							</view>
						</view>
						<view class="dm-img-text">
							<view class="dm-inner">
								<image src="/static/images/dm-order.png" />
								纸质确认单
								<text class="fcblue">[更改]</text>
								<text class="fcblue">上家引导</text>
							</view>
						</view>
						<view class="dm-img-text">
							<image src="/static/images/dm-addr.png"/>
							<text class="dm-addr-text fcblue">忽闪忽闪的好傻哈哈哈撒谎说还去我家啊睡觉就啊说三哈哈说</text>
						</view>
						<button class="dm-btn" @click="receivable">收款</button>
					</li>
				</ul>
			</s-tab>
			<s-tab :title="nav2"></s-tab>
		</s-tabs>
		
	</view>
</template>

<script>
	import sTabs from '@/components/s-tabs/index.vue'
	import sTab from '@/components/s-tab/index.vue'
	export default {
		components: {
			sTabs, sTab
		},
		data() {
			return {
				sortStatus: '默认排序',
				activeTab: 0,
				nav1: '配送中(10)',
				nav2: '已完成(2)'
			}
		},
		methods: {
			receivable () {
				uni.navigateTo({
					url: '/pages/receivables/receivables'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dm-sort {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		font-size: 14px;
		color: #666;
		margin:0 10px;
		height: 40px;
		line-height: 40px;
		image {
			width: 14px;
			height: 14px;
			margin-left: 2px;
		}
	}
	.dm-list {
		li {
			padding: 10px;
			background-color: #fff;
			.dm-list-text {
				display: flex;
				align-items: center;
				font-size: 14px;
				color: #666;
				margin-bottom: 10px;
				.dm-id {
					background-color: #e9b13f;
					width: 18px;
					height: 18px;
					border-radius: 50%;
					color: #fff;
					text-align: center;
					line-height: 18px;
				}
				.dm-word {
					font-size: 12px;
					padding: 2px;
					border: 1px solid #666;
					margin: 0 5px;
				}
			}
			.dm-tag {
				margin-bottom: 5px;
				text {
					display: inline-block;
					white-space: nowrap;
					color: red;
					border: 1px solid red;
					margin-right: 5px;
					margin-bottom: 3px;
					padding: 2px;
					border-radius: 3px;
					font-size: 10px;
				}
			}
			.dm-img-text {
				font-size: 12px;
				color: #777;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 5px;
				.dm-inner {
					display: flex;
					align-items: center;
					text {
						display: block;
						margin-left: 10px;
						&.fc-orange {
							color: #e9b13f;
						}
					}
				}
				image {
					width: 18px;
					height: 18px;
					margin-right: 3px;
				}
				.dm-addr-text {
					flex: 1;
					line-height: 18px;
				}
			}
			.dm-btn {
				height: 40px;
				line-height: 40px;
				margin: 0 -10px -10px;
				background-color: #4a9ff8;
				border-radius: 0;
				font-size: 14px;
				color: #fff;
			}
		}
	}
</style>
