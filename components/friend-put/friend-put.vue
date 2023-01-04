<template>
	<view class="sex-block flex-column">
		<view class="remark-li">
			可选择所在城市，更精准的结识近距离好友！
		</view>
		<view class="li flex-row-left">
			<u-icon name="map-fill" color="#000000"></u-icon>
			<text v-if="addrName" class="text2" @click="addrShow = true">{{ addrName }}</text>
			<text v-else class="text1"  @click="addrShow = true">请选择地址</text>
		</view>
		<view class="li flex-row-left">
			<u-icon name="tags-fill" color="#000000"></u-icon>
			<input style="font-size: 25rpx; margin-left: 20rpx;" type="text" value="" v-model="paperContent" placeholder="请输入纸条内容"/>
		</view>
		<view class="btn flex-row-center" @click="toPay">
			立即投入纸条 ￥1.0
		</view>
		<view class="remark flex-row-center">
			投的越多，被抽到的概率越大！
		</view>
		<view class="back-btn flex-row">
			<view @click="$emit('changenav', 0)">返回上一步</view>
		</view>
		<u-picker mode="region" v-model="addrShow" :area-code='initAddr' @confirm="getAddrCode"></u-picker>
		<vk-uni-pay ref="vkPay" :query-payment-action="vkPay.queryPaymentAction" :status.sync="vkPay.status"
			:code-url.sync="vkPay.codeUrl" :page-show="vkPay.pageShow" :polling="vkPay.polling"></vk-uni-pay>
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
			}
		},
		data() {
			return {
				vkPay: {
					queryPaymentAction: {
						name: "vk-pay", // 云函数名称
						action: "pay/queryPayment", // 路由模式下云函数地址
						actionKey: "action", // 路由模式下云函数地址的识别key
						dataKey: "data" // 路由模式下云函数请求参数的识别key
					},
					codeUrl: "",
					status: 0,
					pageShow: true,
					polling: true,
					returnUrl: "",
					confirmShow: false
				},
				form1: {
				  openid: ""
				},
				out_trade_no:'',
				alipayAppPayToH5Pay:false,
				noClick: true,
				sexIndex: 1,
				addrShow: false,
				addrName: '',
				addrCode: '',
				initAddr: [],
				paperContent: '',
			}
		},
		mounted() {
			this.sexIndex = this.sex
		},
		methods: {
			getAddrCode(addr) {
				var addrName = addr.province.label + addr.city.label + addr.area.label
				this.addrName = addrName
				this.addrCode = addr.area.value
				this.initAddr = [addr.province.value, addr.city.value, addr.area.value]
			},
			// 支付
			async toPay() {
				if (!this.noClick) {
					this.$showToast('请勿频繁点击')
					return
				}
				this.noClick = false;
				if (!this.addrName) {
					this.noClick = true;
					this.$showToast('地址不能为空')
					return 
				}
				if (!this.paperContent) {
					this.noClick = true;
					this.$showToast('微信不能为空')
					return 
				}
				this.out_trade_no = "text_" + new Date().getTime();
				let ua = navigator.userAgent.toLowerCase();
				// 支付方式
				let provider
				if (ua.match(/MicroMessenger/i) == "micromessenger") {
					provider = "wxpay";
				} else {
					// #ifdef MP-WEIXIN
					provider = "wxpay";
					// #endif
					// #ifndef MP-WEIXIN
					provider = "alipay";
					// #endif
				}
				// 是否h5
				// #ifdef H5
				this.alipayAppPayToH5Pay = true
				// #endif
				let data = {
					provider: provider,
					total_fee: 100,
					out_trade_no: this.out_trade_no,
					subject: "放纸条",
					body: "放纸条",
					type: "recharge",
					openid:this.form1.openid,
					alipayAppPayToH5Pay: this.alipayAppPayToH5Pay,
				}
				console.log(data)
				this.$refs.vkPay.createPayment({
					action: {
						name: "vk-pay",
						action: "pay/createPayment",
						actionKey: "action",
						dataKey: "data"
					},
					// 请求数据
					data: data,
					// 成功回调
					success: (res) => {
						console.log("paySuccess", res);
						console.log(this.vkPay.status)
						this.$showToast('支付成功')
						this.toPayFree()
					},
					// 失败回调
					fail:(e) => {
						this.noClick = true;
						this.$showToast(e.message)
					}
				});
			},
			async toPayFree() {
				uni.showLoading({
					title: '投入中...',
					mask: true
				});
				try{
					await db.collection('paper').add({
						address:this.addrName,
						addcode:this.addrCode,
						status:this.sexIndex,
						wx:this.paperContent
					})
					uni.hideLoading();
					this.$showToast('投入成功')
					this.noClick = true;
				}catch(e){
					this.$showToast(e.message)
					uni.hideLoading();
					this.noClick = true;
				}
			},
			putMsg(){
				this.$emit("putmsg", {
					navIndex: 3,
					sexIndex: me.sexIndex
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.sex-block {
		padding: 30rpx 0rpx;
		padding-top: 140rpx;
		.remark-li {
			color: $minor-text-color;
			font-size: 24rpx;
			margin-bottom: 10rpx;
		}

		.li {
			width: 90%;
			background-color: #f2edfc;
			border-radius: 200rpx;
			padding: 30rpx;
			margin-top: 30rpx;
			.text1 {
				width: 90%;
				margin-left: 20rpx;
				font-size: 25rpx;
				color: $minor-text-color;
			}
			.text2 {
				font-size: 25rpx;
				width: 90%;
			}
		}

		.btn {
			width: 90%;
			margin-top: 50rpx;
			background-color: #FFD800;
			padding: 30rpx;
			border-radius: 200rpx;
			font-weight: bold;
		}

		.remark {
			color: $minor-text-color;
			font-size: 24rpx;
			margin-top: 20rpx;
		}

		.back-btn {
			width: 100%;
			color: $minor-text-color;
			font-size: 24rpx;
			margin-top: 30rpx;
			text-decoration: underline;
			justify-content: space-around;
			.right{
				color: $main-text-color;
			}
		}
	}
</style>
