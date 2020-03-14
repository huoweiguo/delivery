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
			<view>巴嘎</view>
		</poplayer>
	</view>
</template>

<script>
	import sTabs from '@/components/s-tabs/index.vue'
	import sTab from '@/components/s-tab/index.vue'
	import poplayer from '@/components/poplayer/index.vue'
	export default {
		components: {
			sTabs, sTab, poplayer
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
			//background-image:url('/static/images/icon-complete.png');
			background-position: calc(100% - 10%) calc(100% - 10%);
			background-repeat: no-repeat;
			background-size: 120px;
		}
	}
	.pickup-detail {
		width: 100%;
		height: 700px;
	}
</style>
