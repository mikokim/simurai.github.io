montageDefine("e6f5540","ui/bluemoon/button.reel/button",{dependencies:["montage","ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component;t.Button=r.create(i,{_preventFocus:{enumerable:!1,value:!1},preventFocus:{get:function(){return this._preventFocus},set:function(e){e===!0?this._preventFocus=!0:this._preventFocus=!1}},_busy:{enumerable:!1,value:!1},busy:{get:function(){return this._busy},set:function(e){e===!0&&!this._disabled?this._busy=!0:this._busy=!1,this.needsDraw=!0}},_disabled:{enumerable:!1,value:!1},disabled:{get:function(){return this._disabled},set:function(e){e===!0?(this._disabled=!0,this.busy=!1):this._disabled=!1,this.needsDraw=!0}},enabled:{dependencies:["disabled"],get:function(){return!!this._disabled},set:function(e){this.disabled=!e}},_pressed:{value:"false",enumerable:!1},pressed:{get:function(){return this._pressed},set:function(e){e!==this._pressed&&(this._pressed=e,this.needsDraw=!0)}},_value:{enumerable:!1,value:undefined},value:{get:function(){return this._value},set:function(e){this._value=e,this.needsDraw=!0}},converter:{value:null},_title:{enumerable:!1,value:undefined},title:{get:function(){return this._title},set:function(e){this._title=e,this.needsDraw=!0}},_valueNode:{value:undefined,enumerable:!1},valueActive:{value:undefined},_valueNodeActiveNode:{value:undefined,enumerable:!1},pressedValue:{value:undefined},_pressedValueNode:{value:undefined,enumerable:!1},pressedValueActive:{value:undefined},_pressedValueActiveNode:{value:undefined,enumerable:!1},mixedValue:{value:undefined},_mixedValueNode:{value:undefined,enumerable:!1},mixedValueActive:{value:undefined},_mixedValueActiveNode:{value:undefined,enumerable:!1},_active:{value:!1},active:{get:function(){return this._active},set:function(e){this._active=e,this.needsDraw=!0}},_behavior:{value:"transient",enumerable:!1},behavior:{get:function(){return this._behavior},set:function(e){e!==this._behavior&&(e=e==="transient"||e==="toggle"||e==="mixed"?e:"transient",this._behavior=e,this.needsDraw=!0)}},_observedPointer:{enumerable:!0,value:null},handleMousedown:{value:function(e){!this._disabled&&!this._busy&&this._acknowledgeIntent("mouse"),e.preventDefault(),this._preventFocus||this._element.focus()}},handleMouseup:{value:function(e){this._interpretInteraction(e)}},handleTouchstart:{value:function(e){if(this._observedPointer!==null)return;!this._disabled&&!this._busy&&this._acknowledgeIntent(e.changedTouches[0].identifier),e.preventDefault(),this._preventFocus||this._element.focus()}},handleTouchend:{value:function(e){var t=0,n=e.changedTouches.length;for(;t<n;t++)if(e.changedTouches[t].identifier===this._observedPointer){this._interpretInteraction(e);return}}},handleTouchcancel:{value:function(e){var t=0,n=e.changedTouches.length;for(;t<n;t++)if(e.changedTouches[t].identifier===this._observedPointer){this._releaseInterest(),this.active=!1;return}}},surrenderPointer:{value:function(e,t){return this._releaseInterest(),this.active=!1,!0}},_acknowledgeIntent:{value:function(e){this._observedPointer=e,this.eventManager.claimPointer(e,this),window.Touch?(document.addEventListener("touchend",this),document.addEventListener("touchcancel",this)):document.addEventListener("mouseup",this),this.active=!0},enumerable:!1},_interpretInteraction:{value:function(e){if(!this.active)return;var t=e.target;while(t!==this.element&&t&&t.parentNode)t=t.parentNode;this.element===t&&(this._shouldDispatchActionEvent=!0,this._dispatchActionEvent(),this.updateState()),this._releaseInterest(),this.active=!1},enumerable:!1},_releaseInterest:{value:function(){window.Touch?(document.removeEventListener("touchend",this),document.removeEventListener("touchcancel",this)):document.removeEventListener("mouseup",this),this.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null}},updateState:{value:function(){var e;if(this._behavior!=="transient"){switch(this._pressed){case"false":e="true";break;case"true":e=this._behavior==="toggle"?"false":"mixed";break;case"mixed":e="false"}this.pressed=e}this.needsDraw=!0}},_isElementInput:{value:!1},prepareForDraw:{value:function(){this._element.tabIndex||(this._element.tabIndex=0),this._element.classList.add("montage-Button"),this._element.setAttribute("aria-role","button"),(this._isElementInput=this._element.tagName==="INPUT")&&this.value===undefined?(this._valueNode=this._element.getAttributeNode("value"),this.value=this._element.value):(this._element.firstChild||this._element.appendChild(document.createTextNode("")),this._valueNode=this._element.firstChild,this.value===undefined&&(this.value=this._valueNode.data))}},prepareForActivationEvents:{value:function(){window.Touch?this._element.addEventListener("touchstart",this):this.element.addEventListener("mousedown",this)}},_convertValue:{value:function(e){return this.converter?this.converter.convert(e):e}},draw:{value:function(){this._disabled?this._element.classList.add("disabled"):this._element.classList.remove("disabled"),this._busy?(this._element.setAttribute("aria-busy",!0),this._element.classList.add("busy")):(this._element.setAttribute("aria-busy",!1),this._element.classList.remove("busy")),this._behavior!=="transient"?(this._element.setAttribute("aria-pressed",this._pressed),this._pressed==="true"&&this.pressedValue?this._isElementInput?this._valueNode.value=this._convertValue(this.pressedValue):(this._pressedValueNode||(this._pressedValueNode=document.createTextNode(""),this._pressedValueNode.data=this._convertValue(this.pressedValue)),this._valueNode.data=this._convertValue(this.pressedValue)):this._pressed==="mixed"&&this.mixedValue?this._isElementInput?this._element.setAttribute("value",this._convertValue(this.mixedValue)):this._element.firstChild.data=this._convertValue(this.mixedValue):this._pressed==="false"&&typeof this.value!="undefined"&&(this._isElementInput?this._element.setAttribute("value",this._convertValue(this.value)):this._element.firstChild.data=this._convertValue(this.value))):this._isElementInput?this._element.setAttribute("value",this._convertValue(this.value)):this._element.firstChild.data=this._convertValue(this.value),this.valueActive&&(this.active?this._behavior==="transient"||this._pressed==="false"?this._isElementInput?this._element.setAttribute("value",this._convertValue(this.valueActive)):this._element.firstChild.data=this._convertValue(this.valueActive):this._pressed==="true"&&this.pressedValueActive?this._isElementInput?this._element.setAttribute("value",this._convertValue(this.pressedValueActive)):this._element.firstChild.data=this._convertValue(this.pressedValueActive):this._pressed==="mixed"&&this.mixedValueActive&&(this._isElementInput?this._element.setAttribute("value",this._convertValue(this.mixedValueActive)):this._element.firstChild.data=this._convertValue(this.mixedValueActive)):this._behavior==="transient"&&(this._isElementInput?this._element.setAttribute("value",this._convertValue(this.value)):this._element.firstChild.data=this._convertValue(this.value))),this._element.setAttribute("title",this.title||"")}}},n),t.ToggleButton=r.create(t.Button,{_behavior:{value:"toggle"}})}})