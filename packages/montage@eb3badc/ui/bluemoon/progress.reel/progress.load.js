montageDefine("eb3badc","ui/bluemoon/progress.reel/progress",{dependencies:["montage","ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component;t.Progress=r.create(i,{_barElement:{value:null},_value:{value:0},value:{get:function(){return this._value},set:function(e){e!==this._value&&(this._value=e,this._value>this._max&&(this._value=this._max),this._value<0&&(this._value=0),this.needsDraw=!0)}},_max:{value:100},max:{get:function(){return this._max},set:function(e){e!==this._max&&(this._max=e,this._max<=0&&(this._max=1),this.needsDraw=!0)}},_scrollingChanged:{value:!0},_scrolling:{value:!1},scrolling:{get:function(){return this._scrolling},set:function(e){this._scrolling!==e&&(this._scrollingChanged=!0,this._scrolling=e,this.needsDraw=!0)}},draw:{enumerable:!1,value:function(){var e=this._value/this._max;e=Math.min(Math.max(e,0),1);var t=e*100;this._barElement.style.width=t+"%",this._scrollingChanged&&(this._scrolling?this._barElement.classList.add("scrolling"):this._barElement.classList.remove("scrolling"),this._scrollingChanged=!1)}}})}})