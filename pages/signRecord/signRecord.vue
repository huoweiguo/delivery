<template>
	<view class="content">
		<div class="record-text">
			<h2>六安市<span>H2G2</span></h2>
		</div>
		<div class="record-time">
			<ul>
				<li>
					<i></i><span class="record-ware">到仓</span><span class="record-year">2020-5-8</span>02:44:06
				</li>
				<li>
					<i></i><span class="record-ware">离仓</span><span class="record-year">2020-5-8</span>02:44:06
				</li>
				<li>
					<i></i><span class="record-ware">到店</span>
				</li>
			</ul>
		</div>
		<div class="record-list">
			<ol>
				<li v-for="(item,key) in 7" v-key="key">
					<div class="num">{{key}}</div>
					<p>4141511515<i>摄像机板</i></p>
					<p>2020-5-8<i>02:44:06</i></p>
				</li>
			</ol>
		</div>
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
.record-text{
	background-color: #fff;
	border-bottom: 1px solid #f1f1f1;
	&>h2{
		margin-top: 10px;
		font-size: 18px;
		font-weight:bold;	
		line-height: 49px;
		padding: 0 16px 0 17px;
		overflow: hidden;
		&>span{
			float: right;
		}
	}
	
}
.record-time{
	background-color: #fff;
	border-bottom: 1px solid #f1f1f1;
	&>ul{
		border-bottom: 1px solid #f1f1f1;
		&>li{
			line-height: 60px;
			font-size: 16px;
			padding-left: 14px;
			position: relative;
			color: #599ef1;
			&>i{
				display: inline-block;
				width: 20px;
				height:20px;
				background:#c8e0fc;
				border-radius: 100px;
				position: relative;
				top:4px;
			}
			.record-ware{
				margin: 0 33px 0 30px;
			}
			.record-year{
				margin: 0 6px 0 0;
			}
		}
	}
}
.record-list{
	padding: 0 0 0 20px;
	background-color: #fff;
	&>ol{
		border-left: 2px solid #b8b8b8;
		&>li{
			line-height: 31px;
			border-bottom: 1px solid #f1f1f1;
			font-size: 16px;
			position: relative;
			.num{
				position: absolute;
				left: 4px;
				top: 14px;
			}
			&>p{
				margin-left: 40px;
				&>i{
					display: inline-block;
					margin-left: 7px;
				}
			}
		}
	}
}
</style>
