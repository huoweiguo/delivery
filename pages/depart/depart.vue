<template>
	<view class="content">
		<HM-dragSorts :list="list" @confirm="confirm"></HM-dragSorts>
	</view>
</template>

<script>
	import dragSorts from '@/components/HM-dragSorts/HM-dragSorts.vue'
	export default {
		components: {
			'HM-dragSorts':dragSorts
		},
		data() {
			return {
				list: [
					{
						departId: 1,
						arriveTime: '06:30 - 08:30',
						name: "1#MK25628101#家庭个人",
						phone: "17826372837",
						address: '上海市闵行区江川路1401号302室'
					},
					{
						departId: 2,
						arriveTime: '06:30 - 08:30',
						name: "2#MK25628101#小鸟cms",
						phone: "021-82738293",
						address: '上海市黄浦区成都北路'
					},
					{
						departId: 3,
						arriveTime: '06:30 - 08:30',
						name: "3#MK25628101#家庭个人",
						phone: "187263728273",
						address: '上海市松江区佘山镇青城山路180弄佘北家园42号502室'
					}
				]
			}
		},
		methods: {
			confirm(e) {
				console.log("e: " + JSON.stringify(e));
				//由上面的打印，显而易见，e里面的list，就是返回来的排序过的数据
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
