<template>
	<view class="pages-content">
		<s-tabs :effect="true" v-model="activeTab" customClass="tabs-header" lineColor="#4aa0f7" activeColor="#4aa0f7" :nav-per-view="2">
			<!--日账单-->
			<s-tab title="日账单">
				<uni-calendar :insert="insert" :selected="selected" ref="calendar" @change="confirm"/>
				<view class="tick-des" v-if="ticket">您选择的日期暂无账单</view>
				<view class="tick-des" v-if="!ticket">
					<text class="mr10">合计:</text><text class="fcred">&yen; 500.45</text>
				</view>
				
				<ul class="run-list">
					<li>
						<view class="run-addr"><text>苏州仓库2</text><text>常熟南</text><text>123.45</text></view>
						<view class="run-addr ft14"><text>基础运费</text><text>15</text></view>
						<view class="run-addr ft14 fcblue">
							<text>奖励</text><text class="r-number">23</text>
							<image src="/static/images/right.png" class="r-arrow"></image>
						</view>
						<view class="run-addr ft14 fcblue">
							<text>罚款</text><text class="r-number">7</text>
							<image src="/static/images/right.png" class="r-arrow"></image>
						</view>
						<view class="run-addr ft14"><text>其他</text><text>0</text></view>
					</li>
					
					<li>
						<view class="run-addr"><text>北京西仓2</text><text>北京西</text><text>345.45</text></view>
						<view class="run-addr ft14"><text>基础运费</text><text>15</text></view>
						<view class="run-addr ft14 fcblue">
							<text>奖励</text><text class="r-number">23</text>
							<image src="/static/images/right.png" class="r-arrow"></image>
						</view>
						<view class="run-addr ft14 fcblue">
							<text>罚款</text><text class="r-number">7</text>
							<image src="/static/images/right.png" class="r-arrow"></image>
						</view>
						<view class="run-addr ft14"><text>其他</text><text>0</text></view>
					</li>
				</ul>
			</s-tab>
			<!--月账单-->
			<s-tab title="月账单">
				<text class="income-title">历史收入折线图</text>
				<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts"></canvas>
				<ul class="run-list">
					<li>
						<view class="run-addr"><text>2020年01月</text><view><text>合计:</text><text class="fcred">123.45</text></view></view>
						<view class="run-addr ft14"><text>基础运费合计</text><text>15</text></view>
						<view class="run-addr ft14"><text>补贴合计</text><text>75.2</text></view>
						<view class="run-addr ft14 fcblue">
							<text>管理费合计</text><text class="r-number">23</text>
							<image src="/static/images/right.png" class="r-arrow"></image>
						</view>
						<view class="run-addr ft14"><text>末端合计</text><text>0</text></view>
						<view class="run-addr ft14"><text>补录合计</text><text>0</text></view>
						<view class="run-addr ft14"><text>合伙人运费合计</text><text>0</text></view>
					</li>
				</ul>	
			</s-tab>
		</s-tabs>
	</view>
</template>

<script>
	import sTabs from '@/components/s-tabs/index.vue'
	import sTab from '@/components/s-tab/index.vue'
	import { uniCalendar } from '@dcloudio/uni-ui'
	import uCharts from '@/components/u-charts/u-charts.js'
	export default {
		components: {
			sTabs, sTab, uniCalendar
		},
		data() {
			return {
				activeTab: 0,
				insert: true,
				ticket: false,
				selected: [
					{ date: '2020-03-01', info: '班'},
					{ date: '2020-03-03', info: '班'},
					{ date: '2020-03-05', info: '班'},
					{ date: '2020-03-07', info: '班'},
					{ date: '2020-03-09', info: '班'},
					{ date: '2020-03-11', info: '班'},
					{ date: '2020-03-12', info: '班'},
					{ date: '2020-03-13', info: '班'},
					{ date: '2020-03-14', info: '班'},
					{ date: '2020-03-15', info: '班'},
					{ date: '2020-03-16', info: '班'},
					{ date: '2020-03-17', info: '班'}
				],
				cWidth: '',
				cHeight: '',
				chartData: {
					categories: ['1月', '2月', '3月', '4月', '5月', '6月'],
					series: [{
						name: '收入明细(元)',
						data: [3456, 625.50, 16253.78, 3827.4, 8723.56, 23643.76],
						color: '#f60'
					}]
				}
			}
		},
		mounted () {
			this.cWidth=uni.upx2px(750)
			this.cHeight=uni.upx2px(500)
			this.setCharts()
		},
		methods: {
			confirm(e) {
				console.log(e.fulldate)
			},
			setCharts () {
				new uCharts({
					$this: this,
					canvasId: 'canvasLineA',
					type: 'line',
					fontSize:11,
					legend:{show:true},
					dataLabel: false,
					dataPointShape: true,
					background:'#FFFFFF',
					pixelRatio:1,
					categories: this.chartData.categories,
					series: this.chartData.series,
					animation: true,
					xAxis: {
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#CCCCCC',
						dashLength:8,
						splitNumber:5,
						min:10,
						max:180,
						format:(val)=>{return val.toFixed(0)}
					},
					width: this.cWidth,
					height: this.cHeight,
					extra: {
						line:{
							type: 'straight'
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
 .tick-des {
	 height: 45px;
	 line-height: 45px;
	 padding:0 10px;
	 background-color: #fff;
	 color: #555;
	 margin: 10px 0;
	 .tick-des {
		 text {
			 display: flex;
			 display: block;
			 margin-right: 5px;
		 }
	 }
 }
 .run-list {
	 li {
		 background-color: #fff;
		 padding: 0 10px;
		 color: #555;
		 margin-bottom: 10px;
		 .run-addr {
			 position: relative;
			 height: 45px;
			 line-height: 45px;
			 display: flex;
			 justify-content: space-between;
			 font-size: 16px;
			 border-bottom: 1px solid #eee;
			 .r-arrow {
				 position: absolute;
				 right: -5px;
				 top: 50%;
				 width: 20px;
				 height: 20px;
				 margin-top: -12px;
			 }
			 .r-number {
				 margin-right: 12px;
			 }
		 }
	 }
 }
.charts{
	width: 750upx; 
	height:500upx;
	background-color: #FFFFFF;
	margin-bottom: 10px;
}
.income-title {
	padding: 0 10px;
	height: 40px;
	line-height: 40px;
	font-size: 16px;
	color: #333;
}
</style>
