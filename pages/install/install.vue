<template>
	<view class="pages-content">
		<div class="install-time">
			<text>2020-8-10</text><text>顺序甲戌</text><text>韩国小是</text>
		</div>
		<div class="install-order">
			<div class="trilateral"><i>直</i></span></div>
			<div class="install-name"><text>线路名 :六安站</text></div>
			<div class="install-name install-down"><text>任务单号:六安站</text></div>
			<div class="install-start">
				<img src="/static/images/icon-sign.png" mode="widthFix"/>
				<span>苏州仓库</span>
			</div>
			<div class="install-start">
				<img src="/static/images/icon-sign.png" mode="widthFix"/>
				<span>三点前到达商店</span>
			</div>
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
 .install-time{
	 font-size: 16px;
	 color: #000000;
	 text-align: center;
	 margin-top: 12px;
	 line-height: 34px;
	 &>text{
		 margin-right: 7px;
	 }
 }
 .install-order{
	 position: relative;
	 background-color: #fff;
	 width: 93%;
	 margin: 0 auto;
	 font-size: 16px;
	 padding-top: 3px;
	 .trilateral{
	 	width: 0px;
	 	height:0px;
	 	border:23px solid transparent;
	 	border-left-color:  #475669;
	 	border-top-color: #475669;
	 	color: #fff;
	 	font-size: 16px;
	 	vertical-align: top;
	 	position: absolute;
	 	left: 0;
	 	top:0;
	 	>i{
	 		position: absolute;
	 		top:-15px;
	 		right:1px;
	 	}
	 }
	 .install-name{
		 line-height: 24px;
		 margin-left: 62px;
	 }
	 .install-down{
		 margin-bottom: 10px;
	 }
	 .install-start{
		 line-height: 22px;
		 margin-left: 36px;
		 &>img{
			 width: 18px;
			 height: 18;
			 margin-right: 10px;
		 }
	 }
 }
</style>
