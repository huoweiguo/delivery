<template>
	<view class="content">
		<div class="notice">uni-app 是一个使用 Vue.js 开发所有前端应用的框架,开发者编写一套代码,</div>
		<div class="mb10"></div>
		<ul class="home-grid">
			<li>
				<img src="/static/images/icon-car.png" mode="widthFix"/>
				<span class="text">出车报名</span>
			</li>
			<li>
				<img src="/static/images/icon-sign.png" mode="widthFix"/>
				<span class="text">今日签到</span>
			</li>
			<li>
				<img src="/static/images/icon-goods.png" mode="widthFix"/>
				<span class="text">核货中心</span>
			</li>
			<li>
				<img src="/static/images/icon-deliver.png" mode="widthFix"/>
				<span class="text">配送任务</span>
			</li>
			<li>
				<img src="/static/images/icon-door.png" mode="widthFix"/>
				<span class="text">上门取件</span>
			</li>
			<li>
				<img src="/static/images/icon-cash.png" mode="widthFix"/>
				<span class="text">财务交款</span>
			</li>
			<li>
				<img src="/static/images/icon-handover.png" mode="widthFix"/>
				<span class="text">包裹交接</span>
			</li>
			<li>
				<img src="/static/images/icon-approval.png" mode="widthFix"/>
				<span class="text">我的审批</span>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
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
	.home-grid {
		overflow: hidden;
		background-color: #fff;
		li {
			float: left;
			width: 33.33%;
			text-align: center;
			height: 120px;
			padding-top: 30px; 
			border-right: 1px solid #f1f1f1;
			border-bottom: 1px solid #f1f1f1;
			img {
				width: 30px;
				display: block;
				margin:0 auto 10px;
			}
			.text {
				display: block;
				font-size: 16px;
				color: #777;
			}
		}
	}
</style>
