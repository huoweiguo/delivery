<template>
	<view class="pages-content">
		<div class="rest-form">
			<div class="rest-tel">
				<img src="/static/images/phone.png"  class="icon-label"/>
				<input type="text" className="js-verify" placeholder="请输入您的手机号码"/>
			</div>
			<div class="rest-tel">
				<img src="/static/images/icon-lock.png"  class="icon-label"/>
				<input type="text" className="js-verify" placeholder="请输入您的验证码"/>
				  <view class="reset-pulish">获取验证码</view>
			</div>
			<div class="rest-tel">
				<img src="/static/images/icon-lock.png"  class="icon-label"/>
				<input type="password" className="js-verify" placeholder="请重新设定新密码"/>
			</div>
			<button class="rest-but">重设密码</button>
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
.rest-form{
	background-color: #fff;
	padding: 20px 10px;
	.rest-tel{
		position: relative;
		background: #fff;
		border-bottom: 1px solid #e9e9e9;	
		line-height: 59px;
		font-size: 16px;
		opacity: 0.618;
		width: 90%;
		margin: 0 auto;
		transition: opacity 0.3s ease;
		padding-left: 25px;
		.icon-label{
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
			font-size: 16px;
		}
		.reset-pulish{
			position: absolute;
			right: 0;
			top:0px;
			font-size: 16px;
			height: 45px;
			line-height: 45px;
			color: #4a9ff8;
			background-color: #fff;
		}
	}
	.rest-but{
		margin-top: 40px;
		background-color: #4a9ff8;
		border-radius: 5px;
		color: #fff;
	}
}
</style>
