var Montage=require("core/core").Montage,Template=require("ui/template").Template,Component=require("ui/component").Component,MontageWindow=require("ui/montage-window").MontageWindow,Slot;require("ui/dom");var Application=exports.Application=Montage.create(Montage,{eventManager:{value:null},parentApplication:{value:null},mainApplication:{get:function(){var e=this;while(e.parentApplication)e=e.parentApplication;return e}},_windowsSortOrder:{value:"reverse-z-order"},windowsSortOrder:{get:function(){return this.parentApplication==null?this._windowsSortOrder:this.mainApplication.windowsSortOrder},set:function(e){this.parentApplication==null?["z-order","reverse-z-order","z-order","reverse-open-order"].indexOf(e)!==-1&&(this._windowsSortOrder=e):this.mainApplication.windowsSortOrder=e}},windows:{get:function(){var e;if(this.parentApplication==null){if(!this._windows){var e=MontageWindow.create();e.application=this,e.window=window,this.window=e,this._windows=[this.window],this._multipleWindow=!0}return this._windows}return this.mainApplication.windows}},_window:{value:null},window:{get:function(){if(!this._window&&this==this.mainApplication){var e=MontageWindow.create();e.application=this,e.window=window,this._window=e}return this._window},set:function(e){this._window||(this._window=e)}},attachedWindows:{value:[]},eventManagerForWindow:{value:function(e){return e.defaultEventMananger}},focusWindow:{get:function(){var e=this.windows,t=this.windowsSortOrder;if(t=="z-order")return e[0];if(t=="reverse-z-order")return e[e.length-1];for(var n in e)if(e[n].focused)return e[n]}},addEventListener:{value:function(e,t,n){Object.getPrototypeOf(Application).addEventListener.call(this,e,t,n)}},removeEventListener:{value:function(e,t,n){Object.getPrototypeOf(Application).removeEventListener.call(this,e,t,n)}},delegate:{value:null},openWindow:{value:function(e,t,n){var r=this,i=MontageWindow.create(),s,o,u={location:!1,menubar:!1,resizable:!0,scrollbars:!0,status:!1,titlebar:!0,toolbar:!1},a={module:e,name:t,parent:window,callback:function(e,t){var n;s=e.document.application,i.window=e,i.application=s,i.component=t,s.window=i,r.attachedWindows.push(i),n=r.mainApplication.windowsSortOrder,n=="z-order"||n=="reverse-open-order"?r.windows.unshift(i):r.windows.push(i),o=document.createEvent("CustomEvent"),o.initCustomEvent("load",!0,!0,null),i.dispatchEvent(o)}};if(this===this.mainApplication&&!this._multipleWindow)var f=this.window;if(typeof n=="object"){var l,c,h="",p="";for(l in n)n.hasOwnProperty(l)&&(u[l]=n[l])}var d=["name"];for(l in u)d.indexOf(l)==-1&&(c=u[l],typeof c=="boolean"?c=c?"yes":"no":(c=String(c),c.match(/[ ,"]/)&&(c='"'+c.replace(/"/g,'\\"')+'"')),p+=h+l+"="+c,h=",");return window.require.loadPackage({name:"montage"}).then(function(e){var t=window.open(e.location+"ui/window-loader/index.html","_blank",p);t.loadInfo=a}).done(),i}},attachWindow:{value:function(e){var t=e.application.parentApplication,n;return t!==this&&(t&&t.detachWindow(e),e.parentApplication=this,this.attachedWindows.push(e),n=this.mainApplication.windowsSortOrder,n=="z-order"||n=="reverse-open-order"?this.windows.unshift(e):this.windows.push(e),e.focus()),e}},detachWindow:{value:function(e){var t,n,r=this.windows;return e===undefined&&(e=this.window),n=e.application.parentApplication,n==this?(t=this.attachedWindows.indexOf(e),t!==-1&&this.attachedWindows.splice(t,1),t=r.indexOf(e),t!==-1&&r.splice(t,1),e.application.parentApplication=null):n&&n.detachWindow(e),e}},didCreate:{value:function(){window.loadInfo&&!this.parentApplication&&(this.parentApplication=window.loadInfo.parent.document.application)}},_load:{value:function(e,t){var n=Template.create().initWithDocument(window.document,e),r,i=this;exports.application=i,require.async("ui/component").then(function(e){r=e.__root__,r.element=document,n.instantiateWithOwnerAndDocument(null,window.document,function(){i.callDelegateMethod("willFinishLoading",i),r.needsDraw=!0,t&&t(i)})}).done()}},_alertPopup:{value:null,enumerable:!1},_confirmPopup:{value:null,enumerable:!1},_notifyPopup:{value:null,enumerable:!1},_zIndex:{value:null},_isSystemPopup:{value:function(e){return e==="alert"||e==="confirm"||e==="notify"}},_createPopupSlot:{value:function(e){var t=document.createElement("div");document.body.appendChild(t),t.style.zIndex=e,t.style.position="absolute";var n=Slot.create();return n.element=t,n}},getPopupSlot:{value:function(e,t,n){var r=this;require.async("ui/slot.reel/slot").then(function(i){Slot=Slot||i.Slot,e=e||"custom";var s=r._isSystemPopup(e),o,u,a;r.popupSlots=r.popupSlots||{};if(s)switch(e){case"alert":o=9004;break;case"confirm":o=9003;break;case"notify":o=9002}else r._zIndex?r._zIndex=r._zIndex+1:r._zIndex=7e3,o=r._zIndex;a=r.popupSlots[e],a||(a=r.popupSlots[e]=r._createPopupSlot(o)),s||(a.element.style.zIndex=o),a.content=t,n.call(this,a)}).done()}},returnPopupSlot:{value:function(e){var t=this;if(t.popupSlots&&t.popupSlots[e]){var n=t.popupSlots[e];n.content=null}}},_getActivePopupSlots:{value:function(){var e=[];if(this.popupSlots){var t=Object.keys(this.popupSlots);if(t&&t.length>0){var n=0,r=t.length,i;for(n=0;n<r;n++)i=this.popupSlots[t[n]],i&&i.content!==null&&e.push(i)}}return e}}})