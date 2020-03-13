<template>
	<view class="pages-content">
		<text class="report-promt">出车或请假后不能修改，如有变动请电话联系调度</text>
		<ul class="report-list">
			<li class="report-timed">
				<div class="list-time">
					<text>周一</text>
					<text>2020-01-23</text>
				</div>
				<text>班</text>
			</li>
			<li class="report-timed">
				<div class="list-time">
					<text>周二</text>
					<text>2020-01-24</text>
				</div>
				<text>假</text>
			</li>
			<li @click="$refs.popup.open()">
				<div class="list-time">
					<text>周三</text>
					<text>2020-01-25</text>
				</div>
			</li>
		</ul>
		<uni-popup ref="popup" type="bottom">
			<div class="popup-box">
				<text class="popup-promt">请确认明天的出车情况</text>
				<view class="popup-btn">我要报名</view>
				<view class="popup-btn">我要请假</view>
			</div>
			<div class="popup-box">
				<view class="popup-btn">取消</view>
			</div>
		</uni-popup>
	</view>
</template>

<script>
	import { uniPopup } from '@dcloudio/uni-ui'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.report-promt {
		padding:0 10px;
		font-size: 14px;
		color: #777;
		height: 35px;
		line-height: 35px;
		margin-bottom: 10px;
	}
	.report-list {
		margin-bottom: 15px;
		li {
			display: flex;
			height: 65px;
			background-color: #fff;
			margin-bottom: 5px;
			justify-content: space-between;
			padding: 0 10px;
			font-size: 18px;
			&.report-timed {
				.list-time {
					text {
						color: #999 !important;
					}
				}
			}
			text {
				height: 65px;
				display: inline-block;
				line-height: 65px;
				color: #333;
			}
			.list-time {
				text {
					&:first-child {
						margin-right: 20px;
					}
					&:last-child {
						font-size: 14px;
					}
				}
			}
		}
	}
	.popup-box {
		margin: 0 10px;
		background-color: #fff;
		margin-bottom: 10px;
		text-align: center;
		border-radius: 10px;
		.popup-promt {
			display: block;
			height: 35px;
			border-bottom: 1px solid #f1f1f1;
			line-height: 35px;
			font-size: 14px;
			color: #666;
		}
		.popup-btn {
			height: 55px;
			line-height: 55px;
			font-size: 16px;
			border-bottom: 1px solid #f1f1f1;
			&:last-child {
				border-bottom: 0;
			}
		}
	}
</style>
