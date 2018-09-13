const jwt=require("jwt-simple");
var sign="sdfshdjsdjiq"
var token=jwt.encode({
	userId:"12",
	userName:"laoli",
	exp:Date.now()+24*60*60*1000
},sign)
