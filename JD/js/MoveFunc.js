// JavaScript Document

function Movement(obj,json,endFn){
	
	clearInterval(obj.timer);
	
	obj.timer=setInterval(function(){
		
		for(var attr in json){
	
		var curStyle=parseInt(getStyle(obj,attr));
	
		if(attr=="opacity"){
			curStyle=Math.round(getStyle(obj,attr)*100);	
		}else{	
			curStyle=curStyle;	
		}
	
		var speed=(json[attr]-curStyle)/6;
	
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
	
		if(json[attr]==curStyle){
			
			clearInterval(obj.timer);
			
			if(endFn){
				
				endFn();	
			}
		}else{
			if(attr=="opacity"){
				obj.style.opacity=(curStyle+speed)/100;
				obj.style.filter="alpha(opacity="+(curStyle+speed)+")";
			}else{
				
				obj.style[attr]=curStyle+speed+"px";	
			}
		}
		}
		
	},30)
	
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		
		return obj.currentSyle[attr];	
		
	}else{
		
		return getComputedStyle(obj,false)[attr];	
	}
	
}