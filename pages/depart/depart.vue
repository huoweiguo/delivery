<template>
	<view class="content">
		<ul class="depat-list">
			<li>
				<h2>4115145151</h2>
				<ul class="depat-odd">
					<li>
						<img src="/static/images/icon-sign.png" mode="widthFix"/>
						<span>送达时间：<i>115415154</i></span>
					</li>
					<li>
						<img src="/static/images/icon-sign.png" mode="widthFix"/>
						<span>联系电话：<i class="depat-tel">115415154</i></span>
					</li>
					<li>
						<img src="/static/images/icon-sign.png" mode="widthFix"/>
						<span>配送地址：<i>115415154</i></span>
					</li>
					<li>
						<img src="/static/images/icon-sign.png" mode="widthFix"/>
						<span>送达时间：<i>写试卷戏剧性减哈V型就行AV回家</i></span>
					</li>
					<li>
						<img src="/static/images/icon-sign.png" mode="widthFix"/>
						<span>商品销售：<i>按需下部</i><i class="depat-tel">115415154</i></span>
					</li>
				</ul>
			</li>
		</ul>
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
	.depat-list{
		overflow: hidden;
		background-color: #f4f4f4;
		&>li{
			width: 94%;
			background-color: #fff;
			margin: 20px 3%;
			border: 1px solid #f1f1f1;
			padding: 0 0 13px 16px;
			h2{
				line-height: 40px;
				font-size: 16px;
				font-weight:bold;
			}
			.depat-odd{
				&>li{
					&>img{
						width: 11px;
						height: 12px;
					}
					&>span{
						line-height: 20px;
						margin-left: 7px;
						font-size: 14px;
						color: #adadad;
						&>i{
							display: inline-block;
							color: #666666;
						}
						>.depat-tel{
							display: inline-block;
							color: #55aff8;
						}
					}
				}
			}
		}
	}
</style>
