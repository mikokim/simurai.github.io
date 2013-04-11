montageDefine("eb3badc","core/converter/number-converter",{dependencies:["montage","core/converter/converter"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/converter/converter").Converter,s=e("core/converter/converter").Validator,o=e("core/converter/converter").isNumber,u=e("core/converter/converter").isDef,a=/^([\-]?\d+\.?\d*)([K,M,G,T,P,k,m,u,n]?)[B]?$/,f=["P","T","B","M","K","","m","u","n"],l=t.NUMERIC_SCALES_SI_={"":1,n:1e-9,u:1e-6,m:.001,k:1e3,K:1e3,M:1e6,B:1e9,T:1e12,P:1e15},c=t.NUMERIC_SCALES_BINARY_={"":1,n:Math.pow(1024,-3),u:Math.pow(1024,-2),m:1/1024,k:1024,K:1024,M:Math.pow(1024,2),G:Math.pow(1024,3),T:Math.pow(1024,4),P:Math.pow(1024,5)},h=t._numericValueToString=function(e,t,n,r,i){i=i||f;var s=e,o="",a=1;e<0&&(e=-e);for(var l=0;l<i.length;l++){var c=i[l];a=t[c];if(e>=a||a<=1&&e>.1*a){o=c;break}}o?r&&(o+=r):a=1;var h=Math.pow(10,u(n)?n:2);return Math.round(s/a*h)/h+o},p=function(e,t){var n=e.match(a);return n?n[1]*t[n[2]]:NaN},d=function(e){return a.test(e)},v=t.stringToNumericValue=function(e){return e.endsWith("B")?p(e,c):p(e,l)},m=t.numericValueToString=function(e,t){return h(e,l,t)},g=t.NumberValidator=r.create(s,{allowFloat:{value:!0},allowNegative:{value:!0},validate:{value:function(e){var t;return e=e||"",e=e.replace(/,/g,""),o(e)?t=e:t=this.allowFloat===!0?parseFloat(e,10):parseInt(e,10),isNaN(t)?{message:"Invalid Number"}:t}}}),y=t.NumberConverter=r.create(i,{allowPartialConversion:{value:!1},validator:{value:r.create(g)},shorten:{value:null},decimals:{value:2},round:{value:null},_reg:{value:/(\d+)(\d{3})/},allowFloat:{value:!0},allowNegative:{value:!0},_makeReadable:{value:function(e,t,n){t=t||",",n=n||".";var r=e.toString().split("."),i=r[0],s=r.length>1?n+r[1]:"";while(this._reg.test(i))i=i.replace(this._reg,"$1"+t+"$2");return i+s}},convert:{value:function(e){if(this.shorten)return m(e,this.decimals);var t;if(this.round)t=Number(Math.round(e)).toString();else{var n=Math.pow(10,this.decimals||2),r=1;t=Number(Math.round(e/r*n)/n)}return this._makeReadable(t)}},revert:{value:function(e){this.validator.allowFloat=this.allowFloat,this.validator.allowNegative=this.allowNegative;var t=this.validator.validate(e);if(o(t))return t;throw new Error(t.message)}}})}})