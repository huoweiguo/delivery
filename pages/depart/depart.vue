<template>
	<view class="content">
		<HM-dragSorts :list="list" @confirm="confirm" :visible="visible"></HM-dragSorts>
		<view class="depart-set">
			<button class="dep-btn1 fbcblue">保存排列</button>
			<button class="dep-btn1">重置排列</button>
		</view>
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
	.depart-set {
		padding: 20px 10px;
		display: flex;
		justify-content: space-between;
		.dep-btn1 {
			width: 45%;
			height: 35px;
			background-color: #f60;
			color: #fff;
			font-size: 14px;
		}
		.fbcblue {
			background-color: #4a9ff8;
		}
	}
</style>
