<template>
	<view class="pages-content">
		<div class="login-logo">
			小鸟CMS
		</div>
		<div class="login">
			<s-tabs :effect="true" v-model="activeTab" customClass="tabs-header"   lineColor="#4aa0f7" activeColor="#4aa0f7" :nav-per-view="2">
				<s-tab title="账号登录">
					<div class="login-tel" style="margin-top: 22px">
						<img src="/static/images/icon-person.png" class="icon-label"/>
						<input type="text" className="js-verify" placeholder="请输入您的手机号码"/>
					</div>
					<div class="login-tel mb20">
						<img src="/static/images/icon-lock.png" class="icon-label"/>
						<input type="password" className="js-verify" placeholder="请输入密码"/>
					</div>
					<button class="but">登录</button>
				    <div class="login-reg">
						<navigator >用户注册</navigator>
						<navigator class="login-pass">忘记密码</navigator>
					</div>
				</s-tab>
				<s-tab title="快捷登录">
					<div class="login-tel" style="margin-top: 22px">
						<img src="/static/images/icon-person.png" class="icon-label"/>
						<input type="text" className="js-verify" placeholder="请输入您的手机号码"/>
					</div>
					<div class="login-tel mb20">
						<img src="/static/images/icon-lock.png" class="icon-label"/>
						<input type="password" className="js-verify" placeholder="请输入验证码"/>
						<view class="login-pulish">获取验证码</view>
					</div>
					<button class="but">登录</button>
					<div class="login-reg">
						<navigator >用户注册</navigator>
						<navigator class="login-pass">忘记密码</navigator>
					</div>
				</s-tab>	
			</s-tabs>
		</div>
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
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.pages-content {
	padding: 30px 10px;
}
.login-logo{
	font-size: 28px;
	color: #4a9ff8;
	text-align: center;
}
.login{
	margin: 0 auto;
	margin-top: 20px;
	.login-tel{
		position: relative;
		border-bottom: 1px solid #e9e9e9;
		font-size: 14px;
		opacity: 0.618;
		margin: 0 auto;
		transition: opacity 0.3s ease;
		padding-left: 25px;
		background-color: #FFFFFF;
		.icon-label {
			position: absolute;
			width: 18px;
			height: 18px;
			left: 10px;
			top: 13px;
		}
		.login-pulish{
			position: absolute;
			right: 12px;
			top:0;
			font-size: 14px;
			height: 44px;
			line-height: 44px;
			color: #4a9ff8;
			background-color: #fff;
		}
		&>input{
			background-color: #FFFFFF;
			height: 45px;
			padding: 0 15px;
			background-color: transparent;
			border: none;
			font-size: 14px;
		}
	}
	.but{
		background-color: #4a9ff8;
		color: #fff;
		font-size: 16px;
		border-radius: 0;
	}
	.login-reg{
		font-size: 14px;
		line-height: 57px;
		color: #aaaaaa;
		&>navigator{
			display: inline-block;
		}
		.login-pass{
			float: right;
		}
	}
	
}
</style>
