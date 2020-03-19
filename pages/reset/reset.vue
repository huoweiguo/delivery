<template>
	<view class="pages-content">
		<div class="rest-form">
			<div class="rest-tel">
				<img src="/static/images/icon-sign.png" mode="widthFix"/>
				<i>请输入您的手机号码</i>
				<input
					type="text"
					className="js-verify"
				  />
			</div>
			<div class="rest-tel">
				<img src="/static/images/icon-sign.png" mode="widthFix"/>
				<i>请输入您的验证码</i>
				<input
					type="text"
					className="js-verify"
				  />
				  <button>获取验证码</button>
			</div>
			<div class="rest-tel">
				<img src="/static/images/icon-sign.png" mode="widthFix"/>
				<i>请重新设定新密码</i>
				<input
					type="text"
					className="js-verify"
				  />
			</div>
			<div class="rest-but">
				<button>重设密码</button>
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
.rest-form{
	background-color: #fff;
	padding-top: 20px;
	padding-bottom: 52px;
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
		&>img{
			width: 14px;
			height: 22px;
			position: absolute;
			left: 10px;
			top: 18px;
		}
		&>i{
			 position: absolute;
			left: 40px;
			top: 0;
			font-style: normal;
			z-index: -1;
			font-size: 16px;
			color: #bebebe;
		}
		&>input{
			height: 59px;
			padding: 0 15px;
			background-color: transparent;
			border: none;
			font-size: 16px;
		}
		&>button{
			position: absolute;
			right: 0;
			top:15px;
			font-size: 16px;
			height: 33px;
			line-height: 33px;
			color: #3478f6;
			border-left: 1px solid #e9e9e9;
			background-color: #fff;
		}
	}
	.rest-but{
		margin-top: 40px;
		&>button{
			width: 90%;
			background-color: #3478f6;
			border-radius: 5px;
			color: #fff;
			
		}
	}
}
</style>
