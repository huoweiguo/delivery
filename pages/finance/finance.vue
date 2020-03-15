<template>
	<view class="pages-content">
		<view class="data-times" @click="open">
			<text>时间日期</text>
			<text>{{currentTimes}}</text>
		</view>
		
		<text class="finance-title">2020-02-21 晨鲜送 晨鲜送1波次</text>
		<ul class="pickup-list" @click="showDetail">
			<li>
				<div class="tag-fixed fc-orange"><text>直</text></div>
				<div class="pckText1"><text class="pck-title">常熟梅里1</text>任务单号：RD128262783932</div>
				<div class="pckText3">
					<text class="icon-word">钱</text>
					<view class="pck-outer">
						<view class="pck-text">
							<text>现金款：&yen;0</text>
							<text>POS款：&yen;0</text>
							<text>微信：&yen;0</text>
						</view>
						<view class="pck-text">
							<text>支付宝：&yen;0</text>
							<text>未收款：&yen;0</text>
							<text>取件单垫付：&yen;0</text>
						</view>
					</view>
				</div>
				<div class="pckText2">
					<div class="pck-inner">
						<text class="icon-word">运</text>
						待收款: 0 &nbsp;&nbsp;&nbsp;&nbsp; 待客退入库: 1
					</div>
				</div>
				<div class="pckText2">
					<div class="pck-inner">
						<text class="icon-word">取</text>
						待取件完成: 0 &nbsp;&nbsp;&nbsp;&nbsp; 待客退入库: 1
					</div>
				</div>
				<div class="pckText1 finance-pck">
					<text>应交财务现金：&yen;0</text>
					<text>已交财务现金：&yen;0</text>
				</div>
			</li>
		</ul>
		
		<uni-calendar :insert="showCanlendar" ref="calendar" :lunar="true" @confirm="confirm"/>
	</view>
</template>

<script>
	import { uniCalendar } from '@dcloudio/uni-ui'
	import { addZero } from '@/util/tools.js'
	export default {
		components: {
			uniCalendar
		},
		data() {
			return {
				showCanlendar: false,
				currentTimes: ''
			}
		},
		mounted () {
			// 获取当天的时间
			const d = new Date()
			this.currentTimes = `${d.getFullYear()}-${addZero(d.getMonth() + 1)}-${addZero(d.getDate())}`
		},
		methods: {
			confirm(e) {
				this.currentTimes = e.fulldate
			},
			open() {
				this.$refs.calendar.open()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.data-times {
		margin: 30px;
		background-color: #fff;
		height: 40px;
		line-height: 40px;
		text-align: center;
		display: flex;
		justify-content: space-around;
		color: #555;
	}
	.finance-title {
		display: block;
		margin: 0 3%;
		text-align: center;
		height: 40px;
		line-height: 40px;
		font-size: 13px;
		color: #777;
	}
	.fc-orange:after {
		border-color: #f60 transparent transparent transparent;
	}
	.pickup-list {
		padding: 0 3%;
		li {
			position: relative;
			margin-bottom: 15px;
			background-color: #fff;
			border-radius: 5px;
			border: 1px solid #f1f1f1;
			padding: 10px;
			color: #555;
			font-size: 13px;
			overflow: hidden;
			.pckText1 {
				display: flex;
				padding-left: 30px;
				line-height: 18px;
				margin-bottom: 15px;
				white-space: nowrap;
				.pck-title {
					display: block;
					font-size: 14px;
					font-weight: bold;
					margin-right: 15px;
					max-width: 90px;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}
			.finance-pck {
				display: flex;
				text {
					font-weight: bold;
					display: block;
					&:first-child {
						color: red;
						margin-right: 30px;
					}
					&:last-child {
						color: green;
					}
				}
			}
			.pckText2 {
				display: flex;
				line-height: 18px;
				margin-bottom: 15px;
				justify-content: space-between;
				vertical-align: middle;
				.pck-names {
					display: flex;
					flex: 2;
					margin-right: 20px;
					overflow: hidden;
					text {
						width: 90%;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}
				}
				.icon-set {
					width: 18px;
					height: 18px;
					vertical-align: sub;
					margin-right: 10px;
				}
			}
			.pckText3 {
				display: flex;
				margin-bottom: 15px;
				.pck-outer {
					flex: 1;
					.pck-text {
						display: flex;
						justify-content: space-between;
						font-size: 13px;
						margin-bottom: 10px;
					}
				}
			}
			.pck-content {
				overflow: hidden;
				image {
					float: left;
				}
				.pck-addr {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}
		}
	}
</style>
