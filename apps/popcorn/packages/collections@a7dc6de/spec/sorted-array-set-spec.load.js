montageDefine("a7dc6de","spec/sorted-array-set-spec",{dependencies:["../sorted-array-set","./dequeue","./collection","./set"],factory:function(e,t,n){var r=e("../sorted-array-set"),i=e("./dequeue"),s=e("./collection"),o=e("./set");describe("SortedArraySet",function(){function e(e){return new r(e)}[r,e].forEach(function(e){i(e),s(e,[1,2,3,4]),o(e)}),describe("uniqueness",function(){var e=r([1,2,3,1,2,3]);expect(e.slice()).toEqual([1,2,3])})})}})