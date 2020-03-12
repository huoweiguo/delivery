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
</style>
