
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
