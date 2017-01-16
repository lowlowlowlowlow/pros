// JavaScript Document


//选项卡
var oBTMUL=document.getElementById("choices_ul");
var aClicks=oBTMUL.getElementsByTagName("li");

var oShows=document.getElementById("change");



for(var i=0;i<aClicks.length;i++){
	aClicks[i].index=i;
	aClicks[i].onmouseover=function(){
		for(var j=0;j<aClicks.length;j++){
			aClicks[j].className="";	
			aClicks[j].firstChild.style.color="#333";
		}
		this.className="whenHover";
		this.firstChild.style.color="#b71d1d";
		
		for(var j=0;j<oShows.children.length;j++){
			oShows.children[j].className="";
		}
		oShows.children[this.index].className="showsLi";
	}
}

//大图切换
var oPic=document.getElementById("picture");
var oImg=oPic.getElementsByTagName("img")[0];

var oPicul=document.getElementsByClassName("pics_ul")[0];
var aPicsLi=oPicul.getElementsByTagName("li");
var aPics=oPicul.getElementsByTagName("img");

var oMirror=document.getElementById("pics_other");
var oImg2=oMirror.getElementsByTagName("img")[0];

for(var i=0;i<aPicsLi.length;i++){
	aPicsLi[i].index=i;
	aPicsLi[i].onmouseover=function(){
		for(var j=0;j<aPicsLi.length;j++){
			aPicsLi[j].className="";
		}
		
		this.className="redblock";
		oImg.src=aPics[this.index].src;
		oImg2.src="images/new/big/"+(this.index+1)+".jpg";
	}	
}

//放大镜
var oPic=document.getElementById("picture");
var oMove=document.getElementsByClassName("move_block")[0];
var floa_x=null;
var floa_y=null;


oPic.onmousemove=function(ev){
	
	var oEvent=ev|| window.event;
	
	var pos=getPos(oEvent);
	
	var curX=pos.x-oPic.offsetLeft-oMove.offsetWidth/2;
	var curY=pos.y-oPic.offsetTop-oMove.offsetHeight/2;
	
	if(curX<0){
		curX=0;
	}else if(curX>=oPic.offsetWidth-oMove.offsetWidth){
		curX=oPic.offsetWidth-oMove.offsetWidth;
	}
	
	if(curY<0){
		curY=0;
	}else if(curY>=oPic.offsetHeight-oMove.offsetHeight){
		curY=oPic.offsetHeight-oMove.offsetHeight;
	}
	
	oMove.style.left=curX+"px";
	oMove.style.top=curY+"px";
	
	floa_x=curX/(oPic.offsetWidth-oMove.offsetWidth);
	floa_y=curY/(oPic.offsetHeight-oMove.offsetHeight);
		
	oImg2.style.left=-floa_x*(oImg2.offsetWidth-oMirror.offsetWidth)+"px";
	oImg2.style.top=-floa_y*(oImg2.offsetHeight-oMirror.offsetHeight)+"px";
	
}


function getPos(ev){
	
	var oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;	
	
	var oScrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;	
	
	return {x:oScrollLeft+ev.clientX,y:oScrollTop+ev.clientY}
}

oPic.onmouseover=function(){
	oMirror.style.display="block";
}

oPic.onmouseout=function(){
	oMirror.style.display="none";
}



//按钮选择
var oSele=document.getElementsByClassName("sele")[0];
var oSeleAs=oSele.getElementsByTagName("a");

for(var i=0;i<oSeleAs.length;i++){
	
	oSeleAs[i].onclick=function(){
		for(var j=0;j<oSeleAs.length;j++){
			oSeleAs[j].className="";
		}
		this.className="redblock2";
	}
}

//加减
var oCounts=document.getElementsByClassName("num")[0];
var oPlus=document.getElementsByClassName("press")[0];
var oMinus=document.getElementsByClassName("press")[1];
var num1=1;

oPlus.onclick=function(){
	num1++;
	oCounts.innerHTML=num1;
	
}

oMinus.onclick=function(){
	num1--;
	if(num1<1){
		alert("最小数量为1");
		num1=1;
	}
	oCounts.innerHTML=num1;
}


//下拉框
var oAddr=document.getElementsByClassName("addr")[0];
var aAds=document.getElementsByClassName("loca_in")[0];
var ad_list=aAds.children[0].getElementsByTagName("li");
var timer3=null;

oAddr.onmouseover=function(){
	
	this.className="aHover";
	aAds.style.display="block";
	
	clearInterval(timer3);
}

oAddr.onmouseout=function(){
	timer3=setTimeout(function(){
		oAddr.className="";
		aAds.style.display="none";
	},100)
}

aAds.onmouseenter=function(){
	clearInterval(timer3);
	this.style.display="block";
}

aAds.onmouseleave=function(){
	this.style.display="none";
	oAddr.className="";
}

for(var i=0;i<ad_list.length;i++){
	
	ad_list[i].onmouseover=function(){
		for(var j=0;j<ad_list.length;j++){
			ad_list[j].className="";
		}
		this.className="yellow";
	}
	
}
