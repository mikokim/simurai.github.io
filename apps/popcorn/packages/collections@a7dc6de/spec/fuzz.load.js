montageDefine("a7dc6de","spec/fuzz",{dependencies:[],factory:function(e,t,n){function r(e,t,n){var r=u(t),i=[],s=[],o,a;while(i.length<e){s.sort(function(){return r()-.5});var f=r();if(o!=="delete"&&s.length&&f>2/3)a={type:"delete",value:s.shift()};else if(o!=="get"&&s.length&&f>1/3)a={type:"get",value:s[0]};else if(o!=="add"){var l=Math.floor(r()*n);s.push(l),a={type:"add",value:l}}i.push(a),o=a.type}return i}function i(e){return e.map(function(e){if(e.type==="add")return"+"+e.value;if(e.type==="delete")return"-"+e.value;if(e.type==="get")return""+e.value}).join(", ")}function s(e){return e.split(", ").map(function(e){return e[0]==="+"?{type:"add",value:+e}:e[0]==="-"?{type:"delete",value:-e}:{type:"get",value:+e}})}function o(e,t,n){t.forEach(function(t){t.type==="add"?e.add(t.value):t.type==="get"?e.get(t.value):t.type==="delete"&&e.delete(t.value),n&&(console.log(),console.log(t),e.log(null,function(e,t){t(" "+e.value+" length="+e.length)}))})}function u(e){return function(){return e=(e*60271+70451)%99991,e/99991}}t.make=r,t.stringify=i,t.parse=s,t.execute=o,t.makeRandom=u}})