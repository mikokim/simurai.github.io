montageDefine("e6f5540","ui/dynamic-element.reel/dynamic-element",{dependencies:["montage","ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component;t.DynamicElement=r.create(i,{hasTemplate:{value:!1},_innerHTML:{value:null},_usingInnerHTML:{value:null},innerHTML:{get:function(){return this._innerHTML},set:function(e){this._usingInnerHTML=!0,this._innerHTML!==e&&(this._innerHTML=e,this.needsDraw=!0)}},defaultHTML:{value:""},_allowedTagNames:{value:null},allowedTagNames:{get:function(){return this._allowedTagNames},set:function(e){this._allowedTagNames!==e&&(this._allowedTagNames=e,this.needsDraw=!0)}},_classList:{value:null},_classListDirty:{value:!1},classList:{get:function(){if(this._classList===null){var e=this.element.className;this._classList=s.newWithComponent(this,e.length!==0?this.element.className.split(" "):null)}return this._classList}},_range:{value:null},prepareForDraw:{value:function(){var e=document.createRange();e.selectNodeContents(this.element),this._range=e}},_contentNode:{value:null},draw:{value:function(){var e=this.innerHTML||0===this.innerHTML?this.innerHTML:this.defaultHTML,t,n=this.allowedTagNames,r=this._range,i;this._usingInnerHTML&&(n!==null?(this._contentNode=null,r.deleteContents(),t=r.createContextualFragment(e),n.length!==0?i=t.querySelectorAll("*:not("+n.join("):not(")+")"):i=t.childNodes,i.length===0?(r.insertNode(t),r.endOffset===0&&r.selectNodeContents(this.element)):console.warn("Some Elements Not Allowed ",i)):(t=this._contentNode,t===null?(r.deleteContents(),this._contentNode=t=document.createTextNode(e),r.insertNode(t),r.endOffset===0&&r.selectNodeContents(this.element)):t.data=e)),this._classListDirty&&(this.classList.drawIntoComponent(),this._classListDirty=!1)}}});var s=r.create(r,{newWithComponent:{value:function(e,t){var n=s.create(),r,i=0;n._component=e,n._classes={};if(t!==null)while(r=t[i++])n.add(r);return n}},__dirty__:{value:!1},_component:{value:null},_classes:{value:null},_installCssClass:{value:function(e){this._classes[e]=!1,r.defineProperty(this,e,{get:function(){return this._classes[e]},set:function(t){t=!!t,t!==this._classes[e]&&(this._classes[e]=t,this._component._classListDirty=!0,this._component.needsDraw=!0)}})}},add:{value:function(e){this.undefinedSet(e,!0)}},remove:{value:function(e){this.undefinedSet(e,!1)}},toggle:{value:function(e){this.undefinedSet(e,!this.undefinedGet(e))}},contains:{value:function(e){return!!this._classes[e]}},undefinedGet:{value:function(e){return typeof this[e]=="undefined"&&this._installCssClass(e),this[e]}},undefinedSet:{value:function(e,t){typeof this[e]=="undefined"&&this._installCssClass(e),this[e]=t}},drawIntoComponent:{value:function(){var e=this._classes,t=this._component.element.classList,n;for(n in e)e.hasOwnProperty(n)&&(e[n]?t.add(n):t.remove(n))}}})}})