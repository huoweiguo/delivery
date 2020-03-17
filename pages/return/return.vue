<template>
	<view  class="content">
		<ul class="return-list">
			<li>
				<navigator url="/pages/returnList/returnList">
					<div class="return-time">
						<span>20200216</span><span>晨新鲜</span><span>一波</span>			
					</div>
					<div class="return-order">
						<div class="trilateral"><i>直</i></span></div>
						<span>六安市</span>任务单号：155151515
					</div>
				</navigator>
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
		&>li{
			.return-time{
				text-align: center;
				line-height: 37px;
				font-size: 14px;
				color: #a8aaac;
				&>span{
					margin-right: 15px;
				}
			}
			.return-order{
				width: 94%;
				margin:0 auto;
				line-height: 47px;
				background-color: #fff;
				font-size: 14px;
				color: #a8aaac;
				border: 1px solid #e3e3e3;
				position: relative;
				.trilateral{
					width: 0px;
					height:0px;
					border:23px solid transparent;
					border-left-color:  #f0ae4d;
					border-top-color: #f0ae4d;
					color: #fff;
					font-size: 16px;
					vertical-align: top;
					position: absolute;
					left: 0;
					top:0;
					>i{
						position: absolute;
						bottom:-14px;
						right:1px;
					}
				}
				&>span{
					font-size: 16px;
					font-weight:bold;
					margin: 0 15px 0 50px;
					color: #000000;
					border-radius: 2px;
				}
			}
			
		}
	}

</style>
