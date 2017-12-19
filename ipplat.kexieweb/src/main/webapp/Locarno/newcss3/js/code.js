//2016-05-26 14:52:03
var patentLibsCat = {

	"中国" : [ "发明申请", "发明授权", "实用新型", "外观设计", "香港", "澳门", "台湾" ],
	"台湾" : [ "发明申请", "发明授权", "实用新型申请", "实用新型授权", "外观设计","其它" ],
	"香港" : ["发明申请", "发明授权", "外观设计"],
	"法国" : ["发明申请", "发明授权", "实用证书", "外观设计"],
	"澳门" : ["发明申请", "发明授权", "实用新型申请", "实用新型授权", "外观设计申请", "外观设计授权"],
	"美国" : [ "发明申请", "发明授权", "外观设计" ],
	"EPO" : [ "发明申请", "发明授权" ],
	"韩国" : [ "发明申请", "发明授权", "实用新型申请", "实用新型授权", "外观设计" ],
	"日本" : [ "发明申请", "发明授权", "实用新型申请", "实用新型授权", "外观设计","其它" ],
	"德国" : [ "发明申请", "发明授权", "实用新型", "外观设计" ],
	"其他国家和地区" : ["专利"],
	"亚美尼亚" : ["专利"],
	"加拿大" : [ "发明申请", "发明授权", "外观设计" ],
	"俄罗斯" : [ "发明申请", "发明授权", "实用新型", "外观设计" ],
	"英国" : [ "发明申请", "发明授权", "外观设计","其它"],
	"瑞士" : [ "发明申请", "发明授权", "外观设计" ],
	"澳大利亚" : ["发明申请","发明授权", "其它"],
	"WIPO" : [ "国际申请" ],
	"阿根廷" :["专利"],
	"奥地利" : ["专利"],
	"波斯尼亚和黑塞哥维那":["专利"],
	"比利时" : ["专利"],
	"保加利亚" : ["专利"],
	"保加利亚" : ["专利"],
	"巴西" : ["专利"],
	"白俄罗斯" : ["专利"],
	"智利" : ["专利"],
	"哥伦比亚" : ["专利"],
	"哥斯达黎加" : ["专利"],
	"捷克斯洛伐克" : ["专利"],
	"古巴" : ["专利"],
	"塞浦路斯" : ["专利"],
	"捷克共和国" : ["专利"],
	"丹麦" : ["专利"],
	"多米尼加共和国" : ["专利"],
	"阿尔及利亚" : ["专利"],
	"欧亚专利局" : ["专利"],
	"厄瓜多尔" : ["专利"],
	"爱沙尼亚" : ["专利"],
	"埃及" : ["专利"],
	"西班牙" : ["专利"],
	"芬兰" : ["专利"],
	"海湾地区阿拉伯国家合作委员会专利局" : ["专利"],
	"格鲁吉" : ["专利"],
	"希腊" : ["专利"],
	"危地马拉" : ["专利"],
	"洪都拉斯" : ["专利"],
	"克罗地亚" : ["专利"],
	"匈牙利" : ["专利"],
	"印度尼西亚" : ["专利"],
	"爱尔兰" : ["专利"],
	"以色列" : ["专利"],
	"印度" : ["专利"],
	"冰岛" : ["专利"],
	"意大利" : ["专利"],
	"约旦" : ["专利"],
	"肯尼亚" : ["专利"],
	"吉尔吉斯斯坦" : ["专利"],
	"哈萨克斯坦" : ["专利"],
	"立陶宛" : ["专利"],
	"卢森堡" : ["专利"],
	"拉脱维亚" : ["专利"],
	"摩洛哥" : ["专利"],
	"摩纳哥" : ["专利"],
	"摩尔多瓦共和国" : ["专利"],
	"黑山" : ["专利"],
	"蒙古" : ["专利"],
	"马耳他" : ["专利"],
	"马拉维墨西哥" : ["专利"],
	"墨西哥" : ["专利"],
	"马来西亚" : ["专利"],
	"尼加拉瓜" : ["专利"],
	"荷兰" : ["专利"],
	"挪威" : ["专利"],
	"新西兰" : ["专利"],
	"非洲知识产权组织" : ["专利"],
	"巴拿马" : ["专利"],
	"秘鲁" : ["专利"],
	"菲律宾" : ["专利"],
	"波兰" : ["专利"],
	"葡萄牙" : ["专利"],
	"罗马尼亚" : ["专利"],
	"塞尔维亚" : ["专利"],
	"瑞典" : ["专利"],
	"新加坡" : ["专利"],
	"斯洛文尼亚" : ["专利"],
	"斯洛伐克" : ["专利"],
	"圣马力诺" : ["专利"],
	"萨尔瓦多" : ["专利"],
	"泰国" : ["专利"],
	"塔吉克斯坦" : ["专利"],
	"突尼斯" : ["专利"],
	"土耳其" : ["专利"],
	"特立尼达和多巴哥" : ["专利"],
	"乌克兰" : ["专利"],
	"乌拉圭" : ["专利"],
	"乌兹别克斯坦" : ["专利"],
	"越南" : ["专利"],
	"南斯拉夫" : ["专利"],
	"南非" : ["专利"],
	"赞比亚" : ["专利"],
	"津巴布韦" : ["专利"],
	"民主德国": ["专利"],
	"世界知识产权组织" :["国际申请"],
	"比利时" : ["专利"],
	"非洲地区工业产权组织(ARIPO)" : ["专利"]

}

var patentLibrary = {
	"AM%" : "亚美尼亚",
	"AT%" : "奥地利",
	"AR%" : "阿根廷",
	"TW%" : "台湾",
	"HK%" : "香港",
	"MO%" : "澳门",
	"CN%" : "中国",
	"US%" : "美国",
	"EP%" : "EPO",
	"KR%" : "韩国",
	"JP%" : "日本",
	"DE%" : "德国",
	"CA%" : "加拿大",
	"AU%" : "澳大利亚",
	"RU%" : "俄罗斯",
	"GB%" : "英国",
	"CH%" : "瑞士",
	"FR%" : "法国",
	"WO%" : "世界知识产权组织",
	
	/**----------小国专利检索不到问题---------------**/
	"BA%" : "波斯尼亚和黑塞哥维那",
	"BE%" : "比利时",
	"BG%" : "保加利亚",
	"BR%" : "巴西",
	"BY%" : "白俄罗斯",
	"CL%" : "智利",
	"CO%" : "哥伦比亚",
	"CR%" : "哥斯达黎加",
	"CS%" : "捷克斯洛伐克",
	"CU%" : "古巴",
	"CY%" : "塞浦路斯",
	"CZ%" : "捷克共和国",
//	"DD00" : "民主德国专利",
	"DK%" : "丹麦",
	"DO%" : "多米尼加共和国",
	"DZ%" : "阿尔及利亚",
	"EA%" : "欧亚专利局",
	"EC%" : "厄瓜多尔",
	"EE%" : "爱沙利亚",
	"EG%" : "埃及",
	"ES%" : "西班牙",
	"FI%" : "芬兰",
	"GC%" : "海湾地区阿拉伯国家合作委员会专利局",
	"GE%" : "格鲁吉",
	"GR%" : "希腊",
	"GT%" : "危地马拉",
	"HN%" : "洪都拉斯",
	"HR%" : "克罗地亚",
	"HU%" : "匈牙利",
	"ID%" : "印度尼西亚",
	"IE%" : "爱尔兰",
	"IL%" : "以色列",
	"IN%" : "印度",
	"IS%" : "冰岛",
	"IT%" : "意大利",
	"JO%" : "约旦",
	"KE%" : "肯尼亚",
	"KG%" : "吉尔吉斯斯坦",
	"KZ%" : "哈萨克斯坦",
	"LT%" : "立陶宛",
	"LU%" : "卢森堡",
	"LV%" : "拉脱维亚",
	"MA%" : "摩洛哥",
	"MC%" : "摩纳哥",
	"MD%" : "摩尔多瓦共和国",
	"ME%" : "黑山",
	"MN%" : "蒙古",
	"MT%" : "马耳他",
	"MW%" : "马拉维墨西哥",
	"MX%" : "墨西哥",
	"MY%" : "马来西亚",
	"NI%" : "尼加拉瓜",
	"NL%" : "荷兰",
	"NO%" : "挪威",
	"NZ%" : "新西兰",
	"OA%" : "非洲知识产权组织",
	"PA%" : "巴拿马",
	"PE%" : "秘鲁",
	"PH%" : "菲律宾",
	"PL%" : "波兰",
	"PT%" : "葡萄牙",
	"RO%" : "罗马尼亚",
	"RS%" : "塞尔维亚",
	"SE%" : "瑞典",
	"SG%" : "新加坡",
	"SI%" : "斯洛文尼亚",
	"SK%" : "斯洛伐克",
	"SM%" : "圣马力诺",
	"SV%" : "萨尔瓦多",
	"TH%" : "泰国",
	"TJ%" : "塔吉克斯坦",
	"TN%" : "突尼斯",
	"TR%" : "土耳其",
	"TT%" : "特立尼达和多巴哥",
	"UA%" : "乌克兰",
	"UY%" : "乌拉圭",
	"UZ%" : "乌兹别克斯坦",
	"VN%" : "越南",
	"YU%" : "南斯拉夫",
	"ZA%" : "南非",
	"ZM%" : "赞比亚",
	"ZW%" : "津巴布韦",
	"EE%" : "爱沙尼亚",
	"AP%" : "非洲地区工业产权组织(ARIPO)",
	/**----------------------**/
	
	"AM00" : "亚美尼亚专利",
	"AT00" : "奥地利专利",
	"AR00" : "阿根廷专利",
	
	"BA00" : "波斯尼亚和黑塞哥维那专利",
	"BE00" : "比利时专利",
	"BG00" : "保加利亚专利",
	"BR00" : "巴西专利",
	"BY00" : "白俄罗斯专利",
	"CL00" : "智利专利",
	"CO00" : "哥伦比亚专利",
	"CR00" : "哥斯达黎加专利",
	"CS00" : "捷克斯洛伐克专利",
	"CU00" : "古巴专利",
	"CY00" : "塞浦路斯专利",
	"CZ00" : "捷克共和国专利",
//	"DD00" : "民主德国专利",
	"DK00" : "丹麦专利",
	"DO00" : "多米尼加共和国专利",
	"DZ00" : "阿尔及利亚专利",
	"EA00" : "欧亚专利局专利",
	"EC00" : "厄瓜多尔专利",
	"EE00" : "爱沙利亚专利",
	"EG00" : "埃及专利",
	"ES00" : "西班牙专利",
	"FI00" : "芬兰专利",
	"GC00" : "海湾地区阿拉伯国家合作委员会专利局专利",
	"GE00" : "格鲁吉专利",
	"GR00" : "希腊专利",
	"GT00" : "危地马拉专利",
	"HN00" : "洪都拉斯专利",
	"HR00" : "克罗地亚专利",
	"HU00" : "匈牙利专利",
	"ID00" : "印度尼西亚专利",
	"IE00" : "爱尔兰专利",
	"IL00" : "以色列专利",
	"IN00" : "印度专利",
	"IS00" : "冰岛专利",
	"IT00" : "意大利专利",
	"JO00" : "约旦专利",
	"KE00" : "肯尼亚专利",
	"KG00" : "吉尔吉斯斯坦专利",
	"KZ00" : "哈萨克斯坦专利",
	"LT00" : "立陶宛专利",
	"LU00" : "卢森堡专利",
	"LV00" : "拉脱维亚专利",
	"MA00" : "摩洛哥专利",
	"MC00" : "摩纳哥专利",
	"MD00" : "摩尔多瓦共和国专利",
	"ME00" : "黑山专利",
	"MN00" : "蒙古专利",
	"MT00" : "马耳他专利",
	"MW00" : "马拉维墨西哥专利",
	"MX00" : "墨西哥专利",
	"MY00" : "马来西亚专利",
	"NI00" : "尼加拉瓜专利",
	"NL00" : "荷兰专利",
	"NO00" : "挪威专利",
	"NZ00" : "新西兰专利",
	"OA00" : "非洲知识产权组织专利",
	"PA00" : "巴拿马专利",
	"PE00" : "秘鲁专利",
	"PH00" : "菲律宾专利",
	"PL00" : "波兰专利",
	"PT00" : "葡萄牙专利",
	"RO00" : "罗马尼亚专利",
	"RS00" : "塞尔维亚专利",
	"SE00" : "瑞典专利",
	"SG00" : "新加坡专利",
	"SI00" : "斯洛文尼亚专利",
	"SK00" : "斯洛伐克专利",
	"SM00" : "圣马力诺专利",
	"SV00" : "萨尔瓦多专利",
	"TH00" : "泰国专利",
	"TJ00" : "塔吉克斯坦专利",
	"TN00" : "突尼斯专利",
	"TR00" : "土耳其专利",
	"TT00" : "特立尼达和多巴哥专利",
	"UA00" : "乌克兰专利",
	"UY00" : "乌拉圭专利",
	"UZ00" : "乌兹别克斯坦专利", 
	"VN00" : "越南专利",
	"YU00" : "南斯拉夫专利",
	"ZA00" : "南非专利",
	"ZM00" : "赞比亚专利",
	"ZW00" : "津巴布韦专利",
	"EE00" : "爱沙尼亚专利",
	"WOA0" : "世界知识产权组织国际申请",
	"AP00" : "非洲地区工业产权组织(ARIPO)专利",
	
	"USA0" : "美国发明申请",
	"USB0" : "美国发明授权",
	"USS0" : "美国外观设计",
	"EPA0" : "EPO发明申请",
	"EPB0" : "EPO发明授权",
	"KRA0" : "韩国发明申请",
	"KRB0" : "韩国发明授权",
	"KRU0" : "韩国实用新型申请",
	"KRY0" : "韩国实用新型授权",
	"KRS0" : "韩国外观设计",
	"JPA0" : "日本发明申请",
	"JPB0" : "日本发明授权",
	"JPU0" : "日本实用新型申请",
	"JPY0" : "日本实用新型授权",
	"JPS0" : "日本外观设计",
	"JPOT" : "日本其它",
	"CNA0" : "中国发明申请",
	"CNB0" : "中国发明授权",
	"CNY0" : "中国实用新型",
	"CNS0" : "中国外观设计",
	"HKA0" : "香港发明申请",
	"HKB0" : "香港发明授权",
	"HKS0" : "香港外观设计",
	"MOA0" : "澳门发明申请",
	"MOB0" : "澳门发明授权",
	"MOU0" : "澳门实用新型申请",
	"MOY0" : "澳门实用新型授权",
	"MOD0" : "澳门外观设计申请",
	"MOS0" : "澳门外观设计授权",
	"DEA0" : "德国发明申请",
	"DEB0" : "德国发明授权",
	"DEY0" : "德国实用新型",
	"DES0" : "德国外观设计",
	"CAA0" : "加拿大发明申请",
	"CAB0" : "加拿大发明授权",
	"CAS0" : "加拿大外观设计",
	"AUA0" : "澳大利亚发明申请",
	"AUB0" : "澳大利亚发明授权",
	"AUS0" : "澳大利亚外观设计",
	"AUOT" : "澳大利亚其它",
	"RUA0" : "俄罗斯发明申请",
	"RUB0" : "俄罗斯发明授权",
	"RUY0" : "俄罗斯实用新型",
	"RUS0" : "俄罗斯外观设计",
	"GBA0" : "英国发明申请",
	"GBB0" : "英国发明授权",
	"GBS0" : "英国外观设计",
	"GBOT" : "英国其它",
	"CHA0" : "瑞士发明申请",
	"CHB0" : "瑞士发明授权",
	"CHS0" : "瑞士外观设计",
	"TWA0" : "台湾发明申请",
	"TWB0" : "台湾发明授权",
	"TWU0" : "台湾实用新型申请",
	"TWY0" : "台湾实用新型授权",
	"TWS0" : "台湾外观设计",
	"TWOT" : "台湾其它 ",
	"FRA0" : "法国发明申请",
	"FRB0" : "法国发明授权",
	"FRY0" : "法国实用证书",
	"FRS0" : "法国外观设计",
	"OTHE" : "其他国家和地区专利"

};

var traLibrary = {

	"CN" : "中国商标",
	"US" : "美国商标",
	"ES" : "马德里商标",
	"UK" : "英国"
};

var iseAvd = {
	"CNKI" : "中国知网",
	"WF" : "万方数据",
	"CQVIP" : "重庆维普",
	"Elsevier" : "爱思唯尔",
	"Springer" : "施普林格",
	"ACS" : "美国化学协会",
	"ACM" : "美国计算协会",
	"Pubmed" : "PubMed",
	"IEEE" : "电气和电子工程师协会",
	"Wiley" : "Wiley-Blackwell"
}

var stdLibrary = {

	"SCI" : "SCI",
	"SCIE" : "SCIE",
	"SSCI" : "SSCI",
	"AHCI" : "AHCI",
	"EI" : "EI",
	"SCOPUS" : "SCOPUS",
	"CSCD" : "CSCD",
	"PKU" : "PKU",
	"CJCR" : "CJCR",
	"JCR" : "JCR",
	"CSSCI" : "CSSCI",
	"" : "OTHER"
};
var stdTitle = {

	"SCI" : "科技期刊引文库",
	"SCIE" : "科技期刊引文扩展版",
	"SSCI" : "社会科学引文库",
	"AHCI" : "艺术与人文引文库",
	"EI" : "工程索引库",
	"SCOPUS" : "科技期刊文摘库",
	"CSCD" : "中国科学引文数据库",
	"PKU" : "北大中文核心期刊要目总览",
	"CJCR" : "中国科技期刊引证报告",
	"JCR" : "期刊引证报告",
	"CSSCI" : "中文社会科学引文索引"
};

var iseLibrary = {

	"CN" : "国家标准",
	"QT" : "QT行业标准",
	"JJ" : "计量规程规范",
	"OTHER" : "其他",
	"AQ安全生产" : "AQ安全生产",
	"MZ民政" : "MZ民政",
	"BB包装" : "BB包装",
	"NY农业" : "NY农业",
	"CB船舶" : "CB船舶",
	"QB轻工" : "QB轻工",
	"FS国外标准" : "FS国外标准",
	"CH测绘" : "CH测绘",
	"QC汽车" : "QC汽车",
	"CJ城镇建设" : "CJ城镇建设",
	"QJ航天" : "QJ航天",
	"CY新闻出版" : "CY新闻出版",
	"QX气象" : "QX气象",
	"DA档案" : "DA档案",
	"SB商业" : "SB商业",
	"DB地震" : "DB地震",
	"SC水产" : "SC水产",
	"DL电力" : "DL电力",
	"SH石油化工" : "SH石油化工",
	"DZ地质矿产" : "DZ地质矿产",
	"SJ电子" : "SJ电子",
	"EJ核工业" : "EJ核工业",
	"SL水利" : "SL水利",
	"FZ纺织" : "FZ纺织",
	"SN商检" : "SN商检",
	"GA公共安全" : "GA公共安全",
	"SY海洋石油天然气" : "SY海洋石油天然气",
	"GH供销" : "GH供销",
	"SY石油天然气" : "SY石油天然气",
	"GY广播电影电视" : "GY广播电影电视",
	"TB铁路运输" : "TB铁路运输",
	"HB航空" : "HB航空",
	"TD土地管理" : "TD土地管理",
	"HG化工" : "HG化工",
	"TY体育" : "TY体育",
	"HJ环境保护" : "HJ环境保护",
	"WB物资管理" : "WB物资管理",
	"HS海关" : "HS海关",
	"WH文化" : "WH文化",
	"HY海洋" : "HY海洋",
	"WJ兵工民品" : "WJ兵工民品",
	"JB机械" : "JB机械",
	"WM外经贸" : "WM外经贸",
	"JC建材" : "JC建材",
	"WS卫生" : "WS卫生",
	"JG建筑工业" : "JG建筑工业",
	"XB稀土" : "XB稀土",
	"JR金融" : "JR金融",
	"YB黑色冶金" : "YB黑色冶金",
	"JT交通" : "JT交通",
	"YC烟草" : "YC烟草",
	"JY教育" : "JY教育",
	"YD通信" : "YD通信",
	"LB旅游" : "LB旅游",
	"YS有色冶金" : "YS有色冶金",
	"LD劳动和劳动安全" : "LD劳动和劳动安全",
	"YY医药" : "YY医药",
	"LS粮食" : "LS粮食",
	"YZ邮政" : "YZ邮政",
	"LY林业" : "LY林业",
	"ZY中医药" : "ZY中医药",
	"MH民用航空" : "MH民用航空",
	"MT煤炭" : "MT煤炭",

	"ISO" : "国际标准ISO",
	"IX-IEC" : "国际电工标准IEC",

	"JSA" : "日本规格协会标准JIS",
	"US" : "美国国家标准ANSI",
	"CA" : "加拿大标准",
	"KS" : "韩国标准KS",
	"AS" : "澳大利亚标准AS",
	"BS" : "英国英标标准BSI",

	"JJF" : "技术规范",
	"JJFFZ" : "技术规范（纺织）",
	"JJG" : "检定规程",
	"JJGD" : "地方计量检定规程",
	"DB" : "中国地方标准"

};

// 交易码对应规则
var txnCode = {
	// 专利
	"PatentImgTextList" : "PatentTableSea",
	"PatentTableList" : "PatentTableSea",
	"PatentSurfaceList" : "PatentTableSea",
	"PatentOverviewList" : "PatentTableSea",
	// 商标
	"TradeMarkList" : "TrademarkTable",
	"TradMarkTableList" : "TrademarkTable",
	"TradMarkSurfaceList" : "TrademarkTable",
	"TradMarkOverviewList" : "TrademarkTable",
	// 标准
	"StandardList" : "StandardTable",
	// 期刊
	"PeriodicalList" : "PeriodicalTable",
	// 判例-专利复查
	"DecisionList" : "DecisionTable",
	// 判例裁判文书
	"RefereeList" : "RefereeTable",
	// 判例法律法规
	"LawsList" : "LawsTable",
	//软著 登记公告
	"WRegistrationList":"WRegistrationTable",
	//软著 软著转让登记公告
	"TRegistrationList":"TRegistrationTable",
	//软著 软著登记撤销
	"CRegistrationList":"CRegistrationTable",
	//软著 软著专用许可合同登记公告
	"ARegistrationList":"ARegistrationTable",
	//软著 软著变更或补充公告
	"URegistrationList":"URegistrationTable",
	//作品著作
	"WProductionList":"WProductionTable"
};
// 商标类型
var tradeMarkKindLibrary = {
	"1" : "普通商标",
	"2" : "集体商标",
	"3" : "证明商标",
	"4" : "服务商标",
	"5" : "集体服务商标",
	"6" : "团体商标",
	"7" : "保证商标",
	"8" : "特殊标志",
	"9" : "三维商标",
	"10" : "全息商标",
	"11" : "声音商标",
	"12" : "嗅觉商标",
	"13" : "TRADEMARK",
	"14" : "COLLECTIVE TRADEMARK",
	"15" : "SERVICE MARK",
	"16" : "COLLECTIVE SERVICE MARK",
	"17" : "COLLECTIVE MEMBERSHIP MARK",
	"18" : "CERTIFICATION MARK",
	"19" : "Collective mark",
	"20" : "Collective mark, certicate mark or guarantee mark",
	"21" : "Certificate mark",
	"22" : "Guarantee mark"

}
// 商标权利状态
var tradeMarkCs = {
	"1" : "有效",
	"0" : "失效",
	"已注册" : "已注册",
	"已销亡" : "已销亡",
	"已初审" : "已初审",
	"待审中" : "待审中",
	"已驳回" : "已驳回",
	"400" : "DEAD",
	"401" : "DEAD",
	"402" : "DEAD",
	"403" : "DEAD",
	"405" : "DEAD",
	"406" : "DEAD",
	"411" : "DEAD",
	"412" : "DEAD",
	"415" : "DEAD",
	"600" : "DEAD",
	"601" : "DEAD",
	"602" : "DEAD",
	"603" : "DEAD",
	"604" : "DEAD",
	"605" : "DEAD",
	"606" : "DEAD",
	"607" : "DEAD",
	"608" : "DEAD",
	"609" : "DEAD",
	"612" : "DEAD",
	"614" : "DEAD",
	"616" : "LIVE",
	"618" : "DEAD",
	"622" : "    ",
	"626" : "DEAD",
	"630" : "LIVE",
	"632" : "DEAD",
	"638" : "LIVE",
	"640" : "LIVE",
	"641" : "LIVE",
	"643" : "LIVE",
	"644" : "LIVE",
	"645" : "LIVE",
	"646" : "LIVE",
	"647" : "LIVE",
	"648" : "LIVE",
	"650" : "LIVE",
	"651" : "LIVE",
	"652" : "LIVE",
	"653" : "LIVE",
	"654" : "LIVE",
	"655" : "LIVE",
	"656" : "LIVE",
	"657" : "LIVE",
	"658" : "LIVE",
	"659" : "LIVE",
	"660" : "LIVE",
	"661" : "LIVE",
	"663" : "LIVE",
	"665" : "LIVE",
	"666" : "LIVE",
	"672" : "LIVE",
	"680" : "LIVE",
	"681" : "LIVE",
	"682" : "LIVE",
	"686" : "LIVE",
	"688" : "LIVE",
	"689" : "LIVE",
	"690" : "LIVE",
	"692" : "LIVE",
	"694" : "LIVE",
	"700" : "LIVE",
	"701" : "LIVE",
	"702" : "LIVE",
	"703" : "LIVE",
	"704" : "LIVE",
	"705" : "LIVE",
	"706" : "LIVE",
	"707" : "LIVE",
	"708" : "LIVE",
	"709" : "DEAD",
	"710" : "DEAD",
	"711" : "DEAD",
	"712" : "DEAD",
	"713" : "DEAD",
	"714" : "DEAD",
	"715" : "   ",
	"725" : "LIVE",
	"730" : "LIVE",
	"731" : "LIVE",
	"732" : "LIVE",
	"733" : "LIVE",
	"734" : "LIVE",
	"739" : "LIVE",
	"744" : "LIVE",
	"745" : "LIVE",
	"746" : "LIVE",
	"748" : "LIVE",
	"753" : "LIVE",
	"757" : "LIVE",
	"760" : "LIVE",
	"762" : "LIVE",
	"765" : "LIVE",
	"766" : "LIVE",
	"771" : "LIVE",
	"773" : "LIVE",
	"774" : "LIVE",
	"777" : "LIVE",
	"780" : "LIVE",
	"790" : "LIVE",
	"794" : "LIVE",
	"800" : "LIVE",
	"801" : "LIVE",
	"804" : "LIVE",
	"806" : "LIVE",
	"807" : "LIVE",
	"809" : "LIVE",
	"811" : "LIVE",
	"813" : "LIVE",
	"814" : "LIVE",
	"815" : "LIVE",
	"817" : "LIVE",
	"818" : "LIVE",
	"819" : "LIVE",
	"821" : "LIVE",
	"823" : "LIVE",
	"825" : "LIVE",
	"900" : "DEAD",
	"969" : "LIVE",
	"973" : "LIVE",
	"404" : "DEAD",
	"649" : "LIVE",
	"802" : "LIVE",
	"1" : "有权",
	"2" : "无权",
	"3" : "在审",
	"8" : "不影响",
	"9" : "不确定/待定"

}
var helpMessage = {
	"empty" : "",
	"名称" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。<span></span></span></span></p><p><span>检索示例：<span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>名称中包含计算机，可输入：计算机 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>名称中包含计算机和应用，可输入：计算机<span>and </span>应用 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>名称中包含计算机或控制，可输入：计算机<span>or </span>控制 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>名称中包含计算机，不包含电子时，可输入：计算机<span>not </span>电子 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>名称中包含“汽车”和“化油器”，且“汽车”在“化油器”之前<span>0~5</span>个汉字，可输入：汽车<span>pre/5</span>化油器<span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（f）</span><span>已知名称中包含<span>computer</span>和<span>system</span>，可输入：<span>computer and system </span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（g）</span><span>已知名称中包含<span>computer</span>和<span>soft</span>，且“<span>computer</span>”和“<span>soft</span>”之间相隔<span>0~5</span>个单词，可输入：<span>computer and/5 soft </span></span></p>",
	"申请人" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。<span></span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>申请人为华为，可输入：华为 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>申请人中包含顾学平和曹光群，可输入：华为<span>and </span>清华大学 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>申请人中包含吴伟南或李会民，可输入：华为<span>or </span>中兴 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>已知申请人中包含<span>Hyun</span>或<span>Hyeok</span>，可输入：<span>Hyun or Hyeok </span></span></p>",
	"申请号" : "<p><span>支持精确检索、模糊检索（模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and,or,not</span>”逻辑运算。<span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>申请号为<span>CN02144686.5</span>，可输入：<span>CN02144686.5</span><span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>申请号不连续的几位为<span>021</span>和<span>468</span>，可输入：<span>CN021%468% </span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>逻辑运算，可输入：<span>CN2003 not CN200303</span></span></p>",
	"公布号" : "<p><span>支持精确检索、模糊检索（模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and,or,not</span>”逻辑运算。<span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>公布号为<span>CN1387751</span>，可输入：<span>CN1387751 </span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>公布号前以<span>CN13877</span>开头，可输入：<span>CN13877</span>或<span>CN13877%</span></span></p>",
	"优先权" : "<p><span>支持精确检索、模糊检索（模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and,or,not</span>”逻辑运算。<span></span></span></p><p><span><span></span></span><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>优先权号为<span>CN201310054537.1</span>，可输入：<span>CN201310054537.1</span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>优先权号以<span>CN20131005</span>开头，可输入：<span>CN20131005</span>或<span>20131005% </span></span></p>",
	"最早优先权" : "<p><span>需以申请号进行检索。</span><span>支持精确检索、模糊检索（模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and,or,not</span>”逻辑运算。<span></span></span></p><p><span><span></span></span><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>最早优先权号为<span>CN201310054537.1</span>，可输入：<span>CN201310054537.1</span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>最早优先权号以<span>CN20131005</span>开头，可输入：<span>CN20131005</span>或<span>CN20131005%</span></span></p>",
	"国际申请" : "<p><span>支持精确检索、模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），<span>模糊字符位于末尾时可省略不写。支持“<span>and,or,not</span>”逻辑运算。<span></span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>国际申请号为</span><span>PCT/CN2005/001433</span><span>，可输入：</span><span><span>PCT/CN2005/001433</span></span><span></span><span></span><span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>国际申请号以</span><span>PCT/CN2005</span><span>开头</span><span>，可输入：</span><span>PCT/CN2005%</span><span></span></p>",
	"国际公布" : "<p><span>支持精确检索、模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），<span>模糊字符位于末尾时可省略不写。支持“<span>and,or,not</span>”逻辑运算。<span></span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>国际公布号为<span>WO2013/120614</span>，可输入：<span>WO2013/120614</span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>国际公布号以<span>WO2013/120</span>开头，可输入：<span>WO2013/120</span>或<span>WO2013/120%</span></span></p>",
	"简单同族" : "<p><span>需以公布号进行检索。支持精确检索、模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊<span>）。模糊字符位于末尾时可省略不写。支持“<span>and,or,not</span>”逻辑运算。<span></span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>同族号为<span>CN1387751</span>，可输入：</span><span>CN101247092</span><span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>同族号以<span>CN13877</span>开头，可输入：<span>CN13877</span>或<span>CN13877% </span></span></p>",
	"引证文献" : "<p><span>支持精确检索、模糊检索（模糊字符包括“？”和“<span>%</span>”，其中“？”代替单个字符、“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊）。模糊字符位于末尾时可省略不写。支持“<span>and,or,not</span>”逻辑运算。<span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>引证文献号为<span>CN1387751</span>，可输入：</span><span>CN1829071</span><span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>文献号前面几位为<span>CN13877</span>，可输入：<span>CN18290 </span></span></p>",
	"申请日" : "<p><span>申请日由年、月、日三部分组成，用八位日期进行检索，单月日用“<span>0</span>”补齐。 支持比较运算符“<span>=</span>、<span>!=</span>、<span>&gt;</span>、<span>&lt;</span>、<span>&gt;=</span>、<span>&lt;=</span>”和逻辑运算符“<span>and,or,not</span>”，支持运算符“<span>to”</span>。<span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>申请日为<span>2010</span>年<span>10</span>月<span>10</span>日，可输入：<span>20101010 </span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>申请日为<span>2010</span>年<span>10</span>月，可输入：<span>201010 </span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>申请日为<span>2010</span>年某月<span>10</span>日，可输入：<span>2010%10 </span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>检索申请日为从<span>2010</span>年到<span>2011</span>年的信息，可输入：<span>2010 to 2011 </span></span></p>",
	"公布日" : "<p><span>公布日由年、月、日三部分组成，用八位日期进行检索，单月日用“<span>0</span>”补齐。 支持比较运算符“<span>=</span>、<span>!=</span>、<span>&gt;</span>、<span>&lt;</span>、<span>&gt;=</span>、<span>&lt;=</span>”和逻辑运算符“<span>and,or,not</span>”，支持运算符“<span>to”</span>。<span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>公布日为<span>2011</span>年<span>01</span>月<span>05</span>日，可输入：<span>20110105 </span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>公布日为<span>2011</span>年<span>01</span>月，可输入：<span>201101</span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>公布日为<span>2011</span>年某月<span>01</span>日，可输入：<span>2011%01 </span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>检索公布日为从<span>2011</span>年到<span>2012</span>年的信息，可输入：<span>2011 to 2012 </span></span></p>",
	"进入国家日" : "<p><span>公布日由年、月、日三部分组成，用八位日期进行检索，单月日用“<span>0</span>”补齐。 支持比较运算符“<span>=</span>、<span>!=</span>、<span>&gt;</span>、<span>&lt;</span>、<span>&gt;=</span>、<span>&lt;=</span>”和逻辑运算符“<span>and,or,not</span>”，支持运算符“<span>to”</span>。<span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>公布日为<span>2011</span>年<span>01</span>月<span>05</span>日，可输入：<span>20110105 </span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>公布日为<span>2011</span>年<span>01</span>月，可输入：<span>201101</span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>公布日为<span>2011</span>年某月<span>01</span>日，可输入：<span>2011%01 </span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>检索公布日为从<span>2011</span>年到<span>2012</span>年的信息，可输入：<span>2011 to 2012 </span></span></p>",
	"最早优先权日" : "<p><span>最早优先权日由年、月、日三部分组成，用八位日期进行检索，单月日用“<span>0</span>”补齐。 支持比较运算符“<span>=</span>、<span>!=</span>、<span>&gt;</span>、<span>&lt;</span>、<span>&gt;=</span>、<span>&lt;=</span>”和逻辑运算符“<span>and,or,not</span>”，支持运算符“<span>to”</span>。</span><span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>最早优先权日为<span>2012</span>年<span>05</span>月<span>29</span>日，可输入：<span>20120529</span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>最早优先权日为<span>2012</span>年<span>05</span>月，可输入：<span>201205 </span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>最早优先权日为<span>2012</span>年某月<span>29</span>日，可输入：<span>2012%29 </span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>检索最早优先权日为从<span>2012</span>年到<span>2013</span>年的信息，可输入：<span>2012 to 2013</span></span></p>",
	"摘要和说明" : "<p>支持多语种检索、精确检索、模糊检索（模糊字符包括“？”和“%”，其中“？”代替单个字符、“%”代替词尾单个或多个字符，暂不支持前向模糊）。模糊字符位于末尾时可省略不写。支持“and, or, not”逻辑运算。 </p><ul><p>检索示例：</p><li>（a）摘要中包含计算机，可输入：计算机</li><li>（b）摘要中包含计算机和应用，可输入：计算机 and 应用</li><li>（c）摘要中包含计算机或控制，可输入：计算机 or 控制</li><li>（d）摘要中包含计算机，不包含电子时，可输入：计算机 not 电子 </li><li>（e）摘要中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦%摩擦系数。</li><li>（f）已知摘要中包含computer和System，可输入：computer and system</li></ul>",
	"关键词" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>关键词中包含计算机，可输入：计算机 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>关键词中包含计算机和应用，可输入：计算机<span>and </span>应用 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>关键词中包含计算机或控制，可输入：计算机<span>or </span>控制 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>关键词中包含计算机，不包含电子时，可输入：计算机<span>not </span>电子 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>关键词中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（f）</span><span>已知关键词中包含<span>computer</span>和<span>system</span>，可输入：<span>computer and system </span></span></p>",
	"主权项" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>主权项中包含计算机，可输入：计算机 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>主权项中包含计算机和应用，可输入：计算机<span>and </span>应用 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>主权项中包含计算机或控制，可输入：计算机<span>or </span>控制 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>主权项中包含计算机，不包含电子时，可输入：计算机<span>not </span>电子 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>主权项中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（f）</span><span>已知主权项中包含<span>computer</span>和<span>system</span>，可输入：<span>computer and system </span></span></p>",
	"权利要求书" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>权利要求书中包含计算机，可输入：计算机 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>权利要求书中包含计算机和应用，可输入：计算机<span>and </span>应用 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>权利要求书中包含计算机或控制，可输入：计算机<span>or </span>控制 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>权利要求书中包含计算机，不包含电子时，可输入：计算机<span>not </span>电子 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>权利要求书中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（f）</span><span>已知权利要求书中包含<span>computer</span>和<span>system</span>，可输入：<span>computer and system </span></span></p>",
	"说明书全文" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>说明书全文中包含计算机，可输入：计算机 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>说明书全文中包含计算机和应用，可输入：计算机<span>and </span>应用 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>说明书全文中包含计算机或控制，可输入：计算机<span>or </span>控制 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>说明书全文中包含计算机，不包含电子时，可输入：计算机<span>not </span>电子 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>说明书全文中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（f）</span><span>已知说明书全文中包含<span>computer</span>和<span>system</span>，可输入：<span>computer and system </span></span></p>",
	"名称+摘要和说明" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>名称或摘要和说明中包含计算机，可输入：计算机 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>名称或摘要和说明中包含计算机和应用，可输入：计算机<span>and </span>应用 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>名称或摘要和说明中包含计算机或控制，可输入：计算机<span>or </span>控制 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>名称或摘要和说明中包含计算机，不包含电子时，可输入：计算机<span>not </span>电子 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>名称或摘要和说明中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（f）</span><span>已知名称或摘要和说明中中包含<span>computer</span>和<span>system</span>，可输入：<span>computer and system</span></span></p>",
	"名称+摘要和说明+主权项" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>名称、摘要和说明或主权项中包含计算机，可输入：计算机 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>名称、摘要和说明或主权项中包含计算机和应用，可输入：计算机<span>and </span>应用 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>名称、摘要和说明或主权项中包含计算机或控制，可输入：计算机<span>or </span>控制 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>名称、摘要和说明或主权项中包含计算机，不包含电子时，可输入：计算机<span>not </span>电子 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>名称、摘要和说明或主权项书中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（f）</span><span>已知权利要求书中包含<span>computer</span>和<span>System</span>，可输入：<span>computer and system </span></span></p>",
	"名称+摘要和说明+权利要求书" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>名称、摘要和说明或权利要求书中包含计算机，可输入：计算机 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>名称、摘要和说明或权利要求书中包含计算机和应用，可输入：计算机<span>and </span>应用 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>名称、摘要和说明或权利要求书中包含计算机或控制，可输入：计算机<span>or </span>控制 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>名称、摘要和说明或权利要求书中包含计算机，不包含电子时，可输入：计算机<span>not </span>电子 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>名称、摘要和说明或权利要求书中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（f）</span><span>已知名称、摘要和说明或权利要求书中包含<span>computer</span>和<span>system</span>，可输入：<span>computer and system </span></span></p>",
	"名称+摘要和说明+权利要求书+说明书全文" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>名称、摘要和说明、权利要求书或说明书全文中包含计算机，可输入：计算机 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>名称、摘要和说明、权利要求书或说明书全文中包含计算机和应用，可输入：计算机<span>and </span>应用 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>名称、摘要和说明、权利要求书或说明书全文中包含计算机或控制，可输入：计算机<span>or </span>控制 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>名称、摘要和说明、权利要求书或说明书全文中包含计算机，不包含电子时，可输入：计算机<span>not </span>电子 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>名称、摘要和说明、权利要求书或说明书全文中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（f）</span><span>已知名称、摘要和说明、权利要求书或说明书全文中包含<span>computer</span>和<span>system</span>，可输入：<span>computer and system </span></span></p>",
	"说明书全文" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>说明书全文中包含计算机，可输入：计算机 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>说明书全文中包含计算机和应用，可输入：计算机<span>and </span>应用 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>说明书全文中包含计算机或控制，可输入：计算机<span>or </span>控制 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>说明书全文中包含计算机，不包含电子时，可输入：计算机<span>not </span>电子 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>说明书全文中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（f）</span><span>已知说明书全文中包含<span>computer</span>和<span>system</span>，可输入：<span>computer and system </span></span></p>",
	"技术领域" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>技术领域中包含计算机，可输入：计算机 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>技术领域中包含计算机和应用，可输入：计算机<span>and </span>应用 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>技术领域中包含计算机或控制，可输入：计算机<span>or </span>控制 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>技术领域中包含计算机，不包含电子时，可输入：计算机<span>not </span>电子 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>技术领域中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（f）</span><span>已知技术领域中包含<span>computer</span>和<span>system</span>，可输入：<span>computer and system </span></span></p>",
	"背景技术" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>背景技术中包含计算机，可输入：计算机 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>背景技术中包含计算机和应用，可输入：计算机<span>and </span>应用 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>背景技术中包含计算机或控制，可输入：计算机<span>or </span>控制 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>背景技术中包含计算机，不包含电子时，可输入：计算机<span>not </span>电子 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>背景技术中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（f）</span><span>已知背景技术中包含<span>computer</span>和<span>system</span>，可输入：<span>computer and system </span></span></p>",
	"发明内容" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>发明内容中包含计算机，可输入：计算机 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>发明内容中包含计算机和应用，可输入：计算机<span>and </span>应用 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>发明内容中包含计算机或控制，可输入：计算机<span>or </span>控制 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>发明内容中包含计算机，不包含电子时，可输入：计算机<span>not </span>电子 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>发明内容中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（f）</span><span>已知发明内容中包含<span>computer</span>和<span>system</span>，可输入：<span>computer and system </span></span></p>",
	"附图说明" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>附图说明中包含计算机，可输入：计算机 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>附图说明中包含计算机和应用，可输入：计算机<span>and </span>应用 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>附图说明中包含计算机或控制，可输入：计算机<span>or </span>控制 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>附图说明中包含计算机，不包含电子时，可输入：计算机<span>not </span>电子 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>附图说明中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（f）</span><span>已知附图说明中包含<span>computer</span>和<span>system</span>，可输入：<span>computer and system </span></span></p>",
	"具体实施方式" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>具体实施方式中包含计算机，可输入：计算机 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>具体实施方式中包含计算机和应用，可输入：计算机<span>and </span>应用 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>具体实施方式中包含计算机或控制，可输入：计算机<span>or </span>控制 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>具体实施方式中包含计算机，不包含电子时，可输入：计算机<span>not </span>电子 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>具体实施方式中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（f）</span><span>已知具体实施方式中包含<span>computer</span>和<span>System</span>，可输入：<span>computer and system </span></span></p>",
	"申请人" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。<span></span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>申请人为华为，可输入：华为 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>申请人中包含顾学平和曹光群，可输入：华为<span>and </span>清华大学 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>申请人中包含吴伟南或李会民，可输入：华为<span>or </span>中兴 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>已知申请人中包含<span>Hyun</span>或<span>Hyeok</span>，可输入：<span>Hyun or Hyeok </span></span></p>",
	"申请人地址" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>地址中包含辽宁省鞍山市，可输入：辽宁省鞍山市 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>地址中包含辽宁省和鞍山市，可输入：辽宁省<span>and </span>鞍山市 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>地址中包含鞍山市或德阳市，可输入：鞍山市<span>or </span>德阳市 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>申请人地址邮编为<span>100081</span>，可输入：<span>100081</span>。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>申请人地址为辽宁省鞍山市立山区中华北路<span>28</span>号，可输入：辽宁省<span>%</span>市<span>%</span>中华北路<span>28</span>号；也可输入：辽宁<span>%</span>中华<span>%</span>号。 <span></span></span></p>",
	"发明人" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>发明人为丁水波，可输入：丁水波 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>发明人中包含顾学平和曹光群，可输入：顾学平<span>and </span>曹光群 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>发明人中包含吴伟南或李会民，可输入：吴伟南<span>or </span>李会民 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>已知发明人中<span>包含<span>Hyun</span>或<span>Hyeok</span>，可输入：<span>Hyun or Hyeok</span></span><span></span></span></p>",
	"发明人地址" : "<p>支持多语种检索、精确检索、模糊检索（模糊字符包括“？”和“%”，其中“？”代替单个字符、“%”代替词尾单个或多个字符，暂不支持前向模糊）。模糊字符位于末尾时可省略不写。支持“and, or, not”逻辑运算。 </p><ul><p>检索示例：</p><li>（a）地址中包含辽宁省鞍山市，可输入：辽宁省鞍山市  </li><li>（b）地址中包含辽宁省和鞍山市，可输入：辽宁省 and 鞍山市</li><li>（c）地址中包含鞍山市或德阳市，可输入：鞍山市 or 德阳市</li><li>（d）专利权人地址邮编为100088，可输入：100088。</li><li>（e）申请人地址为辽宁省鞍山市立山区中华北路28号，可输入：辽宁省%市%中华北路28号；也可输入：辽宁%中华%号。。</li></ul>",
	"专利权人" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>专利权人为丁水波，可输入：丁水波 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>专利权人中包含顾学平和曹光群，可输入：顾学平<span>and </span>曹光群 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>专利权人中包含吴伟南或李会民，可输入：吴伟南<span>or </span>李会民 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>已知专利权人中<span>包含<span>Hyun</span>或<span>Hyeok</span>，可输入：<span>Hyun or Hyeok</span></span><span></span></span></p>",
	"专利权人地址" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>地址中包含辽宁省鞍山市，可输入：辽宁省鞍山市 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>地址中包含辽宁省和鞍山市，可输入：辽宁省<span>and </span>鞍山市 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>地址中包含鞍山市或德阳市，可输入：鞍山市<span>or </span>德阳市 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>专利权人地址邮编为<span>100088</span>，可输入：<span>100088</span>。 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>申请人地址为辽宁省鞍山市立山区中华北路<span>28</span>号，可输入：辽宁省<span>%</span>市<span>%</span>中华北路<span>28</span>号；也可输入：辽宁<span>%</span>中华<span>%</span>号。<span></span></span></p>",
	"当前权利人" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>当前权利人为丁水波，可输入：丁水波 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>当前权利人中包含顾学平和曹光群，可输入：顾学平<span>and </span>曹光群 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>当前权利人中包含吴伟南或李会民，可输入：吴伟南<span>or </span>李会民 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>已知当前权利人中<span>包含<span>Hyun</span>或<span>Hyeok</span>，可输入：<span>Hyun or Hyeok</span></span><span></span></span></p>",
	"相关权利人" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>相关权利人为丁水波，可输入：丁水波 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>相关权利人中包含顾学平和曹光群，可输入：顾学平<span>and </span>曹光群 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>相关权利人中包含吴伟南或李会民，可输入：吴伟南<span>or </span>李会民 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>已知相关权利人中<span>包含<span>Hyun</span>或<span>Hyeok</span>，可输入：<span>Hyun or Hyeok</span></span><span></span></span></p>",
	"代理人" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and,or,not</span>”逻辑运算和“<span>and/n,pre/n</span>”属性运算。<span></span></span></span></p><p><span>检索示例： <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（a）</span><span>代理人中包含李恩庆，可输入：李恩庆 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（b）</span><span>代理人中包含李恩庆和马守忠，可输入：李恩庆<span>and </span>马守忠 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（c）</span><span>代理人中包含李恩庆或周秀梅，可输入：李恩庆<span>or </span>周秀梅 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（d）</span><span>专利代理人名字中包含“军”，可输入：军 <span></span></span></p><p><!--[if!supportLists]--><span><span><span></span></span></span><!--[endif]--><span>（e）</span><span>专利代理人姓林，且名字中包含“军”，可输入：林？军或林<span>%</span>军 <span></span></span></p>",
	"代理机构" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and/n, pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例：<span></span></span></p><p><span><span>·<span></span></span></span><span>（a）</span><span>专利代理机构中包含长春科宇，可输入：长春科宇<span></span></span></p><p><span><span>·<span></span></span></span><span>（b）</span><span>专利代理机构中包含长春和科宇，可输入：长春<span> and</span>科宇<span></span></span></p><p><span><span>·<span></span></span></span><span>（c）</span><span>专利代理机构中包含长春科宇或沈阳科苑，可输入：长春科宇<span> or</span>沈阳科苑<span></span></span></p><p><span><span>·<span></span></span></span><span>（d）</span><span>专利代理机构名称中包含“贸易”和“商标”，且“贸易”在“商标”之前，可输入：贸易<span>%</span>商标<span></span></span></p>",
	"审查员" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and/n, pre/n</span>”属性运算。</span><span></span></span></p><p><span>检索示例：<span></span></span></p><p><span><span>·<span></span></span></span><span>（a）</span><span>审查员中包含郭明华，可输入：郭明华<span></span></span></p><p><span><span>·<span></span></span></span><span>（b）</span><span>审查员中包含郭明华和赵鹏翔，可输入：郭明华<span>and</span>赵鹏翔<span></span></span></p><p><span><span>·<span></span></span></span><span>（c）</span><span>审查员中包含郭明华或赵鹏翔，可输入：郭明华<span>or</span>赵鹏翔<span></span></span></p><p><span><span>·<span></span></span></span><span>（d）</span><span>审查员名字中包含“翔”，可输入：翔<span></span></span></p><p><span><span>·<span></span></span></span><span>（e）</span><span>审查员姓赵，且名字中包含“翔”，可输入：赵？翔或赵<span>%</span>翔<span></span></span></p>",
	"分类号" : "<p><span>各类分类号均可通过此入口查询到。<span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>”代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and, or, not</span>”逻辑运算。</span><span></span></span></p><p><span>以<span>IPC</span>分类号为例，检索示例：<span></span></span></p><ul><li><span>（a）</span><span>分类号为<span>G06F15/16</span>，可输入：<span>G06F15/16</span></span></li><li><span>（b）</span><span>分类号开始部分为<span>G06F</span>，可输入：<span>G06F%</span></span></li><li><span>（c）</span><span>分类号前三个字符和中间三个字符分别为<span>G06</span>和<span>5/1</span>，可输入：<span>G06%5/1</span></span></li><li><span>（d）</span><span>若检索分类号为<span>G06F15/16</span>或<span>G06F15/17</span>，可输入：<span>G06F15/16 or G06F15/17</span></span></li></ul>",
	"IPC" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and, or, not</span>”逻辑运算。</span><span></span></span></p><p><span>检索示例：<span></span></span></p><ul><li><span>（a）</span><span>分类号为<span>G06F15/16</span>，可输入：<span>G06F15/16</span></span></li><li><span>（b）</span><span>分类号开始部分为<span>G06F</span>，可输入：<span>G06F%</span></span></li><li><span>（c）</span><span>分类号前三个字符和中间三个字符分别为<span>G06</span>和<span>5/1</span>，可输入：<span>G06%5/1</span></span></li><li><span>（d）</span><span>若检索分类号为<span>G06F15/16</span>或<span>G06F15/17</span>，可输入：<span>G06F15/16 or G06F15/17</span></span></li></ul>",
	"主IPC" : "<p>支持精确检索、模糊检索（模糊字符包括“？”和“%”，其中“？”代替单个字符、“%”代替词尾单个或多个字符，暂不支持前向模糊）。模糊字符位于末尾时可省略不写。支持“and, or, not”逻辑运算。 </p><ul><p>检索示例：</p><li>（a）分类号为G06F15/16，可输入：G06F15/16 </li><li>（b）分类号开始部分为G06F，可输入：G06F%</li><li>（c）分类号前三个字符和中间三个字符分别为G06和5/1，可输入：G06%5/1</li><li>（d）分类号中包含06和15，且06在15之前，可输入：%06%15 </li><li>（e）若检索分类号为G06F15/16或G06F15/17，可输入：G06F15/16 or G06F15/17</li></ul>",
	"CPC" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and, or, not</span>”逻辑运算。</span><span></span></span></p><p><span>检索示例：<span></span></span></p><ul><li><span>（a）</span><span>分类号为<span>G06F15/16</span>，可输入：<span>G06F15/16</span></span></li><li><span>（b）</span><span>分类号开始部分为<span>G06F</span>，可输入：<span>G06F%</span></span></li><li><span>（c）</span><span>分类号前三个字符和中间三个字符分别为<span>G06</span>和<span>5/1</span>，可输入：<span>G06%5/1</span></span></li><li><span>（d）</span><span>若检索分类号为<span>G06F15/16</span>或<span>G06F15/17</span>，可输入：<span>G06F15/16 or G06F15/17</span></span></li></ul>",
	"FI":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and, or, not</span>”逻辑运算。</span><span></span></span></p><p><span>检索示例：<span></span></span></p><ul><li><span>（a）</span><span>分类号为<span>A01G1/00.302</span>，可输入：<span>A01G1/00</span></span></li><li><span>（b）</span><span>分类号开始部分为<span>A01G1</span>，可输入：<span>A01G1%</span></span></li><li><span>（c）</span><span>分类号前三个字符和中间三个字符分别为<span>A01</span>和<span>1/0</span>，可输入：<span>A01%1/0</span></span></li><li><span>（d）</span><span>若检索分类号为<span>A01G1/00</span>或<span>A01G1/01</span>，可输入：<span>A01G1/00 or A01G1/01</span></span></li></ul>",
	"FTERM" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and, or, not</span>”逻辑运算。</span><span></span></span></p><p><span>检索示例：<span></span></span></p><ul><li><span>（a）</span><span>分类号为<span>2D061/BA01</span>，可输入：<span>2D061/BA01</span></span></li><li><span>（b）</span><span>分类号开始部分为<span>2D061</span>，可输入：<span>2D061%</span></span></li><li><span>（c）</span><span>分类号前两个字符和中间两个字符分别为<span>2D</span>和<span>61</span>，可输入：<span>2D%61</span></span></li><li><span>（d）</span><span>若检索分类号为<span>2D061/BA01</span>或<span>2D061/BA01</span>，可输入：<span>2D061/BA01 or 2D061/BA02</span></span></li></ul>",
	"UC" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and, or, not</span>”逻辑运算。</span><span></span></span></p><p><span>检索示例：<span></span></span></p><ul><li><span>（a）</span><span>分类号为<span>02-04</span>，可输入：<span>02-04</span></span></li><li><span>（b）</span><span>分类号开始部分为<span>02</span>，可输入：<span>02%</span></span></li><li><span>（c）</span><span>若检索分类号为<span>02-04</span>或<span>02-06</span>，可输入：<span>02-04 or 02-06</span></span></li></ul>",
	"洛迦诺" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and, or, not</span>”逻辑运算。</span><span></span></span></p><p><span>检索示例：<span></span></span></p><ul><li><span>（a）</span><span>分类号为<span>02-04</span>，可输入：<span>02-04</span></span></li><li><span>（b）</span><span>分类号开始部分为<span>02</span>，可输入：<span>02%</span></span></li><li><span>（c）</span><span>若检索分类号为<span>02-04</span>或<span>02-06</span>，可输入：<span>02-04 or 02-06</span></span></li></ul>",
	"法律状态" : "<p><span>支持精确检索和模糊检索。精确检索时需用单引号‘’括起检索内容，模糊检索</span><span>字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>。支持“<span>and, or, not</span>”逻辑运算。</span><span></span></span></p><p><span>检索示例：<span></span></span></p><p><span><span>·<span></span></span></span><span>（a）</span><span>法律状态中包含公开，可输入：公开<span></span></span></p><p><span><span>·<span></span></span></span><span>（b）</span><span>法律状态中包含专利权和恢复，可输入：专利权<span> and</span>恢复<span></span></span></p><p><span><span>·<span></span></span></span><span>（c）</span><span>法律状态中包含专利权或申请权，可输入：专利权<span> or</span>申请权<span></span></span></p><p><span><span>·<span></span></span></span><span>（d）</span><span>法律状态中包含专利权，不包含放弃时，可输入：专利权<span> not</span>放弃<span></span></span></p>",
	"技术信息"	: "<p><span>输入框内，可输入英文或者中文的技术说明，文本长度不超过2000个字。</span></p>",
	"概念" : "<p><span>输入框内，可输入英文或者中文的概念，文本长度不超过2000个字。</span></p>"
};

//非专利提示的代码集
var  unHelpMessage = {
		"empty" : "",
		"尼斯分类" :"<p><span>支持精确检索、模糊检索（模糊字符包括“？”和“<span>%</span>”，其中“？”代替单个字符、“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊）。模糊字符位于末尾时可省略不写。支持“<span>and,or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><ul><li><span>（a）</span><span>尼斯分类号为<span>01</span>，可输入：<span>01</li><li><span>（b）</span><span>尼斯分类号开始部分为<span>0</span>，可输入：<span>0%</li><li><span>（c）</span><span>尼斯分类号为<span>01</span>或<span>30</span>，可输入：<span>01 or     30</li></ul>",
		"类似群号":"<p><span>支持精确检索、模糊检索（模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and, or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><p><span>（a）</span><span>类似群号为<span>0102</span>，可输入：<span>0102</p><p><span>（b）</span><span>类似群号以<span>01</span>开头，可输入：<span>01</span>或<span>01%</p><p><span>（c）</span><span>类似群号为<span>0102</span>或<span>0104</span>，可输入：<span>0102or 0104</p>",
		"注册号":"<p><span>支持精确检索、模糊检索（模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and, or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><p><span>（a）</span></a><span>注册号为<span>10328598</span>，可输入：<span>10328598</p><p><span>（b）</span><span>注册号以<span>1032</span>开头，可输入：<span>1032</span>或<span>1032%</p>",
		"申请号":"<p><span>支持精确检索、模糊检索（模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and, or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><p><span>（a）</span><span>申请号为<span>CN02144686.5</span>，可输入：<span>CN02144686.5</p><p><span>（b）</span><span>申请号不连续的几位为<span>021</span>和<span>468</span>，可输入：<span>CN021%468%</p>",
		"商标名称":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>名称中包含计算机，可输入：计算机</span></p><p><span>（b）</span><span>名称中包含计算机和微型，可输入：计算机<span> and</span>微型</span></p><p><span>（c）</span><span>名称中包含计算机或微型，可输入：计算机<span> or</span>微型</span></p><p><span>（d）</span><span>名称中包含计算机，不包含微型时，可输入：计算机<span> not</span>微型</span></p>",
		"申请人名称":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span></span></p><p><span>检索示例：</span></p><p><span>（a）</span><span>申请人为华为，可输入：华为</span></p><p><span>（b）</span><span>申请人中包含华为或中兴，可输入：华为<span> or</span>中兴</span></p>",
		"代理人名称":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持<span>“and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>代理人为柳沈律师事务所，可输入：柳沈律师事务所</span></p><p><span>（b）</span><span>代理人中包含柳沈或港专，可输入：柳沈<span> or</span>港专</span></p>",
		"标准号":"<p>支持精确检索、模糊检索（模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and, or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><p><span>（a）</span><span>标准号为</span><span>GB/T 9813-2000</span><span>，可输入：</span><span>GB/T9813-2000</span><span></span></p><p><span>（b）</span><span>标准号的前几位为<span>GB/T 98</span>，可输入：<span>GB/T 98</span>或<span> GB/T 98%</p>",
		"标准名称":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>名称中包含计算机，可输入：计算机</span></p><p><span>（b）</span><span>名称中包含计算机和微型，可输入：计算机<span> and</span>微型</span></p><p><span>（c）</span><span>名称中包含计算机或微型，可输入：计算机<span> or</span>微型</span></p><p><span>（d）</span><span>名称中包含计算机，不包含微型时，可输入：计算机<span> not</span>微型</span></p>",
		"发布单位":"<p><p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>发布单位为国家质量技术监督局，可输入：国家质量技术监督局</span></p><p><span>（b）</span><span>发布单位中包含国家质量技术监督局或国家技术监督局，可输入：国家质量技术监督局<span> or</span>国家技术监督局</span></p>",
		"起草单位":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>起草单位为国家质量技术监督局，可输入：国家质量技术监督局</span></p><p><span>（b）</span><span>起草单位中包含国家质量技术监督局或国家技术监督局，可输入：国家质量技术监督局<span> or</span>国家技术监督局</span></p>",
		"起草人":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>起草人为李维，可输入：李维</span></p><p><span>（b）</span><span>起草人中包含李维或邓洁，可输入：李维<span> or</span>邓洁</span></p>",
		"中国标准分类号(CCS)":"<p><span>支持精确检索、模糊检索（模糊字符包括“？”和“</span><span>%</span>”，其中“？”代替单个字符、“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊）。模糊字符位于末尾时可省略不写。支持“<span>and,or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><ul><li><span>（a）</span><span>分类号为<span>A24</span>，可输入：<span>A24</li><li><span>（b）</span><span>分类号开始部分为<span>A2</span>，可输入：<span>A2</span>或<span>A2%</li><li><span>（c）</span><span>分类号为<span>A20</span>或<span>A24</span>，可输入：<span>A20     or A24</li></ul>",
		"国际标准分类号(ICS)":"<p><span>支持精确检索、模糊检索（模糊字符包括“？”、“</span><span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and, or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><p><span>（a）</span><span>分类号为<span>37.100.10</span>，可输入：<span>37.100.10</p><p><span>（b）</span><span>分类号以<span>37</span>开头，可输入：<span>37</span>或<span>37%</p><p><span>（c）</span><span>分类号为</span><span>37.100.10</span><span>或<span>77.150.30</span>，可输入：</span><span>37.100.10 or</span><span>77.150.30</span></p>",
		"适用范围":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and,or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>适用范围中包含计算机，可输入：计算机</span></p><p><span>（b）</span><span>适用范围中包含计算机和微型，可输入：计算机<span> and</span>微型</span></p><p><span>（c）</span><span>适用范围中包含计算机或微型，可输入：计算机<span> or</span>微型</span></p><p><span>（d）</span><span>适用范围中包含计算机，不包含微型时，可输入：计算机<span> not</span>微型</span></p>",
		"标题":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>标题中包含计算机，可输入：计算机</span></p><p><span>（b）</span><span>标题中包含计算机和微型，可输入：计算机<span> and</span>微型</span></p><p><span>（c）</span><span>标题中包含计算机或微型，可输入：计算机<span> or</span>微型</span></p><p><span>（d）</span><span>标题中包含计算机，不包含微型时，可输入：计算机<span> not</span>微型</span></p>",
		"作者":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>作者为方华，可输入：方华</span></p><p><span>（b）</span><span>作者包含方华和刘洲，可输入：方华<span>and</span>刘洲</span></p>",
		"关键词":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>关键词中包含计算机，可输入：计算机</span></p><p><span>（b）</span><span>关键词中包含计算机和微型，可输入：计算机<span> and</span>微型</span></p><p><span>（c）</span><span>关键词中包含计算机或微型，可输入：计算机<span> or</span>微型</span></p><p><span>（d）</span><span>关键词中包含计算机，不包含微型时，可输入：计算机<span> not</span>微型</span></p>",
		"摘要":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>摘要中包含计算机，可输入：计算机</span></p><p><span>（b）</span><span>摘要中包含计算机和微型，可输入：计算机<span> and</span>微型</span></p><p><span>（c）</span><span>摘要中包含计算机或微型，可输入：计算机<span> or</span>微型</span></p><p><span>（d）</span><span>摘要中包含计算机，不包含微型时，可输入：计算机<span> not</span>微型</span></p>",
		"标题+摘要+关键词":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>标题、摘要或关键词中包含计算机，可输入：计算机</span></p><p><span>（b）</span><span>标题、摘要或关键词中包含计算机和微型，可输入：计算机<span> and</span>微型</span></p><p><span>（c）</span><span>标题、摘要或关键词中包含计算机或微型，可输入：计算机<span> or</span>微型</span></p><p><span>（d）</span><span>标题、摘要或关键词中包含计算机，不包含微型时，可输入：计算机<span> not</span>微型</span></p>",
		"学科分类":"<p><span>分类号可通过此入口查询到支持精确检索、模糊检索（模糊字符包括“？”和“<span>%</span>”，其中“？”代替单个字符、“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊）。模糊字符位于末尾时可省略不写。支持“<span>and,or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><ul><li><span>（a）</span><span>学科分类为<span>04_00</span>，可输入：<span>04_00</li><li><span>（b）</span><span>学科分类开始部分为<span>O4</span>，可输入：<span>O4</span>或<span>O4%</li></ul>",
		"中图分类":"<p><span>支持精确检索、模糊检索（模糊字符包括“？”和“<span>%</span>”，其中“？”代替单个字符、“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊）。模糊字符位于末尾时可省略不写。支持“<span>and,or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><ul><li><span>（a）</span><span>中图分类为<span>O647.31</span>，可输入：<span>O647.31</li><li><span>（b）</span><span>中图分类开始部分为<span>O64</span>，可输入：<span>O64</span>或<span>O64%</li></ul>",
		"JCR分类":"<p><span>支持精确检索、模糊检索（模糊字符包括“？”、“<span>#</span>”和“%”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and, or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><p><span>（a）</span><span><span>JCR</span>分类为<span>10-08</span>，可输入：<span>10-08</p><p><span>（b）</span><span><span>JCR</span>分类以<span>37</span>开头，可输入：<span>10</span>或<span>10%<br><br></p>",
		"ASJC分类":"<p><span>支持精确检索、模糊检索（模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and, or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><p><span>（a）</span><span><span>ASJC</span>分类为<span>11-01</span>，可输入：<span>11-01</p><p><span>（b）</span><span><span>ASJC</span>分类以<span>11</span>开头，可输入：<span>11</span>或<span>11%</p>",
		"CJCR分类":"<p><span>支持精确检索、模糊检索（模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and, or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><p><span>（a）</span><span><span>CJCR</span>分类为<span>01-01</span>，可输入：<span>01-01</p><p><span>（b）</span><span><span>CJCR</span>分类以<span>01</span>开头，可输入：<span>01</span>或<span>01%</p>",
		"作者单位":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>作者单位为清华大学，可输入：清华大学</span></p><p><span>（b）</span><span>作者单位中包含清华大学和中国科学院，可输入：清华大学<span>and</span>中国科学院</span></p>",
		"文献来源":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>文献来源中包含基金，可输入：基金</span></p><p><span>（b）</span><span>文献来源中包含基金和支持，可输入：基金<span> and</span>支持</span></p><p><span>（c）</span><span>文献来源中包含基金或支持，可输入：基金<span> or</span>支持</span></p>",
		"决定号":"<p><span></span><span>支持精确检索、模糊检索（模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and, or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><p><span>（a）</span><span>决定号为<span>16222</span>，可输入：<span>16222</p><p><span>（b）</span><span>决定号以<span>162</span>开头，可输入：<span>162</span>或<span>162%</p>",
		"名称":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>名称中包含计算机，可输入：计算机</span></p><p><span>（b）</span><span>名称中包含计算机和应用，可输入：计算机<span> and</span>应用</span></p><p><span>（c）</span><span>名称中包含计算机或应用，可输入：计算机<span> or</span>应用</span></p><p><span>（d）</span><span>名称中包含计算机，不包含应用时，可输入：计算机<span> not</span>应用</span></p>",
		"请求人":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>请求人为华为，可输入：华为</span></p><p><span>（b）</span><span>请求人中包含华为或中兴，可输入：华为<span> or</span>中兴</span></p>",
		"专利申请人":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>申请人为华为，可输入：华为</span></p><p><span>（b）</span><span>申请人中包含华为或中兴，可输入：华为<span> or</span>中兴</span></p>",
		"专利权人":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>作者单位为清华大学，可输入：清华大学</span></p><p><span>（b）</span><span>作者单位中包含清华大学和中国科学院，可输入：清华大学<span>and</span>中国科学院</span></p>",
		"IPC":"<p><span>支持精确检索、模糊检索（模糊字符包括“？”和“<span>%</span>”，其中“？”代替单个字符、“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊）。模糊字符位于末尾时可省略不写。支持“<span>and,or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><ul><li><span>（a）</span><span>分类号为<span>G06F15/16</span>，可输入：<span>G06F15/16</li><li><span>（b）</span><span>分类号开始部分为<span>G06F</span>，可输入：<span>G06F%</li><li><span>（c）</span><span>分类号前三个字符和中间三个字符分别为<span>G06</span>和<span>5/1</span>，可输入：<span>G06%5/1</li></ul>",
		"洛迦诺":"<p><span>支持精确检索、模糊检索（模糊字符包括“？”和“<span>%</span>”，其中“？”代替单个字符、“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊）。模糊字符位于末尾时可省略不写。支持“<span>and,or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><ul><li><span>（a）</span><span>分类号为<span>02-04</span>，可输入：<span>02-04</li><li><span>（b）</span><span>分类号开始部分为<span>02</span>，可输入：<span>02%</li><li><span>（c）</span><span>若分类号为<span>02-04</span>或<span>02-06</span>，可输入：<span>02-04 or 02-06</li></ul>",
		"合议组组长":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>合议组组长为张度，可输入：张度</span></p><p><span>（b）</span><span>合议组组长为张度或危峰，可输入：张度<span>or</span>危峰</span></p>",
		"主审员":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>主审员为徐晶晶，可输入：徐晶晶</span></p><p><span>（b）</span><span>主审员为徐晶晶或王刚，可输入：徐晶晶<span> or</span>王刚</span></p>",
		"参审员":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>参审员为刘小静，可输入：刘小静</span></p><p><span>（b）</span><span>参审员为刘小静或孟超，可输入：刘小静<span> or</span>孟超</span></p>",
		"决定日":"<p><span>决定日由年、月、日三部分组成，用八位日期进行检索，单月日用“<span>0</span>”补齐。 支持比较运算符“<span>=</span>、<span>!=</span>、<span>&gt;</span>、<span>&lt;</span>、<span>&gt;=</span>、<span>&lt;=</span>”和逻辑运算符“<span>and, or, not</span>”，支持运算符“<span>to”</span>。</span></p><p><span>检索示例：</span></p><p><span>（a）</span><span>决定日为<span>2010</span>年<span>10</span>月<span>10</span>日，可输入：<span>20101010</p><p><span>（b）</span><span>决定日为<span>2010</span>年<span>10</span>月，可输入：<span>201010</p><p><span>（c）</span><span>决定日为<span>2010</span>年某月<span>10</span>日，可输入：<span>2010%10</p><p><span>（d）</span><span>检索决定日为从<span>2010</span>年到<span>2011</span>年的信息，可输入：<span>2010to 2011</p>",
		"法律依据":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>法律依据中包含专利法第二十二，可输入：专利法第二十二条</span></p><p><span>（b）</span><span>法律依据中包含专利法第二十二条和专利法第二十六条，可输入：专利法第二十二条<span> and</span>专利法第二十六条</span></p>",
		"决定要点":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>决定要点中包含创造性，可输入：创造性</span></p><p><span>（b）</span><span>决定要点中包含创造性和新颖性，可输入：创造性<span> and</span>新颖性</span></p>",
		"决定类型":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>决定类型为复审决定，可输入：复审决定</span></p><p><span>（b）</span><span>决定类型为复审决定或无效决定，可输入：复审决定<span> or</span>无效决定</span></p>",
		"决定结果":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>决定结果为全部有效，可输入：全部有效</span></p><p><span>（b）</span><span>决定结果为全部有效或部分有效，可输入：全部有效<span>or</span>部分有效</span></p>",
		"专利申请号":"<p><span>支持精确检索、模糊检索（模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and, or, not</span>”逻辑运算。</span></p><p><span>检索示例：</span></p><p><span>（a）</span><span>申请号为<span>10328598</span>，可输入：<span>10328598</p><p><span>（b）</span><span>申请号以<span>1032</span>开头，可输入：<span>1032</span>或<span>1032%</p>",
		"专利类型":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>专利类型为发明，可输入：发明</span></p><p><span>（b）</span><span>专利类型为发明或实用新型，可输入：发明<span> or</span>实用新型</span></p>",
		"案号":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>案号中包含</span><span>民申字第</span><span>399</span><span>号</span><span>，可输入：</span><span>民申字第</span><span>399</span><span>号</span></p><p><span>（b）</span><span>案号中包含</span><span>民申字第</span><span>399</span><span>号或民申字第</span><span>400</span><span>号</span><span>，可输入：</span><span>民申字第</span><span>399</span><span>号</span><span> or</span><span>民申字第</span><span>400</span><span>号</span></p>",
	    "名称":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>名称中包含计算机，可输入：计算机</span></p><p><span>（b）</span><span>名称中包含计算机和应用，可输入：计算机<span> and</span>应用</span></p><p><span>（c）</span><span>名称中包含计算机或应用，可输入：计算机<span> or</span>应用</span></p><p><span>（d）</span><span>名称中包含计算机，不包含应用时，可输入：计算机<span> not</span>应用</span></p>",
	    "原告或上诉人":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>原告或上诉人为华为，可输入：华为</span></p><p><span>（b）</span><span>原告或上诉人中包含华为或中兴，可输入：华为<span> or</span>中兴</span></p>",
	    "被告或被上诉人":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>被告或被上诉人为华为，可输入：华为</span></p><p><span>（b）</span><span>被告或被上诉人中包含华为或中兴，可输入：华为<span> or</span>中兴</span></p>",
	    "原告代理机构":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>原告代理机构为柳沈律师事务所，可输入：柳沈律师事务所</span></p><p><span>（b）</span><span>原告代理机构中包含柳沈或港专，可输入：柳沈<span> or</span>港专</span></p>",
	    "被告代理机构":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>被告代理机构为柳沈律师事务所，可输入：柳沈律师事务所</span></p><p><span>（b）</span><span>被告代理机构中包含柳沈或港专，可输入：柳沈<span> or</span>港专</span></p>",
	    "法院名称":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>法院名称为北京市高级人民法院，可输入：北京市高级人民法院</span></p><p><span>（b）</span><span>法院名称为北京市高级人民法院或最高人民法院，可输入：北京市高级人民法院<span> or</span>最高人民法院</span></p>",
	    "审判长":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>审判长为</span><span>王亦非</span><span>，可输入：</span><span>王亦非</span></p><p><span>（b）</span><span>审判长为</span><span>王亦非或周平</span><span>，可输入：</span><span>王亦非</span><span> or</span><span>周平</span></p>",
	    "代理审判长":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>代理审判长为</span><span>张岚岚</span><span>，可输入：</span><span>张岚岚</span></p>",
	    "人民陪审员":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>人民陪审员为张中，可输入：</span><span>张中</span></p><p><span>（b）</span><span>人民陪审员为张中或王政，可输入：</span><span>张中</span><span> or</span><span>王政</span></p>",
	    "书记员":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>书记员为周圆，可输入：</span><span>周圆</span></p><p><span>（b）</span><span>书记员为周圆或周红，可输入：</span><span>周圆</span><span> or</span><span>周红</span></p>",
	    "案件类型":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>案件类型为专利，可输入：专利</span></p>",
	    "案由":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>案由中包含商标侵权纠纷，可输入：商标侵权纠纷</span></p><p><span>（b）</span><span>案由中包含商标侵权纠纷和计算机，可输入：商标侵权纠纷<span> and</span>计算机</span></p>",
	    "立案年":"<p><span>立案年通过四位的年份进行检索。支持比较运算符“<span>=</span>、<span>!=</span>、<span>&gt;</span>、<span>&lt;</span>、<span>&gt;=</span>、<span>&lt;=</span>”和逻辑运算符“<span>and,or, not</span>”，支持运算符“<span>to”</span>。</span></p><p><span>检索示例：</span></p><p><span>（a）</span><span>立案年为<span>2014</span>，可输入：<span>2014</p><p><span>（b）</span><span>检索立案年为从<span>2014</span>年到<span>2015</span>年的信息，可输入：<span>2014to 2015</p>",
	    "发文字号":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>发文字号中包含国务院令第<span>76</span>号，可输入：国务院令第<span>76</span>号</span></p>",
	    "法律名称":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>名称中包含专利代理条例，可输入：专利代理条例</span></p><p><span>（b）</span><span>名称中包含专利和条约，可输入：专利<span> and</span>条约</span></p>",
	    "发布部门":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>发布部门为国务院，可输入：国务院</span></p><p><span>（b）</span><span>发布部门中包含国务院或国家知识产权局，可输入：国务院<span> or</span>国家知识产权局</span></p>",
	    "法条名称":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>法条名称包含</span><strong><span>专利</span></strong><span>合作条约第十三条</span><span>，可输入：</span><strong><span>专利</span></strong><span>合作条约第十三条</span></p>",
	    "法条内容":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span><span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>法条内容包含</span><strong><span>专利</span></strong><span>合作条约第十三条</span><span>，可输入：</span><strong><span>专利</span></strong><span>合作条约第十三条</span></p>",
	    "实施日期":"<p><span>实施日由年、月、日三部分组成，用八位日期进行检索，单月日用“<span>0</span>”补齐。 支持比较运算符“<span>=</span>、<span>!=</span>、<span>&gt;</span>、<span>&lt;</span>、<span>&gt;=</span>、<span>&lt;=</span>”和逻辑运算符“<span>and, or, not</span>”，支持运算符“<span>to”</span>。</span></p><p><span>检索示例：</span></p><p><span>（a）</span><span>实施日为<span>2010</span>年<span>10</span>月<span>01</span>日，可输入：<span>20101001</p><p><span>（b）</span><span>实施日为<span>2010</span>年<span>10</span>月，可输入：<span>201010</p><p><span>（c）</span><span>实施日为<span>2010</span>年某月<span>10</span>日，可输入：<span>2010%10</p><p><span>（d）</span><span>检索实施日为从<span>2010</span>年到<span>2011</span>年的信息，可输入：<span>2010to 2011</p>",
	    
	    "登记号"        :"<p><span>支持精确检索、模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and, or, not</span>”逻辑运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>登记号为</span><span>2002SR0002</span>，<span>可输入</span>：<span>2002SR0002</span></p><p><span>（b）</span><span>登记号不连续的几位为</span><span>2002</span><span>和</span><span>000</span>，<span>可输入</span>：<span>2002%000%</span></p><p><span>（c）</span><span>逻辑运算</span>，<span>可输入</span>：<span>2002SR not 2002SR0001</span></p>",
	    "作品著作权登记号":"<p><span>支持精确检索、模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and, or, not</span>”逻辑运算。</p><p><span>检索示例：</span></p><p><span>a、作品著作权登记号为<span>07-2012-L-3022</span>，可输入：<span>07-2012-L-3022</span></span></p><p><span>b、作品著作权登记号以<span>07-2012-L-302</span>开头，可输入：<span>07-2012-L-302</span>或<span>07-2012-L-302%</span></span></p><p><span>c、逻辑运算，可输入：<span>07-2012-L-302% not 07-2012-L-3022</span></span></p>",
	    "版本号"        :"<p><span>支持精确检索、模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and, or, not</span>”逻辑运算。</p><p><sapn>检索示例：</span></p><p><span>（a）版本号为</span><span>V1.0</sapn><span>，可输入：</span><span>V1.0</span></p><p><span>（b）版本号以</span><span>V1</span>，<span>可输入</span>：<span>V1</span><span>或</span><span>V1%</span></p>",
	    "分类号"        :"<p><span>支持精确检索、模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and, or, not</span>”逻辑运算。</p><p><span>检索示例：</span></p><p><span>（a）</span><span>分类号为</span><span>11000-6000</span>，<span>可输入：</span><span>11000-6000</span></p><p><span>（b）分类号前以</span><span>11000-6</span><span>开头，可输入：</span><span>11000-6</span><span>或</span><span>11000-6%</span></p><p><span>（c）若检索分类号为</span><span>11000-6000</span><span>或</span><span>67500-7400</span>，<span>可输入：</span><span>11000-6000 or 67500-7400</span></p><p><span>（d）分类号前三个字符和中间三个字符分别为</span><span>67500</span><span>和</span><span>-74</span>，<span>可输入：</span><span>67500%-74</span></p>",
	    "软件著作权登记号":"<p><span>支持精确检索、模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符，暂不支持前向模糊），模糊字符位于末尾时可省略不写。支持“<span>and, or, not</span>”逻辑运算。</p><p><span>检索示例：</span></p><p><span>（a）软件著作权登记号为</span><span>2002SR0067</span>，<span>可输入：</span><span>2002SR0067</span></p><p><span>（b）软件著作权登记号以</span><span>2002SR00</span><span>开头</span>，<span>可输入：</span><span>2002SR006</span><span>或</span><span>2002SR006%</span></p>",
	    "登记日期"   :"<p><span>登记日由年、月、日三部分组成，用八位日期进行检索，单月日用“<span>0</span>”补齐。 支持比较运算符“<span>=</span>、<span>!=</span>、<span>&gt;</span>、<span>&lt;</span>、<span>&gt;=</span>、<span>&lt;=</span>”和逻辑运算符“<span>and, or, not</span>”，支持运算符“<span>to”</span>”。</p><p><span>检索示例：</span></p> <p><span>（a）登记日为</span><span>2010</span><span>年</span><span>10</span><span>月</span><span>10</span><span>日，可输入：</span><span>20101010</span></p><p><span>（b）登记日为</span><span>2010</span><span>年</span><span>10</span><span>月，可输入：</span><span>201010</span></p><p><span>（c）登记日为</span><span>2010</span><span>年某月</span><span>10</span><span>日，可输入：</span><span>2010%10</span></p><p><span>（d）检索登记日为从</span><span>2010</span><span>年到</span><span>2011</span><span>年的信息，可输入：</span><span>2010 to 2011</span></p>",
	    "首次发表日期":"<p><span>首次发表日由年、月、日三部分组成，用八位日期进行检索，单月日用“<span>0</span>”补齐。 支持比较运算符“<span>=</span>、<span>!=</span>、<span>&gt;</span>、<span>&lt;</span>、<span>&gt;=</span>、<span>&lt;=</span>”和逻辑运算符“<span>and, or, not</span>”，支持运算符“<span>to”</span>”。</p><p><span>检索示例：</span></p> <p><span>（a）首次发表日为</span><span>2010</span><span>年</span><span>10</span><span>月</span><span>10</span><span>日，可输入：</span><span>20101010</span></p><p><span>（b）首次发表日为</span><span>2010</span><span>年</span><span>10</span><span>月，可输入：</span><span>201010</span></p><p><span>（c）首次发表日为</span><span>2010</span><span>年某月</span><span>10</span><span>日，可输入：</span><span>2010%10</span></p><p><span>（d）检索首次发表日为从</span><span>2010</span><span>年到</span><span>2011</span><span>年的信息，可输入：</span><span>2010 to 2011</span></p>",
	    "撤销日期"   :"<p><span>撤销日由年、月、日三部分组成，用八位日期进行检索，单月日用“<span>0</span>”补齐。 支持比较运算符“<span>=</span>、<span>!=</span>、<span>&gt;</span>、<span>&lt;</span>、<span>&gt;=</span>、<span>&lt;=</span>”和逻辑运算符“<span>and, or, not</span>”，支持运算符“<span>to”</span>”。</p><p><span>检索示例：</span></p><p><span>（a）撤销日为</span><span>2010</span><span>年</span><span>10</span><span>月</span><span>10</span><span>日，可输入：</span><span>20101010</span></p><p><span>（b）撤销日为</span><span>2010</span><span>年</span><span>10</span><span>月，可输入：</span><span>201010</span></p><p><span>（c）撤销日为</span><span>2010</span><span>年某月</span><span>10</span><span>日，可输入：</span><span>2010%10</span></p><p><span>（d）检索撤销日为从</span><span>2010</span><span>年到</span><span>2011</span><span>年的信息，可输入：</span><span>2010 to 2011</span></p>",
	    "创作完成日期":"<p><span>创作完成日由年、月、日三部分组成，用八位日期进行检索，单月日用“<span>0</span>”补齐。 支持比较运算符“<span>=</span>、<span>!=</span>、<span>&gt;</span>、<span>&lt;</span>、<span>&gt;=</span>、<span>&lt;=</span>”和逻辑运算符“<span>and, or, not</span>”，支持运算符“<span>to”</span>”。</p><p><span>检索示例：</span></p><p><span>（a）创作完成日为</span><span>2010</span><span>年</span><span>10</span><span>月</span><span>10</span><span>日，可输入：</span><span>20101010</span></p><p><span>（b）创作完成日为</span><span>2010</span><span>年</span><span>10</span><span>月，可输入：</span><span>201010</span></p><p><span>（c）创作完成日为</span><span>2010</span><span>年某月</span><span>10</span><span>日，可输入：</span><span>2010%10</span></p><p><span>（d）检索创作完成日为从</span><span>2010</span><span>年到</span><span>2011</span><span>年的信息，可输入：</span><span>2010 to 2011</span></p>",
	    "发布日期"   :"<p><span>发布日由年、月、日三部分组成，用八位日期进行检索，单月日用“<span>0</span>”补齐。 支持比较运算符“<span>=</span>、<span>!=</span>、<span>&gt;</span>、<span>&lt;</span>、<span>&gt;=</span>、<span>&lt;=</span>”和逻辑运算符“<span>and, or, not</span>”，支持运算符“<span>to”</span>”。</p><p><span>检索示例：</span></p><p><span>（a）发布日为</span><span>2010</span><span>年</span><span>10</span><span>月</span><span>10</span><span>日，可输入：</span><span>20101010</span></p><p><span>（b）发布日为</span><span>2010</span><span>年</span><span>10</span><span>月，可输入：</span><span>201010</span></p><p><span>（c）发布日为</span><span>2010</span><span>年某月</span><span>10</span><span>日，可输入：</span><span>2010%10</span></p><p><span>（d）检索发布日为从</span><span>2010</span><span>年到</span><span>2011</span><span>年的信息，可输入：</span><span>2010 to 2011</span></p>",
	 "软件全称":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）软件全称中包含语音软件，可输入：语音软件</span></p><p><span>（b）软件全称中包含地利批发和软件，可输入：地利批发<span> and </span><span>软件</span></p><p><span>（c）软件全称中包含手机防盗或系统，可输入：手机防盗<span> or </span><span>系统</span></p><p><span>（d）软件全称中包含管理系统，不包含医院时，可输入：管理系统<span> not </span><span>医院</span></p><p><span>（e）已知软件全称中包含</span><span>computer</span><span>和</span><span>system</span><span>，可输入：</span><span>computer and system</span></p><p><span>（f）软件全称中包含“手机”和“软件”，且“手机”在“软件”之前，可输入：手机<span>%</span>软件</span></p><p><span>（g）软件全称中包含“汽车”和“化油器”，且“汽车”在“化油器”之前<span>0~5</span>个汉字，可输入：汽车<span>pre/5</span>化油器</span></p><p><span>（h）已知软件全称中包含<span>computer</span>和<span>soft</span>，且“<span>computer</span>”和“<span>soft</span>”之间相隔<span>0~5</span>个单词，可输入：<span>computer and/5 soft</span></span></p>",
	 "软件简称":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）软件简称中包含语音软件，可输入：语音软件</span></p><p><span>（b）软件简称中包含地利批发和软件，可输入：地利批发<span> and </span><span>软件</span></p><p><span>（c）软件简称中包含手机防盗或系统，可输入：手机防盗<span> or </span><span>系统</span></p><p><span>（d）软件简称中包含管理系统，不包含医院时，可输入：管理系统<span> not </span><span>医院</span></p><p><span>（e）已知软件简称中包含</span><span>computer</span><span>和</span><span>system</span><span>，可输入：</span><span>computer and system</span></p><p><span>（f）软件简称中包含“手机”和“软件”，且“手机”在“软件”之前，可输入：手机<span>%</span>软件</span></p><p><span>（g）软件简称中包含“汽车”和“化油器”，且“汽车”在“化油器”之前<span>0~5</span>个汉字，可输入：汽车<span>pre/5</span>化油器</span></p><p><span>（h）已知软件简称中包含<span>computer</span>和<span>soft</span>，且“<span>computer</span>”和“<span>soft</span>”之间相隔<span>0~5</span>个单词，可输入：<span>computer and/5 soft</span></span></p>",
	 "软件名称":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）软件名称中包含语音软件，可输入：语音软件</span></p><p><span>（b）软件名称中包含地利批发和软件，可输入：地利批发<span> and </span><span>软件</span></p><p><span>（c）软件名称中包含手机防盗或系统，可输入：手机防盗<span> or </span><span>系统</span></p><p><span>（d）软件名称中包含管理系统，不包含医院时，可输入：管理系统<span> not </span><span>医院</span></p><p><span>（e）已知软件名称中包含</span><span>computer</span><span>和</span><span>system</span><span>，可输入：</span><span>computer and system</span></p><p><span>（f）软件名称中包含“手机”和“软件”，且“手机”在“软件”之前，可输入：手机<span>%</span>软件</span></p><p><span>（g）软件名称中包含“汽车”和“化油器”，且“汽车”在“化油器”之前<span>0~5</span>个汉字，可输入：汽车<span>pre/5</span>化油器</span></p><p><span>（h）已知软件名称中包含<span>computer</span>和<span>soft</span>，且“<span>computer</span>”和“<span>soft</span>”之间相隔<span>0~5</span>个单词，可输入：<span>computer and/5 soft</span></span></p>",
   "原软件名称":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>（a）原软件名称中包含语音软件，可输入：语音软件</span></p><p><span>（b）原软件名称中包含地利批发和软件，可输入：地利批发<span> and </span><span>软件</span></p><p><span>（c）原软件名称中包含手机防盗或系统，可输入：手机防盗<span> or </span><span>系统</span></p><p><span>（d）原软件名称中包含管理系统，不包含医院时，可输入：管理系统<span> not </span><span>医院</span></p><p><span>（e）已知原软件名称中包含</span><span>computer</span><span>和</span><span>system</span><span>，可输入：</span><span>computer and system</span></p><p><span>（f）原软件名称中包含“手机”和“软件”，且“手机”在“软件”之前，可输入：手机<span>%</span>软件</span></p><p><span>（g）原软件名称中包含“汽车”和“化油器”，且“汽车”在“化油器”之前<span>0~5</span>个汉字，可输入：汽车<span>pre/5</span>化油器</span></p><p><span>（h）已知原软件名称中包含<span>computer</span>和<span>soft</span>，且“<span>computer</span>”和“<span>soft</span>”之间相隔<span>0~5</span>个单词，可输入：<span>computer and/5 soft</span></span></p>",
	 "撤销原因":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、撤消原因中包含登记内容存在偏差，可输入：登记内容存在偏差</span></p><p><span>b、撤消原因中包含软件名称和有误，可输入：软件名称<span> and </span>有误</span></p><p><span>c、撤消原因中包含有误或提交错误，可输入：有误<span> or </span>提交错误</span></p><p><span>d、撤消原因中包含有误，不包含提交错误时，可输入：有误<span> not </span>提交错误</span></p><p><span>e、撤消原因中包含“原登记者”和“不是著作权人”，且“原登记者”在“不是著作权人”之前，可输入：内容<span>%</span>不是著作权人</span></p>",
	 "变更事项":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、变更事项中包含软件名称，可输入：软件名称</span></p><p><span>b、变更事项中包含软件和名称，可输入：软件<span> and </span>名称</span></p><p><span>c、变更事项中包含著作权人姓名或名称，可输入：著作权人姓名<span> or </span>名称</span></p><p><span>d、变更事项中包含软件，不包含全称时，可输入：软件<span> not </span>全称</span></p><p><span>e、变更事项中包含“著作权人”和“名称”，且“著作权人”在“名称”之前，可输入：著作权人<span>%</span>名称</span></p>",
	 "补充事项":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、补充事项中包含软件名称，可输入：软件名称</span></p><p><span>b、补充事项中包含软件和名称，可输入：软件<span> and </span>名称</span></p><p><span>c、补充事项中包含著作权人姓名或名称，可输入：著作权人姓名<span> or </span>名称</span></p><p><span>d、补充事项中包含软件，不包含全称时，可输入：软件<span> not </span>全称</span></p><p><span>e、补充事项中包含“著作权人”和“名称”，且“著作权人”在“名称”之前，可输入：著作权人<span>%</span>名称</span></p>",
	  "变更前":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、变更前中包含计算机，可输入：计算机</span></p><p><span>b、变更前中包含计算机和应用，可输入：计算机<span> and </span>应用</span></p><p><span>c、变更前中包含计算机或控制，可输入：计算机<span> or </span>控制</span></p><p><span>d、变更前中包含有限公司，不包含股份时，可输入：有限公司<span> not </span>股份</span></p><p><span>e、变更前中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数</span></p><p><span>f、变更前中包含<span>computer</span>和<span>System</span>，可输入：<span>computer and system</span></span></p>",
	  "变更后":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、变更后中包含计算机，可输入：计算机</span></p><p><span>b、变更后中包含计算机和应用，可输入：计算机<span> and </span>应用</span></p><p><span>c、变更后中包含计算机或控制，可输入：计算机<span> or </span>控制</span></p><p><span>d、变更后中包含有限公司，不包含股份时，可输入：有限公司<span> not </span>股份</span></p><p><span>e、变更后中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数</span></p><p><span>f、变更后中包含<span>computer</span>和<span>System</span>，可输入：<span>computer and system</span></span></p>",
	  "补充前":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、补充前中包含计算机，可输入：计算机</span></p><p><span>b、补充前中包含计算机和应用，可输入：计算机<span> and </span>应用</span></p><p><span>c、补充前中包含计算机或控制，可输入：计算机<span> or </span>控制</span></p><p><span>d、补充前中包含有限公司，不包含股份时，可输入：有限公司<span> not </span>股份</span></p><p><span>e、补充前中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数</span></p><p><span>f、补充前中包含<span>computer</span>和<span>System</span>，可输入：<span>computer and system</span></span></p>",
	  "补充后":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、补充后中包含计算机，可输入：计算机</span></p><p><span>b、补充后中包含计算机和应用，可输入：计算机<span> and </span>应用</span></p><p><span>c、补充后中包含计算机或控制，可输入：计算机<span> or </span>控制</span></p><p><span>d、补充后中包含有限公司，不包含股份时，可输入：有限公司<span> not </span>股份</span></p><p><span>e、补充后中包含“闸瓦”和“摩擦系数”，且“闸瓦”在“摩擦系数”之前，可输入：闸瓦<span>%</span>摩擦系数</span></p><p><span>f、补充后中包含<span>computer</span>和<span>System</span>，可输入：<span>computer and system</span></span></p>",
"变更或补充事项":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、补充事项中包含软件名称，可输入：软件名称</span></p><p><span>b、补充事项中包含软件和名称，可输入：软件<span> and </span>名称</span></p><p><span>c、补充事项中包含著作权人姓名或名称，可输入：著作权人姓名<span> or </span>名称</span></p><p><span>d、补充事项中包含软件，不包含简称时，可输入：软件<span> not </span>简称</span></p><p><span>e、补充事项中包含“首次发表”和“日期”，且“首次发表”在“日期”之前，可输入：首次发表<span>%</span>日期</span></p>",
	  "转让方":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、转让方中包含张力立，可输入：张力立</span></p> <p><span>b、转让方中包含顾学平和曹光群，可输入：顾学平<span> and </span>曹光群</span></p><p><span>c、转让方中包含吴伟南或李会民，可输入：吴伟南<span> or </span>李会民</span></p><p><span>d、已知转让方中包含<span>Hyun</span>或<span>Hyeok</span>，可输入：<span>Hyun or Hyeok</span></span></p>",
	  "受让方":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、受让方中包含张力立，可输入：张力立</span></p> <p><span>b、受让方中包含顾学平和曹光群，可输入：顾学平<span> and </span>曹光群</span></p><p><span>c、受让方中包含吴伟南或李会民，可输入：吴伟南<span> or </span>李会民</span></p><p><span>d、已知受让方中包含<span>Hyun</span>或<span>Hyeok</span>，可输入：<span>Hyun or Hyeok</span></span></p>",
	"原登记者":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、原登记者中包含张力立，可输入：张力立</span></p><p><span>b、原登记者中包含顾学平和曹光群，可输入：顾学平<span> and </span>曹光群</span></p><p><span>c、原登记者中包含吴伟南或李会民，可输入：吴伟南<span> or </span>李会民</span></p><p><span>d、原登记者中包含<span>Hyun</span>或<span>Hyeok</span>，可输入：<span>Hyun or Hyeok</span></span></p>",
 "著作权人":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、著作权人中包含张力立，可输入：张力立</span></p><p><span>b、著作权人中包含财务和公司，可输入：财务<span> and </span>公司</span></p><p><span>c、著作权人中包含财务或责任，可输入：财务<span> or </span>责任</span></p><p><span>d、著作权人中包含<span>LEGO</span>或<span>System</span>，可输入：<span>LEGO or System</span></span></p>",
	"作品名称":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、作品名称中包含互动百科，可输入：互动百科</span></p><p><span>b、作品名称包含计算机和应用，可输入：计算机<span> and </span>应用</span></p><p><span>c、作品名称包含互动或百科，可输入：互动<span> or </span>百科</span></p><p><span>d、作品名称包含管理系统，不包含医院时，可输入：管理系统<span> not </span>医院</span></p><p><span>e、作品名称中包含“汽车”和“化油器”，且“汽车”在“化油器”之前<span>0~5</span>个汉字，可输入：汽车<span>pre/5</span>化油器</span></p><p><span>f、已知作品名称中包含<span>computer</span>和<span>system</span>，可输入：<span>computer and system</span></span></p><p><span>g、已知作品名称中包含<span>computer</span>和<span>soft</span>，且“<span>computer</span>”和“<span>soft</span>”之间相隔0~5个单词，可输入：<span>computer and/5 soft</span></span></p>",
	"著作权人":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、著作权人中包含张力立，可输入：张力立</span></p><p><span>b、著作权人中包含财务和公司，可输入：财务<span> and </span>公司</span></p><p><span>c、著作权人中包含财务或责任，可输入：财务<span> or </span>责任</span></p><p><span>d、著作权人中包含<span>LEGO</span>或<span>System</span>，可输入：<span>LEGO or System</span></span></p>",
	"作品类别":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、作品类别中包含文字，可输入：文字</span></p><p><span>b、作品类别中包含文字或美术，可输入文字<span> or </span>美术</span></p>",
	   "国籍":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、国籍中包含中国，可输入：中国</span></p><p><span>b、国籍中包含中国和香港，可输入：中国<span> and </span>香港</span></p><p><span>c、国籍中包含中国或美国，可输入：中国<span> or </span>美国</span></p>",
	   "省份":"<p><span>支持精确检索和模糊检索。精确、检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、省份中包含河北省，可输入：河北省</span></p><p><span>b、省份中包含海或广，可输入海<span> or </span>广</span></p><p><span>c、省份中包含南不包含海南，可输入：南<span> not </span>海南</span></p>",
	   "城市":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例： </span></p><p><span>a、城市中包含北京市，可输入：北京市</span></p><p><span>b、城市中包含海或广，可输入海<span> or </span>广</span></p>",
	   "作者":"<p><span>支持精确检索和模糊检索。精确检索时需用单引号括起检索内容。支持模糊检索（</span>模糊字符包括“？”、“<span>#</span>”和“<span>%</span>”，其中“？”代替单个字符、“<span>#</span>” 代替<span>0~1</span>个字符，“<span>%</span>”代替词尾单个或多个字符<span>）</span>。支持“<span>and, or, not</span>”逻辑运算和“<span>and, pre</span>”属性运算。</p><p><span>检索示例：</span></p><p><span>a、作者中包含张力立，可输入：张力立</span></p><p><span>b、作者中包含顾学平和曹光群，可输入：顾学平<span> and </span>曹光群</span></p> <p><span>c、作者中包含吴伟南或李会民，可输入：吴伟南<span> or </span>李会民</span></p><p><span>d、作者中包含<span>Hyun</span>或<span>Hyeok</span>，可输入：<span>Hyun or Hyeok</span></span></p>"
};

// 代码集根节点

// ipcTree 关键字radioBox样式更改 中文
var zIPCCnNodes = [ {
	num : "A",
	name : "A 部——人类生活必需",
	id : "EABA2BA0ED115A39724B9E4E7286E76D",
	isParent : true,
	pId : "0"
}, {
	num : "B",
	name : "B 部——作业；运输",
	id : "AB18FF5A7B443A08A07093BC42D70EA4",
	isParent : true,
	pId : "0"
}, {
	num : "C",
	name : "C 部——化学；冶金",
	id : "95F48E79D9B615E35635041DFAA674BF",
	isParent : true,
	pId : "0"
}, {
	num : "D",
	name : "D 部——纺织；造纸",
	id : "D1370BEB84ECEB9AD2B167DAF096CD33",
	isParent : true,
	pId : "0"
}, {
	num : "E",
	name : "E 部——固定建筑物",
	id : "34EEC9415FBDE08B12134B9F8C5B192E",
	isParent : true,
	pId : "0"
}, {
	num : "F",
	name : "F 部——机械工程；照明；加热；武器；爆破",
	id : "6A3FF79395C8E65A18F295B1E302FBF9",
	isParent : true,
	pId : "0"
}, {
	num : "G",
	name : "G 部——物理",
	id : "27F6B13AFB18ADA4A2903067AD447FD9",
	isParent : true,
	pId : "0"
}, {
	num : "H",
	name : "H 部——电学",
	id : "B0879D27B6BD50E8B06644C97DA284C3",
	isParent : true,
	pId : "0"
} ];
// 英文
var zIPCEnNodes = [ {
	num : "A",
	name : "SECTION A  HUMAN NECESSITIES",
	id : "EABA2BA0ED115A39724B9E4E7286E76D",
	isParent : true,
	pId : "0"
}, {
	num : "B",
	name : "SECTION B  PERFORMING OPERATIONS;TRANSPORTING ",
	id : "AB18FF5A7B443A08A07093BC42D70EA4",
	isParent : true,
	pId : "0"
}, {
	num : "C",
	name : "SECTION C  CHEMISTRY;METALLURGY",
	id : "95F48E79D9B615E35635041DFAA674BF",
	isParent : true,
	pId : "0"
}, {
	num : "D",
	name : "SECTION D  TEXTILES;PAPER",
	id : "D1370BEB84ECEB9AD2B167DAF096CD33",
	isParent : true,
	pId : "0"
}, {
	num : "E",
	name : "SECTION E  FIXED CONSTRUCTIONS",
	id : "34EEC9415FBDE08B12134B9F8C5B192E",
	isParent : true,
	pId : "0"
}, {
	num : "F",
	name : "SECTION F  MECHANICAL ENGINEERING;LIGHTING;HEATING;WEAPONS;BLASTING",
	id : "6A3FF79395C8E65A18F295B1E302FBF9",
	isParent : true,
	pId : "0"
}, {
	num : "G",
	name : "SECTION G  PHYSICS",
	id : "27F6B13AFB18ADA4A2903067AD447FD9",
	isParent : true,
	pId : "0"
}, {
	num : "H",
	name : "SECTION H  ELECTRICITY",
	id : "B0879D27B6BD50E8B06644C97DA284C3",
	isParent : true,
	pId : "0"
} ];

// ftermTree

var zFTERMNodes = [ {
	num : "2B",
	name : "2B",
	id : "2B",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "2C",
	name : "2C",
	id : "2C",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "2D",
	name : "2D",
	id : "2D",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "2E",
	name : "2E",
	id : "2E",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "2F",
	name : "2F",
	id : "2F",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "2G",
	name : "2G",
	id : "2G",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "2H",
	name : "2H",
	id : "2H",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "2K",
	name : "2K",
	id : "2K",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "3B",
	name : "3B",
	id : "3B",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "3C",
	name : "3C",
	id : "3C",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "3D",
	name : "3D",
	id : "3D",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "2E",
	name : "2E",
	id : "2E",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "3F",
	name : "3F",
	id : "3F",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "3G",
	name : "3G",
	id : "3G",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "3H",
	name : "3H",
	id : "3H",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "3J",
	name : "3J",
	id : "3J",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "3K",
	name : "3K",
	id : "3K",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "3L",
	name : "3L",
	id : "3L",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "4B",
	name : "4B",
	id : "4B",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "4C",
	name : "4C",
	id : "4C",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "4D",
	name : "4D",
	id : "4D",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "4E",
	name : "4E",
	id : "4E",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "4F",
	name : "4F",
	id : "4F",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "4G",
	name : "4G",
	id : "4G",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "4H",
	name : "4H",
	id : "4H",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "4J",
	name : "4J",
	id : "4J",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "4K",
	name : "4K",
	id : "4K",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "4L",
	name : "4L",
	id : "4L",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "5B",
	name : "5B",
	id : "5B",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "5C",
	name : "5C",
	id : "5C",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "5D",
	name : "5D",
	id : "5D",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "5E",
	name : "5E",
	id : "5E",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "5F",
	name : "5F",
	id : "5F",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "5G",
	name : "5G",
	id : "5G",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "5H",
	name : "5H",
	id : "5H",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "5J",
	name : "5J",
	id : "5J",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "5K",
	name : "5K",
	id : "5K",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "5M",
	name : "5M",
	id : "5M",
	isParent : true,
	pId : "0",
	nocheck : true
} ];

var zUSPCNodes = [ {
	num : "0-99",
	name : "001-099",
	id : "0",
	isParent : true,
	nocheck : true
}, {
	num : "100-199",
	name : "100-199",
	id : "0",
	isParent : true,
	nocheck : true
}, {
	num : "200-299",
	name : "200-299",
	id : "0",
	isParent : true,
	nocheck : true
}, {
	num : "300-399",
	name : "300-399",
	id : "0",
	isParent : true,
	nocheck : true
}, {
	num : "400-499",
	name : "400-499",
	id : "0",
	isParent : true,
	nocheck : true
}, {
	num : "500-599",
	name : "500-599",
	id : "0",
	isParent : true,
	nocheck : true
}, {
	num : "600-699",
	name : "600-699",
	id : "0",
	isParent : true,
	nocheck : true
}, {
	num : "700-799",
	name : "700-799",
	id : "0",
	isParent : true,
	nocheck : true
}, {
	num : "800-899",
	name : "800-899",
	id : "0",
	isParent : true,
	nocheck : true
}, {
	num : "900-999",
	name : "900-999",
	id : "0",
	isParent : true,
	nocheck : true
}, {
	num : "OTHER",
	name : "OTHER",
	id : "0",
	isParent : true,
	nocheck : true
} ];

// cpcTree
var zCPCNodes = [
		{
			num : "A",
			name : "A HUMAN NECESSITIES",
			id : "1",
			isParent : true,
			pId : "0"
		},
		{
			num : "B",
			name : "B PERFORMING OPERATIONS;TRANSPORTING",
			id : "2",
			isParent : true,
			pId : "0"
		},
		{
			num : "C",
			name : "C CHEMISTRY;METALLURGY",
			id : "3",
			isParent : true,
			pId : "0"
		},
		{
			num : "D",
			name : "D TEXTILES;PAPER",
			id : "4",
			isParent : true,
			pId : "0"
		},
		{
			num : "E",
			name : "E FIXED CONSTRUCTIONS",
			id : "5",
			isParent : true,
			pId : "0"
		},
		{
			num : "F",
			name : "F MECHANICAL ENGINEERING;LIGHTING...",
			id : "6",
			isParent : true,
			pId : "0"
		},
		{
			num : "G",
			name : "G PHYSICS",
			id : "7",
			isParent : true,
			pId : "0"
		},
		{
			num : "H",

			name : "H ELECTRICITY",
			id : "8",
			isParent : true,
			pId : "0"
		},
		{
			num : "Y",
			name : "Y GENERAL TAGGING OF...",
			title : "Y GENERAL TAGGING OF NEW TECHNOLOGICAL DEVELOPMENTS;GENERAL TAGGING OF CROSS-SECTIONAL TECHNOLOGIES SPANNING OVER SEVERAL SECTIONS OF THE IPC;TECHNICAL SUBJECTS COVERED BY FORMER USPC CROSS-REFERENCE ART COLLECTIONS [XRACs] AND DIGESTS ",
			id : "9",
			isParent : true,
			pId : "0"
		} ];
// ucTree
var zUCNodes = [
		{
			num : "A",
			name : "A HUMAN NECESSITIES",
			id : "1",
			isParent : true,
			pId : "0"
		},
		{
			num : "B",
			name : "B PERFORMING OPERATIONS;TRANSPORTING",
			id : "2",
			isParent : true,
			pId : "0"
		},
		{
			num : "C",
			name : "C CHEMISTRY;METALLURGY",
			id : "3",
			isParent : true,
			pId : "0"
		},
		{
			num : "D",
			name : "D TEXTILES;PAPER",
			id : "4",
			isParent : true,
			pId : "0"
		},
		{
			num : "E",
			name : "E FIXED CONSTRUCTIONS",
			id : "5",
			isParent : true,
			pId : "0"
		},
		{
			num : "F",
			name : "F MECHANICAL ENGINEERING;LIGHTING...",
			id : "6",
			isParent : true,
			pId : "0"
		},
		{
			num : "G",
			name : "G PHYSICS",
			id : "7",
			isParent : true,
			pId : "0"
		},
		{
			num : "H",
			name : "H ELECTRICITY",
			id : "8",
			isParent : true,
			pId : "0"
		},
		{
			num : "Y",
			name : "Y GENERAL TAGGING OF...",
			title : "Y GENERAL TAGGING OF NEW TECHNOLOGICAL DEVELOPMENTS;GENERAL TAGGING OF CROSS-SECTIONAL TECHNOLOGIES SPANNING OVER SEVERAL SECTIONS OF THE IPC;TECHNICAL SUBJECTS COVERED BY FORMER USPC CROSS-REFERENCE ART COLLECTIONS [XRACs] AND DIGESTS ",
			id : "9",
			isParent : true,
			pId : "0"
		} ];
// fiTree 英文
var zFIEnNodes = [ {
	num : "A",
	name : "A SECTION A &mdash; HUMAN NECESSITIES",
	id : "1",
	isParent : true,
	pId : "0"
}, {
	num : "B",
	name : "B SECTION B &mdash; PERFORMING OPERATIONS; TRANSPORTING ",
	id : "2",
	isParent : true,
	pId : "0"
}, {
	num : "C",
	name : "C SECTION C &mdash; CHEMISTRY; METALLURGY ",
	id : "3",
	isParent : true,
	pId : "0"
}, {
	num : "D",
	name : "D SECTION D &mdash; TEXTILES; PAPER",
	id : "4",
	isParent : true,
	pId : "0"
}, {
	num : "E",
	name : "E SECTION E &mdash; FIXED CONSTRUCTIONS",
	id : "5",
	isParent : true,
	pId : "0"
}, {
	num : "F",
	name : "F SECTION F &mdash; MECHANICAL ENGINEERING; LIGHTING; HEATING; WEAPONS; BLASTING",
	id : "6",
	isParent : true,
	pId : "0"
}, {
	num : "G",
	name : "G SECTION G &mdash; PHYSICS",
	id : "7",
	isParent : true,
	pId : "0"
}, {
	num : "H",
	name : "H SECTION H &mdash; ELECTRICITY",
	id : "8",
	isParent : true,
	pId : "0"
} ];
// 日文
var zFIJpNodes = [ {
	num : "A",
	name : "A 生活必需品",
	id : "1",
	isParent : true,
	pId : "0"
}, {
	num : "B",
	name : "B 処理操作；運輸  ",
	id : "2",
	isParent : true,
	pId : "0"
}, {
	num : "C",
	name : "C 化学；冶金 ",
	id : "3",
	isParent : true,
	pId : "0"
}, {
	num : "D",
	name : "D 繊維；紙",
	id : "4",
	isParent : true,
	pId : "0"
}, {
	num : "E",
	name : "E 固定構造物",
	id : "5",
	isParent : true,
	pId : "0"
}, {
	num : "F",
	name : "F 機械工学；照明；加熱；武器；爆破",
	id : "6",
	isParent : true,
	pId : "0"
}, {
	num : "G",
	name : "G 物理学",
	id : "7",
	isParent : true,
	pId : "0"
}, {
	num : "H",
	name : "H 電気",
	id : "8",
	isParent : true,
	pId : "0"
} ];
// 国民经济类
var zGMCnNodes = [ {
	num : "A",
	name : "A 农、林、牧、渔业",
	id : "1",
	isParent : true,
	pId : "0"
}, {
	num : "B",
	name : "B 采矿业 ",
	id : "2",
	isParent : true,
	pId : "0"
}, {
	num : "BE",
	name : "BE 生物质能 ",
	id : "3",
	isParent : true,
	pId : "0"
}, {
	num : "C",
	name : "C 制造业",
	id : "4",
	isParent : true,
	pId : "0"
}, {
	num : "D",
	name : "D 电力、热力、燃气及水生产和供应业",
	id : "5",
	isParent : true,
	pId : "0"
}, {
	num : "E",
	name : "E 建筑业",
	id : "6",
	isParent : true,
	pId : "0"
}, {
	num : "F",
	name : "F 批发和零售业",
	id : "7",
	isParent : true,
	pId : "0"
}, {
	num : "G",
	name : "G 交通运输、仓储和邮政业",
	id : "8",
	isParent : true,
	pId : "0"
}, {
	num : "GE",
	name : "GE 地热能",
	id : "9",
	isParent : true,
	pId : "0"
}, {
	num : "H",
	name : "H 住宿和餐饮业",
	id : "10",
	isParent : true,
	pId : "0"
}, {
	num : "HE",
	name : "HE 氢能",
	id : "11",
	isParent : true,
	pId : "0"
}, {
	num : "I",
	name : "I 信息传输、软件和信息技术服务业",
	id : "12",
	isParent : true,
	pId : "0"
}, {
	num : "J",
	name : "J 金融业",
	id : "13",
	isParent : true,
	pId : "0"
}, {
	num : "K",
	name : "K 房地产业",
	id : "14",
	isParent : true,
	pId : "0"
}, {
	num : "L",
	name : "L 租赁和商务服务业 ",
	id : "15",
	isParent : true,
	pId : "0"
}, {
	num : "M",
	name : "M 科学研究和技术服务业",
	id : "16",
	isParent : true,
	pId : "0"
}, {
	num : "N",
	name : "N 水利、环境和公共设施管理业",
	id : "17",
	isParent : true,
	pId : "0"
}, {
	num : "NE",
	name : "NE 核能",
	id : "18",
	isParent : true,
	pId : "0"
}, {
	num : "O",
	name : "O 居民服务、修理和其他服务业",
	id : "19",
	isParent : true,
	pId : "0"
}, {
	num : "OE",
	name : "OE 海洋能",
	id : "20",
	isParent : true,
	pId : "0"
}, {
	num : "ONE",
	name : "ONE 其他新能源 ",
	id : "21",
	isParent : true,
	pId : "0"
}, {
	num : "P",
	name : "P 教育",
	id : "22",
	isParent : true,
	pId : "0"
}, {
	num : "Q",
	name : "Q 卫生和社会工作",
	id : "23",
	isParent : true,
	pId : "0"
}, {
	num : "R",
	name : "R 文化、体育和娱乐业",
	id : "24",
	isParent : true,
	pId : "0"
}, {
	num : "S",
	name : "S 公共管理、社会保障和社会组织 ",
	id : "25",
	isParent : true,
	pId : "0"
}, {
	num : "SE",
	name : "SE 太阳能 ",
	id : "26",
	isParent : true,
	pId : "0"
}, {
	num : "T",
	name : "T 国际组织",
	id : "27",
	isParent : true,
	pId : "0"
}, {
	num : "WE",
	name : "WE 风能",
	id : "28",
	isParent : true,
	pId : "0"
} ];
// 国民经济类
var zGMEnNodes = [ {
	num : "A",
	name : "A agricultural , forest , thrips , fishery",
	id : "1",
	isParent : true,
	pId : "0"
}, {
	num : "B",
	name : "B mining ",
	id : "2",
	isParent : true,
	pId : "0"
}, {
	num : "BE",
	name : "BE Biomass energy  ",
	id : "3",
	isParent : true,
	pId : "0"
}, {
	num : "C",
	name : "C Manufacturing",
	id : "4",
	isParent : true,
	pId : "0"
}, {
	num : "D",
	name : "D The power , heat , gas and water production and the it should be it",
	id : "5",
	isParent : true,
	pId : "0"
}, {
	num : "E",
	name : "E construction",
	id : "6",
	isParent : true,
	pId : "0"
}, {
	num : "F",
	name : "F Wholesale and retail",
	id : "7",
	isParent : true,
	pId : "0"
}, {
	num : "G",
	name : "G Traffic transport , warehousing and mail business",
	id : "8",
	isParent : true,
	pId : "0"
}, {
	num : "GE",
	name : "GE Ground thermal energy",
	id : "9",
	isParent : true,
	pId : "0"
}, {
	num : "H",
	name : "H Accommodation and catering",
	id : "10",
	isParent : true,
	pId : "0"
}, {
	num : "HE",
	name : "HE Hydrogen energy",
	id : "11",
	isParent : true,
	pId : "0"
}, {
	num : "I",
	name : "I Information transmission , software and information technology services",
	id : "12",
	isParent : true,
	pId : "0"
}, {
	num : "J",
	name : "J the financial industry",
	id : "13",
	isParent : true,
	pId : "0"
}, {
	num : "K",
	name : "K real estate industry ",
	id : "14",
	isParent : true,
	pId : "0"
}, {
	num : "L",
	name : "L Rental and business services ",
	id : "15",
	isParent : true,
	pId : "0"
}, {
	num : "M",
	name : "M Scientific research and technical services",
	id : "16",
	isParent : true,
	pId : "0"
}, {
	num : "N",
	name : "N Hydrology , environmental and public facilities the tube it it",
	id : "17",
	isParent : true,
	pId : "0"
}, {
	num : "NE",
	name : "NE Nuclear",
	id : "18",
	isParent : true,
	pId : "0"
}, {
	num : "O",
	name : "O Other services residential service , repair and",
	id : "19",
	isParent : true,
	pId : "0"
}, {
	num : "OE",
	name : "OE ocean energy",
	id : "20",
	isParent : true,
	pId : "0"
}, {
	num : "ONE",
	name : "ONE Other new energy ",
	id : "21",
	isParent : true,
	pId : "0"
}, {
	num : "P",
	name : "P Educational",
	id : "22",
	isParent : true,
	pId : "0"
}, {
	num : "Q",
	name : "Q Health and Social work",
	id : "23",
	isParent : true,
	pId : "0"
}, {
	num : "R",
	name : "R Culture , sports and entertainment industry",
	id : "24",
	isParent : true,
	pId : "0"
}, {
	num : "S",
	name : "S Common Management , social security and social organization",
	id : "25",
	isParent : true,
	pId : "0"
}, {
	num : "SE",
	name : "SE The solar",
	id : "26",
	isParent : true,
	pId : "0"
}, {
	num : "T",
	name : "T International",
	id : "27",
	isParent : true,
	pId : "0"
}, {
	num : "WE",
	name : "WE Wind energy",
	id : "28",
	isParent : true,
	pId : "0"
} ];

// 法律状态代码集
var zLawNodes = [ {
	id : '1EC',
	num : '1EC',
	name : '专利实施许可合同的备案',
	isParent : 'true'
}, {
	id : '0FBA0S7887011D14',
	num : '4LD',
	name : '专利权、申请权的质押、保全及解除',
	isParent : 'true'
}, {
	id : '0FBA0S788G011D17',
	num : '1RR',
	name : '专利权恢复',
	isParent : 'true'
}, {
	id : '0FBA0S7896011D2C',
	num : '1LD',
	name : '专利权的质押、保全及其解除',
	isParent : 'true'
}, {
	id : '0FBA0S789Q011D48',
	num : '1TR',
	name : '专利权的转移',
	isParent : 'true'
}, {
	id : '0FBA0S78A6011D57',
	num : '2CF',
	name : '专利权终止',
	isParent : 'true'
}, {
	id : '0FBA0S78AM011D73',
	num : '4TR',
	name : '专利申请权、专利权的转移',
	isParent : 'true'
}, {
	id : '0FBA0S78B0011D75',
	num : '4CN',
	name : '修改',
	isParent : 'true'
}, {
	id : '0FBA0S78C1011D79',
	num : '2RW',
	name : '全部撤销',
	isParent : 'true'
}, {
	id : '0FBA0S78CD011D87',
	num : '3PB',
	name : '公开	',
	isParent : 'true'
}, {
	id : '0FBA0S78CL011D89',
	num : '5OR',
	name : '其它有关事项',
	isParent : 'true'
}, {
	id : '0FBA0S78CT011D8C',
	num : '1CI',
	name : '发明专利更正',
	isParent : 'true'
}, {
	id : '0FBA0S78DA011DA1',
	num : '1CB',
	name : '变更',
	isParent : 'true'
}, {
	id : '0FBA0S78DI011DA6',
	num : '1CD',
	name : '外观设计专利更正',
	isParent : 'true'
}, {
	id : '0FBA0S78DQ011DAB',
	num : '2CD',
	name : '外观设计公报更正',
	isParent : 'true'
}, {
	id : '0FBA0S78E1011DAF',
	num : '1CU',
	name : '实用新型专利更正  ',
	isParent : 'true'
}, {
	id : '0FBA0S78EJ011DC9',
	num : '3SE',
	name : '实质审查',
	isParent : 'true'
}, {
	id : '0FBA0S78F9011DCF',
	num : '5RE',
	name : '恢复公告',
	isParent : 'true'
}, {
	id : '0FBA0S78FJ011DD6',
	num : '1GR',
	name : '授权',
	isParent : 'true'
}, {
	id : '0FBA0S78G8011DE2',
	num : '3DC',
	name : '授权前保密专利申请的解密',
	isParent : 'true'
}, {
	id : '0FBA0S78GT011DE7',
	num : '2WD',
	name : '撤回 ',
	isParent : 'true'
}, {
	id : '0FBA0S78H7011DF0',
	num : '2AD',
	name : '放弃 ',
	isParent : 'true'
}, {
	id : '0FBA0S78I1011E0D',
	num : '2IP',
	name : '无效宣告',
	isParent : 'true'
}, {
	id : '0FBA0S78IS011E1E',
	num : '5RR',
	name : '权利的恢复',
	isParent : 'true'
}, {
	id : '0FBA0S78J8011E24',
	num : '3RR',
	name : '申请权恢复',
	isParent : 'true'
}, {
	id : '0FBA0S78JH011E31',
	num : '3LD',
	name : '申请权的质押、保全及其解除',
	isParent : 'true'
}, {
	id : '0FBA0S78K2011E47',
	num : '3TR',
	name : '申请权的转移',
	isParent : 'true'
}, {
	id : '0FBA0S78KB011E50',
	num : '2AC',
	name : '申请的中止',
	isParent : 'true'
}, {
	id : '0FBA0S78KL011E54',
	num : '1RN',
	name : '续展',
	isParent : 'true'
}, {
	id : '0FBA0S78L3011E61',
	num : '1DC',
	name : '解密，解密公告的申请',
	isParent : 'true'
}, {
	id : '0FBA0S78LC011E67',
	num : '1DD',
	name : '通知',
	isParent : 'true'
}, {
	id : '0FBA0S78LO011E73',
	num : '1AR',
	name : '避免重复授权 ',
	isParent : 'true'
}, {
	id : '0FBA0S78ML011E7B',
	num : '1RP',
	name : '部分撤销',
	isParent : 'true'
}, {
	id : '0FBA0S78MT011E82',
	num : '1IP',
	name : '部分无效',
	isParent : 'true'
}, {
	id : '0FBA0S78N9011E94',
	num : '2RJ',
	name : '驳回 ',
	isParent : 'true'
} ];/*
 * [ { num : "1", name : "有权", id : "01", isParent : true
 *  }, { num : "2", name : "无权", id : "02", isParent : true
 *  }, { num : "3", name : "在审", id : "03", isParent : true }, { num : "4",
 * name : "不影响", id : "04", isParent : true }, { num : "5", name : "待定", id :
 * "05", isParent : true }];
 */
var zLawWordNodes = [ {
	num : "1",
	name : "有权",
	id : "01",
	isParent : true

}, {
	num : "2",
	name : "无权",
	id : "02",
	isParent : true

}, {
	num : "3",
	name : "在审",
	id : "03",
	isParent : true
} ];
// 区域代码（中国）
var zRegNodes = [ {
	num : "11",
	name : "北京市",
	id : "11",
	isParent : true,
	pId : "0"

}, {
	num : "31",
	name : "上海市",
	id : "31",
	isParent : true,
	pId : "0"
}, {
	num : "12",
	name : "天津市",
	id : "12",
	isParent : true,
	pId : "0"
}, {
	num : "50",
	name : "重庆市",
	id : "50",
	isParent : true,
	pId : "0"
}, {
	num : "34",
	name : "安徽省",
	id : "34",
	isParent : true,
	pId : "0"
}, {
	num : "35",
	name : "福建省",
	id : "35",
	isParent : true,
	pId : "0"
}, {
	num : "44",
	name : "广东省",
	id : "44",
	isParent : true,
	pId : "0"
}, {
	num : "45",
	name : "广西壮族自治区",
	id : "45",
	isParent : true,
	pId : "0"
}, {
	num : "52",
	name : "贵州省",
	id : "52",
	isParent : true,
	pId : "0"
}, {
	num : "62",
	name : "甘肃省",
	id : "62",
	isParent : true,
	pId : "0"
}, {
	num : "13",
	name : "河北省",
	id : "13",
	isParent : true,
	pId : "0"
}, {
	num : "23",
	name : "黑龙江省",
	id : "23",
	isParent : true,
	pId : "0"
}, {
	num : "41",
	name : "河南省",
	id : "41",
	isParent : true,
	pId : "0"
}, {
	num : "42",
	name : "湖北省",
	id : "42",
	isParent : true,
	pId : "0"
}, {
	num : "43",
	name : "湖南省",
	id : "43",
	isParent : true,
	pId : "0"
}, {
	num : "46",
	name : "海南省",
	id : "46",
	isParent : true,
	pId : "0"
}, {
	num : "22",
	name : "吉林省",
	id : "22",
	isParent : true,

	pId : "0"
}, {
	num : "32",
	name : "江苏省",
	id : "32",
	isParent : true,
	pId : "0"
}, {
	num : "36",
	name : "江西省",
	id : "36",
	isParent : true,
	pId : "0"
}, {
	num : "21",
	name : "辽宁省",
	id : "21",
	isParent : true,
	pId : "0"
}, {
	num : "64",
	name : "宁夏回族自治区",
	id : "64",
	isParent : true,
	pId : "0"
}, {
	num : "15",
	name : "内蒙古自治区",
	id : "15",
	isParent : true,
	pId : "0"
}, {
	num : "63",
	name : "青海省",
	id : "63",
	isParent : true,
	pId : "0"
}, {
	num : "14",
	name : "山西省",
	id : "14",
	isParent : true,
	pId : "0"
}, {
	num : "37",
	name : "山东省",
	id : "37",
	isParent : true,
	pId : "0"
}, {
	num : "61",
	name : "陕西省",
	id : "61",
	isParent : true,
	pId : "0"
}, {
	num : "51",
	name : "四川省",
	id : "51",
	isParent : true,
	pId : "0"
}, {
	num : "54",
	name : "西藏自治区",
	id : "54",
	isParent : true,
	pId : "0"
}, {
	num : "65",
	name : "新疆维吾尔自治区",
	id : "65",
	isParent : true,
	pId : "0"
}, {
	num : "53",
	name : "云南省",
	id : "53",
	isParent : true,
	pId : "0"
}, {
	num : "33",
	name : "浙江省",
	id : "33",
	isParent : true,
	pId : "0"
}, {
	num : "81",
	name : "香港特别行政区",
	id : "81",
	isParent : false,
	pId : "0"
}, {
	num : "82",
	name : "澳门特别行政区",
	id : "82",
	isParent : false,
	pId : "0"
}, {
	num : "71",
	name : "台湾省",
	id : "71",
	isParent : false,
	pId : "0"
} ];
// 申请人区域代码
var zPetitionerNodes = [ {
	num : "11",
	name : "11 北京市",
	id : "11",
	isParent : true,
	pId : "0"
		
}, {
	num : "31",
	name : "31 上海市",
	id : "31",
	isParent : true,
	pId : "0"
}, {
	num : "12",
	name : "12 天津市",
	id : "12",
	isParent : true,
	pId : "0"
}, {
	num : "50",
	name : "50 重庆市",
	id : "50",
	isParent : true,
	pId : "0"
}, {
	num : "34",
	name : "34 安徽省",
	id : "34",
	isParent : true,
	pId : "0"
}, {
	num : "35",
	name : "35 福建省",
	id : "35",
	isParent : true,
	pId : "0"
}, {
	num : "44",
	name : "44 广东省",
	id : "44",
	isParent : true,
	pId : "0"
}, {
	num : "45",
	name : "45 广西壮族自治区",
	id : "45",
	isParent : true,
	pId : "0"
}, {
	num : "52",
	name : "52 贵州省",
	id : "52",
	isParent : true,
	pId : "0"
}, {
	num : "62",
	name : "62 甘肃省",
	id : "62",
	isParent : true,
	pId : "0"
}, {
	num : "13",
	name : "13 河北省",
	id : "13",
	isParent : true,
	pId : "0"
}, {
	num : "23",
	name : "23 黑龙江省",
	id : "23",
	isParent : true,
	pId : "0"
}, {
	num : "41",
	name : "41 河南省",
	id : "41",
	isParent : true,
	pId : "0"
}, {
	num : "42",
	name : "42 湖北省",
	id : "42",
	isParent : true,
	pId : "0"
}, {
	num : "43",
	name : "43 湖南省",
	id : "43",
	isParent : true,
	pId : "0"
}, {
	num : "46",
	name : "46 海南省",
	id : "46",
	isParent : true,
	pId : "0"
}, {
	num : "22",
	name : "22 吉林省",
	id : "22",
	isParent : true,
	
	pId : "0"
}, {
	num : "32",
	name : "32 江苏省",
	id : "32",
	isParent : true,
	pId : "0"
}, {
	num : "36",
	name : "36 江西省",
	id : "36",
	isParent : true,
	pId : "0"
}, {
	num : "21",
	name : "21 辽宁省",
	id : "21",
	isParent : true,
	pId : "0"
}, {
	num : "64",
	name : "64 宁夏回族自治区",
	id : "64",
	isParent : true,
	pId : "0"
}, {
	num : "15",
	name : "15 内蒙古自治区",
	id : "15",
	isParent : true,
	pId : "0"
}, {
	num : "63",
	name : "63 青海省",
	id : "63",
	isParent : true,
	pId : "0"
}, {
	num : "14",
	name : "14 山西省",
	id : "14",
	isParent : true,
	pId : "0"
}, {
	num : "37",
	name : "37 山东省",
	id : "37",
	isParent : true,
	pId : "0"
}, {
	num : "61",
	name : "61 陕西省",
	id : "61",
	isParent : true,
	pId : "0"
}, {
	num : "51",
	name : "51 四川省",
	id : "51",
	isParent : true,
	pId : "0"
}, {
	num : "54",
	name : "54 西藏自治区",
	id : "54",
	isParent : true,
	pId : "0"
}, {
	num : "65",
	name : "65 新疆维吾尔自治区",
	id : "65",
	isParent : true,
	pId : "0"
}, {
	num : "53",
	name : "53 云南省",
	id : "53",
	isParent : true,
	pId : "0"
}, {
	num : "33",
	name : "33 浙江省",
	id : "33",
	isParent : true,
	pId : "0"
}, {
	num : "81",
	name : "81 香港特别行政区",
	id : "81",
	isParent : false,
	pId : "0"
}, {
	num : "82",
	name : "82 澳门特别行政区",
	id : "82",
	isParent : false,
	pId : "0"
}, {
	num : "71",
	name : "71 台湾省",
	id : "71",
	isParent : false,
	pId : "0"
} ];

// 公司代码
var zCoyNodes = [ {
	num : "100001354",
	name : "联想 ",
	id : "100001354",
	isParent : true,
	pId : "0"
}, {
	num : "100004247",
	name : "美国IBM",
	id : "100004247",
	isParent : true,
	pId : "0"
}, {
	num : "100005781",
	name : "三星",
	id : "100005781",
	isParent : true,
	pId : "0"
}, {
	num : "100008194",
	name : "东芝",
	id : "100008194",
	isParent : true,
	pId : "0"
}, {
	num : "100022310",
	name : "华为",
	id : "100022310",
	isParent : true,
	pId : "0"
} ];

var placeholder = {
	"公布日" : "20110105",
	"申请日" : "20101010",
	"进入国家日" : "20120529",
	"最早优先权日" : "20120529",
	"申请号" : "CN02144686.5",
	"公布号" : "CN1387751",
	"优先权" : "CN201310054537.1",
	"最早优先权" : "CN201310054537.1",
	"国际申请" : "PCT/CN2005/001433",
	"国际公布" : "WO2013/120614",
	"简单同族" : "CN1103043A",
	"引证文献" : "CN1829071",
	"分类号" : "G06F15/16",
	"IPC" : "G06F15/16",
	"CPC" : "G06F15/16",
	"FI" : "A01G1/00",
	"FTERM" : "2D061/BA01",
	"UC" : "623/23.64",
	"洛迦诺" : "02-04",
	"申请人" : "丁水波（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"发明人" : "丁水波（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"专利权人" : "丁水波（精确检索请用单引号括起检索内容）",
	"当前权利人" : "丁水波（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"相关权利人" : "丁水波（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"代理人" : "海南第一商标事务所（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"审查员" : "郭明华（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"申请人地址" : "北京市海淀区（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"专利权人地址" : "北京市海淀区（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"申请人区域代码" : "CN110116",
	"代理机构" : "长春科宇（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"名称" : "计算机（精确检索请用单引号括起检索内容）",
	"摘要和说明" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"摘要" : "计算机（精确检索请用单引号括起检索内容）",
	"名称+摘要和说明" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"名称+摘要和说明+主权项" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"名称+摘要和说明+权利要求书+说明书全文" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"名称+摘要和说明+权利要求书" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"主权项" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"权利要求书" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"说明书全文" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"关键词" : "计算机（精确检索请用单引号括起检索内容）",
	"技术领域" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"背景技术" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"发明内容" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"附图说明" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"具体实施方式" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"法律状态" : "公开（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"名称+摘要" : "计算机",
	"名称+摘要+权利要求书" : "计算机",
	"名称+摘要+权利要求书+说明书全文" : "计算机",
	"名称+摘要+主权项" : "计算机",
	"尼斯分类" : "01",
	"类似群号" : "0102",
	"申请人名称" : "华为（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"代理人名称" : "柳沈律师事务所",
	"注册号" : "10328598",
	"商标名称" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"国际标准分类号ICS" : "37.100.10",
	"中国标准分类号CCS" : "A24",
	"标准号" : "GB/T 9813-2000",
	"标准名称" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"发布单位" : "国家质量技术监督局（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"起草单位" : "国家质量技术监督局（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"起草人" : "李维（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"适用范围" : "计算机（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"标题" : "计算机",
	"标题+摘要+关键词" : "计算机",
	"中图分类" : "O647.31",
	"ASJC分类" : "11-01",
	"作者单位" : "清华大学  ",
	"作者" : "方华",
	"学科分类" : "04_00",
	"JCR分类" : "01-01",
	"CJCR分类" : "01-01",
	"文献来源" : "基金",
	"专利申请号" : "CN02144686.5",
	"法律依据" : "专利法第二十二条",
	"实施日期" : "20101001",
	"法律名称" : "专利代理条例（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"发文字号" : "国务院令第76号（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"发布部门" : "国务院（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"法条名称" : "专利合作条约第十三条（默认模糊检索，如需精确检索请用单引号‘’括起检索内容）",
	"决定日" : "20101010",
	"申请号" : "CN02144686.5",
	"决定号" : "16222",
	"请求人" : "华为（精确检索请用单引号括起检索内容）",
	"专利申请人" : "华为（精确检索请用单引号括起检索内容）",
	"主审员" : "徐晶晶",
	"参审员" : "刘小静",
	"合议组组长" : "张度",
	"法律依据" : "专利法第二十二条",
	"决定要点" : "创造性（精确检索请用单引号括起检索内容）",
	"专利类型" : "发明",
	"决定类型" : "复审决定",
	"决定结果" : "全部有效",
	"立案年" : "2014",
	"原告或上诉人" : "华为（精确检索请用单引号括起检索内容）",
	"被告或被上诉人" : "华为（精确检索请用单引号括起检索内容）",
	"原告代理机构" : "柳沈律师事务所",
	"被告代理机构" : "柳沈律师事务所",
	"法院名称" : "北京市高级人民法院",
	"审判长" : "王亦非",
	"代理审判长" : "张岚岚",
	"人民陪审员" : "张中",
	"书记员" : "周圆",
	"案号" : "民申字第399号",
	"案由" : "商标侵权纠纷",
	"案件类型" : "商标侵权纠纷",
	"法条内容" : "专利合作条约第十三条"
};

//版权placeholder
var copyrightPlaceholder = {
		"SWID登记号":"2002SR0002",
		"SWID分类号":"11000-6000",
		"SWID软件全称":"语音软件",
		"SWID软件简称":"语音软件",
		"SWID版本号":"V1.0",
		"SWID著作权人":"张力立",
		"SWID首次发表日期":"20110105",
		"SWID登记日期":"20110105",
		
		"STID登记号":"2014AR000230",
		"STID软件名称":"分析软件",
		"STID软件著作权登记号":"2011SR017125",
		"STID转让方":"周健",
		"STID受让方":"郑雯文",
		"STID登记日期":"20160622",
		
		"SCID登记号":"2016SR002174",
		"SCID软件名称":"语音软件",
		"SCID原登记者":"王洪良",
		"SCID撤销原因":"原登记者重复登记",
		"SCID撤销日期":"20151207",
		
		"SLID登记号":"2004LR0022",
		"SLID软件名称":"语音软件",
		"SLID软件著作权登记号":"2011SR008804",
		"SLID转让方":"朱丹丹",
		"SLID受让方":"闫立峰",
		"SLID登记日期":"20110520",
		
		"SAID登记号":"2010SR068062",
		"SAID原软件名称":"人脸识别模块",
		"SAID版本号":"V1.0",
		"SAID变更或补充事项":"",
		"SAID变更事项":"著作权人姓名或名称",
		"SAID补充事项":"首次发表日期",
		"SAID变更前":"计算机",
		"SAID变更后":"计算机",
		"SAID补充前":"未发表",
		"SAID补充后":"采集器",
		"SAID登记日期":"20111012",
		
		"SZID登记号":"07-2012-L-3024",
		"SZID作品名称":"互动百科",
		"SZID著作权人":"刘凤军",
		"SZID作品类别":"文字",
		"SZID国籍":"中国",
		"SZID省份":"",
		"SZID城市":"深圳市",
		"SZID作者":"佘立忠",
		"SZID创作完成日期":"20120529",
		"SZID首次发表日期":"20110105",
		"SZID登记日期":"20120529",
		"SZID发布日期":"20121010"
};

/**
 * 尼斯分类（中国 中文）
 */
var zCnNiceClassNodes = [ {
	num : "nice_class",
	name : "尼斯分类",
	id : "00000",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "nice_class",
	name : "尼斯分类",
	id : "00000",
	isParent : true,
	pId : "0",
	nocheck : true
} ];

// 英文
var zEnNiceClassNodes = [ {
	num : "nice_class",
	name : "niceclass",
	id : "00000",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "nice_class",
	name : "niceclass",
	id : "00000",
	isParent : true,
	pId : "0",
	nocheck : true
} ];

/**
 * 尼斯分类(美国)
 */
var zNiceClassUsaNodes = [ {
	num : "nice_class_usa",
	name : "niceclass",
	id : "00000",
	isParent : true,
	pId : "0",
	nocheck : true
}, {
	num : "nice_class_usa",
	name : "niceclass",
	id : "00000",
	isParent : true,
	pId : "0",
	nocheck : true
} ];

/**
 * 类似群号
 */

var zNiceClassGroupCnNodes = [ {
	num : "01",
	name : "01 用于工业、科学、摄影、农业、园艺和林业的化学品；未加工人造合成脂；未加工塑料物质；肥料；灭火用合成物；淬火和焊接用制剂；保存食品用化学品；鞣料；工业用粘合剂。",
	isParent : true,
	id : "0F6T0LRDGL011A71"
}, {
	num : "02",
	name : "02 颜料，清漆，漆；防锈剂和木材防腐剂；着色剂；媒染剂；未加工的天然树脂；画家、装饰家、印刷商和艺术家用金属箔及金属粉。",
	isParent : true,
	id : "0F6T0LV24G011E63"
}, {
	num : "03",
	name : "03 洗衣用漂白剂及其他物料；清洁、擦亮、去渍及研磨用制剂；肥皂；香料，香精油，化妆品，洗发水；牙膏。",
	isParent : true,
	id : "0F6T0LV2F1011EF5"
}, {
	num : "04",
	name : "04 工业用油和油脂；润滑剂；吸收、润湿和粘结灰尘用合成物；燃料（包括马达用燃料）和照明材料；照明用蜡烛和灯芯。",
	isParent : true,
	id : "0F6T0LV3AH01202A"
}, {
	num : "05",
	name : "05 药用和兽医用制剂；医用卫生制剂；医用或兽医用营养食物和物质，婴儿食品；人用和动物用膳食补充剂；膏药，绷敷材料；填塞牙孔用料，牙科用蜡；消毒剂；消灭有害动物制剂；杀真菌剂，除莠剂",
	isParent : true,
	id : "0F6T0LV3JU0120B5"
}, {
	num : "06",
	name : "06 普通金属及其合金；金属建筑材料；可移动金属建筑物；铁轨用金属材料；普通金属制非电气用缆线；五金具，金属小五金具；金属管；保险箱；不属别类的普通金属制品；矿石。",
	isParent : true,
	id : "0F6T0LV4FH0122A2"
}, {
	num : "07",
	name : "07 机器和机床；马达和引擎（陆地车辆用的除外）；机器联结器和传动机件（陆地车辆用的除外）；非手动农业器具；孵化器；自动售货机。",
	isParent : true,
	id : "0F6T0LV57J0124A4"
}, {
	num : "08",
	name : "08 手工具和器具（手动的）；刀、叉和勺餐具；随身武器；剃刀。",
	isParent : true,
	id : "0F6T0LV8AL0128B7"
}, {
	num : "09",
	name : "09 科学、航海、测量、摄影、电影、光学、衡具、量具、信号、检验（监督）、救护（营救）和教学用装置及仪器；处理、开关、传送、积累、调节或控制电的装置和仪器；录制、通讯、重放声音或影像的装置；磁性数据载体，录音盘；光盘，DVD盘和其他数字存储媒介；投币启动装置的机械结构；收银机，计算机器，数据处理装置，计算机；计算机软件；灭火器械。",
	isParent : true,
	id : "0F6T0LV99P0129DD"
}, {
	num : "10",
	name : "10 外科、医疗、牙科和兽医用仪器及器械，假肢，假眼和假牙；整形用品；缝合用材料。",
	isParent : true,
	id : "0F6T0LVAKR012D25"
}, {
	num : "11",
	name : "11 照明、加热、蒸汽发生、烹饪、冷藏、干燥、通风、供水以及卫生用装置。",
	isParent : true,
	id : "0F6T0LVBAU012E11"
}, {
	num : "12",
	name : "12 运载工具；陆、空、海用运载装置。",
	isParent : true,
	id : "0F6T0LVC58012F99"
}, {
	num : "13",
	name : "13 火器；军火及弹药；爆炸物；烟火",
	isParent : true,
	id : "0F6T0LVCV60130E3"
}, {
	num : "14",
	name : "14 贵重金属及其合金，不属别类的贵重金属制品或镀有贵重金属的物品；珠宝首饰，宝石；钟表和计时仪器。",
	isParent : true,
	id : "0F6T0LVD66013147"
}, {
	num : "15",
	name : "15 乐器。",
	isParent : true,
	id : "0F6T0LVDC90131F1"
}, {
	num : "16",
	name : "16 纸和纸板，不属别类的纸和纸板制品；印刷品；装订用品；照片；文具；文具或家庭用粘合剂；美术用品；画笔；打字机和办公用品（家具除外）；教育或教学用品（仪器除外）；包装用塑料物品（不属别类的）；印刷铅字；印版。",
	isParent : true,
	id : "0F6T0LVDDR013219"
}, {
	num : "17",
	name : "17 橡胶、古塔胶、树胶、石棉、云母，以及不属别类的这些原材料的制品；生产用成型塑料制品；包装、填充和绝缘用材料；非金属软管。",
	isParent : true,
	id : "0F6T0LVEG40133F8"
}, {
	num : "18",
	name : "18 皮革和人造皮革，不属别类的皮革和人造皮革制品；毛皮；箱子和旅行袋；雨伞和阳伞；手杖；鞭和马具。",
	isParent : true,
	id : "0F6T0LVETO013497"
}, {
	num : "19",
	name : "19 非金属的建筑材料；建筑用非金属刚性管；柏油，沥青；可移动非金属建筑物；非金属碑。",
	isParent : true,
	id : "0F6T0LVFHI013521"
}, {
	num : "20",
	name : "20 家具，镜子，相框；不属别类的木、软木、苇、藤、柳条、角、骨、象牙、鲸骨、贝壳、琥珀、珍珠母、海泡石制品，这些材料的代用品或塑料制品。",
	isParent : true,
	id : "0F6T0LVG7K013666"
}, {
	num : "21",
	name : "21 家用或厨房用器具和容器；梳子和海绵；刷子（画笔除外）；制刷材料；清洁用具；钢丝绒；未加工或半加工玻璃（建筑用玻璃除外）；不属别类的玻璃器皿、瓷器和陶器。",
	isParent : true,
	id : "0F6T0LVGUG0137B0"
}, {
	num : "22",
	name : "22 缆，绳，网，帐篷，遮篷，防水遮布，帆，袋和包（不属别类的）；衬垫和填充材料（橡胶或塑料除外）；纺织用纤维原料。",
	isParent : true,
	id : "0F6T0LVHK701394D"
}, {
	num : "23",
	name : "23 纺织用纱和线。",
	isParent : true,
	id : "0F6T0LVHOO0139CE"
}, {
	num : "24",
	name : "24 布料和不属别类的纺织品；床单；桌布。",
	isParent : true,
	id : "0F6T0LVHT8013A08"
}, {
	num : "25",
	name : "25 服装，鞋，帽。",
	isParent : true,
	id : "0F6T0LVI7K013AB9"
}, {
	num : "26",
	name : "26 花边和刺绣，饰带和编带；纽扣，领钩扣，饰针和缝针；假花。",
	isParent : true,
	id : "0F6T0LVIJ7013B98"
}, {
	num : "27",
	name : "27 地毯，地席，席类，油毡及其他铺地板材料；非纺织品制墙帷。",
	isParent : true,
	id : "0F6T0LVJ28013C39"
}, {
	num : "28",
	name : "28 游戏器具和玩具；不属别类的体育和运动用品；圣诞树用装饰品。",
	isParent : true,
	id : "0F6T0LVJ4T013C56"
}, {
	num : "29",
	name : "29 肉，鱼，家禽和野味；肉汁；腌渍、冷冻、干制及煮熟的水果和蔬菜；果冻，果酱，蜜饯；蛋；奶和奶制品；食用油和油脂。",
	isParent : true,
	id : "0F6T0LVJUL013D9D"
}, {
	num : "30",
	name : "30 咖啡，茶，可可和咖啡代用品；米；食用淀粉和西米；面粉和谷类制品；面包、糕点和甜食；食用冰；糖，蜂蜜，糖浆；鲜酵母，发酵粉；食盐；芥末；醋，沙司（调味品）；辛香料；冰。",
	isParent : true,
	id : "0F6T0LVKVI013EBE"
}, {
	num : "31",
	name : "31 谷物和不属别类的农业、园艺、林业产品；活动物；新鲜水果和蔬菜；种籽；草木和花卉；动物饲料；麦芽。",
	isParent : true,
	id : "0F6T0LVMB901402C"
}, {
	num : "32",
	name : "32 啤酒；矿泉水和汽水以及其他不含酒精的饮料；水果饮料及果汁；糖浆及其他制饮料用的制剂。",
	isParent : true,
	id : "0F6T0LVMO70140EC"
}, {
	num : "33",
	name : "33 含酒精的饮料（啤酒除外）。",
	isParent : true,
	id : "0F6T0LVNCF014130"
}, {
	num : "34",
	name : "34 烟草；烟具；火柴。",
	isParent : true,
	id : "0F6T0LVNEF014159"
}, {
	num : "35",
	name : "35 广告；商业经营；商业管理；办公事务。",
	isParent : true,
	id : "0F6T0LVNIM014189"
}, {
	num : "36",
	name : "36 保险；金融事务；货币事务；不动产事务。",
	isParent : true,
	id : "0F6T0LVO1301420C"
}, {
	num : "37",
	name : "37 房屋建筑；修理；安装服务。",
	isParent : true,
	id : "0F6T0LVOED014271"
}, {
	num : "38",
	name : "38 电信。",
	isParent : true,
	id : "0F6T0LVOR601430C"
}, {
	num : "39",
	name : "39 运输；商品包装和贮藏；旅行安排。",
	isParent : true,
	id : "0F6T0LVP42014339"
}, {
	num : "40",
	name : "40 材料处理。",
	isParent : true,
	id : "0F6T0LVPDU0143B0"
}, {
	num : "41",
	name : "41 教育；提供培训；娱乐；文体活动。",
	isParent : true,
	id : "0F6T0LVQ2D01443E"
}, {
	num : "42",
	name : "42 科学技术服务和与之相关的研究与设计服务；工业分析与研究；计算机硬件与软件的设计与开发。",
	isParent : true,
	id : "0F6T0LVQKC0144C3"
}, {
	num : "43",
	name : "43 提供食物和饮料服务；临时住宿。",
	isParent : true,
	id : "0F6T0LVQRQ01452A"
}, {
	num : "44",
	name : "44 医疗服务；兽医服务；人或动物的卫生和美容服务；农业、园艺和林业服务。",
	isParent : true,
	id : "0F6T0LVR0B014552"
}, {
	num : "45",
	name : "45 法律服务；为保护财产和人身安全的服务；由他人提供的为满足个人需要的私人和社会服务。",
	isParent : true,
	id : "0F6T0LVR4K01459B"
} ]

var zNiceClassGroupEnNodes = [
		{
			num : "01",
			isParent : true,
			id : "0F6T0LRDGL011A71",
			name : "01 Chemicals used in industry, science and photography, as well as in agriculture, horticulture and forestry; unprocessed artificial resins, unprocessed plastics; manures; fire extinguishing compositions; tempering and soldering preparations; chemical substances for preserving foodstuffs; tanning substances; adhesives used in industry."
		},
		{
			num : "02",
			isParent : true,
			id : "0F6T0LV24G011E63",
			name : "02 Paints, varnishes, lacquers; preservatives against rust and against deterioration of wood; colorants; mordants; raw natural resins; metals in foil and powder form for painters, decorators, printers and artists."
		},
		{
			num : "03",
			isParent : true,
			id : "0F6T0LV2F1011EF5",
			name : "03 Bleaching preparations and other substances for laundry use; cleaning, polishing, scouring and abrasive preparations; soaps; perfumery, essential oils, cosmetics, hair lotions; dentifrices."
		},
		{
			num : "04",
			isParent : true,
			id : "0F6T0LV3AH01202A",
			name : "04 Industrial oils and greases; lubricants; dust absorbing, wetting and binding compositions; fuels (including motor spirit) and illuminants; candles and wicks for lighting."
		},
		{
			num : "05",
			isParent : true,
			id : "0F6T0LV3JU0120B5",
			name : "05 Pharmaceutical and veterinary preparations; sanitary preparations for medical purposes; dietetic food and substances adapted for medical or veterinary use, food for babies; dietary supplements for humans and animals; plasters, materials for dressings; material for stopping teeth, dental wax; disinfectants; preparations for destroying vermin; fungicides, herbicides."
		},
		{
			num : "06",
			isParent : true,
			id : "0F6T0LV4FH0122A2",
			name : "06 Common metals and their alloys; metal building materials; transportable buildings of metal; materials of metal for railway tracks; non-electric cables and wires of common metal; ironmongery, small items of metal hardware; pipes and tubes of metal; safes; goods of common metal not included in other classes; ores."
		},
		{
			num : "07",
			isParent : true,
			id : "0F6T0LV57J0124A4",
			name : "07 Machines and machine tools; motors and engines (except for land vehicles); machine coupling and transmission components (except for land vehicles); agricultural implements other than hand-operated; incubators for eggs; automatic vending machines."
		},
		{
			num : "08",
			isParent : true,
			id : "0F6T0LV8AL0128B7",
			name : "08 Hand tools and implements (hand-operated); cutlery; side arms; razors. "
		},
		{
			num : "09",
			isParent : true,
			id : "0F6T0LV99P0129DD",
			name : "09 Scientific, nautical, surveying, photographic, cinematographic, optical, weighing, measuring, signalling, checking (supervision), life-saving and teaching apparatus and instruments; apparatus and instruments for conducting, switching, transforming, accumulating, regulating or controlling electricity; apparatus for recording,transmission or reproduction of sound or images; magnetic data carriers, recording discs; compact discs, DVDs and other digital recording media; mechanisms for coin-operated apparatus; cash registers, calculating machines, data processing equipment, computers; computer software; fire-extinguishing apparatus."
		},
		{
			num : "10",
			isParent : true,
			id : "0F6T0LVAKR012D25",
			name : "10 Surgical, medical, dental and veterinary apparatus and instruments, artificial limbs, eyes and teeth; orthopedic articles; suture materials."
		},
		{
			num : "11",
			isParent : true,
			id : "0F6T0LVBAU012E11",
			name : "11 Apparatus for lighting, heating, steam generating, cooking, refrigerating, drying, ventilating, water supply and sanitary purposes."
		},
		{
			num : "12",
			isParent : true,
			id : "0F6T0LVC58012F99",
			name : "12 Vehicles; apparatus for locomotion by land, air or water."
		},
		{
			num : "13",
			isParent : true,
			id : "0F6T0LVCV60130E3",
			name : "13 Firearms; ammunition and projectiles; explosives; fireworks."
		},
		{
			num : "14",
			isParent : true,
			id : "0F6T0LVD66013147",
			name : "14 Precious metals and their alloys and goods in precious metals or coated therewith, not included in other classes; jewellery, precious stones; horological and chronometric instruments."
		},
		{
			num : "15",
			isParent : true,
			id : "0F6T0LVDC90131F1",
			name : "15 Musical instruments."
		},
		{
			num : "16",
			isParent : true,
			id : "0F6T0LVDDR013219",
			name : "16 Paper, cardboard and goods made from these materials, not included in other classes; printed matter; bookbinding material; photographs; stationery; adhesives for stationery or household purposes; artists materials; paint brushes; typewriters and office requisites (except furniture); instructional and teaching material (except apparatus); plastic materials for packaging (not included in other classes); printers type; printing blocks."
		},
		{
			num : "17",
			isParent : true,
			id : "0F6T0LVEG40133F8",
			name : "17 Rubber, gutta-percha, gum, asbestos, mica and goods made from these materials and not included in other classes; plastics in extruded form for use in manufacture; packing, stopping and insulating materials; flexible pipes, not of metal."
		},
		{
			num : "18",
			isParent : true,
			id : "0F6T0LVETO013497",
			name : "18 Leather and imitations of leather, and goods made of these materials and not included in other classes; animal skins, hides; trunks and travelling bags; umbrellas and parasols; walking sticks; whips, harness and saddlery."
		},
		{
			num : "19",
			isParent : true,
			id : "0F6T0LVFHI013521",
			name : "19 Building materials (non-metallic); non-metallic rigid pipes for building; asphalt, pitch and bitumen; non-metallic transportable buildings; monuments, not of metal."
		},
		{
			num : "20",
			isParent : true,
			id : "0F6T0LVG7K013666",
			name : "20 Furniture, mirrors, picture frames; goods (not included in other classes) of wood, cork, reed, cane, wicker, horn, bone, ivory, whalebone, shell, amber, mother-of-pearl, meerschaum and substitutes for all these materials, or of plastics."
		},
		{
			num : "21",
			isParent : true,
			id : "0F6T0LVGUG0137B0",
			name : "21 Household or kitchen utensils and containers; combs and sponges; brushes (except paint brushes); brush-making materials; articles for cleaning purposes; steelwool; unworked or semi-worked glass (except glass used in building); glassware, porcelain and earthenware not included in other classes. "
		},
		{
			num : "22",
			isParent : true,
			id : "0F6T0LVHK701394D",
			name : "22 Ropes, string, nets, tents, awnings, tarpaulins, sails, sacks and bags (not included in other classes); padding and stuffing materials (except of rubber or plastics); raw fibrous textile materials."
		},
		{
			num : "23",
			isParent : true,
			id : "0F6T0LVHOO0139CE",
			name : "23 Yarns and threads, for textile use."
		},
		{
			num : "24",
			isParent : true,
			id : "0F6T0LVHT8013A08",
			name : "24 Textiles and textile goods, not included in other classes; bed covers; table covers."
		},
		{
			num : "25",
			isParent : true,
			id : "0F6T0LVI7K013AB9",
			name : "25 Clothing, footwear, headgear."
		},
		{
			num : "26",
			isParent : true,
			id : "0F6T0LVIJ7013B98",
			name : "26 Lace and embroidery, ribbons and braid; buttons, hooks and eyes, pins and needles; artificial flowers."
		},
		{
			num : "27",
			isParent : true,
			id : "0F6T0LVJ28013C39",
			name : "27 Carpets, rugs, mats and matting, linoleum and other materials for covering existing floors; wall hangings (non-textile)."
		},
		{
			num : "28",
			isParent : true,
			id : "0F6T0LVJ4T013C56",
			name : "28 Games and playthings; gymnastic and sporting articles not included in other classes; decorations for Christmas trees."
		},
		{
			num : "29",
			isParent : true,
			id : "0F6T0LVJUL013D9D",
			name : "29 Meat, fish, poultry and game; meat extracts; preserved, frozen, dried and cooked fruits and vegetables; jellies, jams, compotes; eggs; milk and milk products; edible oils and fats. "
		},
		{
			num : "30",
			isParent : true,
			id : "0F6T0LVKVI013EBE",
			name : "30 Coffee, tea, cocoa and artificial coffee;  rice;  tapioca and sago;  flour and preparations made from cereals;  bread, pastry and confectionery;  edible ices;  sugar, honey, treacle;  yeast, baking-powder;  salt;  mustard;  vinegar, sauces (condiments);  spices;  ice. "
		},
		{
			num : "31",
			isParent : true,
			id : "0F6T0LVMB901402C",
			name : "31 Grains and agricultural, horticultural and forestry products not included in other classes; live animals; fresh fruits and vegetables; seeds; natural plants and flowers; foodstuffs for animals; malt."
		},
		{
			num : "32",
			isParent : true,
			id : "0F6T0LVMO70140EC",
			name : "32 Beers; mineral and aerated waters and other non-alcoholic beverages; fruit beverages and fruit juices; syrups and other preparations for making beverages."
		},
		{
			num : "33",
			isParent : true,
			id : "0F6T0LVNCF014130",
			name : "33 Alcoholic beverages (except beers)."
		},
		{
			num : "34",
			isParent : true,
			id : "0F6T0LVNEF014159",
			name : "34 Tobacco; smokers articles; matches."
		},
		{
			num : "35",
			isParent : true,
			id : "0F6T0LVNIM014189",
			name : "35 Advertising; business management; business administration; office functions."
		},
		{
			num : "36",
			isParent : true,
			id : "0F6T0LVO1301420C",
			name : "36 Insurance; financial affairs; monetary affairs; real estate affairs."
		},
		{
			num : "37",
			isParent : true,
			id : "0F6T0LVOED014271",
			name : "37 Building construction; repair; installation services."
		},
		{
			num : "38",
			isParent : true,
			id : "0F6T0LVOR601430C",
			name : "38 Telecommunications."
		},
		{
			num : "39",
			isParent : true,
			id : "0F6T0LVP42014339",
			name : "39 Transport; packaging and storage of goods; travel arrangement."
		},
		{
			num : "40",
			isParent : true,
			id : "0F6T0LVPDU0143B0",
			name : "40 Treatment of materials."
		},
		{
			num : "41",
			isParent : true,
			id : "0F6T0LVQ2D01443E",
			name : "41 Education; providing of training; entertainment; sporting and cultural activities."
		},
		{
			num : "42",
			isParent : true,
			id : "0F6T0LVQKC0144C3",
			name : "42 Scientific and technological services and research and design relating thereto; industrial analysis and research services; design and development of computer hardware and software."
		}, {
			num : "43",
			isParent : true,
			id : "0F6T0LVQRQ01452A",
			name : "43 Services for providing food and drink; temporary accommodation."
		}, {
			num : "44",
			isParent : true,
			id : "0F6T0LVR0B014552",
			name : "44 Medical services; veterinary services; hygienic and beauty care for human beings or animals; agriculture, horticulture and forestry services."
		}, {
			num : "45",
			isParent : true,
			id : "0F6T0LVR4K01459B",
			name : "45 Legal services; security services for the protection of property and individuals; personal and social services rendered by others to meet the needs of individuals."
		} ]

/**
 * 中国标准分类号(CCS)
 */
var zCcsNodes = [ {
	num : "A",
	name : "A 综合",
	id : "1",
	isParent : true,
	pId : "0"

}, {
	num : "B",
	name : "B 农业、林业",
	id : "2",
	isParent : true,
	pId : "0"
}, {
	num : "C",
	name : "C 医药、卫生、劳动保护 ",
	id : "3",
	isParent : true,
	pId : "0"
}, {
	num : "D",
	name : "D 矿业",
	id : "4",
	isParent : true,
	pId : "0"
}, {
	num : "E",
	name : "E 石油",
	id : "5",
	isParent : true,
	pId : "0"
}, {
	num : "F",
	name : "F 能源、核技术",
	id : "6",
	isParent : true,
	pId : "0"
}, {
	num : "G",
	name : "G 化工",
	id : "7",
	isParent : true,

	pId : "0"
}, {
	num : "H",
	name : "H 冶金",
	id : "8",
	isParent : true,
	pId : "0"
}, {
	num : "J",
	name : "J 机械",
	id : "9",
	isParent : true,
	pId : "0"
}, {
	num : "K",
	name : "K 电工",
	id : "10",
	isParent : true,
	pId : "0"
}, {
	num : "L",
	name : "L 电子元器件与信息技术",
	id : "11",
	isParent : true,
	pId : "0"
}, {
	num : "M",
	name : "M 通信、广播",
	id : "12",
	isParent : true,
	pId : "0"
}, {
	num : "N",
	name : "N 仪器、仪表",
	id : "13",
	isParent : true,
	pId : "0"
}, {
	num : "P",
	name : "P 工程建设  ",
	id : "14",
	isParent : true,
	pId : "0"
}, {
	num : "Q",
	name : "Q 建材",
	id : "15",
	isParent : true,
	pId : "0"
}, {
	num : "R",
	name : "R 公路、水路运输",
	id : "16",
	isParent : true,
	pId : "0"
}, {
	num : "S",
	name : "S 铁路",
	id : "17",
	isParent : true,
	pId : "0"
}, {
	num : "T",
	name : "T 车辆",
	id : "18",
	isParent : true,
	pId : "0"
}, {
	num : "U",
	name : "U 船舶",
	id : "19",
	isParent : true,
	pId : "0"
}, {
	num : "V",
	name : "V 航空、航天",
	id : "20",
	isParent : true,
	pId : "0"
}, {
	num : "W",
	name : "W 纺织",
	id : "21",
	isParent : true,
	pId : "0"
}, {
	num : "X",
	name : "X 食品",
	id : "22",
	isParent : true,
	pId : "0"
}, {
	num : "Y",
	name : "Y 轻工、文化与生活用品",
	id : "23",
	isParent : true,
	pId : "0"
}, {
	num : "Z",
	name : "Z 环境保护",
	id : "24",
	isParent : true,
	pId : "0"
} ];

/**
 * 中国标准分类号(ICS)
 */
var zZhIcsNodes = [ {
	num : "01",
	name : "01 综合、术语学、标准化、文献",
	id : "1",
	isParent : true,
	pId : "0"

}, {
	num : "03",
	name : "03 社会学、服务、公司(企业)的组织和管理、行政、运输",
	id : "2",
	isParent : true,
	pId : "0"
}, {
	num : "07",
	name : "07 数学、自然科学 ",
	id : "3",
	isParent : true,
	pId : "0"
}, {
	num : "11",
	name : "11 医药卫生技术",
	id : "4",
	isParent : true,
	pId : "0"
}, {
	num : "13",
	name : "13  环保、保健和安全",
	id : "5",
	isParent : true,
	pId : "0"
}, {
	num : "17",
	name : "17 计量学和测量、物理现象",
	id : "6",
	isParent : true,
	pId : "0"
}, {
	num : "19",
	name : "19 试验  ［该类仅包括试验通用标准;分析化学，见71.040］",
	id : "7",
	isParent : true,

	pId : "0"
}, {
	num : "21 ",
	name : "21 机械系统和通用件 ",
	id : "8",
	isParent : true,
	pId : "0"
}, {
	num : "23",
	name : "23 流体系统和通用件  ［流体流量的测量，见17.120］",
	id : "9",
	isParent : true,
	pId : "0"
}, {
	num : "25",
	name : "25 机械制造  ［该类包括通用标准］",
	id : "10",
	isParent : true,
	pId : "0"
}, {
	num : "27",
	name : "27 能源和热传导工程",
	id : "11",
	isParent : true,
	pId : "0"
}, {
	num : "29",
	name : "29  电气工程",
	id : "12",
	isParent : true,
	pId : "0"
}, {
	num : "31",
	name : "31 电子学 ",
	id : "13",
	isParent : true,
	pId : "0"
}, {
	num : "33",
	name : "33  电信、音频和视频工程 ",
	id : "14",
	isParent : true,
	pId : "0"
}, {
	num : "35",
	name : "35 信息技术、办公机械",
	id : "15",
	isParent : true,
	pId : "0"
}, {
	num : "37",
	name : "37 成像技术",
	id : "16",
	isParent : true,
	pId : "0"
}, {
	num : "39",
	name : "39 精密机械、珠宝 ",
	id : "17",
	isParent : true,
	pId : "0"
}, {
	num : "43",
	name : "43 道路车辆工程",
	id : "18",
	isParent : true,
	pId : "0"
}, {
	num : "45",
	name : "45 铁路工程",
	id : "19",
	isParent : true,
	pId : "0"
}, {
	num : "47",
	name : "47 造船和海上构筑物",
	id : "20",
	isParent : true,
	pId : "0"
}, {
	num : "49",
	name : "49 航空器和航天器工程",
	id : "21",
	isParent : true,
	pId : "0"
}, {
	num : "53",
	name : "53 材料储运设备",
	id : "22",
	isParent : true,
	pId : "0"
}, {
	num : "55",
	name : "55 货物的包装和调运",
	id : "23",
	isParent : true,
	pId : "0"
}, {
	num : "59",
	name : "59 纺织和皮革技术",
	id : "24",
	isParent : true,
	pId : "0"
}, {
	num : "61",
	name : "61 服装工业 ",
	id : "25",
	isParent : true,
	pId : "0"
}, {
	num : "65",
	name : "65 农业 ",
	id : "26",
	isParent : true,
	pId : "0"
}, {
	num : "67",
	name : "67 食品技术 ",
	id : "27",
	isParent : true,
	pId : "0"
}, {
	num : "71",
	name : "71 化工技术",
	id : "28",
	isParent : true,
	pId : "0"
}, {
	num : "73",
	name : "73 采矿和矿产品",
	id : "29",
	isParent : true,
	pId : "0"
}, {
	num : "75",
	name : "75  纺织和皮革技术",
	id : "30",
	isParent : true,
	pId : "0"
}, {
	num : "77",
	name : "77 冶金 ",
	id : "31",
	isParent : true,
	pId : "0"
}, {
	num : "79",
	name : "79  木材技术",
	id : "32",
	isParent : true,
	pId : "0"
}, {
	num : "81",
	name : "81 玻璃和陶瓷工业 ",
	id : "33",
	isParent : true,
	pId : "0"
}, {
	num : "83",
	name : "83  橡胶和塑料工业",
	id : "34",
	isParent : true,
	pId : "0"
}, {
	num : "85",
	name : "85 造纸技术",
	id : "35",
	isParent : true,
	pId : "0"
}, {
	num : "87",
	name : "87 涂料和颜料工业",
	id : "36",
	isParent : true,
	pId : "0"
}, {
	num : "91",
	name : "91 建筑材料和建筑物",
	id : "37",
	isParent : true,
	pId : "0"
}, {
	num : "93",
	name : "93 土木工程",
	id : "38",
	isParent : true,
	pId : "0"
}, {
	num : "95",
	name : "95 军事工程 ",
	id : "39",
	isParent : true,
	pId : "0"
}, {
	num : "97",
	name : "97  家用和商用设备、文娱、体育  ",
	id : "40",
	isParent : true,
	pId : "0"
} ];
/**
 * 中国标准分类号(ICS)
 */
var zEnIcsNodes = [ {
	num : "01",
	name : "01 GENERALITIES. TERMINOLOGY. STANDARDIZATION. DOCUMENTATION ",
	id : "1",
	isParent : true,
	pId : "0"

}, {
	num : "03",
	name : "03 SOCIOLOGY. SERVICES. COMPANY ORGANIZATION AND MANAGEMENT. ADMINISTRATION. TRANSPORT",
	id : "2",
	isParent : true,
	pId : "0"
}, {
	num : "07",
	name : "07MATHEMATICS. NATURAL SCIENCES ",
	id : "3",
	isParent : true,
	pId : "0"
}, {
	num : "11",
	name : "11 HEALTH CARE TECHNOLOGY ",
	id : "4",
	isParent : true,
	pId : "0"
}, {
	num : "13",
	name : "13  ENVIRONMENT. HEALTH PROTECTION. SAFETY",
	id : "5",
	isParent : true,
	pId : "0"
}, {
	num : "17",
	name : "17 METROLOGY AND MEASUREMENT. PHYSICAL PHENOMENA",
	id : "6",
	isParent : true,
	pId : "0"
}, {
	num : "19",
	name : "19 TESTING",
	id : "7",
	isParent : true,

	pId : "0"
}, {
	num : "21 ",
	name : "21 MECHANICAL SYSTEMS AND COMPONENTS FOR GENERAL USE",
	id : "8",
	isParent : true,
	pId : "0"
}, {
	num : "23",
	name : "23 FLUID SYSTEMS AND COMPONENTS FOR GENERAL USE ",
	id : "9",
	isParent : true,
	pId : "0"
}, {
	num : "25",
	name : "25 MANUFACTURING ENGINEERING",
	id : "10",
	isParent : true,
	pId : "0"
}, {
	num : "27",
	name : "27 ENERGY AND HEAT TRANSFER ENGINEERING ",
	id : "11",
	isParent : true,
	pId : "0"
}, {
	num : "29",
	name : "29 ELECTRICAL ENGINEERING ",
	id : "12",
	isParent : true,
	pId : "0"
}, {
	num : "31",
	name : "31 ELECTRONICS ",
	id : "13",
	isParent : true,
	pId : "0"
}, {
	num : "33",
	name : "33 TELECOMMUNICATIONS. AUDIO AND VIDEO ENGINEERING ",
	id : "14",
	isParent : true,
	pId : "0"
}, {
	num : "35",
	name : "35 INFORMATION TECHNOLOGY. OFFICE MACHINES",
	id : "15",
	isParent : true,
	pId : "0"
}, {
	num : "37",
	name : "37 IMAGE TECHNOLOGY",
	id : "16",
	isParent : true,
	pId : "0"
}, {
	num : "39",
	name : "39 PRECISION MECHANICS. JEWELLERY",
	id : "17",
	isParent : true,
	pId : "0"
}, {
	num : "43",
	name : "43 ROAD VEHICLES ENGINEERING",
	id : "18",
	isParent : true,
	pId : "0"
}, {
	num : "45",
	name : "45 RAILWAY ENGINEERING",
	id : "19",
	isParent : true,
	pId : "0"
}, {
	num : "47",
	name : "47 SHIPBUILDING AND MARINE STRUCTURES ",
	id : "20",
	isParent : true,
	pId : "0"
}, {
	num : "49",
	name : "49 AIRCRAFT AND SPACE VEHICLE ENGINEERING",
	id : "21",
	isParent : true,
	pId : "0"
}, {
	num : "53",
	name : "53  MATERIALS HANDLING EQUIPMENT",
	id : "22",
	isParent : true,
	pId : "0"
}, {
	num : "55",
	name : "55 PACKAGING AND DISTRIBUTION OF GOODS",
	id : "23",
	isParent : true,
	pId : "0"
}, {
	num : "59",
	name : "59 TEXTILE AND LEATHER TECHNOLOGY",
	id : "24",
	isParent : true,
	pId : "0"
}, {
	num : "61",
	name : "61 CLOTHING INDUSTRY ",
	id : "25",
	isParent : true,
	pId : "0"
}, {
	num : "65",
	name : "65 AGRICULTURE",
	id : "26",
	isParent : true,
	pId : "0"
}, {
	num : "67",
	name : "67 FOOD TECHNOLOGY",
	id : "27",
	isParent : true,
	pId : "0"
}, {
	num : "71",
	name : "71 CHEMICAL TECHNOLOGY",
	id : "28",
	isParent : true,
	pId : "0"
}, {
	num : "73",
	name : "73 MINING AND MINERALS",
	id : "29",
	isParent : true,
	pId : "0"
}, {
	num : "75",
	name : "75 PETROLEUM AND RELATED TECHNOLOGIES",
	id : "30",
	isParent : true,
	pId : "0"
}, {
	num : "77",
	name : "77 METALLURGY",
	id : "31",
	isParent : true,
	pId : "0"
}, {
	num : "79",
	name : "79 WOOD TECHNOLOGY ",
	id : "32",
	isParent : true,
	pId : "0"
}, {
	num : "81",
	name : "81 GLASS AND CERAMICS INDUSTRIES",
	id : "33",
	isParent : true,
	pId : "0"
}, {
	num : "83",
	name : "83 RUBBER AND PLASTIC INDUSTRIES",
	id : "34",
	isParent : true,
	pId : "0"
}, {
	num : "85",
	name : "85 PAPER TECHNOLOGY",
	id : "35",
	isParent : true,
	pId : "0"
}, {
	num : "87",
	name : "87 PAINT AND COLOUR INDUSTRIES",
	id : "36",
	isParent : true,
	pId : "0"
}, {
	num : "91",
	name : "91 CONSTRUCTION MATERIALS AND BUILDING",
	id : "37",
	isParent : true,
	pId : "0"
}, {
	num : "93",
	name : "93 CIVIL ENGINEERING",
	id : "38",
	isParent : true,
	pId : "0"
}, {
	num : "95",
	name : "95 MILITARY ENGINEERING",
	id : "39",
	isParent : true,
	pId : "0"
}, {
	num : "97",
	name : "97  DOMESTIC AND COMMERCIAL EQUIPMENT. ENTERTAINMENT. SPORTS",
	id : "40",
	isParent : true,
	pId : "0"
} ];

// 法院名称
var zCourtNodes = [ {
	num : "1",
	name : "最高人民法院",
	id : "1",
	isParent : false,
	pId : "0"

}, {
	num : "2",
	name : "北京市",
	id : "2",
	isParent : true,
	pId : "0"
}, {
	num : "3",
	name : "天津市",
	id : "3",
	isParent : true,
	pId : "0"
}, {
	num : "4",
	name : "上海市",
	id : "4",
	isParent : true,
	pId : "0"
}, {
	num : "5",
	name : "重庆市",
	id : "5",
	isParent : true,
	pId : "0"
}, {
	num : "6",
	name : "河北省",
	id : "6",
	isParent : true,
	pId : "0"
}, {
	num : "7",
	name : "山西省",
	id : "7",
	isParent : true,

	pId : "0"
}, {
	num : "8",
	name : "内蒙古自治区 ",
	id : "8",
	isParent : true,
	pId : "0"
}, {
	num : "9",
	name : "辽宁省",
	id : "9",
	isParent : true,
	pId : "0"
}, {
	num : "10",
	name : "吉林省 ",
	id : "10",
	isParent : true,
	pId : "0"
}, {
	num : "11",
	name : "江苏省",
	id : "11",
	isParent : true,
	pId : "0"
}, {
	num : "12",
	name : "江苏省",
	id : "12",
	isParent : true,
	pId : "0"
}, {
	num : "13",
	name : "浙江省 ",
	id : "13",
	isParent : true,
	pId : "0"
}, {
	num : "14",
	name : "安徽省",
	id : "14",
	isParent : true,
	pId : "0"
}, {
	num : "15",
	name : "福建省",
	id : "15",
	isParent : true,
	pId : "0"
}, {
	num : "16",
	name : "江西省",
	id : "16",
	isParent : true,
	pId : "0"
}, {
	num : "17",
	name : "山东省 ",
	id : "17",
	isParent : true,
	pId : "0"
}, {
	num : "18",
	name : "河南省",
	id : "18",
	isParent : true,
	pId : "0"
}, {
	num : "19",
	name : "湖北省",
	id : "19",
	isParent : true,
	pId : "0"
}, {
	num : "20",
	name : "湖南省",
	id : "20",
	isParent : true,
	pId : "0"
}, {
	num : "21",
	name : "广东省",
	id : "21",
	isParent : true,
	pId : "0"
}, {
	num : "22",
	name : "广西壮族自治区",
	id : "22",
	isParent : true,
	pId : "0"
}, {
	num : "23",
	name : "海南省",
	id : "23",
	isParent : true,
	pId : "0"
}, {
	num : "24",
	name : "四川省",
	id : "24",
	isParent : true,
	pId : "0"
}, {
	num : "25",
	name : "贵州省",
	id : "25",
	isParent : true,
	pId : "0"
}, {
	num : "26",
	name : "云南省",
	id : "26",
	isParent : true,
	pId : "0"
}, {
	num : "27",
	name : "西藏自治区",
	id : "27",
	isParent : true,
	pId : "0"
}, {
	num : "28",
	name : "陕西省",
	id : "28",
	isParent : true,
	pId : "0"
}, {
	num : "29",
	name : "甘肃省",
	id : "29",
	isParent : true,
	pId : "0"
}, {
	num : "30",
	name : "宁夏回族自治区",
	id : "30",
	isParent : true,
	pId : "0"
}, {
	num : "31",
	name : "青海省",
	id : "31",
	isParent : true,
	pId : "0"
}, {
	num : "32",
	name : "新疆维吾尔族自治区",
	id : "32",
	isParent : true,
	pId : "0"
}, {
	num : "33",
	name : "铁路法院",
	id : "33",
	isParent : true,
	pId : "0"
}, {
	num : "34",
	name : "海事法院",
	id : "34",
	isParent : true,
	pId : "0"
}, {
	num : "35",
	name : "军事法院",
	id : "35",
	isParent : true,
	pId : "0"
} ];

// 洛迦诺分类
var zZhLocanoNodes = [ {
	num : "01",
	name : "01 食物",
	id : "1",
	isParent : true,
	pId : "0"

}, {
	num : "02",
	name : "02 服装、服饰用品和缝纫用品",
	id : "2",
	isParent : true,
	pId : "0"
}, {
	num : "03",
	name : "03 其他类未列入的旅行用品、箱包、阳伞和个人用品 ",
	id : "3",
	isParent : true,
	pId : "0"
}, {
	num : "04",
	name : "04 刷子",
	id : "4",
	isParent : true,
	pId : "0"
}, {
	num : "05",
	name : "05 纺织品，人造或天然材料片材",
	id : "5",
	isParent : true,
	pId : "0"
}, {
	num : "06",
	name : "06 家具和家居用品",
	id : "6",
	isParent : true,
	pId : "0"
}, {
	num : "07",
	name : "07  其他类未列入的家用物品 ",
	id : "7",
	isParent : true,
	pId : "0"
}, {
	num : "08",
	name : "08  工具和五金器具    ",
	id : "8",
	isParent : true,
	pId : "0"
}, {
	num : "09",
	name : "09 用于商品运输或装卸的包装和容器",
	id : "9",
	isParent : true,
	pId : "0"
}, {
	num : "10",
	name : "10  钟、表及其他计量仪器，检测仪器，信号仪器 ",
	id : "10",
	isParent : true,
	pId : "0"
}, {
	num : "11",
	name : "11 装饰品 ",
	id : "11",
	isParent : true,
	pId : "0"
}, {
	num : "12",
	name : "12  运输或提升工具",
	id : "12",
	isParent : true,
	pId : "0"
}, {
	num : "13",
	name : "13 发电、配电和变电的设备",
	id : "13",
	isParent : true,
	pId : "0"
}, {
	num : "14",
	name : "14 记录、通信、信息检索设备 ",
	id : "14",
	isParent : true,
	pId : "0"
}, {
	num : "15",
	name : "15 其他类未列入的机械 ",
	id : "15",
	isParent : true,
	pId : "0"
}, {
	num : "16",
	name : "16 照相设备、电影摄影设备和光学设备 ",
	id : "16",
	isParent : true,
	pId : "0"
}, {
	num : "17",
	name : "17乐器 ",
	id : "17",
	isParent : true,
	pId : "0"
}, {
	num : "18",
	name : "18 印刷和办公机械 ",
	id : "18",
	isParent : true,
	pId : "0"
}, {
	num : "19",
	name : "19 文具、办公用品、美术用品和教学用品",
	id : "19",
	isParent : true,
	pId : "0"
}, {
	num : "20",
	name : "20 销售设备、广告设备和标志物",
	id : "20",
	isParent : true,
	pId : "0"
}, {
	num : "21",
	name : "21 游戏器具、玩具、帐篷和体育用品",
	id : "21",
	isParent : true,
	pId : "0"
}, {
	num : "22",
	name : "22 武器,烟火用品,用于狩猎、捕鱼及捕杀有害动物的器具     ",
	id : "22",
	isParent : true,
	pId : "0"
}, {
	num : "23",
	name : "23 流体分配设备、卫生设备、加热设备、通风和空调设备、固体燃料",
	id : "23",
	isParent : true,
	pId : "0"
}, {
	num : "24",
	name : "24 医疗设备和实验室设备",
	id : "24",
	isParent : true,
	pId : "0"
}, {
	num : "25",
	name : "25 建筑构件和施工元件",
	id : "25",
	isParent : true,
	pId : "0"
}, {
	num : "26",
	name : "26 照明设备 ",
	id : "26",
	isParent : true,
	pId : "0"
}, {
	num : "27",
	name : "27 烟草和吸烟用具 ",
	id : "27",
	isParent : true,
	pId : "0"
}, {
	num : "28",
	name : "28 药品，化妆用品，梳妆用品和器具",
	id : "28",
	isParent : true,
	pId : "0"
}, {
	num : "29",
	name : "29 防火灾、防事故、救援用的装置及设备",
	id : "29",
	isParent : true,
	pId : "0"
}, {
	num : "30",
	name : "30  动物的管理与驯养设备  ",
	id : "30",
	isParent : true,
	pId : "0"
}, {
	num : "31",
	name : "31 其他类未列入的食品或饮料制备机械和设备  ",
	id : "31",
	isParent : true,
	pId : "0"
}, {
	num : "32",
	name : "32  图形符号、标识、表面图案、纹饰 ",
	id : "32",
	isParent : true,
	pId : "0"
} ];
/* 洛迦诺 英文 */
var zEnLocanoNodes = [ {
	num : "01",
	name : "01 Foodstuffs ",
	id : "1",
	isParent : true,
	pId : "0"

}, {
	num : "02",
	name : "02 Articles of clothing and haberdashery",
	id : "2",
	isParent : true,
	pId : "0"
}, {
	num : "03",
	name : "03 Travel goods, cases, parasols and personal belongings, not elsewhere specified   ",
	id : "3",
	isParent : true,
	pId : "0"
}, {
	num : "04",
	name : "04 Brushware ",
	id : "4",
	isParent : true,
	pId : "0"
}, {
	num : "05",
	name : "05 Textile piecegoods, artificial and natural sheet material   ",
	id : "5",
	isParent : true,
	pId : "0"
}, {
	num : "06",
	name : "06 Furnishing ",
	id : "6",
	isParent : true,
	pId : "0"
}, {
	num : "07",
	name : "07 Household goods, not elsewhere specified",
	id : "7",
	isParent : true,
	pId : "0"
}, {
	num : "08",
	name : "08  Tools and hardware",
	id : "8",
	isParent : true,
	pId : "0"
}, {
	num : "09",
	name : "09 Packages and containers for the transport or handling of goods ",
	id : "9",
	isParent : true,
	pId : "0"
}, {
	num : "10",
	name : "10 Clocks and watches and other measuring instruments, checking and signalling instruments ",
	id : "10",
	isParent : true,
	pId : "0"
}, {
	num : "11",
	name : "11 Articles of adornment  ",
	id : "11",
	isParent : true,
	pId : "0"
}, {
	num : "12",
	name : "12 Means of transport or hoisting ",
	id : "12",
	isParent : true,
	pId : "0"
}, {
	num : "13",
	name : "13 Equipment for production, distribution or transformation of electricity",
	id : "13",
	isParent : true,
	pId : "0"
}, {
	num : "14",
	name : "14 Recording, communication or information retrieval equipment",
	id : "14",
	isParent : true,
	pId : "0"
}, {
	num : "15",
	name : "15 Machines, not elsewhere specified",
	id : "15",
	isParent : true,
	pId : "0"
}, {
	num : "16",
	name : "16 Photographic, cinematographic and optical apparatus ",
	id : "16",
	isParent : true,
	pId : "0"
}, {
	num : "17",
	name : "17 Musical instruments ",
	id : "17",
	isParent : true,
	pId : "0"
}, {
	num : "18",
	name : "18 Printing and office machinery ",
	id : "18",
	isParent : true,
	pId : "0"
}, {
	num : "19",
	name : "19 Stationery and office equipment, artists and teaching materials",
	id : "19",
	isParent : true,
	pId : "0"
}, {
	num : "20",
	name : "20 Sales and advertising equipment, signs",
	id : "20",
	isParent : true,
	pId : "0"
}, {
	num : "21",
	name : "21 Games, toys, tents and sports goods",
	id : "21",
	isParent : true,
	pId : "0"
}, {
	num : "22",
	name : "22 Arms, pyrotechnic articles, articles for hunting, fishing and pest killing",
	id : "22",
	isParent : true,
	pId : "0"
}, {
	num : "23",
	name : "23 Fluid distribution equipment, sanitary, heating, ventilation and airconditioning equipment, solid fuel",
	id : "23",
	isParent : true,
	pId : "0"
}, {
	num : "24",
	name : "24 Medical and laboratory equipment ",
	id : "24",
	isParent : true,
	pId : "0"
}, {
	num : "25",
	name : "25 Building units and construction elements",
	id : "25",
	isParent : true,
	pId : "0"
}, {
	num : "26",
	name : "26 Lighting apparatus ",
	id : "26",
	isParent : true,
	pId : "0"
}, {
	num : "27",
	name : "27 Tobacco and smokers supplies",
	id : "27",
	isParent : true,
	pId : "0"
}, {
	num : "28",
	name : "28 Pharmaceutical and cosmetic products, toilet articles and apparatus",
	id : "28",
	isParent : true,
	pId : "0"
}, {
	num : "29",
	name : "29 Devices and equipment against fire hazards, for accident prevention and for rescue ",
	id : "29",
	isParent : true,
	pId : "0"
}, {
	num : "30",
	name : "30 Articles for the care and handling of animals",
	id : "30",
	isParent : true,
	pId : "0"
}, {
	num : "31",
	name : "31 Machines and appliances for preparing food or drink, not elsewhere specified",
	id : "31",
	isParent : true,
	pId : "0"
}, {
	num : "32",
	name : "32  Graphic symbols and logos, surface patterns, ornamentation ",
	id : "32",
	isParent : true,
	pId : "0"
} ];
/* 中图分类 */
var zCnlibNodes = [ {
	num : "A",
	name : "A 马克思主义、列宁主义、毛泽东思想、邓小平理论",
	id : "1",
	isParent : true,
	pId : "0"

}, {
	num : "B",
	name : "B 哲学、宗教",
	id : "2",
	isParent : true,
	pId : "0"
}, {
	num : "C",
	name : "C 社会科学总论",
	id : "3",
	isParent : true,
	pId : "0"
}, {
	num : "D",
	name : "D 政治、法律",
	id : "4",
	isParent : true,
	pId : "0"
}, {
	num : "E",
	name : "E 军事",
	id : "5",
	isParent : true,
	pId : "0"
}, {
	num : "F",
	name : "F 经济",
	id : "6",
	isParent : true,
	pId : "0"
}, {
	num : "G",
	name : "G 文化、科学、教育、体育  ",
	id : "7",
	isParent : true,
	pId : "0"
}, {
	num : "H",
	name : "H  语言、文字    ",
	id : "8",
	isParent : true,
	pId : "0"
}, {
	num : "I",
	name : "I 文学",
	id : "9",
	isParent : true,
	pId : "0"
}, {
	num : "J",
	name : "J 艺术 ",
	id : "10",
	isParent : true,
	pId : "0"
}, {
	num : "K",
	name : "K 历史、地理",
	id : "11",
	isParent : true,
	pId : "0"
}, {
	num : "N",
	name : "N  自然科学总论",
	id : "12",
	isParent : true,
	pId : "0"
}, {
	num : "O",
	name : "O 数理科学和化学 ",
	id : "13",
	isParent : true,
	pId : "0"
}, {
	num : "P",
	name : "P 天文学、地球科学  ",
	id : "14",
	isParent : true,
	pId : "0"
}, {
	num : "Q",
	name : "Q 生物科学 ",
	id : "15",
	isParent : true,
	pId : "0"
}, {
	num : "R",
	name : "R 医药、卫生 ",
	id : "16",
	isParent : true,
	pId : "0"
}, {
	num : "S",
	name : "S 农业科学",
	id : "17",
	isParent : true,
	pId : "0"
}, {
	num : "T",
	name : "T 工业技术",
	id : "18",
	isParent : true,
	pId : "0"
}, {
	num : "U",
	name : "U 交通运输",
	id : "19",
	isParent : true,
	pId : "0"
}, {
	num : "V",
	name : "V 航空、航天",
	id : "20",
	isParent : true,
	pId : "0"
}, {
	num : "X",
	name : "X 环境科学、安全科学",
	id : "21",
	isParent : true,
	pId : "0"
}, {
	num : "Z",
	name : "Z 综合性图书      ",
	id : "22",
	isParent : true,
	pId : "0"
} ];

/* 科<=>学分类 */
var zZhSfxNodes = [ {
	num : "02",
	name : "02 数学",
	id : "1",
	isParent : true,
	pId : "0"

}, {
	num : "03",
	name : "03 物理科学",
	id : "2",
	isParent : true,
	pId : "0"
}, {
	num : "04",
	name : "04 化学",
	id : "3",
	isParent : true,
	pId : "0"
}, {
	num : "05",
	name : "05 地球与天体科学",
	id : "4",
	isParent : true,
	pId : "0"
}, {
	num : "06",
	name : "06 生命科学",
	id : "5",
	isParent : true,
	pId : "0"
}, {
	num : "07",
	name : "07 医药卫生",
	id : "6",
	isParent : true,
	pId : "0"
}, {
	num : "08",
	name : "08 工业技术  ",
	id : "7",
	isParent : true,
	pId : "0"
}, {
	num : "09",
	name : "09 信息技术    ",
	id : "8",
	isParent : true,
	pId : "0"
}, {
	num : "10",
	name : "10 通信技术",
	id : "9",
	isParent : true,
	pId : "0"
}, {
	num : "11",
	name : "11 材料科学与冶金 ",
	id : "10",
	isParent : true,
	pId : "0"
}, {
	num : "12",
	name : "12 环境科学",
	id : "11",
	isParent : true,
	pId : "0"
}, {
	num : "13",
	name : "13  农业与生物科学",
	id : "12",
	isParent : true,
	pId : "0"
}, {
	num : "14",
	name : "14 社会科学",
	id : "13",
	isParent : true,
	pId : "0"
}, {
	num : "15",
	name : "15 法律  ",
	id : "14",
	isParent : true,
	pId : "0"
}, {
	num : "16",
	name : "16 商业、经济和管理 ",
	id : "15",
	isParent : true,
	pId : "0"
}, {
	num : "17",
	name : "17  艺术和人文",
	id : "16",
	isParent : true,
	pId : "0"
}, {
	num : "18",
	name : "18 图书馆与情报学",
	id : "17",
	isParent : true,
	pId : "0"
} ];
/* 学科分类 英文 */
var zEnSfxNodes = [ {
	num : "02",
	name : "02 Mathematics",
	id : "1",
	isParent : true,
	pId : "0"

}, {
	num : "03",
	name : "03Physical Sciences",
	id : "2",
	isParent : true,
	pId : "0"
}, {
	num : "04",
	name : "04 Chemistry",
	id : "3",
	isParent : true,
	pId : "0"
}, {
	num : "05",
	name : "05 Earth and Plantary Sciences",
	id : "4",
	isParent : true,
	pId : "0"
}, {
	num : "06",
	name : "06 Life Sciences ",
	id : "5",
	isParent : true,
	pId : "0"
}, {
	num : "07",
	name : "07 Medicine",
	id : "6",
	isParent : true,
	pId : "0"
}, {
	num : "08",
	name : "08 Engineering",
	id : "7",
	isParent : true,
	pId : "0"
}, {
	num : "09",
	name : "09 Information Technology  ",
	id : "8",
	isParent : true,
	pId : "0"
}, {
	num : "10",
	name : "10 Communication Technology",
	id : "9",
	isParent : true,
	pId : "0"
}, {
	num : "11",
	name : "11 Materials Science and Metallurgy",
	id : "10",
	isParent : true,
	pId : "0"
}, {
	num : "12",
	name : "12 Environmental Sciences",
	id : "11",
	isParent : true,
	pId : "0"
}, {
	num : "13",
	name : "13  Agricultural Sciences",
	id : "12",
	isParent : true,
	pId : "0"
}, {
	num : "14",
	name : "14 Social Sciences",
	id : "13",
	isParent : true,
	pId : "0"
}, {
	num : "15",
	name : "15 Law",
	id : "14",
	isParent : true,
	pId : "0"
}, {
	num : "16",
	name : "16 Business",
	id : "15",
	isParent : true,
	pId : "0"
}, {
	num : "17",
	name : "17  Arts and Humanities",
	id : "16",
	isParent : true,
	pId : "0"
}, {
	num : "18",
	name : "18 Library and Information Sciences",
	id : "17",
	isParent : true,
	pId : "0"
} ];

/* JCR分类 */
var zJcrNodes = [ {
	num : "01",
	name : "01 Agricultural Sciences ",
	id : "1",
	isParent : true,
	pId : "0"

}, {
	num : "02",
	name : "02 Geosciences",
	id : "2",
	isParent : true,
	pId : "0"
}, {
	num : "03",
	name : "03 Engineering",
	id : "3",
	isParent : true,
	pId : "0"
}, {
	num : "04",
	name : "04 Arts & Humanities",
	id : "4",
	isParent : true,
	pId : "0"
}, {
	num : "05",
	name : "05 Social Sciences",
	id : "5",
	isParent : true,
	pId : "0"
}, {
	num : "06",
	name : "06 Biological Sciences",
	id : "6",
	isParent : true,
	pId : "0"
}, {
	num : "07",
	name : "07  Mathematics",
	id : "7",
	isParent : true,
	pId : "0"
}, {
	num : "08",
	name : "08 Physics",
	id : "8",
	isParent : true,
	pId : "0"
}, {
	num : "09",
	name : "09 Business",
	id : "9",
	isParent : true,
	pId : "0"
}, {
	num : "10",
	name : "10 Chemistry",
	id : "10",
	isParent : true,
	pId : "0"
}, {
	num : "11",
	name : "11 Medicine",
	id : "11",
	isParent : true,
	pId : "0"
}, {
	num : "12",
	name : "12 Communication Technology",
	id : "12",
	isParent : true,
	pId : "0"
}, {
	num : "13",
	name : "13 Materials Science",
	id : "13",
	isParent : true,
	pId : "0"
}, {
	num : "14",
	name : "14  Engineering(all)",
	id : "14",
	isParent : true,
	pId : "0"
}, {
	num : "15",
	name : "15 Environmental Science ",
	id : "15",
	isParent : true,
	pId : "0"
}, {
	num : "16",
	name : "16 Information Science & Library Science",
	id : "16",
	isParent : true,
	pId : "0"
}, {
	num : "17",
	name : "17 Information Technology",
	id : "17",
	isParent : true,
	pId : "0"
}, {
	num : "18",
	name : "18 Law",
	id : "18",
	isParent : true,
	pId : "0"
}, {
	num : "19",
	name : "19 Materials Science(all)",
	id : "19",
	isParent : true,
	pId : "0"
}, {
	num : "20",
	name : "20 Multidisciplinary",
	id : "20",
	isParent : true,
	pId : "0"
}, {
	num : "21",
	name : "21 Medicine",
	id : "21",
	isParent : true,
	pId : "0"
} ];

/* CJCR分类 */
var zCjcrNodes = [ {
	num : "01",
	name : "01 基础科学",
	id : "1",
	isParent : true,
	pId : "0"

}, {
	num : "02",
	name : "02 工业技术",
	id : "2",
	isParent : true,
	pId : "0"
}, {
	num : "03",
	name : "03 农业科学 ",
	id : "3",
	isParent : true,
	pId : "0"
}, {
	num : "04",
	name : "04 医药卫生",
	id : "4",
	isParent : true,
	pId : "0"
}, {
	num : "05",
	name : "05 哲学政法",
	id : "5",
	isParent : true,
	pId : "0"
}, {
	num : "06",
	name : "06 社会科学",
	id : "6",
	isParent : true,
	pId : "0"
}, {
	num : "07",
	name : "07 经济管理 ",
	id : "7",
	isParent : true,
	pId : "0"
}, {
	num : "08",
	name : "08 教科文艺",
	id : "8",
	isParent : true,
	pId : "0"
} ];

/* ASJC分类 */
var zAsjcNodes = [ {
	num : "10",
	name : "10  Multidisciplinary ",
	id : "10",
	isParent : false,
	pId : "0"
}, {
	num : "11",
	name : "11 Agricultural and Biological Sciences(all)",
	id : "11",
	isParent : true,
	pId : "0"
}, {
	num : "12",
	name : "12 Arts and Humanities(all) ",
	id : "12",
	isParent : true,
	pId : "0"
}, {
	num : "13",
	name : "13 Biochemistry",
	id : "13",
	isParent : true,
	pId : "0"
}, {
	num : "14",
	name : "14 Business",
	id : "14",
	isParent : true,
	pId : "0"
}, {
	num : "15",
	name : "15 Chemical Engineering(all)",
	id : "15",
	isParent : true,
	pId : "0"
}, {
	num : "16",
	name : "16 Chemistry(all)",
	id : "16",
	isParent : true,
	pId : "0"
}, {
	num : "17",
	name : "17 Computer Science(all)",
	id : "17",
	isParent : true,
	pId : "0"
}, {
	num : "18",
	name : "18 Decision Sciences(all)",
	id : "18",
	isParent : true,
	pId : "0"
}, {
	num : "19",
	name : "19 Earth and Planetary Sciences(all)",
	id : "19",
	isParent : true,
	pId : "0"
}, {
	num : "20",
	name : "20 Economics",
	id : "20",
	isParent : true,
	pId : "0"
}, {
	num : "21",
	name : "21 Energy(all)",
	id : "21",
	isParent : true,
	pId : "0"
}, {
	num : "22",
	name : "22 Engineering(all)",
	id : "22",
	isParent : true,
	pId : "0"
}, {
	num : "23",
	name : "23 Environmental Science(all)",
	id : "23",
	isParent : true,
	pId : "0"
}, {
	num : "24",
	name : "24 Immunology and Microbiology(all)",
	id : "24",
	isParent : true,
	pId : "0"
}, {
	num : "25",
	name : "25 Materials Science(all) ",
	id : "25",
	isParent : true,
	pId : "0"
}, {
	num : "26",
	name : "26 Mathematics(all)",
	id : "26",
	isParent : true,
	pId : "0"
}, {
	num : "27",
	name : "27 Medicine(all)",
	id : "27",
	isParent : true,
	pId : "0"
}, {
	num : "28",
	name : "28 Neuroscience(all)",
	id : "28",
	isParent : true,
	pId : "0"
}, {
	num : "29",
	name : "29 Nursing(all)",
	id : "29",
	isParent : true,
	pId : "0"
}, {
	num : "30",
	name : "30 Pharmacology",
	id : "30",
	isParent : true,
	pId : "0"
}, {
	num : "31",
	name : "31 Physics and Astronomy(all)",
	id : "31",
	isParent : true,
	pId : "0"
}, {
	num : "32",
	name : "32 Psychology(all)",
	id : "32",
	isParent : true,
	pId : "0"
}, {
	num : "33",
	name : "33 Social Sciences(all)",
	id : "33",
	isParent : true,
	pId : "0"
}, {
	num : "34",
	name : "34 veterinary(all)",
	id : "34",
	isParent : true,
	pId : "0"
}, {
	num : "35",
	name : "35 Dentistry(all)",
	id : "35",
	isParent : true,
	pId : "0"
}, {
	num : "36",
	name : "36 Health Sciences(all)",
	id : "36",
	isParent : true,
	pId : "0"
} ];

var docActionType = {
	"PatentImgTextList" : "2",
	"PatentTableList" : "2",
	"PatentSurfaceList" : "2",
	"PatentOverviewList" : "2",
	"TradeMarkList" : "T",
	"TradMarkTableList" : "T",
	"TradMarkSurfaceList" : "T",
	"TradMarkOverviewList" : "T",
	"StandardList" : "S",
	"PeriodicalList" : "I",
	"DecisionList" : "D",
	"RefereeList" : "C",
	"LawsList" : "R"
}
var typeToDetailAction = {

	"2" : "txnPatentDetail",
	"T" : "txnTradeMarkDetail",
	"S" : "txnStandardDetail",
	"I" : "txnPeriodicalDetail",
	"D" : "txnDecisionDetail",
	"C" : "txnRefereeDetail",
	"R" : "txnLawsDetail"
}

var typeToDetailPK = {

	"2" : "PID,PNO",
	"T" : "ID,TMID",
	"S" : "ID,STN",
	"I" : "ID",
	"D" : "ID,RIDN",
	"C" : "ID,CAN",
	"R" : "ID,LAN"
}

var taskType = {

	"1" : "专利下载",
	"2" : "专利号单检索",
	"3" : "非专利下载",
	"A1": "项目拆分",
	"A2": "项目合并"
}

var taskStatus = {

	"-1" : "未执行",
	"0" : "已提交",
	"1" : "进行中",
	"2" : "完成",
	"3" : "超期",
	"4" : "发生错误"
}

var CISTitle = {
	"SEA" : "源于紧检索报告",
	"APP" : "申请人引用",
	"EXA" : "检查阶段",
	"OPP" : "异议阶段",
	"115" : "第115协议（第三方评测）",
	"OTH" : "其它感兴趣的文献[在纪要（报告）而非检索报告的引用]",
	"PCT" : "申请人进入国家阶段的引用[初步审查]",
	"ISR" : "国际检索报告",
	"SUP" : "补充检索报告",
	"PRS" : "来源于预授权/预检索",
	"APL" : "由于诉讼而由申请人，所有者，专利权人提交",
	"FOP" : "第三方异议提交",
	"CH2" : "第2章节"
}

/* 公司代码集 */
var com_node = [];
/* 法律状态 */
var law_node = [];
/* 区域查询 */
var reg_node = [];
/*	申请人区域代码*/
var areacode_node = [];

// 表达式生成规则

// trs保留关键字(需要转义的)
var trsKeyWord = [ "AB", "ABF", "ADJ", "ALL", "ALLBT", "ALLNT", "AMB", "AT", "AVG", "BETWEEN", "BEYOND", "BT", "CASE", "COUNT", "DATA", "DOCID", "EQU", "EXACT", "INCLUDE", "LE", "LIFO", "LIKE",
		"LOWER", "MAX", "MIN", "NEAR", "NT", "PT", "RANGE", "RELEVANCE", "RT", "SPELL", "ST", "SUM", "TOASCII", "TOCHINESE", "UF", "UPPER" ];

//var trsKeySign = [ "(", ")", "[", "]", ",", "/", "@", "=", ">", "<", "!", "&", "*", "^", "-", "+", ":", "{", "}", "~", "$", "|" ];
var trsKeySign = [ "[", "]", ",", "/", "@", "=", ">", "<", "!", "&", "*", "^", "-", "+", ":", "{", "}", "~", "$", "|" ];


// 英文文本不加单引号时，AND OR PRE/1 NOT XOR 、% 、?、#、( )不进行转义，其他的关键字全部转义处理
var trsTranKeySign = [ "AND", "OR", "PRE/n", "NOT", "XOR", "%", "?", "#", "(", ")" ];

var trsTranKeySign2 = [ "AND", "OR", "PRE/n", "NOT", "XOR" ];

// 需要末尾加%的
var trsSpField = [ "申请号", "公布号", "优先权", "最早优先权", "国际申请", "国家公布", "简单同族", "引证文献", "分类号", "IPC", "CPC", "FI", "FTERM", "UC", "洛迦诺", "注册号", "申请号", "尼斯分类", "类似群号", "标准号", "标准号冗余", "中国标准分类号CCS",
		"国际标准分类号ICS", "中图分类", "ASJC分类", "学科分类", "JCR分类", "CJCR分类", "决定号", "专利申请号", "IPC", "洛迦诺","登记号","版本号","软件著作权登记号" ];
