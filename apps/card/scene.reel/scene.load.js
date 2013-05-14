montageDefine("1772686","scene.reel/scene",{dependencies:["montage","montage/ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("montage/ui/component").Component;t.Scene=r.create(i,{_isSnowing:{enumerable:!1,value:!0},isSnowing:{get:function(){return this._isSnowing},set:function(e){this._isSnowing=e}},_isCardOpen:{enumerable:!1,value:!1},_pointerX:{enumerable:!1,value:0},_pointerY:{enumerable:!1,value:0},_originX:{enumerable:!1,value:0},_originY:{enumerable:!1,value:0},handleMousemove:{enumerable:!1,value:function(e){this._pointerX=e.pageX,this._pointerY=e.pageY,this._hasRotation&&(this.needsDraw=!0)}},handleOpenCardAction:{enumerable:!1,value:function(){this._isCardOpen||(this._isCardOpen=!0,this.needsDraw=!0,this._element.addEventListener("webkitTransitionEnd",this,!1),this.isSnowing=!1)}},handleCloseCardAction:{enumerable:!1,value:function(){this._isCardOpen&&this._hasRotation&&(this._isCardOpen=!1,this._hasRotation=!1,this.needsDraw=!0,this._element.addEventListener("webkitTransitionEnd",this,!1))}},_hasRotation:{enumerable:!1,value:!1},handleWebkitTransitionEnd:{enumerable:!1,value:function(){this._isCardOpen?(this._hasRotation=!0,this._originX=this._pointerX,this._originY=this._pointerY):this.isSnowing=!0,this._element.removeEventListener("webkitTransitionEnd",this,!1)}},prepareForDraw:{enumerable:!1,value:function(){window.Touch||document.addEventListener("mousemove",this,!1)}},_width:{enumerable:!1,value:0},_height:{enumerable:!1,value:0},willDraw:{enumerable:!1,value:function(){this._width=this._element.parentNode.parentNode.offsetWidth,this._height=this._element.parentNode.parentNode.offsetHeight}},draw:{enumerable:!1,value:function(){var e;this._isCardOpen?this._hasRotation?(this._element.style.webkitTransition="none",this.ballLeft.style.webkitTransition="none",this.ballRight.style.webkitTransition="none",e=" rotateX("+(this._pointerY-this._originY)/(this._height*-1.9)+"rad) rotateZ("+(this._pointerX-this._originX)/(this._width*-2.5)+"rad) ",this._element.style.webkitTransform="rotate3d(1,0,0,50deg)"+e+"translate3d(0,-10px,-250px)",e=" rotateX("+(this._pointerY-this._originY)/(this._height*1.9)+"rad) rotateZ("+(this._pointerX-this._originX)/(this._width*2.5)+"rad) ",this.ballLeft.style.webkitTransform="translate3d(0, 0, 71px)"+e+"rotate3d(1,0,0,-50deg)",this.ballRight.style.webkitTransform="translate3d(0, 0, 71px)"+e+"rotate3d(1,0,0,-50deg)"):(this._element.classList.add("openCard"),this._element.style.webkitTransition="1s all",this.ballLeft.style.webkitTransition="1s all",this.ballRight.style.webkitTransition="1s all",this._element.style.webkitTransform="rotate3d(1,0,0,50deg) rotateX(0) rotateZ(0) translate3d(0,-10px,-250px)",this.ballLeft.style.webkitTransform="translate3d(0, 0, 71px) rotateX(0) rotateZ(0) rotate3d(1,0,0,-50deg)",this.ballRight.style.webkitTransform="translate3d(0, 0, 71px) rotateX(0) rotateZ(0) rotate3d(1,0,0,-50deg)"):(this._element.classList.remove("openCard"),this._element.style.webkitTransition="1s all",this.ballLeft.style.webkitTransition="1s all",this.ballRight.style.webkitTransition="1s all",this._element.style.webkitTransform="rotate3d(1,0,0,0) rotateX(0) rotateZ(0) translate3d(0,0,0)",this.ballLeft.style.webkitTransform="translate3d(0, 0, 71px) rotateX(0) rotateZ(0) rotate3d(1,0,0,0)",this.ballRight.style.webkitTransform="translate3d(0, 0, 71px) rotateX(0) rotateZ(0) rotate3d(1,0,0,0)")}}})}})