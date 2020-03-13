<template>
	<div class="pages-content">
		<text class="cargo-promt">还没有商户接受电子收货确认单，电子收货确认单的普及请再接再厉!</text>
		<div class="cargo-title">
			<text>21-昆市中9</text>
			<text>2020-02-16晨鲜送1波次</text>
		</div>
		<div class="cargo-list">
			<ul>
				<li>
					<text class="cargo-li-id">FA-FA021</text>
					<view>
						<text>分拣:</text><text class="fcred mr10">100%</text>
						<text>核货:</text><text class="fcred">100%</text>
					</view>
				</li>
				<li>
					<text class="cargo-li-id">FA-FA021</text>
					<view>
						<text>分拣:</text><text class="fcred mr10">100%</text>
						<text>核货:</text><text class="fcred">100%</text>
					</view>
				</li>
				<li>
					<text class="cargo-li-id">FA-FA021</text>
					<view>
						<text>分拣:</text><text class="fcred mr10">100%</text>
						<text>核货:</text><text class="fcred">100%</text>
					</view>
				</li>
			</ul>
		</div>
		<button type="primary" class="cargo-btn">已完成核货</button>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.cargo-promt {
		display: block;
		background-color: #fefcc0;
		padding: 10px;
		color: #f60;
		font-size: 14px;
		line-height: 18px;
	}
	.cargo-title {
		display: flex;
		height: 35px;
		line-height: 35px;
		font-size: 16px;
		color: #666;
		justify-content: space-between;
		padding: 0 10px;
	}
	.cargo-list {
		margin-bottom: 20px;
		padding: 0 10px;
		background-color: #fff;
		li{
			display: flex;
			border-bottom:1px solid #f1f1f1;
			font-size: 14px;
			justify-content: space-between;
			height: 45px;
			line-height: 45px;
			color: #333;
		}
	}
	.cargo-btn {
		margin:0 10px;
	}
</style>
