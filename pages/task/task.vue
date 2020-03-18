<template>
	<view class="pages-content">
		<ul class="task-list">
			<li>
				<text class="task-title">2020-02-16 晨鲜送 1波次</text>
				<navigator url="/pages/deliveryMerchant/deliveryMerchant">
					<view class="task-cont">
						<div class="tag-fixed fbcshak"><text>直</text></div>
						<view class="task-txt1">21昆市中9</view>
						<view class="task-txt2">
							<image src="/static/images/icon-file.png" class="task-ic1"/> 任务单号：RF276829001276
						</view>
						<view class="task-txt2">
							<image src="/static/images/icon-clock.png" class="task-ic1"/> 3:00前到达仓库
							<image src="/static/images/icon-ck.png" class="task-ic1 ml20"/> 苏州仓库2
						</view>
						<view class="task-set">
							<view class="task-set-text">取件数量<text class="fcred">39</text></view>
							<view class="task-set-text">商户总数<text class="fcred">40</text></view>
							<view class="task-set-text">已配送商户数<text class="fcred">23</text></view>
						</view>
					</view>
				</navigator>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data () {
			return {}
		},
		mounted () {
			uni.showModal({
				title: '小鸟司机想使用蓝牙',
				content: '后台使用蓝牙打印机时需要开启蓝牙权限',
				cancelText: '不允许',
				confirmText: '好',
				success (res) {
					if (res.confirm) {
						console.log('开启蓝牙')
					}
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.task-list {
		li {
			margin: 0 10px;
			.task-title {
				height: 30px;
				line-height: 30px;
				color: #777;
				font-size: 14px;
			}
			.task-cont {
				position: relative;
				background-color: #fff;
				border-radius: 5px;
				padding: 15px 15px 0;
				overflow: hidden;
				.task-txt1 {
					padding-left: 40px;
					font-size: 16px;
					color: #333;
					margin-bottom: 10px;
				}
				.task-txt2 {
					display: flex;
					padding-left: 20px;
					font-size: 14px;
					color: #666;
					margin-bottom: 10px;
					align-items: center;
					.task-ic1 {
						width: 20px;
						height: 20px;
						margin-right: 3px;
					}
				}
				.task-set {
					display: flex;
					margin: 0 -15px;
					height: 40px;
					line-height: 40px;
					background-color:#ffface;
					padding: 0 20px;
					justify-content: space-between;
					.task-set-text {
						font-size: 13px;
						color: #666;
					}
				}
			}
		}
	}
	.fbcshak:after {
		border-color: #475669 transparent transparent transparent;
	}
</style>
