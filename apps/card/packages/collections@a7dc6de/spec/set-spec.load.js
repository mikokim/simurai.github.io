montageDefine("a7dc6de","spec/set-spec",{dependencies:["../set","./collection","./set"],factory:function(e,t,n){var r=e("../set"),i=e("./collection"),s=e("./set");describe("Set",function(){function e(e){return new r(e)}[r,e].forEach(function(e){i(e,[1,2,3,4],!0),i(e,[{id:0},{id:1},{id:2},{id:3}],!0),s(e)}),i(function(e){return r(e,Object.is)},[{},{},{},{}],!0),it("should pop and shift",function(){var e={i:2},t={i:1},n={i:0},i=r([e,t,n],Object.is);expect(i.pop()).toBe(n),expect(i.shift()).toBe(e)})})}})