<template>
	<view>
		<ul class="home-grid">
			<li>
				<navigator url="/pages/depart/depart">
					<image src="/static/images/icon-car.png" mode="widthFix"/>
					<span class="text">发车单</span>
				</navigator>
			</li>
			<li>
				<navigator url="/pages/report/report">
					<image src="/static/images/putcar.png" mode="widthFix"/>
					<span class="text">装车</span>
				</navigator>
			</li>
		</ul>
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

<style lang="scss">
	.home-grid {
		overflow: hidden;
		background-color: #fff;
		margin-bottom: 10px;
		li {
			float: left;
			width: 33.33%;
			text-align: center;
			height: 120px;
			padding-top: 30px; 
			border-right: 1px solid #f1f1f1;
			border-bottom: 1px solid #f1f1f1;
			image {
				width: 30px;
				height: 30px;
				display: block;
				margin:0 auto 10px;
			}
			.text {
				display: block;
				font-size: 16px;
				color: #777;
			}
		}
	}
</style>
