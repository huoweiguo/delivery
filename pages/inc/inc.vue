<template>
	<view class="pages-content">
		<div class="inc-list">
			<ul>
				<li>多送客户奖励<span>59.00</span></li>
				<li>补货奖励<span>59.00</span></li>
				<li>超距配送奖励<span>59.00</span></li>
				<li>超额配送奖励<span>59.00</span></li>
				<li>求援奖励<span>59.00</span></li>
				<li>取件奖励<span>59.00</span></li>
			</ul>
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
	.pages-content {
		padding: 20px 0;
	}
	.inc-list{
		background-color: #fff;
		ul{
			padding: 0 0 0 18px;
			li{
				overflow: hidden;
				border-bottom: 1px solid #e7e7e7;
				font-size: 18px;
				line-height: 48px;
				span{
					float: right;
					margin-right: 18px;
					color: #4ba789;
				}
			}
		}
	}

</style>
