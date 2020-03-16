<template>
	<view class="pages-content">
		<s-tabs :effect="true" v-model="activeTab" customClass="tabs-header" lineColor="#4aa0f7" activeColor="#4aa0f7" :nav-per-view="2">
			<s-tab title="按运单">
				<div class="odd">
					<div class="odd-name">家庭</div>
					<div class="odd-name odd-down">1555515151515<i>2020-8-25</i></div>
					<div class="odd-sta">
						<div><span class="odd-shop">货品</span><span class="odd-spe">规格</span><span class="odd-orders">下单量</span><span >分捡量</span></div>
						<ul>
							<li>
								<div><span class="odd-shop">爱学习阿霞安心安心菜市场上次</span><span class="odd-spe">5(斤)</span><span class="odd-orders">262161</span><span >265151</span></div>
							</li>
						</ul>
					</div>
				</div>
			</s-tab>
			<s-tab title="按货品">
				<div class="cargo">
					<div class="cargo-name">餐具</div>
					<div class="cargo-name">[纸巾]餐具</div>
					<div class="cargo-name cargo-down">袋(kg)</div>
					<div class="cargo-sta">
						<div><span class="cargo-shop">门店</span><span class="cargo-time">收货时间</span><span class="cargo-orders">下单量</span><span >分捡量</span></div>
						<ul>
							<li>
								<div><span class="cargo-shop">爱学习阿霞安心安心菜市场上次</span><span class="cargo-time">2020-15-8-54</span><span class="cargo-orders">262161</span><span >265151</span></div>
							</li>
						</ul>
					</div>
				</div>
			</s-tab>
		</s-tabs>
	</view>
</template>

<script>
	import sTabs from '@/components/s-tabs/index.vue'
	import sTab from '@/components/s-tab/index.vue'
	export default {
		components: {
			sTabs, sTab
		},
		
		data() {
			return {
				activeTab: 0
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.odd{
		background-color: #fff;
		padding: 14px;
		margin-bottom: 6px;
		.odd-name{
			font-size: 16px;
			font-weight:bold;
			line-height: 22px;
			&>i{
				float: right;
				margin-right: 27px;
			}
		}
		.odd-down{
			margin-bottom: 15px;
		}
		.odd-sta{
			.odd-shop{
				display:inline-block;
				width: 35%;
			}
			.odd-spe{
				display:inline-block;
				width: 30%;
			}
			.odd-orders{
				display:inline-block;
				width: 20%;
			}
			&>ul{
				&>li{
					margin-top: 15px;
					&>text{
						display:inline-block;
						width: 15%;
					}
				}
			}
		}
	}
	.cargo{
		background-color: #fff;
		padding: 14px;
		margin-bottom: 6px;
		.cargo-name{
			font-size: 16px;
			font-weight:bold;
			line-height: 22px;
		}
		.cargo-down{
			margin-bottom: 15px;
		}
		.cargo-sta{
			.cargo-shop{
				display:inline-block;
				width: 35%;
			}
			.cargo-time{
				display:inline-block;
				width: 30%;
			}
			.cargo-orders{
				display:inline-block;
				width: 20%;
			}
			&>ul{
				&>li{
					margin-top: 15px;
					&>text{
						display:inline-block;
						width: 15%;
					}
				}
			}
		}
	}

</style>
