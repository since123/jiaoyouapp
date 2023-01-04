<template>
	<view style="width: 100%;" class="flex-row-center">
		<image class="bg-image" src="../../static/bg1.png" mode="aspectFill"></image>
		<view class="flex-column sex-block">
			<view class="title flex-row-center">
				<image class="home-top" src="../../static/home-top.png" mode="widthFix"></image>
				<text class="home-top-text">{{ title[navIndex] }}</text>
			</view>
			<friend-pro v-if="navIndex == 0" @sexchange="checkSex" ></friend-pro>
			<friend-pay v-if="navIndex == 1" :sex="sex" @changenav="navChange" @paysuccess="paySuccess" @putmsg="putMsg"></friend-pay>
			<friend-result v-if="navIndex == 2" :sex="sex" @changenav="navChange" :addrCode="addrCode"></friend-result>
			<friend-put v-if="navIndex == 3" :sex="sex" @changenav="navChange"></friend-put>
		</view>
	</view>
</template>

<script>
	// ----------------------------------------------------------------------------支付使用的的是插件市场的vk-pay，由于他那个是收费的，我没办法放在代码里  按照他的教程进行相关配置支付就能跑起来 
	
	// 由于我懒得申请微信小程序  所以之演示h5,   微信小程序 我测试过 能跑起来  小程序微信支付也可以用
	export default {
		data() {
			return {
				navIndex: 0,
				sex: 0,
				title: ["请选择您的性别", "抽取纸条", "打开纸条", "投入纸条"],
				addrCode: ''
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res)=> { // res - 各种参数
					this.swiperHeight = res.windowHeight - 90
				}
			});
		},
		methods: {
			// 选择类型
			checkSex(sex){
				this.sex = sex
				this.navIndex = 1
			},
			// 改变性别
			navChange(index){
				this.navIndex = index
			},
			// 获取纸条
			paySuccess(item){
				this.navIndex = 2
				this.sex = item.sexIndex
				this.addrCode = item.addrCode
			},
			// 放纸条
			putMsg(item){
				this.navIndex = 3
				this.sex = item.sexIndex
			},
		}
	}
</script>

<style lang="scss" scoped>
	.company{
		position: fixed;
		bottom: 60rpx;
		color: #fff;
		font-size: 22rpx;
	}
	.sex-block{
		width: 80%;
		background-color: #fff;
		border-radius: 30rpx;
		position: relative;
	}
	.title{
		position: absolute;
		top:0;
		right:0;
		left:0;
		display: flex;
		justify-content: center;
		align-items: center;
		.home-top{
			position: relative;
			width: 70%;
			z-index: 9;
		}
		.home-top-text{
			position: absolute;
			top:30rpx;
			z-index: 99;
			font-size: 30rpx;
			font-weight: bold;
		}
	}
	.bg-image {
		position: fixed;
		width: 100%;
		height: 100vh;
		top: 0;
		left: 0;
		z-index: -1;
	}
</style>
