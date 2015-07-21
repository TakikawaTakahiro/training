var strMsg1 = "あいこ"
var strMsg2 = "勝ち！"
var strMsg3 = "負け！"

function myResult(jankenUsr){
	var jankenCom = Math.floor(Math.random()*3);
	if(jankenCom　== jankenUsr)
		return strMsg1;
	else if ((jankenCom+1)%3 == jankenUsr)
		return strMsg2;
	else
		return strMsg3;
}