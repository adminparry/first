var Borrow=function(){}
Borrow.prototype={
	//初始化方法
	init:function(){
		//获取信息
		this.getMsg();
		//
		this.initBind();
	},
	//事件绑定初始化方法
	initBind:function(){
		var _that=this;
		//信息刷新按钮click事件绑定
		$("#aa").click(function(){_that.getMsg();});
		//删除信息click事件绑定
		$("#bb").click(function(){_that.delMsg();});
	},
	//获取信息
	getMsg:function(){
		//some code
	},
	//删除信息方法
	delMsg:function(){
		//some code
	}


}
var _borrow=new Borrow();
_borrow.init()
