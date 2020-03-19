<template>
	<view class="pages-content">
		<view class="base-list">
			<view class="base-list-inner"><text class="base-label">车辆型号：</text> <input type="text" class="info-input" placeholder="请输入车辆型号" v-model="info.carId"/></view>
		</view>
		<view class="base-list">
			<view class="base-list-inner"><text class="base-label">车牌号码：</text> <input type="text" class="info-input" placeholder="请输入车牌号码" v-model="info.carNumber"/></view>
		</view>
		<view class="base-list">
			<view class="base-list-inner"><text class="base-label">车牌所有人：</text> <input type="text" class="info-input" placeholder="请输入车辆所有人" v-model="info.byName"/></view>
		</view>
		<view class="base-list">
			<view class="base-list-inner">
				<text class="base-label">注册日期：</text>
				<picker mode="date" :value="info.regDate" data-name='regDate' @change="bindDateChange">
					<view class="uni-input">{{info.regDate}}</view>
				</picker>
			</view>
			
			<image src="/static/images/right.png" class="r-arrow"></image>
		</view>
		<view class="base-list">
			<view class="base-list-inner">
				<text class="base-label">下次车检日：</text>
				<picker mode="date" :value="info.chkDate" data-name='chkDate' @change="bindDateChange">
					<view class="uni-input">{{info.chkDate}}</view>
				</picker>
			</view>
			
			<image src="/static/images/right.png" class="r-arrow"></image>
		</view>
		<text class="info-title">上传照片</text>
		<view class="info-upload">
			<view class="info-upload-dec">请上传清晰完整的照片</view>
			<view class="info-camera">
				<view class="front-back">
					<!--img uploads-->
					<text>身份证正面</text>
				</view>
				<view class="front-back">
					<!--img uploads-->
					<text>身份证反面</text>
				</view>
			</view>
		</view>
		<button class="info-btn2">保存</button>
	</view>
</template>

<script>
	import { uniPopup } from '@dcloudio/uni-ui'
	import ckUploadImg from '@/components/ck-uploadImg/ck-uploadImg.vue'
	import { addZero } from '@/util/tools.js'
	export default {
		components: {
			uniPopup, ckUploadImg
		},
		data() {
			return {
				info: {
					carId: '',
					carNumber: '',
					byName: '',
					regDate: '',
					chkDate: ''
				},
			}
		},
		mounted () {
			let d = new Date(),
				dateStr = `${d.getFullYear()}-${addZero(d.getMonth()+1)}-${addZero(d.getDate())}`
			this.info.regDate = dateStr
			this.info.chkDate = dateStr
		},
		methods: {
			bindDateChange (e) {
				switch (e.target.dataset.name) {
					case 'regDate':
						this.info.regDate = e.target.value
						break
					case 'chkDate':
						this.info.chkDate = e.target.value
						break
				}
			}
		}
	}
</script>

<style lang="scss">
	.pages-content {
		padding-top: 10px;
	}
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
		.base-label {
			display: inline-block;
			width: 100px;
		}
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
	.info-upload {
		padding: 10px;
		background-color: #fff;
		margin-bottom: 20px;
		.info-upload-dec {
			color: red;
			font-size: 14px;
			margin-bottom: 10px;
		}
		.info-camera {
			display: flex;
			justify-content: space-between;
			.front-back {
				text {
					display: block;
					text-align: center;
					font-size: 16px;
					color: #666;
				}
			}
		}
	}
	.info-btn2 {
		height: 35px;
		background-color: #e4ad5f;
		color: #fff;
		font-size: 16px;
		margin-bottom: 20px;
		border-radius: 0;
	}
</style>
