<template>
	<view class="pages-content">
		<s-tabs :effect="true" v-model="activeTab" customClass="tabs-header" @change="change" lineColor="#4aa0f7" activeColor="#4aa0f7" :nav-per-view="3">
			<!-- 待处理 -->
			<s-tab :title="nav1">
				<ul class="comp-list">
					<li>
						<view><text>订单编号：</text><text>TS623527181</text></view>
						<view><text>投诉商户：</text><text>家庭/个人</text></view>
						<view><text>投诉日期：</text><text>2020-02-21</text></view>
						<view><text>投诉类型：</text><text class="small-txt">质量问题</text></view>
						<view><text>订单商品：</text><text>鸡蛋 大</text></view>
						<view><text>剩余处理时间：</text><text class="fcred">3天20小时52分钟</text></view>
						<view class="comp-btn-set">
							<button @click="showText" data-text="质量问题">投诉详情</button>
							<button>发起申诉</button>
							<button>放弃申诉</button>
						</view>
					</li>
				</ul>
			</s-tab>
			<!-- 处理中 -->
			<s-tab :title="nav2">
				<ul class="comp-list">
					<li>
						<view><text>订单编号：</text><text>TS623527181</text></view>
						<view><text>投诉商户：</text><text>小小鸟</text></view>
						<view><text>投诉日期：</text><text>2020-02-21</text></view>
						<view><text>投诉类型：</text><text class="small-txt">配送问题</text></view>
						<view><text>订单商品：</text><text>鸡蛋 大</text></view>
						<view><text>处理状态：</text><text class="fcred">超时未确认</text></view>
						<view class="comp-btn-set">
							<button @click="showText" data-text="质量问题">投诉详情</button>
							<button>申诉详情</button>
						</view>
					</li>
				</ul>
			</s-tab>
			<!-- 已完结 -->
			<s-tab :title="nav3">
				
				
			</s-tab>
		</s-tabs>
		<min-modal ref="modal"></min-modal>
	</view>
</template>

<script>
	import sTabs from '@/components/s-tabs/index.vue'
	import sTab from '@/components/s-tab/index.vue'
	import minModal from '@/components/min-modal/min-modal'
	export default {
		components: {
			sTabs, sTab, minModal
		},
		data() {
			return {
				activeTab: 0,
				nav1: '待处理',
				nav2: '处理中',
				nav3: '已完结'
			}
		},
		methods: {
			clickLoadMore (e) {
				console.log(e)
			},
			change (e) {
				console.log(e, 'change')
			},
			showText (e) {
				console.log(e)
				this.$refs.modal.handleShow({
					title: '投诉详情',
					showCancel: false,
					content: e.target.dataset.text
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
uni-page-body, .pages-content {
	height: 100%;
}
.tabs-header {
	height: 100%;
}
.comp-list {
	padding-top: 20px;
	li {
		background-color: #fff;
		padding: 10px;
		margin-bottom: 10px;
		color: #555;
		font-size: 15px;
		line-height: 18px;
		&>view {
			display: flex;
			margin-bottom: 10px;
			text {
				display: block;
				&:first-child {
					text-align: right;
					width: 110px;
				}
				&.small-txt {
					flex: 1;
					line-height: 20px;
				}
			}
		}
		.comp-btn-set {
			display: flex;
			margin-bottom: 0;
			button {
				width: 90px;
				height: 30px;
				line-height: 30px;
				background-color: #fff;
				color: #f60;
				border: 1px solid #f60;
				font-size: 14px;
			}
		}
	}
}
</style>
