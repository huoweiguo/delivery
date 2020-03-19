<template>
	<view class="pages-content">
		<view class="base-list" @click="openAddres2">
			<view>工作城市： {{info.city}}</view>
			<image src="/static/images/right.png" class="r-arrow"></image>
		</view>
		<text class="info-title">个人信息</text>
		<view class="base-list">
			<view class="base-list-inner">身份证号： <input type="text" class="info-input" placeholder="请输入身份证号码" v-model="info.idCard"/></view>
			<image src="/static/images/right.png" class="r-arrow"></image>
		</view>
		<!--地址选择器-->
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor="#007AFF"></simple-address>
	</view>
</template>

<script>
	import simpleAddress from '@/components/simple-address/simple-address.nvue'
	export default {
		components: {
			simpleAddress
		},
		data() {
			return {
				info: {
					city: '请选择城市',
					idCard: ''
				},
				cityPickerValueDefault: [],
				pickerText: ''
			}
		},
		mounted () {
			
		},
		methods: {
			openAddres2 () {
				var index = this.$refs.simpleAddress.queryIndex(['安徽省','六安市','金安区'], 'label')
				this.cityPickerValueDefault = index.index
				this.$refs.simpleAddress.open()
			},
			onConfirm(e) {
				this.pickerText = JSON.stringify(e)
				this.info.city = e.label
			}
		}
	}
</script>

<style lang="scss">
	.base-list {
		display: flex;
		height: 40px;
		line-height: 40px;
		background-color: #fff;
		padding: 0 10px;
		color: #444;
		font-size: 14px;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ddd;
		.r-arrow {
			width: 22px;
			height: 22px;
		}
		.base-list-inner {
			display: flex;
			align-items: center;
			width: 90%;
			.info-input {
				font-size: 14px;
				width: 70%;
			}
		}
		
	}
	.info-title {
		height: 40px;
		line-height: 40px;
		color: #777;
		font-size: 14px;
		padding: 0 10px
	}
</style>
