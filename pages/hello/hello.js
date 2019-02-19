const texts = [
	'3年前，QQ好友出现添加好友申请',
	'3年前，包玉刚图书馆第一次看见你',
	'3年前，在Apple Store，店员礼貌问是刷卡么，而我拿出一万三千元的港币，暴露是进城的乡下人',
	'3年前，第一次吃那么好吃的牛肉拌饭',
	'3年前，用了两个月的MacBook Pro',
	'去了八九次的牛一',
	'记一次因手机而失联',
	'毕业啦',
	'学会游泳',
	'工作啦',
	'会吹水摸鱼了',
	'......'
]
const app = getApp()

Page({
	onShareAppMessage() {
		return {
			title: 'text',
			path: 'page/component/pages/text/text'
		}
	},

	data: {
		text: '',
		canAdd: true,
		canRemove: false,

		userInfo: app
	},
	extraLine: [],

	onLoad: function () {
		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		}
	}, 

	add() {
		this.extraLine.push(texts[this.extraLine.length % 12])
		this.setData({
			text: this.extraLine.join('\n'),
			canAdd: this.extraLine.length < 12,
			canRemove: this.extraLine.length > 0
		})
		setTimeout(() => {
			this.setData({
				scrollTop: 99999
			})
		}, 0)
	},
	remove() {
		if (this.extraLine.length > 0) {
			this.extraLine.pop()
			this.setData({
				text: this.extraLine.join('\n'),
				canAdd: this.extraLine.length < 12,
				canRemove: this.extraLine.length > 0,
			})
		}
		setTimeout(() => {
			this.setData({
				scrollTop: 99999
			})
		}, 0)
	}
})