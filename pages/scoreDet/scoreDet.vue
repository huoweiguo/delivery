<template>
	<view class="pages-content">
		<view class="score-promt">
			明细中的<text class="fcblack fb">黑色数字</text>为基础积分，
			<text class="fcred fb">红色数字</text>为附加积分
		</view>
		<view class="score-hj">
			<view>
				<text>积分合计: 60</text>
				<text>奖励: 60</text>
				<text>扣减: 0</text>
			</view>
			<view class="score-select" @click="$refs.popup.open()">{{day}} <image src="/static/images/d-arrow.png" class="d-arrow"/></view>
		</view>
		
		<ul class="score-list">
			<li>
				<text>准时送达商家</text>
				<view><text class="fcred">+6</text><text>+17</text></view>
			</li>
			<li>
				<text>多拉金额</text>
				<view><text>+17</text></view>
			</li>
			<li>
				<text>取件入库</text>
				<view><text>+12</text></view>
			</li>
			<li>
				<text>按时回款</text>
				<view><text>+5</text></view>
			</li>
		</ul>
		
		<uni-popup ref="popup" type="bottom">
			<div class="popup-box">
				<view class="popup-btn" @click="selectDay(1)">今日</view>
				<view class="popup-btn" @click="selectDay(2)">本周</view>
				<view class="popup-btn" @click="selectDay(3)">本月</view>
			</div>
			<div class="popup-box">
				<view class="popup-btn" @click="$refs.popup.close()">取消</view>
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
				day: '今日'
			}
		},
		methods: {
			selectDay (day) {
				switch (day) {
					case 1:
						this.day = '今日'
						break;
					case 2:
						this.day = '本周'
						break;
					case 3:
						this.day = '本月'
						break;
					default:
						this.day = '今日'
				}
				this.$refs.popup.close()
			}
		}
	}
</script>

<style lang="scss" scoped>
.score-promt {
	padding: 5px 10px;
	background-color: #fbfdec;
	line-height: 20px;
	font-size: 14px;
	color: #666;
}
.score-hj {
	display: flex;
	align-items: center;
	height: 45px;
	line-height: 45px;
	justify-content: space-between;
	padding: 0 10px;
	font-size: 15px;
	color: #666;
	text {
		padding-right: 5px;
	}
	.score-select {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 15px;
		background-color: #fff;
		height: 30px;
		line-height: 30px;
		width: 60px;
		border-radius: 30px;
	}
}
.d-arrow {
	width: 18px;
	height: 18px;
	vertical-align: middle;
	margin-left: 3px;
}
.score-list {
	background-color: #fff;
	li {
		display: flex;
		height: 45px;
		line-height: 45px;
		border-bottom: 1px solid #eee;
		color: #555;
		padding:0 10px 0 5px;
		justify-content: space-between;
		font-size: 16px;
		text {
			margin-left: 5px;
		}
		&:last-child {
			border-bottom: 0;
		}
	}
}
</style>
