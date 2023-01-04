<template>
	<view class="sex-block flex-column">
		<view class="h1 flex-row-center">恭喜您</view>
		<view class="h2 flex-row-center">抽取到一位有缘人，祝您好运！</view>
		<view class="content" @click="$copyTxt(entity.wx)">{{ entity.wx }}</view>
		<view class="back-block flex-row">
			<view class="back-li" @click="$emit('changenav', 0)">返回首页</view>
			<view class="back-li" @click="$emit('changenav', 0)">再抽一次</view>
		</view>
		<view class="remark flex-column">
			<view class="li1">温馨提示</view>
			<view class="li2">文明礼貌的人和行为总能得到对方的认可，请您文明交友，礼貌待人。</view>
			<view class="li3" @click="jubao">举报</view>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database();
	const uid = db.getCloudEnv('$cloudEnv_uid');
	export default {
		props: {
			sex: {
				type: Number,
				default: 1
			},
			addrCode: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				sexIndex: 1,
				addrCodeStr: '',
				entity: {}
			}
		},
		mounted() {
			this.sexIndex = this.sex
			this.addrCodeStr = this.addrCode || ''
			this.getResultOne();
		},
		methods: {
			async getResultOne() {
				// 判断是否有地址
				let data
				if (this.addrCodeStr) {
					data = {
						addrcode:this.addrCodeStr,
						status: this.sexIndex || 2
					}
				}else{
					data = {
						status: this.sexIndex || 2
					}
				}
				uni.showLoading({
					title: '寻对象中...',
					mask: true
				});
				// 随机查询
				try{
					let res = await db.collection('paper').aggregate().match(data).sample({
						size: 1
					}).end()
					uni.hideLoading();
					if (res.result.data.length>0) {
						this.entity = res.result.data[0]
						this.$copyTxt(this.entity.wx);
					}else{
						// 如果没查到重新查
						let res1 = await db.collection('paper').aggregate().match({
							status: this.sexIndex || 2
						}).sample({
							size: 1
						}).end()
						if(res1.result.data.length>0){
							this.entity = res1.result.data[0]
							this.$copyTxt(this.entity.wx);
						}
					}
				}catch(e){
					this.$showToast(e.message)
				}
			},
			jubao() {
				this.$showToast("收到您的举报，感谢您的监督，审核后会删除该纸条！")
			},
		}
	}
</script>

<style lang="scss" scoped>
	.sex-block {
		padding: 130rpx 30rpx;
		padding-bottom: 50rpx;
		.h1 {
			font-size: 46rpx;
			color: #a517e7;
			font-weight: bold;
		}

		.h2 {
			height: 60rpx;
			font-size: 26rpx;
			font-weight: bold;
		}

		.content {
			background-color: #f2edfc;
			padding: 20rpx 30rpx;
			border-radius: 50rpx;
			margin-top: 50rpx;
			text-align: center;
		}
		.remark {
			margin-top: 50rpx;
			color: $minor-text-color;

			image {
				width: 30rpx;
				margin-bottom: 10rpx;
			}

			.li1 {
				font-size: 32rpx;
			}

			.li2 {
				text-align: center;
				font-size: 22rpx;
				width: 80%;
				margin-top: 10rpx;
			}
		}

		.back-block {
			color: $minor-text-color;
			margin-top: 50rpx;
			width: 100%;
			justify-content: space-around;
			text-decoration: underline;
		}
	}

	.li3 {
		margin-top: 30rpx;
		font-size: 22rpx;
		color: red;
		text-decoration: underline;

	}
</style>
