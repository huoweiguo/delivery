<template>
	<view class="pages-content">
		<s-tabs :effect="true" v-model="activeTab" lineColor="#4aa0f7" activeColor="#4aa0f7" :nav-per-view="4">
			<s-tab title="分拣中">
				<view class="cargo-title">货位：FP-42</view>
				<view class="cargo-package">
					<view class="cargo-txt">
						<image src="/static/images/package-variant.png" />
						包裹 <text class="fcred">(14)</text>
					</view>
					<view class="cargo-sort">按商户排序</view>
				</view>
				<ul class="cargo-list">
					<li>
						<view class="list-title">5.95斤(1个) 南瓜5元1斤</view>
						<view class="list-des">
							<view class="list-des-inner">211 <text class="fcred">2</text>#家庭/个人</view>
							<view class="list-btn1">已核</view>
						</view>
					</li>
					
					<li>
						<view class="list-title">5.95斤(1个) 南瓜5元1斤</view>
						<view class="list-des">
							<view class="list-des-inner">211 <text class="fcred">2</text>#家庭/个人</view>
							<view class="list-btn1">已核</view>
						</view>
					</li>
					
					<li>
						<view class="list-title">5.95斤(1个) 南瓜5元1斤</view>
						<view class="list-des">
							<view class="list-des-inner">211 <text class="fcred">2</text>#家庭/个人</view>
							<view class="list-btn1">已核</view>
						</view>
					</li>
				</ul>
			</s-tab>
			<s-tab title="未核货"></s-tab>
			<s-tab title="核货差异"></s-tab>
			<s-tab title="已核货"></s-tab>
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
				activeTab: 0
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cargo-title {
		padding:0 10px;
		height: 45px;
		line-height: 45px;
		font-size: 16px;
		color: #444;
		border-bottom: 1px solid #eee;
	}
	.cargo-package {
		display: flex;
		justify-content: space-between;
		height: 45px;
		border-bottom: 1px solid #eee;
		align-items: center;
		background-color: #f5f5f5;
		padding: 0 10px;
		color: #666;
		image {
			width: 18px;
			height: 18px;
			margin-right: 3px;
		}
		text {
			display: block;
			margin-left: 3px;
		}
		.cargo-sort {
			color: #4a9ff8;
		}
		.cargo-txt {
			display: flex;
		}
	}
	.cargo-list {
		li {
			background-color: #fff;
			padding: 10px;
			border-bottom: 1px solid #eee;
			.list-title {
				font-size: 16px;
				margin-bottom: 10px;
				color: #444;
				line-height: 22px;
			}
			.list-des {
				display: flex;
				font-size: 14px;
				justify-content: space-between;
				color: #777;
				align-items: center;
				.list-des-inner {
					display: flex;
					text {
						display: block;
						margin-left: 10px;
					}
				}
				.list-btn1 {
					padding: 3px 7px;
					border: 1px solid #ddd;
					border-radius: 2px;
				}
			}
		}
	}
</style>
