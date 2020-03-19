<template>
	<view class="pages-content">
		<div class="login-form">
			<div class="login-tel">
				<img src="/static/images/icon-person.png" class="icon-label"/>
				<input type="text" className="js-verify" placeholder="请输入您的手机号码"/>
			</div>
			<div class="login-tel">
				<img src="/static/images/icon-lock.png" class="icon-label"/>
				<input type="text" className="js-verify" placeholder="请输入您的验证码"/>
				<view class="login-pulish">发送验证码</view>
			</div>
			<div class="login-tel">
				<img src="/static/images/icon-lock.png" class="icon-label"/>
				<input type="password" className="js-verify" placeholder="请设置新密码"/>
			</div>
			
			<button class="login-but">注册</button>
			<div class="login-protocol">
				<checkbox value="cb" checked="true" color="#4a9ff8" style="transform:scale(0.7)" />
				我同意美鲜送
				<navigator class="fcblue">《用户协议》</navigator>
				<navigator class="fcblue">《隐私协议》</navigator>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.login-form{
	background-color: #fff;
	padding: 20px 10px;
	.login-tel{
		position: relative;
		background: #fff;
		border-bottom: 1px solid #e9e9e9;
		font-size: 14px;
		opacity: 0.618;
		margin: 0 auto;
		transition: opacity 0.3s ease;
		padding-left: 25px;
		.icon-label {
			position: absolute;
			width: 18px;
			height: 18px;
			left: 0;
			top: 13px;
		}
		&>input{
			height: 45px;
			padding: 0 15px;
			background-color: transparent;
			border: none;
			font-size: 14px;
		}
		.login-pulish{
			position: absolute;
			right: 0;
			top:0;
			font-size: 14px;
			height: 44px;
			line-height: 44px;
			color: #4a9ff8;
			background-color: #fff;
		}
	}
	.login-but{
		margin-top: 15px;
		height: 40px;
		background-color: #4a9ff8;
		border-radius: 5px;
		color: #fff;
	}
	.login-protocol{
		display: flex;
		align-items: center;
		font-size: 13px;
		color: #bebebe;
		line-height: 44px;
		margin: 0 auto;
	}
}
</style>