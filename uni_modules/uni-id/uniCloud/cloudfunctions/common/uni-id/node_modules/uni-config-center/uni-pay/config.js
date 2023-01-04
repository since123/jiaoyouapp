const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	"notifyUrl": {
		// 本地开发环境
		"你的本地开发环境服务空间ID": "你的本地开发环境异步通知云函数url化地址",
		// 线上正式环境
		"a3615b01-3c0a-46cd-99c4-d1f3ddfc77d9": "https://a3615b01-3c0a-46cd-99c4-d1f3ddfc77d9.bspapp.com/http/vk-pay"
	},
	// 是否将支付宝APP支付转H5支付 开启后无需再申请APP支付(共用当面付API)
	"alipayAppPayToH5Pay": false,
	// 微信 - 小程序支付
	"wxConfigMp": {
		"appId": "wxe0096ff732d4aafb",
		"secret": "7e7370aac986148d7cb6af0d0f76799b",
		"mchId": "1615318269",
		"key": "bin19960907777777777777777777777",
		"pfx": fs.readFileSync(__dirname + '/wxpay/wxpay.p12')
	},
	// 微信 - APP支付
	"wxConfigApp": {
		"appId": "",
		"mchId": "",
		"key": "",
		"pfx": fs.readFileSync(__dirname + '/wxpay/wxpay.p12')
	},
	// 微信 - H5网站支付
	"wxConfigH5": {
		"appId": "",
		"secret": "",
		"mchId": "1615318269",
		"key": "bin19960907777777777777777777777",
		"pfx": fs.readFileSync(__dirname + '/wxpay/wxpay.p12')
	},
	// 微信 - 公众号支付
	"wxConfigH5Weixin": {
		"appId": "wx3e4663dd0fc812b2",
		"secret": "53e9760cc532dd347651862d94c0142d",
		"mchId": "1615318269",
		"key": "bin19960907777777777777777777777",
		"pfx": fs.readFileSync(__dirname + '/wxpay/wxpay.p12')
	},
	// 支付宝 - 小程序支付 支付宝证书记得选java版本
	"aliConfigMp": {
		"mchId": "2088041849863360",
		"appId": "2021002152647124",
		"privateKey": "",
		"alipayRootCertPath": path.join(__dirname, 'alipay/alipayRootCert.crt'),
		"appCertPath": path.join(__dirname, 'alipay/appCertPublicKey.crt'),
		"alipayPublicCertPath": path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'),
		"sandbox": false
	},
	// 支付宝 - APP支付
	"aliConfigApp": {
		"mchId": "2088041849863360",
		"appId": "2021002152647124",
		"privateKey": "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCGJwNmr8j6D3mOUXDo/F8t9gg8zVcRP/WMxK/HYJ+y/GBv4kSz2bu8BPmgCljMMPzVj7vk5ZTMTW8uobJt35oAebckIv4LKCN++K2ZXayZ79wUnsvOmOnf8YkxNnvSBbDiFur09t6aL6JUrbNHzNrxJJ+2x1Wjoq6aR/pZi3b8kX/AGVgH1MLxsfTrf4evGDupXmKulJeQ3AA1DUxefctfHxI/BkTv1gm4lxp7krHCqTkixOHeeqsF7h0NHyROsZP8dsNKgO4GViRpN2OIRPM00a/TvMwA3FywROZwIWEoY9eNBqaZgFhdDSlPvjXh+PEjEQFph1fQqWcpYCJ/Ih1BAgMBAAECggEAFWrfGSLRZFLaJkWMUDYSgAT6lbJ2xxM+AaZZJeygMnQmdVZbf5cwaLkmnU1pldfwVawn5Ehe9CscqAY6tV3weUj1WziW9HMJD7lmBck1yDHKIiSkByzUkeM+8vNu2z37Wm0sP8W2DkmykfBVYg4rmjotoYG7g29yjsEVD/y7F2Fq34tZKPAR1HfGbvSY1ib0rt3J6uvFLpDpTQpUTvWxa6PH3lX1jIjHNxQminRSf1wk48qkFdc9EeKxnm4JXTSgYzU1gnX77Dfq9oX0BITtkpn2Z1DPu0NRd4R5Es+z7Ce4Vwoo5gsoCv0V9Nq2ORLa/K99YCXPX38LaIMZ4j1AAQKBgQDkB94Afr+vgYk8IvFfSDAxn1qhUlAo1wxsqGRvy3pwtAmShQKndYnM4Z/zh8p0NCqBij3G7XehrOn7XdWKW0kOejTY1H4ry66QQkZa/L/8J7ttlhJGuYnTJ8qV4NnxXpJN+NQV+oOyK/wGfcibpGU95tTSoACj5A6F96uq1Ek+QQKBgQCWm2Es6BtxbYa6Ir2UjZHSKROQ/vUItsZOetUELfayAgkOovIfupbq5xSSLVUTHSW5VaVfx8CV+2LU51moKQphvesWuuw3Dg4K9DLcfhaXZWA5DxNJswBPR+LMrLfxd8OtSEnC5WbutXSlNQj6hitMF8qz2TrEucbGrr6Dho8fAQKBgQDLRzQh7twEog5r/J5+GUVVR0Cs5UsuTR73UlpOyu74v5Z09nv6Oq7AZTaJC7lwQ/zMhCc0SgdGqnXfrrOpZl1HOawYy706X5XbZil//SdMq0LLm2fpgocaJLPVTqAbKvpz5elzOmLil5FRXBpUnYXfXALHTPmlIK3NwY9Yd2xfwQKBgBFMt9TYtI5K7nbjFrPBr0ZcwYqePrdJh23sXhuky/mWkkPEI9vRKxTAhnRkEKmpZ3Pqipx97XlM7wVVrc7LKA4iKqbpwchxLNvFQTJiqWWql2r2eFi23wo8T6kDDf4Gq8tzykVA5Jn27fcsKGPelYqgEQCnq0B9tn+MAwZIppgBAoGBAJ3W76JdfIbvQBvzmNDOyiM8t7UvExu6LmHHjIpKOHLslgpwte8Xr7CQijd8bhXp3KHDrfKZ9i/JHfSYU/+w+vFnPiQyfzi1OCplDuG+kHIGOsSHG+zuuzjBtZaV/99Fpgg+vl5T3Whjsq3isnURUVSJLZL7Hs+cEyt5piLwW5O6",
		"alipayRootCertPath": path.join(__dirname, 'alipay/alipayRootCert.crt'),
		"appCertPath": path.join(__dirname, 'alipay/appCertPublicKey.crt'),
		"alipayPublicCertPath": path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'),
		"sandbox": false
	},
	// 支付宝 - H5支付
	"aliConfigH5": {
		"mchId": "2088041849863360",
		"appId": "2021002152647124",
		"privateKey": "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCGJwNmr8j6D3mOUXDo/F8t9gg8zVcRP/WMxK/HYJ+y/GBv4kSz2bu8BPmgCljMMPzVj7vk5ZTMTW8uobJt35oAebckIv4LKCN++K2ZXayZ79wUnsvOmOnf8YkxNnvSBbDiFur09t6aL6JUrbNHzNrxJJ+2x1Wjoq6aR/pZi3b8kX/AGVgH1MLxsfTrf4evGDupXmKulJeQ3AA1DUxefctfHxI/BkTv1gm4lxp7krHCqTkixOHeeqsF7h0NHyROsZP8dsNKgO4GViRpN2OIRPM00a/TvMwA3FywROZwIWEoY9eNBqaZgFhdDSlPvjXh+PEjEQFph1fQqWcpYCJ/Ih1BAgMBAAECggEAFWrfGSLRZFLaJkWMUDYSgAT6lbJ2xxM+AaZZJeygMnQmdVZbf5cwaLkmnU1pldfwVawn5Ehe9CscqAY6tV3weUj1WziW9HMJD7lmBck1yDHKIiSkByzUkeM+8vNu2z37Wm0sP8W2DkmykfBVYg4rmjotoYG7g29yjsEVD/y7F2Fq34tZKPAR1HfGbvSY1ib0rt3J6uvFLpDpTQpUTvWxa6PH3lX1jIjHNxQminRSf1wk48qkFdc9EeKxnm4JXTSgYzU1gnX77Dfq9oX0BITtkpn2Z1DPu0NRd4R5Es+z7Ce4Vwoo5gsoCv0V9Nq2ORLa/K99YCXPX38LaIMZ4j1AAQKBgQDkB94Afr+vgYk8IvFfSDAxn1qhUlAo1wxsqGRvy3pwtAmShQKndYnM4Z/zh8p0NCqBij3G7XehrOn7XdWKW0kOejTY1H4ry66QQkZa/L/8J7ttlhJGuYnTJ8qV4NnxXpJN+NQV+oOyK/wGfcibpGU95tTSoACj5A6F96uq1Ek+QQKBgQCWm2Es6BtxbYa6Ir2UjZHSKROQ/vUItsZOetUELfayAgkOovIfupbq5xSSLVUTHSW5VaVfx8CV+2LU51moKQphvesWuuw3Dg4K9DLcfhaXZWA5DxNJswBPR+LMrLfxd8OtSEnC5WbutXSlNQj6hitMF8qz2TrEucbGrr6Dho8fAQKBgQDLRzQh7twEog5r/J5+GUVVR0Cs5UsuTR73UlpOyu74v5Z09nv6Oq7AZTaJC7lwQ/zMhCc0SgdGqnXfrrOpZl1HOawYy706X5XbZil//SdMq0LLm2fpgocaJLPVTqAbKvpz5elzOmLil5FRXBpUnYXfXALHTPmlIK3NwY9Yd2xfwQKBgBFMt9TYtI5K7nbjFrPBr0ZcwYqePrdJh23sXhuky/mWkkPEI9vRKxTAhnRkEKmpZ3Pqipx97XlM7wVVrc7LKA4iKqbpwchxLNvFQTJiqWWql2r2eFi23wo8T6kDDf4Gq8tzykVA5Jn27fcsKGPelYqgEQCnq0B9tn+MAwZIppgBAoGBAJ3W76JdfIbvQBvzmNDOyiM8t7UvExu6LmHHjIpKOHLslgpwte8Xr7CQijd8bhXp3KHDrfKZ9i/JHfSYU/+w+vFnPiQyfzi1OCplDuG+kHIGOsSHG+zuuzjBtZaV/99Fpgg+vl5T3Whjsq3isnURUVSJLZL7Hs+cEyt5piLwW5O6",
		"alipayRootCertPath": path.join(__dirname, 'alipay/alipayRootCert.crt'),
		"appCertPath": path.join(__dirname, 'alipay/appCertPublicKey.crt'),
		"alipayPublicCertPath": path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'),
		"sandbox": false
	},
	// 支付宝 - 转账到支付宝等资金转出接口
	"aliConfigTransfer": {
		"mchId": "2088041849863360",
		"appId": "2021002152647124",
		"privateKey": "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCGJwNmr8j6D3mOUXDo/F8t9gg8zVcRP/WMxK/HYJ+y/GBv4kSz2bu8BPmgCljMMPzVj7vk5ZTMTW8uobJt35oAebckIv4LKCN++K2ZXayZ79wUnsvOmOnf8YkxNnvSBbDiFur09t6aL6JUrbNHzNrxJJ+2x1Wjoq6aR/pZi3b8kX/AGVgH1MLxsfTrf4evGDupXmKulJeQ3AA1DUxefctfHxI/BkTv1gm4lxp7krHCqTkixOHeeqsF7h0NHyROsZP8dsNKgO4GViRpN2OIRPM00a/TvMwA3FywROZwIWEoY9eNBqaZgFhdDSlPvjXh+PEjEQFph1fQqWcpYCJ/Ih1BAgMBAAECggEAFWrfGSLRZFLaJkWMUDYSgAT6lbJ2xxM+AaZZJeygMnQmdVZbf5cwaLkmnU1pldfwVawn5Ehe9CscqAY6tV3weUj1WziW9HMJD7lmBck1yDHKIiSkByzUkeM+8vNu2z37Wm0sP8W2DkmykfBVYg4rmjotoYG7g29yjsEVD/y7F2Fq34tZKPAR1HfGbvSY1ib0rt3J6uvFLpDpTQpUTvWxa6PH3lX1jIjHNxQminRSf1wk48qkFdc9EeKxnm4JXTSgYzU1gnX77Dfq9oX0BITtkpn2Z1DPu0NRd4R5Es+z7Ce4Vwoo5gsoCv0V9Nq2ORLa/K99YCXPX38LaIMZ4j1AAQKBgQDkB94Afr+vgYk8IvFfSDAxn1qhUlAo1wxsqGRvy3pwtAmShQKndYnM4Z/zh8p0NCqBij3G7XehrOn7XdWKW0kOejTY1H4ry66QQkZa/L/8J7ttlhJGuYnTJ8qV4NnxXpJN+NQV+oOyK/wGfcibpGU95tTSoACj5A6F96uq1Ek+QQKBgQCWm2Es6BtxbYa6Ir2UjZHSKROQ/vUItsZOetUELfayAgkOovIfupbq5xSSLVUTHSW5VaVfx8CV+2LU51moKQphvesWuuw3Dg4K9DLcfhaXZWA5DxNJswBPR+LMrLfxd8OtSEnC5WbutXSlNQj6hitMF8qz2TrEucbGrr6Dho8fAQKBgQDLRzQh7twEog5r/J5+GUVVR0Cs5UsuTR73UlpOyu74v5Z09nv6Oq7AZTaJC7lwQ/zMhCc0SgdGqnXfrrOpZl1HOawYy706X5XbZil//SdMq0LLm2fpgocaJLPVTqAbKvpz5elzOmLil5FRXBpUnYXfXALHTPmlIK3NwY9Yd2xfwQKBgBFMt9TYtI5K7nbjFrPBr0ZcwYqePrdJh23sXhuky/mWkkPEI9vRKxTAhnRkEKmpZ3Pqipx97XlM7wVVrc7LKA4iKqbpwchxLNvFQTJiqWWql2r2eFi23wo8T6kDDf4Gq8tzykVA5Jn27fcsKGPelYqgEQCnq0B9tn+MAwZIppgBAoGBAJ3W76JdfIbvQBvzmNDOyiM8t7UvExu6LmHHjIpKOHLslgpwte8Xr7CQijd8bhXp3KHDrfKZ9i/JHfSYU/+w+vFnPiQyfzi1OCplDuG+kHIGOsSHG+zuuzjBtZaV/99Fpgg+vl5T3Whjsq3isnURUVSJLZL7Hs+cEyt5piLwW5O6",
		"appCertSn": "c15750e0a6d44c9de600738b028c0108",
		"alipayRootCertSn": "687b59193f3f462dd5336e5abf83c5d8_02941eef3187dddf3d3b83462e1dfcf6",
		"sandbox": false
	}
}
