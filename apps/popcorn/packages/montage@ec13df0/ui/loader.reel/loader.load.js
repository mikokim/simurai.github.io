montageDefine("ec13df0","ui/loader.reel/loader",{dependencies:["core/core","ui/component","core/logger"],factory:function(e,t,n){var r=e("core/core").Montage,i=e("ui/component").Component,s=e("core/logger").logger("loader"),o="_montageStartBootstrappingTimeout",u="montage-app-bootstrapper",a="montage-app-loader",f="montage-app-bootstrapping",l="montage-app-loading",c="montage-app-loaded",h=0,p=1,d=2,v=3;t.Loader=r.create(i,{mainModule:{value:"ui/main.reel"},mainName:{value:"Main"},includeFrameworkModules:{value:!1},minimumBootstrappingDuration:{value:1500},minimumLoadingDuration:{value:2e3},_initializedModules:{value:null},initializedModules:{dependencies:["includeFrameworkModules"],enumerable:!1,get:function(){return!this._initializedModules||this.includeFrameworkModules?this._initializedModules:this._initializedModules.slice(this._frameworkModuleCount-1)},set:function(e){this._initializedModules=e}},_requiredModules:{value:null},requiredModules:{dependencies:["includeFrameworkModules"],enumerable:!1,get:function(){return!this._requiredModules||this.includeFrameworkModules?this._requiredModules:this._requiredModules.slice(this._frameworkModuleCount-1)},set:function(e){this._requiredModules=e}},_currentStage:{value:h},currentStage:{get:function(){return this._currentStage},set:function(e){if(e===this._currentStage)return;s.isDebug&&s.debug(this,"CURRENT STAGE: "+e),this._currentStage=e,this.needsDraw=!0}},_readyToShowLoader:{value:!1},isLoadingMainComponent:{value:null},readyToShowLoader:{get:function(){return this._readyToShowLoader},set:function(e){if(e!==this._readyToShowLoader)return;this._readyToShowLoader=e,this.needsDraw=!0}},readyToShowMainComponent:{get:function(){return!!this._mainComponent}},_frameworkModuleCount:{enumerable:!1,value:null},hasTemplate:{enumerable:!1,value:!1},_mainComponent:{enumerable:!1,value:null},_showLoadingTimeout:{enumerable:!1,value:null},_showMainComponentTimeout:{enumerable:!1,value:null},templateDidLoad:{value:function(){s.isDebug&&s.debug(this,"templateDidLoad"),this.element||(this.element=document.documentElement,this.attachToParentComponent()),this.readyToShowLoader=!0;var e=document._montageTiming,t,n=this;e.bootstrappingStartTime?(s.isDebug&&s.debug(this,"had already started bootstrapping"),this.currentStage=p,e.bootstrappingEndTime=Date.now(),t=this.minimumBootstrappingDuration-(e.bootstrappingEndTime-e.bootstrappingStartTime),t>0?(s.isDebug&&s.debug(this,"still need to show bootstrapper for another "+t+"ms"),this._showLoadingTimeout=setTimeout(function(){n._revealLoader()},t)):this._revealLoader()):(s.isDebug&&s.debug(this,"bootstrapping has not started yet…"),this._loadMainComponent())}},_revealLoader:{value:function(){s.isDebug&&s.debug(this,"_revealLoader"),this.currentStage=d,document._montageTiming.loadingStartTime=Date.now();var e,t=document.getElementById(a),n,r,i;if(t){n=t.children;for(e=0;r=n[e];e++)if(i=r.controller)i.attachToParentComponent(),i.needsDraw=!0}}},_revealMainComponent:{value:function(){s.isDebug&&s.debug(this,"_revealMainComponent"),this.currentStage=v}},_loadMainComponent:{value:function(){s.isDebug&&s.debug(this,"_loadMainComponent"),this.isLoadingMainComponent=!0;var e=this;window.require.async(this.mainModule).then(function(t){return e._mainLoadedCallback(t)}).done()}},_mainLoadedCallback:{value:function(e){s.isDebug&&s.debug(this,"_mainLoadedCallback"),this._mainComponent=e[this.mainName].create(),this.childComponents.push(this._mainComponent),this._mainComponent.setElementWithParentComponent(document.createElement("div"),this),this._mainComponent.needsDraw=!0}},childComponentWillPrepareForDraw:{value:function(e){var t=this,n;if(e===this._mainComponent){s.isDebug&&s.debug(this,"main preparing to draw"),this.isLoadingMainComponent=!1,this._contentToRemove=document.createRange(),n=this.element===document.documentElement?document.body:this.element,this._contentToRemove.selectNodeContents(n),this.childComponents=[this._mainComponent],n.appendChild(this._mainComponent.element);var r=document[o],i=document._montageTiming,u,a;i.bootstrappingStartTime?i.bootstrappingStartTime&&!i.loadingStartTime?(clearTimeout(this._showLoadingTimeout),this._showLoadingTimeout=null,i.bootstrappingEndTime=Date.now(),(u=this.minimumBootstrappingDuration-(i.bootstrappingEndTime-i.bootstrappingStartTime))>0?(s.isDebug&&s.debug(this,"show bootstrapper for another "+u+"ms"),this._showMainComponentTimeout=setTimeout(function(){s.isDebug&&s.debug(this,"ok, shown bootstrapper long enough"),t._revealMainComponent()},u)):setTimeout(function(){s.isDebug&&s.debug(this,"ok, showing bootstrapper now"),t._revealMainComponent()},0)):i.loadingStartTime&&(i.loadingEndTime=Date.now(),(a=this.minimumLoadingDuration-(i.loadingEndTime-i.loadingStartTime))>0?(s.isDebug&&s.debug(this,"show loader for another "+a+"ms"),this._showMainComponentTimeout=setTimeout(function(){s.isDebug&&s.debug(this,"ok, shown loader long enough"),t._revealMainComponent()},a)):this._revealMainComponent()):(s.isDebug&&s.debug(this,"bootstrapper never shown"),clearTimeout(r),r=null,this._revealMainComponent())}}},removeContentOnLoad:{value:!0},_forceContentRemoval:{enumerable:!1,value:!1},_contentToRemove:{enumerable:!1,value:null},removeContent:{value:function(){this._forceContentRemoval=!0,this.needsDraw=!0}},draw:{value:function(){!this.readyToShowMainComponent&&!this.isLoadingMainComponent&&(s.isDebug&&s.debug(this,"draw; start loading main component"),this._loadMainComponent());if(d===this.currentStage)this.element.classList.remove(f),this.element.classList.add(l);else if(v===this.currentStage&&this._contentToRemove){this.element.classList.remove(f),this.element.classList.remove(l);if(this.removeContentOnLoad||this._forceContentRemoval)this._contentToRemove.extractContents(),this._contentToRemove.detach(),this._contentToRemove=null;this.element.classList.add(c);var e=document.createEvent("CustomEvent");e.initCustomEvent("componentLoaded",!0,!0,this._mainComponent),this.dispatchEvent(e,!0,!0)}}}})}})