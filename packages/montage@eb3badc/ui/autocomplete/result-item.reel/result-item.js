var Montage=require("montage").Montage,Component=require("ui/component").Component,DynamicText=require("ui/dynamic-text.reel").DynamicText;exports.ResultItem=Montage.create(DynamicText,{textPropertyPath:{value:null},_object:{value:null},object:{get:function(){return this._object},set:function(e){e&&(this._object=e),this._object&&(this.textPropertyPath?this.value=this._object[this.textPropertyPath]:this.value=this._object)}}})