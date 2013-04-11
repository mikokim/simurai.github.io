montageDefine("a7dc6de","spec/order",{dependencies:["../generic-collection"],factory:function(e,t,n){function i(e){function t(){this.length=3}Object.addEach(t.prototype,r.prototype),t.prototype.reduce=function(e,t){return t=e(t,10,0,this),t=e(t,20,1,this),t=e(t,30,2,this),t};var n=new t;describe("equals",function(){it("should equal itself",function(){var t=e([1,2]);expect(t.equals(t)).toBe(!0)}),it("should be able to distinguish incomparable objects",function(){expect(e([]).equals(null)).toEqual(!1)}),it("should compare itself to an array-like collection",function(){expect(e([10,20,30]).equals(n)).toEqual(!0)})}),describe("compare",function(){it("should compare to itself",function(){var t=e([1,2]);expect(t.compare(t)).toBe(0)}),it("a fake array should be equal to collection",function(){expect(Object.compare(n,e([10,20,30]))).toEqual(0)}),it("a fake array should be less than a collection",function(){expect(Object.compare(n,e([10,30]))).toEqual(-10)}),it("a fake array should be greater than a real array because it is longer",function(){expect(Object.compare(n,e([10,20]))).toEqual(1)}),it("a fake array should be less than a longer but otherwise equal",function(){expect(Object.compare(n,e([10,20,30,40]))).toEqual(-1)}),it("an array should be equal to a fake array",function(){expect(e([10,20,30]).compare(n)).toEqual(0)}),it("an array should be greater than a fake array",function(){expect(e([10,30]).compare(n)).toEqual(10)}),it("an array should be less than a fake array because it is shorter but otherwise equal",function(){expect(e([10,20]).compare(n)).toEqual(-1)}),it("an array should be less than a fake array because it is longer but otherwise equal",function(){expect(e([10,20,30,40]).compare(n)).toEqual(1)})}),describe("find",function(){it("should find equivalent values",function(){expect(e([10,10,10]).find(10)).toEqual(0)})}),describe("findLast",function(){it("should find equivalent values",function(){expect(e([10,10,10]).findLast(10)).toEqual(2)})}),describe("has",function(){it("should find equivalent values",function(){expect(e([10]).has(10)).toBe(!0)}),it("should not find non-contained values",function(){expect(e([]).has(-1)).toBe(!1)})}),describe("any",function(){var t=[[[0,!1],!1],[["0"],!0],[[{}],!0],[[{a:10}],!0],[[0,1,0],!0],[[1,1,1],!0],[[!0,!0,!0],!0],[[0,0,0,!0],!0],[[],!1],[[!1,!1,!1],!1]];t.forEach(function(t){it(JSON.stringify(t[0])+".any() should be "+t[1],function(){expect(e(t[0]).any()).toEqual(t[1])})})}),describe("all",function(){var t=[[[],!0],[[!0],!0],[[1],!0],[[{}],!0],[[!1,!0,!0,!0],!1]];t.forEach(function(t){it(JSON.stringify(t[0])+".all() should be "+t[1],function(){expect(e(t[0]).all()).toEqual(t[1])})})}),describe("min",function(){it("should find the minimum of numeric values",function(){expect(e([1,2,3]).min()).toEqual(1)})}),describe("max",function(){it("should find the maximum of numeric values",function(){expect(e([1,2,3]).max()).toEqual(3)})}),describe("sum",function(){it("should compute the sum of numeric values",function(){expect(e([1,2,3]).sum()).toEqual(6)})}),describe("average",function(){it("should compute the arithmetic mean of values",function(){expect(e([1,2,3]).average()).toEqual(2)})}),describe("flatten",function(){it("should flatten an array one level",function(){var t=e([[[1,2,3],[4,5,6]],e([[7,8,9],[10,11,12]])]);expect(t.flatten()).toEqual([[1,2,3],[4,5,6],[7,8,9],[10,11,12]])})}),describe("one",function(){it("should get the first value",function(){expect(e([0]).one()).toEqual(0)}),it("should throw if empty",function(){expect(e([]).one()).toBe(undefined)})}),describe("only",function(){it("should get the first value",function(){expect(e([0]).only()).toEqual(0)}),it("should be undefined if empty",function(){expect(e([]).only()).toBeUndefined()}),it("should be undefined if more than one value",function(){expect(e([1,2]).only()).toBeUndefined()})}),describe("clone",function(){it("should clone with indefinite depth",function(){var t=e([[[]]]),n=t.clone();expect(n).toEqual(t),expect(n).toNotBe(t)}),it("should clone with depth 0",function(){var t=e([]);expect(t.clone(0)).toBe(t)}),it("should clone with depth 1",function(){var t=[e({})];expect(t.clone(1)).toNotBe(t),expect(t.clone(1).one()).toBe(t.one())}),it("should clone with depth 2",function(){var t=e([{a:10}]);expect(t.clone(2)).toNotBe(t),expect(t.clone(2).one()).toNotBe(t.one()),expect(t.clone(2).one()).toEqual(t.one())})})}var r=e("../generic-collection");n.exports=i}})