montageDefine("a7dc6de","demo/observable-array-demo",{dependencies:["../listen/array-changes"],factory:function(e,t,n){e("../listen/array-changes");var r=[];r.addOwnPropertyChangeListener("length",function(e){console.log("changed",e)}),r.addOwnPropertyChangeListener(0,function(e){console.log("array[0] changed to",e)}),r.addMapChangeListener(function(e,t){console.log(t,e)}),r.push(40),r.splice(0,0,10,20,30)}})