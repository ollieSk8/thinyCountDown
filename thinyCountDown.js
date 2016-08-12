;(function(){
    function thinyCountDown(options){

			this.el=options.el;

			if(/^[0-9]*$/.test(parseInt(options.startTimeStamp))){

				this.startTimeStamp=parseInt(options.startTimeStamp);

			}else{

				this.startTimeStamp=new Date(options.startTimeStamp).getTime();
			}

			if(/^[0-9]*$/.test(parseInt(options.endTimeStamp))){

				this.endTimeStamp=parseInt(options.endTimeStamp);

			}else{

				this.endTimeStamp=new Date(options.endTimeStamp).getTime();
			}
			
			

			this.diff=this.endTimeStamp-this.startTimeStamp;

			this.onEnd=options.onEnd;

			this.render=options.render;

			this.timer=null;

			this.countMove();
	}
	thinyCountDown.prototype.countMove=function(){

		var _this=this;

		_this.timer=setInterval(function(){

			_this.diff-=1000;

			if(_this.diff<=0){

				_this.onEnd();//倒计时结束执行回调

				clearInterval(_this.timer);

			}else{

				_this.date=_this.countDiff(_this.diff)//计算时间返回date时间对象

				$(_this.el).html('');

				_this.render(_this.date);//渲染
			}

		},1000);
	}
	thinyCountDown.prototype.countDiff=function(diff){

			var _this=this;

			var _diff=diff;

		    var _day=Math.floor(_diff/(1000*60*60*24));//天

			_diff-=_day*(1000*60*60*24);

			var _hour=Math.floor(_diff/(1000*60*60));//小时

			_diff-=_hour*(1000*60*60);

			var _min=Math.floor(_diff/(1000*60));//分钟

			_diff-=_min*(1000*60);

			var _sec=Math.floor(_diff/(1000));//秒

			return {
				day:_this.toDoubleNumber(_day),
				hour:_this.toDoubleNumber(_hour),
				min:_this.toDoubleNumber(_min),
				sec:_this.toDoubleNumber(_sec),
			}
	}
	thinyCountDown.prototype.toDoubleNumber=function(str){
		//单个数字变成双数  例如 1 ->01
		 var _num=str;
			 if(_num<10){
	         _num='0'+_num;    
	     }else{
	         _num=''+_num;    
	     }
	     return _num;   
	}
    var moduleName = thinyCountDown;
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = moduleName;
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function() { return moduleName; });
    } else {
        this.thinyCountDown = moduleName;
    }

}).call((function() {
    return this || (typeof window !== 'undefined' ? window : global);
})());


