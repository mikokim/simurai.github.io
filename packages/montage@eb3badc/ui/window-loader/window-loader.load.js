montageDefine("eb3badc","ui/window-loader/window-loader",{dependencies:[],factory:function(e,t,n){var r=window.opener;e.loadPackage(r.require.location).then(function(e){var t=window.loadInfo,n=t.module,r=t.name,i=t.callback;return window.require=e,e.async("montage/ui/component").then(function(t){return e.async("montage/ui/loader.reel").then(function(e){var t=e.Loader.create();t.mainModule=n,t.mainName=r,t.element=window.document.body,t.attachToParentComponent(),t.needsDraw=!0,i&&t.addEventListener("componentLoaded",function(e){t.removeEventListener("componentLoaded",arguments.callee),i(window,e.detail)})})})}).done()}})