<template>
	<view class="content">
		<div class="notice">uni-app 是一个使用 Vue.js 开发所有前端应用的框架,开发者编写一套代码,</div>
		<div class="mb10"></div>
		<uni-grid :column="3" borderColor="#f1f1f7">
			<uni-grid-item>
				<img src="/static/images/icon-car.png" />
				<text class="text">出车报名</text>
			</uni-grid-item>
			<uni-grid-item>
				<img src="/static/images/icon-sign.png" />
				<text class="text">今日签到</text>
			</uni-grid-item>
			<uni-grid-item>
				<img src="/static/images/icon-goods.png" />
				<text class="text">核货中心</text>
			</uni-grid-item>
			<uni-grid-item>
				<img src="/static/images/icon-deliver.png" />
				<text class="text">配送任务</text>
			</uni-grid-item>
			<uni-grid-item>
				<img src="/static/images/icon-door.png" />
				<text class="text">上门取件</text>
			</uni-grid-item>
			<uni-grid-item>
				<img src="/static/images/icon-cash.png" />
				<text class="text">财务交款</text>
			</uni-grid-item>
			<uni-grid-item>
				<img src="/static/images/icon-handover.png" />
				<text class="text">包裹交接</text>
			</uni-grid-item>
			<uni-grid-item>
				<img src="/static/images/icon-approval.png" />
				<text class="text">我的审批</text>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	import { uniGrid, uniGridItem } from '@dcloudio/uni-ui'
	export default {
		components: {
			uniGrid, uniGridItem
		}, 
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.notice {
		height: 35px;
		padding: 0 10px 0 40px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 15px;
		color: #666;
		line-height: 35px;
		background-color:#fefdee;
		background-image: url('../../static/images/icon-horn.png');
		background-repeat: no-repeat;
		background-position: 10px center;
		background-size: 20px auto;
	}
	.uni-grid-item {
		display: flex;
		background-color: #fff;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		img {
			width: 30px;
			display: block;
			margin:30% auto 10px;
		}
		text {
			font-size: 16px;
			color: #777;
		}
	}
</style>
