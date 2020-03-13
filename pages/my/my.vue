<template>
	<div class="content">
		<div class="center-header">
			<div class="center-nav-body">
				<div class="header-img">
					<img src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3256100974,305075936&fm=26&gp=0.jpg"/>
					小鸟无毛飞的高
				</div>
				
				<div class="person-mes">
					<!--等级-->
					<div class="person-level"><uni-rate max="5" value="4" margin="2" size="18" disabled="false"></uni-rate></div>
					<div class="person-nick">配送司机</div>
					<div class="person-charge">
						<div class="quota-income">
							<span>----</span>
							<span>剩余额度</span>
						</div>
						<div class="quota-income">
							<span>6475.34</span>
							<span>我的收入</span>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="center-info">
			<div class="score-set">
				<span class="score">当前积分: 287</span>
				<span class="score-rule"><image class="icon-sup" src="/static/images/icon-sup.png">积分规则</span>
			</div>
			<div class="center-income">
				<span>昨日收入系数: 暂无</span>
				<span>今日积分变化: 0</span>
			</div>
			<div class="score-distance">
				<text class="fc-orange">4</text>星保级需要<text class="fc-orange">1271</text>积分，距离<text class="fc-orange">5</text>星还需要<text class="fc-orange">2452</text>积分
			</div>
		</div>
		<div class="center-tab">
			<ul>
				<li>
					<image src="/static/images/icon-pj.png"/>
					<text class="cen-tab-text">仓服务评价</text>
				</li>
				<li>
					<image src="/static/images/icon-apply.png"/>
					<text class="cen-tab-text">人车信息</text>
				</li>
				<li>
					<image src="/static/images/icon-ht.png"/>
					<text class="cen-tab-text">我的合同</text>
				</li>
				<li>
					<image src="/static/images/icon-zx.png"/>
					<text class="cen-tab-text">投诉处理</text>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { uniRate } from '@dcloudio/uni-ui'
	export default {
		components: {
			uniRate
		},
		data () {
			return {}
		}
	}
</script>

<style lang="scss" scoped>
	.center-header {
		position: relative;
		background-color: #4a9ff8;
		height: 115px;
		margin-bottom: 120px;
		.center-nav-body {
			position: absolute;
			left: 3%;
			top: 30px;
			width: 94%;
			height: 190px;
			background-color: #fff;
			border-radius: 5px;
			.header-img {
				position: absolute;
				left: 0;
				top: -25px;
				width: 100%;
				text-align: center;
				color: #666;
				font-size: 16px;
				img {
					display: block;
					width: 50px;
					height: 50px;
					border-radius: 50%;
					margin:0 auto 5px;
				}
			}
			.person-mes {
				margin-top: 65px;
				.person-level {
					display: flex;
					justify-content: center;
					margin-bottom: 10px;
				}
				.person-nick {
					margin:0 auto 15px;
					width: 80px;
					height: 35px;
					line-height: 35px;
					text-align: center;
					border: 1px solid #ddd;
					color: #777;
					border-radius: 5px;
					font-size: 14px;
				}
				.person-charge {
					display: flex;
					justify-content: center;
					.quota-income {
						padding: 0 20px;
						border-right: 1px solid #ddd;
						&:last-child {
							padding-right: 0;
							border-right: 0;
						}
						span {
							display: block;
							text-align: center;
							margin-bottom: 6px;
							font-size: 14px;
							color: #555;
						}
					}
				}
			}
		}
	}
	.center-info {
		width: 94%;
		margin:0 3% 10px;
		background-color: #fff;
		border-radius: 5px;
		padding: 10px;
		.score-set {
			margin-bottom: 10px;
			color: #555;
			.score {
				display: inline-block;
				font-size: 15px;
				margin-right: 10px;
			}
			.score-rule {
				font-size: 14px;
				color: #777;
				image {
					width: 18px;
					height: 18px;
					margin-left: 2px;
					vertical-align: middle;
				}
			}
		}
		.center-income {
			margin-bottom: 10px;
			color: #555;
			display: flex;
			font-size: 15px;
			span {
				width: 50%;
			}
		}
		.score-distance {
			font-size: 15px;
			color: #555;
			line-height: 18px;
			.fc-orange {
				color: #e9a114;
				padding: 1px;
			}
		}
	}
	.center-tab {
		width: 94%;
		margin:20px 3%;
		background-color: #fff;
		padding: 10px;
		border-radius: 5px;
		ul {
			overflow: hidden;
			li {
				float: left;
				width: 25%;
				color: #555;
				font-size: 14px;
				text-align: center;
				padding: 20px 0;
				image {
					display: block;
					width: 35px;
					height: 35px;
					margin:0 auto 10px;
				}
			}
		}
	}
</style>
