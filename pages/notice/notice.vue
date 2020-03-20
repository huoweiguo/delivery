<template>
	<view class="pages-content">
		<ul class="notice-list">
			<li>
				<navigator url="/pages/noticeDetail/noticeDetail">
					<text>2020-02-03 11:45:57</text>
					<view class="notice-title">第一报道 | 同老朋友普京通电话，习主席再次提到这一重要理念</view>
				</navigator>
			</li>
			
			<li>
				<navigator url="/pages/noticeDetail/noticeDetail">
					<text>2020-03-03 11:45:57</text>
					<view class="notice-title">世卫组织：中国首次无新增病例“是一个惊人的成就”</view>
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
		}
	}
</script>

<style lang="scss" scoped>
.pages-content {
	padding: 20px 10px;
}
.notice-list {
	li {
		font-size: 14px;
		background-color: #fff;
		padding: 10px;
		margin-bottom: 10px;
		text {
			display: block;
			color: #777;
			font-size: 14px;
			margin-bottom: 10px;
		}
		.notice-title {
			font-size: 16px;
			color: #333;
			line-height: 22px;
		}
	}
}
</style>
