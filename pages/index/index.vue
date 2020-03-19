<template>
	<view class="content">
		<div class="notice">uni-app 是一个使用 Vue.js 开发所有前端应用的框架,开发者编写一套代码,</div>
		<div class="mb10"></div>
		<ul class="home-grid">
			<li>
				<navigator url="/pages/report/report">
					<image src="/static/images/icon-car.png" mode="widthFix"/>
					<span class="text">出车报名</span>
				</navigator>
			</li>
			<li>
				<navigator url="/pages/sign/sign">
					<image src="/static/images/icon-sign.png" mode="widthFix"/>
					<span class="text">今日签到</span>
				</navigator>
			</li>
			<li>
				<navigator url="/pages/nuclearCargo/nuclearCargo">
					<image src="/static/images/icon-goods.png" mode="widthFix"/>
					<span class="text">核货中心</span>
				</navigator>
			</li>
			<li>
				<image src="/static/images/icon-deliver.png" mode="widthFix"/>
				<span class="text">配送任务</span>
			</li>
			<li>
				<navigator url="/pages/pickup/pickup">
					<image src="/static/images/icon-sign.png" mode="widthFix"/>
					<span class="text">上门取件</span>
				</navigator>
			</li>
			<li>
				<navigator url="/pages/finance/finance">
					<image src="/static/images/icon-cash.png" mode="widthFix"/>
					<span class="text">财务交款</span>
				</navigator>
			</li>
			<li>
				<image src="/static/images/icon-handover.png" mode="widthFix"/>
				<span class="text">包裹交接</span>
			</li>
			<li>
				<image src="/static/images/icon-approval.png" mode="widthFix"/>
				<span class="text">我的审批</span>
			</li>
			<li>
				<navigator url="/pages/signRecord/signRecord">
					<image src="/static/images/icon-sign.png" mode="widthFix"/>
					<span class="text">签到记录</span>
				</navigator>
			</li>
			<li>
				<navigator url="/pages/inc/inc">
					<image src="/static/images/icon-sign.png" mode="widthFix"/>
					<span class="text">我的收入</span>
				</navigator>
			</li>
			<li>
				<navigator url="/pages/return/return">
					<image src="/static/images/icon-sign.png" mode="widthFix"/>
					<span class="text">退货列表</span>
				</navigator>
			</li>
			<li>
				<navigator url="/pages/more/more">
					<image src="/static/images/more.png" mode="widthFix"/>
					<span class="text">更多功能</span>
				</navigator>
			</li>
			<li>
				<navigator url="/pages/install/install">
					<image src="/static/images/icon-sign.png" mode="widthFix"/>
					<span class="text">装车</span>
				</navigator>
			</li>
			<li>
				<navigator url="/pages/reset/reset">
					<image src="/static/images/icon-sign.png" mode="widthFix"/>
					<span class="text">重置密码</span>
				</navigator>
			</li>
			<li>
				<navigator url="/pages/login/login">
					<image src="/static/images/icon-sign.png" mode="widthFix"/>
					<span class="text">注册</span>
				</navigator>
			</li>
		</ul>
		<div class="home-mask" v-if="showAdv">
			<div class="adv-content">
				<text class="adv-title">防疫四件事</text>
				<text class="adv-time">2020-02-02 18:30:00</text>
				<image class="adv-img" mode="widthFix" src="https://static.fotor.com.cn/assets/projects/pages/13f14d30-58d9-11ea-8adb-83c1c86fe9a5_298ac2b4-2a7d-4137-b6d0-93597cac7283_thumb.jpg">
				<button class="adv-btn" v-if="!overTimes">知道了({{times}})</button>
				<button class="adv-btn activeBtn" v-if="overTimes" @click="closeAdv">知道了</button>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				times: 5,
				showAdv: true,
				overTimes: true
			}
		},
		mounted() {
			this.timer = setInterval(_ => {
				this.times--
				if (this.times <= 0) {
					this.overTimes = true
					clearInterval(this.timer)
				}
			}, 1000)
		},
		methods: {
			closeAdv () {
				this.showAdv = false
			}
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
		margin-bottom: 10px;
		li {
			float: left;
			width: 33.33%;
			text-align: center;
			height: 120px;
			padding-top: 30px; 
			border-right: 1px solid #f1f1f1;
			border-bottom: 1px solid #f1f1f1;
			image {
				width: 30px;
				height: 30px;
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
	.home-mask {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.75);
		z-index: 10;
		.adv-content {
			position: fixed;
			left: 50%;
			top: 50%;
			padding: 20px 5%;
			width: 90%;
			transform: translate(-50%, -50%);
			border-radius: 5px;
			background-color: #fff;
			text-align: center;
			.adv-title {
				display: block;
				font-size: 16px;
				color: #333;
				margin-bottom: 10px;
			}
			.adv-time {
				display: block;
				font-size: 13px;
				color: #777;
			}
			.adv-img {
				width: 100%;
				display: block;
				margin: 10px 0;
			}
			.adv-btn {
				width: 100px;
				height: 35px;
				font-size: 14px;
				color: #999;
			}
			.activeBtn {
				background-color: #4a9ff8;
				color: #fff;
			}
		}
	}
</style>
