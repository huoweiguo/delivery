<template>
	<view class="pages-content">
		<uni-list>
			<uni-list-item title="昆山市中9" note="2020-03-10晨鲜送1波次" @click="goCargo"></uni-list-item>
			<uni-list-item title="昆山市中9" note="2020-03-10晨鲜送1波次"></uni-list-item>
			<uni-list-item title="昆山市中9" note="2020-03-10晨鲜送1波次"></uni-list-item>
			<uni-list-item title="昆山市中9" note="2020-03-10晨鲜送1波次"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import { uniList, uniListItem } from '@dcloudio/uni-ui'
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			goCargo () {
				uni.navigateTo({
					url: `/pages/nuclearCargo/cargo`,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
