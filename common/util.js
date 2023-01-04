export default {
	showToast(title) {
		uni.showToast({
			icon: 'none',
			title: title,
			position:'bottom'
		})
	},
	copyTxt(txt) { //传入要复制的内容
		txt += "";
		if (txt == "null" || txt == "undefined" || txt == "") {
			return;
		}
		// #ifdef APP-PLUS
		uni.setClipboardData({
			data: txt,
		});
		// #endif

		// #ifdef H5
		if (document.queryCommandSupported('copy')) {
			let textarea = document.createElement("textarea")
			textarea.value = txt
			textarea.readOnly = "readOnly"
			document.body.appendChild(textarea)
			textarea.select() // 选中文本内容
			textarea.setSelectionRange(0, txt.length)
			let result = document.execCommand("copy")
			textarea.remove()
		}
		// #endif  
	}
}
