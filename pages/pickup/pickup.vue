<template>
	<view class="pages-content">
		<s-tabs :effect="true" v-model="activeTab" customClass="tabs-header" @change="change" lineColor="#4aa0f7" activeColor="#4aa0f7" :nav-per-view="2">
			<s-tab :title="nav1">
				<div class="nav-smallText">20200216 晨鲜送 2波次</div>
				<ul class="pickup-list" @click="showDetail">
					<li>
						<div class="tag-fixed"><text>取</text></div>
						<div class="pckText1">任务单号：RD128262783932</div>
						<div class="pckText1">取件号：Q12783932</div>
						<div class="pckText2">
							<div class="pck-names">
								<image src="/static/images/icon-name.png" class="icon-set" mode="widthFix"/>
								<text>15058411#浩海一味饭店 15058411#浩海一味饭店 15058411#浩海一味饭店</text>
							</div>
							<div>
								<image src="/static/images/icon-tk.png" class="icon-set" mode="widthFix"/>
								微信
							</div>
						</div>
						<div class="pckText2">
							<div class="pck-content">
								<image src="/static/images/icon-mdd.png" class="icon-set" mode="widthFix"/>
								<div class="pck-addr">安徽省六安市金安区三十铺镇枣园小区安徽省六安市金安区三十铺镇枣园小区</div>
							</div>
						</div>
						<div class="pckText2">
							<div class="pck-inner">
								<image src="/static/images/icon-wuzi.png" class="icon-set" mode="widthFix"/>
								取件物资数: 0 &nbsp;&nbsp;&nbsp;&nbsp; 取件货品数: 1
							</div>
						</div>
					</li>
				</ul>
			</s-tab>
			<s-tab :title="nav2">
				<div class="nav-smallText">20200216 晨鲜送 2波次</div>
				<ul class="pickup-list pickup-complete">
					<li>
						<div class="tag-fixed"><text>取</text></div>
						<div class="pckText1">任务单号: RD128262783932</div>
						<div class="pckText1">取件号: Q12783932</div>
						<div class="pckText2">
							<div class="pck-names">
								<image src="/static/images/icon-name.png" class="icon-set" mode="widthFix"/>
								<text>15058411#浩海一味饭店 15058411#浩海一味饭店 15058411#浩海一味饭店</text>
							</div>
							<div>
								<image src="/static/images/icon-tk.png" class="icon-set" mode="widthFix"/>
								微信
							</div>
						</div>
						<div class="pckText2">
							<div class="pck-content">
								<image src="/static/images/icon-mdd.png" class="icon-set" mode="widthFix"/>
								<div class="pck-addr">安徽省六安市金安区三十铺镇枣园小区安徽省六安市金安区三十铺镇枣园小区</div>
							</div>
						</div>
						<div class="pckText2">
							<div class="pck-inner">
								<image src="/static/images/icon-wuzi.png" class="icon-set" mode="widthFix"/>
								取件物资数: 0 &nbsp;&nbsp;&nbsp;&nbsp; 取件货品数: 1
							</div>
						</div>
					</li>
				</ul>
				<div class="nav-smallText">20200216 晨鲜送 2波次</div>
				<ul class="pickup-list pickup-complete">
					<li>
						<div class="tag-fixed"><text>取</text></div>
						<div class="pckText1">任务单号：RD128262783932</div>
						<div class="pckText1">取件号：Q12783932</div>
						<div class="pckText2">
							<div class="pck-names">
								<image src="/static/images/icon-name.png" class="icon-set" mode="widthFix"/>
								<text>15058411#浩海一味饭店 15058411#浩海一味饭店 15058411#浩海一味饭店</text>
							</div>
							<div>
								<image src="/static/images/icon-tk.png" class="icon-set" mode="widthFix"/>
								微信
							</div>
						</div>
						<div class="pckText2">
							<div class="pck-content">
								<image src="/static/images/icon-mdd.png" class="icon-set" mode="widthFix"/>
								<div class="pck-addr">安徽省六安市金安区三十铺镇枣园小区安徽省六安市金安区三十铺镇枣园小区</div>
							</div>
						</div>
						<div class="pckText2">
							<div class="pck-inner">
								<image src="/static/images/icon-wuzi.png" class="icon-set" mode="widthFix"/>
								取件物资数: 0 &nbsp;&nbsp;&nbsp;&nbsp; 取件货品数: 1
							</div>
						</div>
					</li>
				</ul>
			</s-tab>
		</s-tabs>
		<poplayer :visible="visible">
			<uni-collapse @change="change">
				<div class="collapse-item">
					<uni-collapse-item title="客户信息" :open="true">
						<view class="collapse-content">
							<view class="coll-view"><text class="coll-label">取件号:</text> <text>TS16252021</text></view>
							<view class="coll-view"><text class="coll-label">取件单号:</text> <text>HT16252021</text></view>
							<view class="coll-view"><text class="coll-label">姓名:</text> <text>小小霍</text></view>
							<view class="coll-view"><text class="coll-label">电话:</text> <text class="fcblue">18726351415</text></view>
							<view class="coll-view"><text class="coll-label">目的地:</text> <text class="fcblue coll-text-addr">上海市亲排山倒海阿四个是尴尬时光说昂哈哈镜</text></view>
						</view>
					</uni-collapse-item>
				</div>
				
				<div class="collapse-item">
					<uni-collapse-item title="商品信息" :open="false">
						<view class="collapse-content">
							<view class="coll-view"><text>桂圆栗子八宝粥500ML桂圆栗子八宝粥500ML桂圆栗子八宝粥500ML</text></view>
							<view class="coll-shop">
								<view>发起：<text class="fcred">1箱</text></view>
								<view>实退：<text class="fcred">1箱</text></view>
							</view>
							
						</view>
					</uni-collapse-item>
				</div>
				
				<div class="collapse-item">
					<uni-collapse-item title="物资信息" :open="false"></uni-collapse-item>
				</div>
			</uni-collapse>
			<div class="pickup-btn-set">
				<button type="button" class="pickup-btn">取件完成</button>
				<button type="button" class="pickup-btn fc-orange" @click="hideDetail">返回</button>
			</div>
		</poplayer>
	</view>
</template>

<script>
	import sTabs from '@/components/s-tabs/index.vue'
	import sTab from '@/components/s-tab/index.vue'
	import poplayer from '@/components/poplayer/index.vue'
	import { uniCollapse, uniCollapseItem } from '@dcloudio/uni-ui'
	export default {
		components: {
			sTabs, sTab, poplayer, uniCollapse, uniCollapseItem
		},
		data() {
			return {
				activeTab: 0,
				nav1: '取件中(1)',
				nav2: '已完成(2)',
				visible: false
			}
		},
		methods: {
			change (index) {
				console.log(index)
			},
			showDetail () {
				this.visible = true
			},
			hideDetail () {
				this.visible = false
			},
			change (data) {
				console.log(data)
			}
		}
	}
</script>

<style lang="scss" scoped>
	uni-page-body,.pages-content {
		height: 100%;
	}
	.nav-smallText {
		font-size: 13px;
		color: #666;
		height: 35px;
		line-height: 35px;
		text-align: center;
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
				padding-left: 30px;
				line-height: 18px;
				margin-bottom: 10px;
			}
			.pckText2 {
				display: flex;
				line-height: 18px;
				margin-bottom: 10px;
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
	.pickup-complete {
		li {
			background-image:url('/static/images/icon-complete.png');
			background-position: calc(100% - 10%) calc(100% - 10%);
			background-repeat: no-repeat;
			background-size: 120px;
		}
	}
	.pickup-detail {
		height: 100%;
	}
	.collapse-content {
		border-top: 1px solid #eee;
		padding: 15px;
		font-size: 12px;
		color: #777;
		.coll-view {
			display: flex;
			line-height: 18px;
			margin-bottom: 10px;
			.coll-label {
				display: block;
				width: 70px;
				margin-right: 10px;
				text-align: right;
			}
			.coll-text-addr {
				flex: 1;
			}
		}
		.coll-shop {
			display: flex;
			justify-content: space-between;
		}
	}
	.pickup-btn-set {
		padding: 0 10px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
		.pickup-btn {
			width: 45%;
			font-size: 14px;
			background-color: #4a9ff8;
			color: #fff;
		}
		.fc-orange {
			background-color: #f60;
		}
	}
	.uni-collapse {
		background-color: transparent;
	}
	.collapse-item {
		margin-bottom: 10px;
	}
	.uni-collapse-cell {
		border-bottom: none;
	}
	.uni-collapse-cell--open {
		background-color: #fff;
	}
	.uni-collapse-cell--hide {
		background-color: #fff;
	}
	.uni-collapse-item {
		font-size: 16px;
	}
</style>
