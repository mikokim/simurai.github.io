montageDefine("ec13df0","ui/dom",{dependencies:["core/geometry/point"],factory:function(e,t,n){var r=e("core/geometry/point").Point,i=Node.prototype,s=Element.prototype;Object.defineProperty(s,"set",{value:function(e,t,n){var r=e.indexOf(".",n),i,s,o,u,a;n=n||0,s=e.substring(n,r===-1?e.length:r);if(r===-1)this.setAttribute(s,t);else{o=e.lastIndexOf(".");if(s==="style")u=e.substring(r+1,e.length),this.style[u]=t;else if(s==="classList")a=e.substring(r+1,e.length),t?this.classList.add(a):this.classList.remove(a);else if(i=this.get(e.substring(0,o)))i[e.substring(o+1,e.length)]=t}},enumerable:!1}),i.get=function(e){return this.getAttribute(e)||this[e]},Object.getPrototypeOf(document).addRule=function(e,t){var n,r;if((n=document.styleSheets[0])==null){var i=document.createElement("style");i.type="text/css",document.head.appendChild(i),n=document.styleSheets[0]}else r=document.getRule(e,n);r||n.insertRule(e+" "+t,n.cssRules.length)},Object.getPrototypeOf(document).getRule=function(e,t){var n;if(t.cssRules)for(var r=0;n=t.cssRules[r];r++){if(n.name&&n.name===e)return n;if(n.selectorText===e)return n}},"use strict",typeof Element!="undefined"&&function(){var e="classList";if(!Element.prototype.hasOwnProperty(e)){var t=/^\s+|\s+$/g,n=function(e,t){e.setAttribute("class",t.join(" "))},r=function(e,t){if(t==="")throw"SYNTAX_ERR";if(/\s/.test(t))throw"INVALID_CHARACTER_ERR";return e.indexOf(t)},i=function(){var e=this,i=e.getAttribute("class")||"";return i=i.replace(t,"").split(/\s+/),{length:i.length,item:function(e){return i[e]||null},contains:function(e){return r(i,e)!==-1},add:function(t){r(i,t)===-1&&(i.push(t),this.length=i.length,n(e,i))},remove:function(t){var s=r(i,t);s!==-1&&(i.splice(s,1),this.length=i.length,n(e,i))},toggle:function(e){r(i,e)===-1?this.add(e):this.remove(e)},toString:function(){return e.getAttribute("class")||""}}};Object.defineProperty?Object.defineProperty(Element.prototype,e,{get:i,enumerable:!0}):Object.prototype.__defineGetter__&&Element.prototype.__defineGetter__(e,i)}}(),i.parentOf=function(e){while((e=e.parentNode)&&e!==this);return e?!0:!1};var o=function(e){var t,n=e.ownerDocument,r,i,s;if(e&&n){r=n.documentElement,i=n.body,s=n.defaultView;if(e!==i){t=e.getBoundingClientRect();if(r.parentOf(e)){var o=r.clientTop||i.clientTop||0,u=r.clientLeft||i.clientLeft||0,a=s.pageYOffset||r.scrollTop||i.scrollTop,f=s.pageXOffset||r.scrollLeft||i.scrollLeft,l=t.top+a-o,c=t.left+f-u;return{top:l,left:c}}return{top:t.top,left:t.left}}return{top:i.offsetTop,left:i.offsetLeft}}return null},u=null;try{u=new WebKitPoint(0,0)}catch(a){}var f=function(){t.convertPointFromNodeToPage=function(e,t){return t?(u.x=t.x,u.y=t.y):(u.x=0,u.y=0),t=webkitConvertPointFromNodeToPage(e,u),t?r.create().init(t.x,t.y):null},t.convertPointFromPageToNode=function(e,t){return t?(u.x=t.x,u.y=t.y):(u.x=0,u.y=0),t=webkitConvertPointFromPageToNode(e,u),t?r.create().init(t.x,t.y):null}},l=function(){t.convertPointFromNodeToPage=function(e,t){if(!e||typeof e.x!="undefined")return null;var n;return(n=o(e))?r.create().init((t?t.x:0)+n.left,(t?t.y:0)+n.top):r.create().init(t?t.x:0,t?t.y:0)},t.convertPointFromPageToNode=function(e,t){if(!e||typeof e.x!="undefined")return null;var n;return(n=o(e))?r.create().init((t?t.x:0)-n.left,(t?t.y:0)-n.top):r.create().init(t?t.x:0,t?t.y:0)}};u?f():l()}})