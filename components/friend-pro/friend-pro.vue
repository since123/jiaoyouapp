<template>
	<view class="sex-block">
		<view class="flex-column" @click="checkSex(2)">
			<image src="../../static/txn.jpeg" style="border-radius: 100%;" mode="widthFix"></image>
			<text>高富帅</text>
			<text class="num">共{{ numMan }}张纸条</text>
		</view>
		<view class="flex-column" @click="checkSex(1)">
			<image src="../../static/txw.jpeg" style="border-radius: 100%;" mode="widthFix"></image>
			<text>白富美</text>
			<text class="num">共{{ numWoman }}张纸条</text>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database();
	const uid = db.getCloudEnv('$cloudEnv_uid');
	export default {
		data() {
			return {
				numMan: 0,
				numWoman: 0
			}
		},
		mounted() {
			this.getManNums();
			this.getWomanNums();
		},
		methods: {
			// 获取女纸条
			async getManNums(){
				let res = await db.collection('paper').where({
					status:1
				}).count()
				console.log(res)
				this.numWoman = res.result.total || 0
			},
			// 获取男纸条
			async getWomanNums(){
				let res = await db.collection('paper').where({
					status:2
				}).count()
				console.log(res)
				this.numMan = res.result.total || 0
			},
			checkSex(sex){
				this.$emit('sexchange', sex);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.sex-block{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 150rpx 0rpx;
		padding-bottom: 70rpx;
		image{
			margin: 30rpx 40rpx;
			width: 150rpx;
		}
		text{
			margin-top: 20rpx;
		}
		.num{
			font-size: 25rpx;
			color: $minor-text-color;
		}
	}
	
</style>
