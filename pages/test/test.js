Page({
	data: {},
	onLoad() {
		console.log('test onload')
	},
	onShow() {
		console.log('test onshow')
	},
	onReady() {
		console.log('test onread')
	},
	onHide() {
		console.log('test onhide')
	},
	onUnload() {
		console.log('test onUnload')
	},
	onPullDownRefresh() {
		console.log('test on pull down refresh')
	},
	onReachBottom() {
		console.log('test on reach bottom')
	},
	onPageScroll(top) {
		console.log('test top: ', top)
	},
	onTabItemTap(item) {
		cosnole.log('test tap')
		console.log(item.index)
		console.log(item.pagePath)
		console.log(item.text)
	}
})