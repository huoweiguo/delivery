<template>
	<view class="pages-content">
		<text class="fix-info">增量销售额=本月-上月(增量越大，佣金越高)</text>
		<view class="merc-det">
			<view class="merc-tele">
				<text class="merc-title">赣香菜馆</text>
				<image src="/static/images/telephone.png">
			</view>
			<text class="merc-addr">上海市青浦区恒河沙去我家啊睡觉阿哈收款</text>
		</view>
		<ul class="merc-det-list">
			<li><text>本月整体销售额</text><text>0</text></li>
			<li><text>上月整体销售额</text><text>0</text></li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted () {
			console.log(this.$route.query)
		}
	}
</script>

<style lang="scss" scoped>
.fix-info {
	 display: block;
	 line-height: 30px;
	 background-color: #fdfcec;
	 color: #f60;
	 margin-bottom: 10px;
	 padding: 0 10px;
	 font-size: 14px;
 }
.merc-det {
	padding: 10px;
	background-color: #fff;
	margin-bottom: 10px;
	.merc-tele {
		display: flex;
		image {
			display: block;
			width: 18px;
			height: 18px;
			vertical-align: middle;
			margin-left: 5px;
		}
	}
	.merc-title {
		display: block;
		font-size: 18px;
		color: #333;
		margin-bottom: 7px;
	}
	.merc-addr {
		display: block;
		font-size: 14px;
		color: #666;
		padding-right: 10px;
		line-height: 18px;
		margin-bottom: 7px;
	}
}
.merc-det-list {
	li {
		display: flex;
		padding: 0 10px;
		height: 40px;
		line-height: 40px;
		justify-content: space-between;
		font-size: 14px;
		color: #333;
		background-color: #fff;
		border-bottom: 1px solid #eee;
	}
}
</style>
