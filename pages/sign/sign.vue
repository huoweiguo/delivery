<template>
	<view class="content">
		<ul class="sion-list">
			<li >
				<div class="sion-text">
					<span>2020-3-13</span>
					<span>晨新鲜</span>
					<span>晨新鲜</span>
				</div>
				<div class="sion-order">
					<div class="trilateral"><i>直</i></span></div>
					<h2>昆市中</h2>
					<ul class="sion-odd">
						<li>
							<image src="/static/images/icon-file.png"/>
							<span>任务单号：<i>115415154</i></span>
						</li>
						<li>
							<image src="/static/images/car-info.png"/>
							<span>取件数量：<i>7</i></span>
						</li>
						<li>
							<image src="/static/images/icon-clock.png"/>
							<span>到仓时间：<i>3：00</i></span>
						</li>
						<li>
							<image src="/static/images/icon-ck.png"/>
							<span>所属仓库：<i>苏州仓库</i></span>
						</li>
					</ul>
					<div class="but">
						<button class="primary" type="primary">签到</button>
					</div>
				</div>
			</li>
		</ul>
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
	
	.sion-list{
		overflow: hidden;
		background-color: #f4f4f4;
		li{
			margin: 11px 0 0 15px;	
			.sion-text{
				font-size: 14px;
				color: #9b9b9b;
				span{
				line-height: 34px;
				margin-right: 13px;
				}
			}
			.sion-order{
				width: 94%;
				background-color: #fff;
				border: 2px solid #e3e3e3;
				position: relative;
				padding: 0 0 14px 17px;
				.trilateral{
					width: 0px;
					height:0px;
					border:15px solid transparent;
					border-right-color:  #4a5567;
					border-top-color: #4a5567;
					color: #fff;
					font-size: 14px;
					vertical-align: top;
					position: absolute;
					right: 0;
					top:0;
					i{
						position: absolute;
						bottom:0;
						left:0;
					}
				}
				h2{
					line-height: 31px;
					font-size: 16px;
					font-weight:bold;
				}
				.sion-odd{
					li{
						display: flex;
						align-content: center;
						image{
							width: 18px;
							height: 18px;
						}
						span{
							line-height: 13px;
							margin-left: 7px;
							font-size: 14px;
							color: #adadad;
							i{
								display: inline-block;
								color: #666666;
							}
						}
					}
				}
				.but{
					.primary{
						width: 126px;
						height: 40px;
						line-height: 40px;
						margin-top: 13px;
					}
				}
			}
		}
	}

</style>
