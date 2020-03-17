<template>
	<view class="pages-content">
		<text class="fix-info">佣金数额以实际发放为准，以下内容仅为参考</text>
		<ul class="merc-det-list mb10">
			<li><text>本月服务阶段累计佣金</text><text>&yen; 3.81</text></li>
		</ul>
		<view class="merc-det">
			<view class="merc-tele">
				<text class="merc-title">赣香菜馆</text>
				<image src="/static/images/telephone.png">
			</view>
			<text class="merc-addr">上海市青浦区恒河沙去我家啊睡觉阿哈收款</text>
			<text class="merc-addr tright">佣金合计: 3.81</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
		&:last-child {
			margin-bottom: 0;
		}
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
		&:last-child {
			border-bottom: 0;
		}
	}
}
</style>
