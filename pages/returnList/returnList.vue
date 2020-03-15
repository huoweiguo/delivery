<template>
	<view class="content">
		<ul class="return-list">
			<li>
				<h2>1.就阿坝县就吧唧吧</h2>
				<ul>
					<li>
						<div class="return-obj"><i>物</i>鸡蛋5151315</div>
						<div class="return-num">
							<span>退货:1</span><span>入库:0</span>
						</div>					
					</li>
					<li>
						<div class="return-obj"><i>物</i>鸡蛋5151315</div>
						<div class="return-num">
							<span>退货:1</span><span>入库:0</span>
						</div>					
					</li>
					<li>
						<div class="return-obj"><i>物</i>鸡蛋5151315</div>
						<div class="return-num">
							<span>退货:1</span><span>入库:0</span>
						</div>					
					</li>
				</ul>
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
.return-list{
	background-color: #fff;
	&>li{
		&>h2{
			font-size: 16px;
			font-weight:bold;
			line-height: 48px;
			padding-left: 11px;
		}
		&>ul{
			&>li{
				font-size: 16px;
				margin-left: 5px;
				.return-obj{
					line-height: 20px;
					&>i{
						display: inline-block;
						font-size: 14px;
						text-align: center;
						line-height: 18px;
						width: 18px;
						height: 18px;
						color: #fff;
						border-radius: 1px;
						margin-right: 3px;
						background-color: #ea9161;
					}
					
				}
				.return-num{
					line-height: 28px;
					padding-left: 21px;
					padding-bottom: 10px;
					&>span{
						margin-right: 31px;
					}
				}
			}
		}
	}
}

</style>
