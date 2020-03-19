<template>
	<view class="pages-content">
		<view class="base-list" @click="openAddres2">
			<view><text class="base-label">工作城市：</text> {{info.city}}</view>
			<image src="/static/images/right.png" class="r-arrow"></image>
		</view>
		<text class="info-title">个人信息</text>
		<view class="base-list">
			<view class="base-list-inner"><text class="base-label">身份证号：</text> <input type="text" class="info-input" placeholder="请输入身份证号码" v-model="info.idCard"/></view>
		</view>
		<view class="base-list">
			<view class="base-list-inner"><text class="base-label">姓名：</text> <input type="text" class="info-input" placeholder="请输入姓名" v-model="info.name"/></view>
		</view>
		<view class="base-list" @click="$refs.popup.open()">
			<view><text class="base-label">性别：</text> {{info.sex}}</view>
			<image src="/static/images/right.png" class="r-arrow"></image>
		</view>
		<view class="base-list">
			<view class="base-list-inner">
				<text class="base-label">出生日期：</text>
				<picker mode="date" :value="info.date" @change="bindDateChange">
					<view class="uni-input">{{info.date}}</view>
				</picker>
			</view>
			
			<image src="/static/images/right.png" class="r-arrow"></image>
		</view>
		<view class="base-list">
			<view class="base-list-inner">
				<text class="base-label">籍贯：</text> 
				<input type="text" class="info-input" placeholder="请输入所在省份市区" v-model="info.nativePlace"/>
			</view>
		</view>
		<view class="base-list">
			<view class="base-list-inner">
				<text class="base-label">地址：</text> 
				<input type="text" class="info-input" placeholder="请输入地址" v-model="info.address"/>
			</view>
		</view>
		<text class="info-title">紧急联系人</text>
		<view class="base-list">
			<view class="base-list-inner">
				<text class="base-label">姓名：</text> 
				<input type="text" class="info-input" placeholder="请输入紧急联系人姓名" v-model="info.ename"/>
			</view>
		</view>
		<view class="base-list">
			<view class="base-list-inner">
				<text class="base-label">电话：</text> 
				<input type="text" class="info-input" placeholder="请输入电话" v-model="info.phone"/>
			</view>
		</view>
		<text class="info-title">上传照片</text>
		<view class="info-upload">
			<view class="info-upload-dec">请上传亲戚完整的照片</view>
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
		<!--地址选择器-->
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor="#007AFF"></simple-address>
		<!--性别选择-->
		<uni-popup ref="popup" type="bottom">
			<div class="popup-box">
				<view class="popup-btn" @click="selectSex(1)">男</view>
				<view class="popup-btn" @click="selectSex(2)">女</view>
			</div>
		</uni-popup>
	</view>
</template>

<script>
	import simpleAddress from '@/components/simple-address/simple-address.nvue'
	import { uniPopup } from '@dcloudio/uni-ui'
	import ckUploadImg from '@/components/ck-uploadImg/ck-uploadImg.vue'
	export default {
		components: {
			simpleAddress, uniPopup, ckUploadImg
		},
		data() {
			return {
				info: {
					city: '请选择城市',
					idCard: '',
					sex: '男',
					name: '',
					date: '请选择出生日期',
					nativePlace: '',
					address: '',
					ename: '',
					phone: '',
					idCardImgFront: '',
					idCardImgBack: ''
				},
				cityPickerValueDefault: [],
				pickerText: '',
				getImgUrlFront: '',
				urlsFront: [],
				getImgUrlBack: '',
				urlsBack: [],
				nums: 1
			}
		},
		mounted () {
			
		},
		methods: {
			bindDateChange: function(e) {
				this.info.date = e.target.value
			},
			openAddres2 () {
				var index = this.$refs.simpleAddress.queryIndex(['安徽省','六安市','金安区'], 'label')
				this.cityPickerValueDefault = index.index
				this.$refs.simpleAddress.open()
			},
			onConfirm(e) {
				this.pickerText = JSON.stringify(e)
				this.info.city = e.label
			},
			selectSex (status) {
				this.info.sex = status === 1 ? '男' : '女'
				this.$refs.popup.close()
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
		.base-label {
			display: inline-block;
			width: 80px;
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
