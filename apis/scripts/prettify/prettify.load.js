montageDefine("bc3cb11","apis/scripts/prettify/prettify",{dependencies:[],factory:function(e,t,n){var r=null;window.PR_SHOULD_USE_CONTINUATION=!0,function(){function e(e){function t(e){var t=e.charCodeAt(0);if(t!==92)return t;var n=e.charAt(1);return(t=c[n])?t:"0"<=n&&n<="7"?parseInt(e.substring(1),8):n==="u"||n==="x"?parseInt(e.substring(2),16):e.charCodeAt(1)}function n(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);if(e==="\\"||e==="-"||e==="["||e==="]")e="\\"+e;return e}function r(e){for(var r=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],i=[],s=r[0]==="^",o=s?1:0,u=r.length;o<u;++o){var a=r[o];if(/\\[bdsw]/i.test(a))e.push(a);else{var a=t(a),f;o+2<u&&"-"===r[o+1]?(f=t(r[o+2]),o+=2):f=a,i.push([a,f]),f<65||a>122||(f<65||a>90||i.push([Math.max(65,a)|32,Math.min(f,90)|32]),f<97||a>122||i.push([Math.max(97,a)&-33,Math.min(f,122)&-33]))}}i.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]}),r=[],a=[NaN,NaN];for(o=0;o<i.length;++o)u=i[o],u[0]<=a[1]+1?a[1]=Math.max(a[1],u[1]):r.push(a=u);i=["["],s&&i.push("^"),i.push.apply(i,e);for(o=0;o<r.length;++o)u=r[o],i.push(n(u[0])),u[1]>u[0]&&(u[1]+1>u[0]&&i.push("-"),i.push(n(u[1])));return i.push("]"),i.join("")}function i(e){for(var t=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),n=t.length,i=[],u=0,a=0;u<n;++u){var f=t[u];f==="("?++a:"\\"===f.charAt(0)&&(f=+f.substring(1))&&f<=a&&(i[f]=-1)}for(u=1;u<i.length;++u)-1===i[u]&&(i[u]=++s);for(a=u=0;u<n;++u)f=t[u],f==="("?(++a,i[a]===void 0&&(t[u]="(?:")):"\\"===f.charAt(0)&&(f=+f.substring(1))&&f<=a&&(t[u]="\\"+i[a]);for(a=u=0;u<n;++u)"^"===t[u]&&"^"!==t[u+1]&&(t[u]="");if(e.ignoreCase&&o)for(u=0;u<n;++u)f=t[u],e=f.charAt(0),f.length>=2&&e==="["?t[u]=r(f):e!=="\\"&&(t[u]=f.replace(/[A-Za-z]/g,function(e){return e=e.charCodeAt(0),"["+String.fromCharCode(e&-33,e|32)+"]"}));return t.join("")}for(var s=0,o=!1,u=!1,a=0,f=e.length;a<f;++a){var l=e[a];if(l.ignoreCase)u=!0;else if(/[a-z]/i.test(l.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){o=!0,u=!1;break}}for(var c={b:8,t:9,n:10,v:11,f:12,r:13},h=[],a=0,f=e.length;a<f;++a){l=e[a];if(l.global||l.multiline)throw Error(""+l);h.push("(?:"+i(l)+")")}return RegExp(h.join("|"),u?"gi":"g")}function t(e){function t(e){switch(e.nodeType){case 1:if(n.test(e.className))break;for(var r=e.firstChild;r;r=r.nextSibling)t(r);r=e.nodeName;if("BR"===r||"LI"===r)i[u]="\n",o[u<<1]=s++,o[u++<<1|1]=e;break;case 3:case 4:r=e.nodeValue,r.length&&(r=f?r.replace(/\r\n?/g,"\n"):r.replace(/[\t\n\r ]+/g," "),i[u]=r,o[u<<1]=s,s+=r.length,o[u++<<1|1]=e)}}var n=/(?:^|\s)nocode(?:\s|$)/,i=[],s=0,o=[],u=0,a;e.currentStyle?a=e.currentStyle.whiteSpace:window.getComputedStyle&&(a=document.defaultView.getComputedStyle(e,r).getPropertyValue("white-space"));var f=a&&"pre"===a.substring(0,3);return t(e),{a:i.join("").replace(/\n$/,""),c:o}}function n(e,t,n,r){t&&(e={a:t,d:e},n(e),r.push.apply(r,e.e))}function i(t,i){function s(e){for(var t=e.d,r=[t,"pln"],l=0,c=e.a.match(u)||[],h={},p=0,d=c.length;p<d;++p){var v=c[p],m=h[v],g=void 0,y;if(typeof m=="string")y=!1;else{var b=o[v.charAt(0)];if(b)g=v.match(b[1]),m=b[0];else{for(y=0;y<f;++y)if(b=i[y],g=v.match(b[1])){m=b[0];break}g||(m="pln")}(y=m.length>=5&&"lang-"===m.substring(0,5))&&(!g||typeof g[1]!="string")&&(y=!1,m="src"),y||(h[v]=m)}b=l,l+=v.length;if(y){y=g[1];var w=v.indexOf(y),E=w+y.length;g[2]&&(E=v.length-g[2].length,w=E-y.length),m=m.substring(5),n(t+b,v.substring(0,w),s,r),n(t+b+w,y,a(m,y),r),n(t+b+E,v.substring(E),s,r)}else r.push(t+b,m)}e.e=r}var o={},u;(function(){for(var n=t.concat(i),s=[],a={},f=0,l=n.length;f<l;++f){var c=n[f],h=c[3];if(h)for(var p=h.length;--p>=0;)o[h.charAt(p)]=c;c=c[1],h=""+c,a.hasOwnProperty(h)||(s.push(c),a[h]=r)}s.push(/[\S\s]/),u=e(s)})();var f=i.length;return s}function s(e){var t=[],n=[];e.tripleQuotedStrings?t.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,r,"'\""]):e.multiLineStrings?t.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,r,"'\"`"]):t.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,r,"\"'"]),e.verbatimStrings&&n.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,r]);var s=e.hashComments;return s&&(e.cStyleComments?(s>1?t.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,r,"#"]):t.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,r,"#"]),n.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,r])):t.push(["com",/^#[^\n\r]*/,r,"#"])),e.cStyleComments&&(n.push(["com",/^\/\/[^\n\r]*/,r]),n.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,r])),e.regexLiterals&&n.push(["lang-regex",/^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]),(s=e.types)&&n.push(["typ",s]),e=(""+e.keywords).replace(/^ | $/g,""),e.length&&n.push(["kwd",RegExp("^(?:"+e.replace(/[\s,]+/g,"|")+")\\b"),r]),t.push(["pln",/^\s+/,r," \r\n	 "]),n.push(["lit",/^@[$_a-z][\w$@]*/i,r],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,r],["pln",/^[$_a-z][\w$@]*/i,r],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,r,"0123456789"],["pln",/^\\[\S\s]?/,r],["pun",/^.[^\s\w"-$'./@\\`]*/,r]),i(t,n)}function o(e,t){function n(e){switch(e.nodeType){case 1:if(s.test(e.className))break;if("BR"===e.nodeName)i(e),e.parentNode&&e.parentNode.removeChild(e);else for(e=e.firstChild;e;e=e.nextSibling)n(e);break;case 3:case 4:if(f){var t=e.nodeValue,r=t.match(o);if(r){var a=t.substring(0,r.index);e.nodeValue=a,(t=t.substring(r.index+r[0].length))&&e.parentNode.insertBefore(u.createTextNode(t),e.nextSibling),i(e),a||e.parentNode.removeChild(e)}}}}function i(e){function t(e,n){var r=n?e.cloneNode(!1):e,i=e.parentNode;if(i){var i=t(i,1),s=e.nextSibling;i.appendChild(r);for(var o=s;o;o=s)s=o.nextSibling,i.appendChild(o)}return r}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;for(var e=t(e.nextSibling,0),n;(n=e.parentNode)&&n.nodeType===1;)e=n;l.push(e)}var s=/(?:^|\s)nocode(?:\s|$)/,o=/\r\n?|\n/,u=e.ownerDocument,a;e.currentStyle?a=e.currentStyle.whiteSpace:window.getComputedStyle&&(a=u.defaultView.getComputedStyle(e,r).getPropertyValue("white-space"));var f=a&&"pre"===a.substring(0,3);for(a=u.createElement("LI");e.firstChild;)a.appendChild(e.firstChild);for(var l=[a],c=0;c<l.length;++c)n(l[c]);t===(t|0)&&l[0].setAttribute("value",t);var h=u.createElement("OL");h.className="linenums";for(var p=Math.max(0,t-1|0)||0,c=0,d=l.length;c<d;++c)a=l[c],a.className="L"+(c+p)%10,a.firstChild||a.appendChild(u.createTextNode(" ")),h.appendChild(a);e.appendChild(h)}function u(e,t){for(var n=t.length;--n>=0;){var r=t[n];w.hasOwnProperty(r)?window.console&&console.warn("cannot override language handler %s",r):w[r]=e}}function a(e,t){if(!e||!w.hasOwnProperty(e))e=/^\s*</.test(t)?"default-markup":"default-code";return w[e]}function f(e){var n=e.g;try{var r=t(e.h),i=r.a;e.a=i,e.c=r.c,e.d=0,a(n,i)(e);var s=/\bMSIE\b/.test(navigator.userAgent),n=/\n/g,o=e.a,u=o.length,r=0,f=e.c,l=f.length,i=0,c=e.e,h=c.length,e=0;c[h]=u;var p,d;for(d=p=0;d<h;)c[d]!==c[d+2]?(c[p++]=c[d++],c[p++]=c[d++]):d+=2;h=p;for(d=p=0;d<h;){for(var v=c[d],m=c[d+1],g=d+2;g+2<=h&&c[g+1]===m;)g+=2;c[p++]=v,c[p++]=m,d=g}for(c.length=p;i<l;){var y=f[i+2]||u,b=c[e+2]||u,g=Math.min(y,b),w=f[i+1],E;if(w.nodeType!==1&&(E=o.substring(r,g))){s&&(E=E.replace(n,"\r")),w.nodeValue=E;var S=w.ownerDocument,x=S.createElement("SPAN");x.className=c[e+1];var T=w.parentNode;T.replaceChild(x,w),x.appendChild(w),r<y&&(f[i+1]=w=S.createTextNode(o.substring(g,y)),T.insertBefore(w,x.nextSibling))}r=g,r>=y&&(i+=2),r>=b&&(e+=2)}}catch(N){"console"in window&&console.log(N&&N.stack?N.stack:N)}}var l=["break,continue,do,else,for,if,return,while"],c=[[l,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],h=[c,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],p=[c,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],d=[p,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],c=[c,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],v=[l,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],m=[l,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],l=[l,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],g=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,y=/\S/,b=s({keywords:[h,d,c,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+v,m,l],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),w={};u(b,["default-code"]),u(i([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),u(i([["pln",/^\s+/,r," 	\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,r,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]),u(i([],[["atv",/^[\S\s]+/]]),["uq.val"]),u(s({keywords:h,hashComments:!0,cStyleComments:!0,types:g}),["c","cc","cpp","cxx","cyc","m"]),u(s({keywords:"null,true,false"}),["json"]),u(s({keywords:d,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:g}),["cs"]),u(s({keywords:p,cStyleComments:!0}),["java"]),u(s({keywords:l,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]),u(s({keywords:v,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py"]),u(s({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]),u(s({keywords:m,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]),u(s({keywords:c,cStyleComments:!0,regexLiterals:!0}),["js"]),u(s({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),u(i([],[["str",/^[\S\s]+/]]),["regex"]),window.prettyPrintOne=function(e,t,n){var r=document.createElement("PRE");return r.innerHTML=e,n&&o(r,n),f({g:t,i:n,h:r}),r.innerHTML},window.prettyPrint=function(e){function t(){for(var n=window.PR_SHOULD_USE_CONTINUATION?l.now()+250:Infinity;c<i.length&&l.now()<n;c++){var r=i[c],s=r.className;if(s.indexOf("prettyprint")>=0){var s=s.match(p),u,a;if(a=!s){a=r;for(var d=void 0,v=a.firstChild;v;v=v.nextSibling)var m=v.nodeType,d=m===1?d?a:v:m===3?y.test(v.nodeValue)?a:d:d;a=(u=d===a?void 0:d)&&"CODE"===u.tagName}a&&(s=u.className.match(p)),s&&(s=s[1]),a=!1;for(d=r.parentNode;d;d=d.parentNode)if((d.tagName==="pre"||d.tagName==="code"||d.tagName==="xmp")&&d.className&&d.className.indexOf("prettyprint")>=0){a=!0;break}a||((a=(a=r.className.match(/\blinenums\b(?::(\d+))?/))?a[1]&&a[1].length?+a[1]:!0:!1)&&o(r,a),h={g:s,h:r,i:a},f(h))}}c<i.length?setTimeout(t,250):e&&e()}for(var n=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],i=[],s=0;s<n.length;++s)for(var u=0,a=n[s].length;u<a;++u)i.push(n[s][u]);var n=r,l=Date;l.now||(l={now:function(){return+(new Date)}});var c=0,h,p=/\blang(?:uage)?-([\w.]+)(?!\S)/;t()},window.PR={createSimpleLexer:i,registerLangHandler:u,sourceDecorator:s,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}}()}})