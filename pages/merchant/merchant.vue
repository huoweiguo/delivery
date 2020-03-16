<template>
	<view>
		<s-tabs :effect="true" v-model="activeTab" customClass="tabs-header" lineColor="#4aa0f7" activeColor="#4aa0f7" :nav-per-view="2">
			<s-tab title="当前商户">
				<uni-search-bar @confirm="search" @input="input"></uni-search-bar>
				<ul class="merchant-list">
					<li>
						<navigator url="/pages/merchantDetail/merchantDetail?id=123">
							<view class="merc-tele">
								<text class="merc-title">赣香菜馆</text>
								<image src="/static/images/telephone.png">
							</view>
							<text class="merc-addr">上海市青浦区恒河沙去我家啊睡觉阿哈睡觉啊收款</text>
							<text class="merc-addr">绑定时间：2019-05-20</text>
						</navigator>
						<image class="r-arrow" src="/static/images/right.png" />
					</li>
					<li>
						<text class="merc-title">赣香菜馆</text>
						<text class="merc-addr">上海市青浦区恒河沙去我家啊睡觉阿哈睡觉啊收款</text>
						<text class="merc-addr">绑定时间：2019-05-20</text>
						<image class="r-arrow" src="/static/images/right.png" />
					</li>
				</ul>
			</s-tab>
			<s-tab title="历史商户">
				<uni-search-bar @confirm="search" @input="input"></uni-search-bar>
				<ul class="merchant-list">
					<li>
						<text class="merc-title">赣香菜馆</text>
						<text class="merc-addr">上海市青浦区恒河沙去我家啊睡觉阿哈睡觉啊收款</text>
						<text class="merc-addr">绑定时间：2019-05-20</text>
						<image class="r-arrow" src="/static/images/right.png" />
					</li>
				</ul>
			</s-tab>
		</s-tabs>
	</view>
</template>

<script>
	import sTabs from '@/components/s-tabs/index.vue'
	import sTab from '@/components/s-tab/index.vue'
	import { uniSearchBar } from '@dcloudio/uni-ui'
	export default {
		components: {
			sTabs, sTab, uniSearchBar
		},
		data() {
			return {
				activeTab: 0
			}
		},
		methods: {
			search (e) {
				console.log(e)
			},
			input (e) {
				console.log(e, 'input')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-searchbar {
		background-color: transparent;
	}
	.merchant-list {
		background-color: #fff;
		li {
			position: relative;
			padding: 15px;
			border-bottom: 1px solid #eee;
			.merc-tele {
				display: flex;
				image {
					display: block;
					width: 18px;
					height: 18px;
					vertical-align: middle;
					margin-left: 5px;
				}
			}
			.r-arrow {
				position: absolute;
				width: 20px;
				height: 20px;
				right: 10px;
				top: 50%;
				margin-top: -10px;
			}
			.merc-title {
				display: block;
				font-size: 18px;
				color: #333;
				margin-bottom: 7px;
			}
			.merc-addr {
				display: block;
				font-size: 14px;
				color: #666;
				padding-right: 10px;
				line-height: 18px;
				margin-bottom: 7px;
			}
		}
	}
</style>
