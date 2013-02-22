montageDefine("2ba644c","ui/template",{dependencies:["montage","core/serializer","core/deserializer","core/logger","core/event/event-manager","ui/application"],factory:function(e,t,n){t=typeof t!="undefined"?t:{};var r=e("montage").Montage,i=e("core/serializer").Serializer,s=e("core/deserializer").Deserializer,o=e("core/logger").logger("template"),u=e("core/event/event-manager").defaultEventManager,a,f=t.Template=r.create(r,{_OLD_SCRIPT_TYPE:{value:"text/m-objects"},_SCRIPT_TYPE:{value:"text/montage-serialization"},_document:{enumerable:!1,value:null},document:{get:function(){return this._document}},_require:{value:window.require},_externalObjects:{value:null},_ownerSerialization:{value:null},_rootUrl:{value:null},_isLoaded:{value:!1},delegate:{value:null},initWithDocument:{value:function(e,t){return t&&(this._require=t),this._document=e,this}},__templatesById:{value:{}},__templateCallbacksByModuleId:{value:{}},templateWithModuleId:{value:function(e,t,n){var r=e.location+t,i=this.__templatesById[r],s=function(e){e.__templateCallbacksByModuleId[r].forEach(function(t){t.call(this,e)}),delete e.__templateCallbacksByModuleId[r]};return i?i._isLoaded?n(i):this.__templateCallbacksByModuleId[r].push(n):(this.__templateCallbacksByModuleId[r]=[n],this.__templatesById[r]=i=this.create().initWithModuleId(e,t,s)),i}},templateWithComponent:{value:function(e,t){var n=e._templateId,r=this.__templatesById[n],i;if(!r){r=this.create(),r.delegate=t,r.initWithComponent(e),i=r._externalObjects;if(!i||Object.keys(i).length===0)this.__templatesById[n]=r}return r}},_deserializer:{value:null},deserializer:{get:function(){return this._deserializer||(this._deserializer=s.create().initWithString(this._rootObjectSerialization))}},initWithHtmlString:{value:function(e){var t=this.createHtmlDocumentFromString(e);return this._isLoaded=!0,this.initWithDocument(t),this}},initWithModuleId:{value:function(e,t,n){var r=this;return this._require=e,this.createHtmlDocumentFromModuleId(e,t,function(e){if(!e)throw"Template '"+t+"' not found.";r._isLoaded=!0,r.initWithDocument(e),n&&n(r)}),this}},_serializer:{value:null},serializer:{get:function(){return this._serializer||(this._serializer=i.create().initWithRequire(this._require))}},serializeObjectProperties:{enumerable:!1,value:function(){var e=this.delegate;if(e&&typeof e.serializeObjectProperties=="function")return e.serializeObjectProperties.apply(e,arguments)}},initWithComponent:{value:function(e){var t=document.implementation.createHTMLDocument(""),n=this.serializer,r,i,s,o,u,a;this._document=t,n.delegate=this.delegate?this:null,this._ownerSerialization=n.serialize({owner:e}),this._externalObjects=n.getExternalObjects(),i=n.getExternalElements();var o=i.length;if(o>1)for(var f=0;f<o;f++){u=i[f];for(var l=0;l<o;l++)if(f!==l){var a=i[l];while((a=a.parentNode)&&a!==u);a&&(i.splice(l,1),o--,l--,f>l&&f--)}}for(var f=0;s=i[f];f++)t.body.appendChild(t.importNode(s,!0));return this._deserializer=this._createDeserializer(this._ownerSerialization),this}},optimize:{value:function(){this.deserializer.optimizeForDocument(this._document)}},_deserialize:{value:function(t,n,r){typeof a=="undefined"&&(a=e("ui/application").application);var i=this;this.getDeserializer(function(e){var s;if(e){s=i._externalObjects;if(s)for(var o in s)o in t||(t[o]=s[o]);t.application=a,t.template=i,i._document===window.document?e.deserializeWithInstancesAndDocument(t,i._document,r):e.deserializeWithInstancesAndElementForDocument(t,i._document.body,n,r)}else r()})}},instantiateWithOwnerAndDocument:{value:function(e,t,n){return this.instantiateWithInstancesAndDocument({owner:e},t,n)}},instantiateWithInstancesAndDocument:{value:function(e,t,n){var r=this;this._partiallyInstantiateWithInstancesForDocument(e,t,function(t){t&&(delete e.application,delete e.template,r._invokeTemplateDidLoad(t,t.owner&&t.owner.templateObjects)),r.waitForStyles(function(){n(t?t.owner:null)})})}},instantiateWithComponent:{value:function(e,t){var n=this,r=e.templateObjects;r?r.owner=e:r={owner:e},this._partiallyInstantiateWithInstancesForDocument(r,e.element.ownerDocument,function(i){delete r.owner,delete r.application,delete r.template,i&&n._invokeTemplateDidLoad(i,!e._isTemplateLoaded&&r),n.waitForStyles(function(){t(i?i.owner:null)})})}},instantiateWithDocument:{value:function(e,t){return this.instantiateWithOwnerAndDocument(null,e,t)}},_partiallyInstantiateWithInstancesForDocument:{value:function(e,t,n){function s(e){r._document!==t&&r.exportHeaders(t),n(e)}var r=this,i=e.owner;!t&&i&&i._element&&(t=i._element.ownerDocument),this._deserialize(e,t,function(e,t){if(r._extends&&!r._isExpanded){var n=r._extends,t=n.element,i=n.instances,o=n.instancesMapping,u=n.elementId;!t&&u&&(t=t.querySelector("*[data-montage-id='"+u+"']"));if(!i)if(o){i={};for(var a in o)i[a]=e[o[a]];i.owner=e.owner}else i={owner:e.owner};r._extendsTemplateWithInstances(n.templateModuleId,t,i,function(t){var n=Object.keys(t);for(var r=0,i;i=n[r];r++)e[i]=t[i];s(e)})}else s(e)})}},instantiate:{value:function(e){return this.instantiateWithOwnerAndDocument(null,null,e)}},_templateObjectDescriptor:{value:{enumerable:!0,configurable:!0}},_createTemplateObjectGetter:{value:function(e,t){var n="@"+t,r,i,s;return function(){if(r)return e.querySelectorAllComponent(n,e);i=e.querySelectorAllComponent(n,e);if(i.length===1){s=i[0];while(s=s.parentComponent){if(s===e)return Object.defineProperty(this,t,{value:i[0]}),i[0];if(s.clonesChildComponents)break}}return r=!0,i}}},_invokeTemplateDidLoad:{value:function(e,t){var n=e.owner,r=Object.keys(e),i,s=n&&typeof n.templateDidDeserializeObject=="function";for(var o=0,u;u=e[i=r[o]];o++)n!==u&&(typeof u._deserializedFromTemplate=="function"&&u._deserializedFromTemplate(n),typeof u.deserializedFromTemplate=="function"&&u.deserializedFromTemplate(n),s&&n.templateDidDeserializeObject(u),t&&(u.parentComponent===n||!u.ownerComponent?t[i]=u:(this._templateObjectDescriptor.get=this._createTemplateObjectGetter(u.ownerComponent,i),Object.defineProperty(t,i,this._templateObjectDescriptor))));n&&(typeof n._templateDidLoad=="function"&&n._templateDidLoad(),typeof n.templateDidLoad=="function"&&n.templateDidLoad())}},defineExtension:{value:function(e,t,n){this._extends={templateModuleId:e,element:t,instancesMapping:n}}},_extendsTemplateWithInstances:{value:function(e,t,n,r){function a(e,t,n){var r=t.nextSibling,i=t.parentNode,s=e.childNodes,o=e.attributes;i.removeChild(t);if(r)for(var u=0,a=s.length;u<a;u++)i.insertBefore(s[0],r);else for(var u=0,a=s.length;u<a;u++)i.appendChild(s[0]);for(var u=0,f;f=o[u];u++){var l=f.nodeName;if(l==="id"||l==="data-montage-id")continue;var c=(n.getAttribute(l)||"")+" "+f.nodeValue;n.setAttribute(l,c)}}var i=this,s=n.owner,o,u;o=s._templateElement,u=o.ownerDocument,s._templateElement=null,f.templateWithModuleId(this._require,e,function(e){e._partiallyInstantiateWithInstancesForDocument({owner:s},u,function(n){a(s._templateElement,t,o);if(!i._isExpanded){var u=i.getMontageIdByElement(t),f=i.getMontageIdByElement(o),l=i.getMontageIdByElement(s._templateElement);a(i._document.importNode(e.getMontageElementById(l),!0),i.getMontageElementById(u),i.getMontageElementById(f)),e.exportHeaders(i._document),i._isExpanded=!0}i._deserializer.chainDeserializer(e._deserializer),s._templateElement=o,r(n)})})}},getMontageIdByElement:{value:function(e){return e.getAttribute("data-montage-id")||e.id}},getMontageElementById:{value:function(e){return this._document.querySelector("*[data-montage-id='"+e+"']")||this._document.getElementById(e)}},exportHeaders:{value:function(e){this.insertStylesInDocumentIfNeeded(e),this.insertScriptsInDocumentIfNeeded(e)}},_stylesLoadedCount:{enumerable:!1,value:null},_expectedStylesLoadedCount:{enumerable:!1,value:null},_stylesLoadedCallbacks:{enumerable:!1,value:null},insertStylesInDocumentIfNeeded:{value:function(e){var t=e._montage_importedStyles,n=this._id,r;if(!n||!e)return;t||(t=e._montage_importedStyles={fromTemplates:{},fromLinks:{}}),r=t.fromTemplates;if(n in r)return;r[n]=!0;var i=this,s=this._rootUrl,u=e.head,a=this._stylesLoadedCallbacks=[],f=this._document.querySelectorAll('link[rel="stylesheet"], style'),l=f.length,c=t.fromLinks,h=l>1?e.createDocumentFragment():u,p;this._stylesLoadedCount=0,this._expectedStylesLoadedCount=0;for(var d=0,v;v=f[d];d++)if(p=v.getAttribute("href")){/^https?:\/\/|^\//.test(p)||(v.href=s+p,p=v.href);if(p in c)continue;c[p]=!0,this._expectedStylesLoadedCount++;var m=e.importNode(v,!1);m.href=p,h.insertBefore(m,h.firstChild),o.isDebug&&h.insertBefore(e.createComment("Inserted from "+this._id),h.firstChild);var g=function(e){if(++i._stylesLoadedCount===i._expectedStylesLoadedCount){var t;while(t=a.pop())t();i._stylesLoadedCallbacks=a=null}this.removeEventListener(e.type,g,!1),e.type==="error"&&console.log("CSS file "+p+" is missing")},y=new XMLHttpRequest;y.open("GET",p),y.onreadystatechange=function(e){return function(t){e.readyState===4&&(e.status===200?g({type:"load"}):g({type:"error"}))}}(y),y.send()}else h.insertBefore(e.importNode(v,!0),h.firstChild),o.isDebug&&h.insertBefore(e.createComment("Inserted from "+this._id),h.firstChild);l>1&&u.insertBefore(h,u.firstChild)}},insertScriptsInDocumentIfNeeded:{value:function(e){var t=e._montage_importedScripts,n=this._rootUrl,r=n||null;if(!r)return;if(!t)t=e._montage_importedScripts={fromTemplate:{},external:{}};else if(r in t.fromTemplate)return;t.fromTemplate[r]=!0;var i=e.head,s=this._document.querySelectorAll("script"),u=e.createDocumentFragment(),a=t.external,f,l,c,h;for(var p=0;h=s[p];p++){l=h.type;if(l===this._SCRIPT_TYPE)continue;c=h.getAttribute("src"),f=e.importNode(h,!0);if(c){/^https?:\/\/|^\//.test(c)||(f.src=r+c,c=f.src=f.src);if(c in a)continue;a[c]=!0}o.isDebug&&u.appendChild(e.createComment("Inserted from "+this._id)),u.appendChild(f)}i.appendChild(u)}},waitForStyles:{value:function(e){this._stylesLoadedCount===this._expectedStylesLoadedCount?e():this._stylesLoadedCallbacks.push(e)}},createHtmlDocumentFromString:{value:function(e){var t=document.implementation.createHTMLDocument("");t.documentElement.innerHTML=e;if(!t.body){t=document.implementation.createHTMLDocument("");var n=t.createRange(),r=t.getElementsByTagName("head").item(0),i=t.getElementsByTagName("body").item(0),s,o,u,a,f,l;s=e.indexOf("<head>"),s>0&&(o=e.indexOf("</head>"),r.outerHTML=e.substring(s+6,o)),u=e.indexOf("<body"),u>0&&(a=e.indexOf("</body>"),f=e.substring(u,a+7),n.selectNode(i),l=n.createContextualFragment(f),i.appendChild(l))}return t}},_documentCache:{enumerable:!1,value:{}},createHtmlDocumentFromModuleId:{value:function(e,t,n){var r=this,i=e.location+t,s=this._documentCache[i];r._id=e.location+"/"+t,s?(r._rootUrl=s.directory,n(r.createHtmlDocumentFromString(s.content))):e.async(t).then(function(e){r._rootUrl=(r._documentCache[i]=e).directory,n(r.createHtmlDocumentFromString(e.content))}).done()}},getInlineSerialization:{value:function(e){var t=e.querySelector("script[type='"+this._SCRIPT_TYPE+"']");if(t)return t.textContent;if(!this._document.querySelector("script[type='"+this._OLD_SCRIPT_TYPE+"']"))return null;o.error("Unsupported serialization found"+(this._rootUrl?" on "+this._rootUrl:"")+", please upgrade to the new one.")}},getExternalSerialization:{value:function(e,t){var n=e.querySelector('link[rel="serialization"]');if(n){var r=new XMLHttpRequest,i=n.getAttribute("href"),s=this._rootUrl||"";/^https?:\/\/|^\//.test(i)||(i=s+i),r.open("GET",i),r.addEventListener("load",function(){r.status==200?t(r.responseText):(o.isError&&o.error("Unable to retrive "+i+", code status: "+r.status),t(null))},!1),r.addEventListener("error",function(){o.isError&&o.error("Unable to retrive "+i),t(null)},!1),r.send()}else t(null)}},getDeserializer:{value:function(e){if(this._deserializer!==null)e(this._deserializer);else{var t=this.getInlineSerialization(this._document),n=this;t?(this._removeSerialization(),e(this._createDeserializer(t))):this.getExternalSerialization(this._document,function(t){t?(n._removeSerialization(),e(n._createDeserializer(t))):e(n._deserializer=!1)})}}},_createDeserializer:{value:function(e){var t=this._rootUrl?this._rootUrl:window.location.href;return this._deserializer=s.create().initWithStringAndRequire(this._ownerSerialization=e,this._require,t)}},setSerialization:{value:function(e){var t=this._document.querySelector("script[type='"+this._SCRIPT_TYPE+"']"),n=this._document;t||(t=n.createElement("script"),t.setAttribute("type",this._SCRIPT_TYPE),t.textContent=this._ownerSerialization,n.head.appendChild(t)),t.textContent=this._ownerSerialization=e}},_removeSerialization:{value:function(){var e=this._document.querySelector("script[type='"+this._SCRIPT_TYPE+"']");e&&e.parentNode.removeChild(e)}},exportToString:{value:function(){var e=this._document;if(!this.getInlineSerialization(e)){var t=e.createElement("script");t.setAttribute("type",this._SCRIPT_TYPE),t.textContent=this._ownerSerialization,e.head.appendChild(t)}return(new XMLSerializer).serializeToString(this._document)}},serializeProperties:{value:function(e){e.set("owner",this._ownerSerialization),e.set("markup",this._document.body.innerHTML)}},deserializeProperties:{value:function(e){var t=e.get("markup"),n=e.get("owner"),r=e.get("extends");t&&(this._document=document.implementation.createHTMLDocument(""),this._document.body.innerHTML=t),n&&(this._ownerSerialization=n),r&&(this._extends=r)}}})}})