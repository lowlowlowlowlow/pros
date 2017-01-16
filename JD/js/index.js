// JavaScript Document


//图片轮播 
var oPre=document.getElementById("pre");
var oNext=document.getElementById("next");
var oShowBtn=document.getElementsByClassName("banner_main")[0];
var oUL1=document.getElementById("ul1");
var aAs=oUL1.getElementsByTagName("a");
var singleWidth=aAs[0].offsetWidth;

oUL1.style.width=singleWidth*aAs.length+"px";


var oUL2=document.getElementById("ul2");
var aA2s=oUL2.getElementsByTagName("a");

var nums=0;
var timer2=null;


autoPlay();



for(var i=0;i<aA2s.length;i++){
	aA2s[i].index=i;
	aA2s[i].onclick=function(){
	
		moves(this.index);
		
		nums=this.index;
	}
}

oPre.onclick=function(){
	nums--;
	if(nums<0){
		nums=aAs.length-1;
	}
	moves(nums);
}

oNext.onclick=function(){
	nums++;
	if(nums>aAs.length-1){
		nums=0;
	}
	moves(nums);
}


oShowBtn.onmouseover=function(){
	clearInterval(timer2);
	Movement(oNext,{opacity:100})
	Movement(oPre,{opacity:100})
}

oShowBtn.onmouseout=function(){
	clearInterval(timer2);
	autoPlay();
	Movement(oNext,{opacity:0})
	Movement(oPre,{opacity:0})
}

function moves(nums){
	for(var j=0;j<aAs.length;j++){
			aA2s[j].className="";
		}
	aA2s[nums].className="tomato";
	
	Movement(oUL1,{left:-nums*singleWidth})
}

function autoPlay(){
	clearInterval(timer2);
	timer2=setInterval(function(){
		nums++;
	if(nums>aAs.length-1){
		nums=0;
	}
	moves(nums);
		
	},3000)
	
}


//左侧导航移入移出
var oBox=document.getElementById("box");
var chans=oBox.getElementsByClassName("channel");

var oUL=document.getElementsByClassName("bn_lul")[0];
var lis=oUL.getElementsByTagName("li");
var aA3s=oUL.getElementsByTagName("a");

var timer=null;


for(var i=0;i<lis.length;i++){
	
	lis[i].index=i;
	lis[i].onmouseover=function(){
		oBox.style.display="block";
		
		for(var j=0;j<chans.length;j++){
			
			chans[j].style.display="none";
		}
		chans[this.index].style.display="block";
		
		for(var x=0;x<lis.length;x++){
			lis[x].className="";	
		}
		
		this.className="changeCol";
		
		for(var z=0;z<aA3s.length;z++){
			aA3s[z].style.color="white";	
		}
		
		for(var y=0;y<this.children[0].children.length;y++){
			this.children[0].children[y].style.color="#c81624";	
		}
		
		clearTimeout(timer);
	}
	
	lis[i].onmouseout=function(){
		clearInterval(timer);
		
		timer=setTimeout(function(){
			
			noClass();
		},200)
	}	
}


oBox.onmouseenter=function(){
	clearTimeout(timer);
	this.style.display="block";	
}

oBox.onmouseleave=function(){
	noClass();
}

function noClass(){
	
	oBox.style.display="none";
			
	for(var x=0;x<lis.length;x++){
		lis[x].className="";	
	}
			
	for(var z=0;z<aA3s.length;z++){
		aA3s[z].style.color="white";	
	}
	
}



//导航选项卡
var aSpecNav=document.getElementsByClassName("spec_nav");

for(var i=0;i<aSpecNav.length;i++){
	if(i==0){	
		adds(aSpecNav[0],"blocks1","slides")
	}else{
		adds(aSpecNav[i],"blocks"+(i+1),"mp_mid");
	}
}


function adds(obj,cla1,cla2){
	
	var ASN_li=obj.children;
	
	var block1=document.getElementsByClassName(cla1)[0];

	var aSlides=block1.getElementsByClassName(cla2);
	
	for(var i=0;i<ASN_li.length;i++){
		
		ASN_li[i].index=i;
		ASN_li[i].onmouseover=function(){
			for(var j=0;j<ASN_li.length;j++){
				ASN_li[j].className="";
				ASN_li[j].firstChild.className="";
				ASN_li[j].lastChild.style.visibility="visible";
			}
			
			this.className="liHover";
			this.firstChild.className="aAHover";
			this.lastChild.style.visibility="hidden";
			
			for(var x=0;x<aSlides.length;x++){
				aSlides[x].style.display="none";
			}
	
			aSlides[this.index].style.display="block";
		}
	}
}

/*
var aSN_li=aSpecNav[0].getElementsByTagName("li");
var block1=document.getElementById("blocks1");

var aSlides=block1.getElementsByClassName("slides");

for(var i=0;i<aSN_li.length;i++){
	aSN_li[i].index=i;
	aSN_li[i].onmouseover=function(){
		
		for(var x=0;x<aSlides.length;x++){
			aSlides[x].style.display="none";
		}
	
		aSlides[this.index].style.display="block";
	}
}*/

/*
var aSN_li1=aSpecNav[1].getElementsByTagName("li");
var aBlocks2=document.getElementsByClassName("blocks2");
var oBlocks21=aBlocks2[0];
var aMp_mids=oBlocks21.getElementsByClassName("mp_mid");

for(var i=0;i<aSN_li1.length;i++){
	aSN_li1[i].index=i;
	changeSite(aSN_li1[i]);
*/



/*
var aSN_li2=aSpecNav[2].getElementsByTagName("li");
var oBlocks22=aBlocks2[1];
var aMp_mids=oBlocks22.getElementsByClassName("mp_mid");

for(var i=0;i<aSN_li2.length;i++){
	aSN_li2[i].index=i;
	changeSite(aSN_li2[i]);
}
*/

/*
function changeSite(obj){

	obj.onmouseover=function(){
		nowIndex2++;
		if(this.index%3==0){
			aMp_mids[0].style.zIndex=nowIndex2;
		}else if(this.index%3==1){
			aMp_mids[1].style.zIndex=nowIndex2;
		}else{
			aMp_mids[2].style.zIndex=nowIndex2;
		}
	}	
		
}*/


//左侧边栏效果
/*
var l_side=document.getElementsByClassName("leftside")[0];
var floors=l_side.getElementsByClassName("num");
var arr_wrds=["服饰","美妆","手机","家电","数码","运动","居家","母婴","食品","图书","车品","服务"]

document.onmousemove=function(ev){
	
	var oEvent= ev || window.event;
	
	var pos=getPos(oEvent);
	
	for(var i=0;i<floors.length;i++){
			floors[i].innerHTML=(i+1)+"F";
			floors[i].style.backgroundColor="transparent";
			floors[i].style.color="#666";
		}
	
	for(var i=0;i<floors.length;i++){
		
		if(pos.y >=1760+i*655 && pos.y<1760+(i+1)*655){
			floors[i].innerHTML=arr_wrds[i];
			floors[i].style.backgroundColor="#c81624";
			floors[i].style.color="white";
		}
	}
}

function getPos(ev){
		
	var oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;	
		
	var oScrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;	
		
	return {x:oScrollLeft+ev.clientX,y:oScrollTop+ev.clientY}
}
*/
//左侧边栏
var LocationFloorList=getByClass(document,'LocationFloorList')[0];
	var aLi=LocationFloorList.getElementsByTagName('li');
	var aFloor=getByClass(document,'floor');
	var arr=[];
		
	//-------------------------------------------------
		
	for(var i=0; i<aFloor.length; i++){
		var json={};
		json.name=i;
		json.offsetTop=aFloor[i].offsetTop;
		arr.push(json);
	};
	
	console.log(arr);
	
	window.onscroll=function(){
		//显示楼层编号-------------------------------------------------
		var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
		if(scrolltop>1500){
			LocationFloorList.style.display='block';
		}else{
			LocationFloorList.style.display='none';
		};
		
		// 根据楼层滚动位置，定位编号------------------------------------------------
		var last_arr=[];
		for(var j=0; j<arr.length; j++){
			if(arr[j].offsetTop<scrolltop+400){//400为接近屏幕的敏感区
				last_arr.push(arr[j].name);
			};
		};
		console.log(last_arr);
		
		var li_index=last_arr[last_arr.length-1];

		for(var l=0; l<aFloor.length; l++){
			aLi[l].className='';
		};
		//页面上部如果有内容，没有楼层会放入新数组，产生错误
		last_arr.length==0 ?aLi[0].className='ac':aLi[li_index].className='ac';
	};
	
	//点击编号，跳转到相对楼层-----------------------------------------------
	for(var i=0; i<aFloor.length; i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			var start=document.documentElement.scrollTop || document.body.scrollTop;
			var end=arr[this.index].offsetTop;
			move(start,end)
		}
	};
	//move-------------------------------------------------------
	var timer;
	function move(start,end){
		var dis=end-start;
		var count=parseInt(1500/30);
		var n=0;
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			var a=1-n/count;
			var step_dis=start+dis*(1-a*a*a*a);
			window.scrollTo(0,step_dis);//第一个参数:横向滚动条  第二个参数:纵向滚动条
			if(n==count){
				clearInterval(timer);
			};
		},30)
	};
	
	function getByClass(oParent,cls){
		var arr=[]; //容器
		if(document.getElementsByClassName) return oParent.getElementsByClassName(cls);
		else{
			var aEl=oParent.getElementsByTagName('*');//所有标签
			for(var i=0;i<aEl.length;i++){
				if(aEl[i].className.indexOf(cls)!=-1) arr.push(aEl[i]);//向数组中添加
			}
		return arr;
		}
	};

//向上折起
var uncho_ul=document.getElementsByClassName("unchosen")[0];
var uncho_li=uncho_ul.getElementsByTagName("li");
var wrd_arr=["话费","机票","电影票","游戏"]
var show_cons=document.getElementsByClassName("moveCons")[0];
var goUp=show_cons.getElementsByClassName("goup_Block");
var secCho=document.getElementsByClassName("second_chosen");


var aClose=document.getElementsByClassName("closes");

function onmousein(obj){
	for(var j=0;j<4;j++){
		uncho_li[j].innerHTML='<a href="#">'+wrd_arr[j]+'</a>';
		uncho_li[j].className="afterHover";
		Movement(uncho_li[j],{height:25});
		uncho_li[j].style.borderTop="3px solid transparent";
		uncho_li[j].firstChild.style.color="#333";
	}
	Movement(show_cons,{top:25})
	
	for(var x=0;x<goUp.length;x++){
		goUp[x].style.display="none";
	}
	
	goUp[obj.index].style.display="block";
	Movement(uncho_ul,{height:25});
	uncho_ul.style.overflow="hidden";
	obj.style.borderTop="3px solid #c81624";
	obj.firstChild.style.color="#c81624";
		
}

for(var i=0;i<4;i++){
	uncho_li[i].index=i;
	
	uncho_li[i].onclick=function(){
		onmousein(this)
	}
}


for(var j=0;j<aClose.length;j++){
	aClose[j].onclick=function(){
		for(var j=0;j<4;j++){
			uncho_li[j].innerHTML='<a href="#"><i class="po'+(j+1)+'"></i><span>'+wrd_arr[j]+'</span></a>';
			uncho_li[j].className="";
			Movement(uncho_li[j],{height:60});
			uncho_li[j].style.paddingTop="13px";
			uncho_li[j].style.borderTop="3px solid transparent";
			uncho_li[j].firstChild.style.color="#333";
		}
		
		Movement(uncho_ul,{height:207});
		Movement(show_cons,{top:210})
	}
}

for(var x=0;x<secCho.length;x++){
	
	changeBg(secCho[x]);
}

function changeBg(obj){
	
	var secCho_a=obj.getElementsByTagName("a");
	
	for(var i=0;i<secCho_a.length;i++){
		secCho_a[i].onclick=function(){
			for(var x=0;x<secCho_a.length;x++){
				secCho_a[x].className="";
			}
			this.className="chosen_bg";
		}
	}
}