'use strict';
const token = 'yezhenxu';
const crypto = require('crypto')
exports.main = async (event, context) => {
	// "queryStringParameters": {
	//      "signature": "73ead93cb31858f3582c81a1ea170acc4fe2dec5",
	//      "echostr": "15358216476088255",
	//      "timestamp": "1634784063",
	//      "nonce": "331401642"
	//    },
	let params = event.queryStringParameters
	//event为客户端上传的参数
	console.log('event : ', event)
	var key = [token, params.timestamp, params.nonce].sort().join('');
	//将token （自己设置的） 、timestamp（时间戳）、nonce（随机数）三个参数进行字典排序
	var sha1 = crypto.createHash('sha1');
	//将上面三个字符串拼接成一个字符串再进行sha1加密
	sha1.update(key);
	let ispass = sha1.digest('hex') == params.signature
	if (ispass) {
		return params.echostr
	}
	//将加密后的字符串与signature进行对比，若成功，返回echostr
	return params.echostr
};
