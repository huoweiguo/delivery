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
							<text>现金款: &yen;0</text>
							<text>POS款: &yen;0</text>
						</view>
						<view class="pck-text">
							<text>微信: &yen;0</text>
							<text>支付宝: &yen;56.32</text>
						</view>
						<view class="pck-text">
							<text>未收款: &yen;65.23</text>
							<text>垫付单: &yen;23.21</text>
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
				<div class="fina-btn-set">
					<button type="button" class="f-btn1">已结清</button>
					<!-- <button type="button" class="f-btn2">去交款</button> -->
				</div>
			</li>
		</ul>
		
		<uni-calendar :insert="showCanlendar" ref="calendar" :lunar="true" @confirm="confirm"/>
		<poplayer :visible="visible">
			<text class="poplayer-title">配送运单</text>
			<div class="text-list">
				<view class="list-inner"><text>现金(0)</text><text>&yen; 0</text></view>
				<view class="list-inner"><text>POS(0)</text><text>&yen; 0</text></view>
				<view class="list-inner"><text>支付宝(0)</text><text>&yen; 0</text></view>
				<view class="list-inner"><text>微信(0)</text><text>&yen; 0</text></view>
				<view class="list-inner list-diff"><text>未收款(3)</text><text>&yen;54.26</text></view>
				<view class="list-inner list-diff"><text>36520055#豪大大鸡排</text><text>&yen; 16.65</text></view>
				<view class="list-inner list-diff"><text>36520056#必胜客宅急送</text><text>&yen; 23.56</text></view>
				<view class="list-inner list-diff"><text>63526738#家庭个人</text><text>&yen; 13.75</text></view>
				<view class="list-inner"><text>待收款(0)</text><text>&yen; 0</text></view>
				<view class="list-inner"><text>待客退入库(0)</text></view>
				<view class="list-inner"><text>补货(0)</text></view>
			</div>
			<text class="poplayer-title">取件单</text>
			<div class="text-list">
				<view class="list-inner list-diff"><text>现金(0)</text><text>&yen; 0</text></view>
				<view class="list-inner list-diff"><text>美财付(3)</text><text>&yen;54.26</text></view>
				<view class="list-inner"><text>36520055#豪大大鸡排</text><text>&yen; 16.65</text></view>
				<view class="list-inner"><text>36520056#必胜客宅急送</text><text>&yen; 23.56</text></view>
				<view class="list-inner"><text>63526738#家庭个人</text><text>&yen; 13.75</text></view>
				<view class="list-inner"><text>账期(0)</text><text>&yen; 0</text></view>
				<view class="list-inner"><text>待取件完成(0)</text></view>
				<view class="list-inner"><text>待客退入库(0)</text></view>
			</div>
			<button class="fina-back" @click="hideDetail">返回</button>
		</poplayer>
	</view>
</template>

<script>
	import { uniCalendar } from '@dcloudio/uni-ui'
	import { addZero } from '@/util/tools.js'
	import poplayer from '@/components/poplayer/index.vue'
	export default {
		components: {
			uniCalendar, poplayer
		},
		data() {
			return {
				showCanlendar: false,
				currentTimes: '',
				visible: false
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
			},
			showDetail () {
				this.visible = true
			},
			hideDetail () {
				this.visible = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	uni-page-body,.pages-content {
		height: 100%;
	}
	.data-times {
		position: relative;
		top: 30px;
		margin:0 30px 30px;
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
			font-size: 12px;
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
						font-size: 12px;
						margin-bottom: 10px;
						text {
							width: 50%;
							white-space: nowrap;
						}
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
	.fina-btn-set {
		overflow: hidden;
		border-top: 1px solid #eee;
		padding-top: 10px;
		button {
			float: right;
		}
	}
	.f-btn1 {
		width: 80px;
		height: 35px;
		font-size: 14px;
		border:1px solid #4a9ff8;
		color: #4a9ff8;
		background-color: #fff;
	}
	.f-btn2 {
		width: 80px;
		height: 35px;
		font-size: 14px;
		background-color: #4a9ff8;
		color: #fff;
	}
	.poplayer-title {
		display: block;
		text-align: center;
		height: 45px;
		line-height: 45px;
		font-size: 16px;
		color: #333;
		padding-top: 20px;
	}
	.text-list {
		.list-inner {
			display: flex;
			justify-content: space-between;
			padding: 0 20px;
			height: 45px;
			line-height: 45px;
			border: 1px solid #eee;
			background-color: #fff;
			margin-bottom: 5px;
			font-size: 13px;
			color: #555;
		}
		.list-diff {
			margin-bottom: 0;
			margin-top: -1px;
			text {
				&:last-child {
					color: red;
					font-weight: bold;
				}
			}
		}
	}
	.fina-back {
		margin: 20px;
		background-color: #4a9ff8;
		color: #fff;
	}
</style>
