montageDefine("e6f5540","core/converter/upper-case-converter",{dependencies:["montage","core/converter/converter"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/converter/converter").Converter;t.UpperCaseConverter=r.create(i,{_convert:{value:function(e){return e&&typeof e=="string"?e.toUpperCase?e.toUpperCase():e:e}},convert:{value:function(e){return this._convert(e)}},revert:{value:function(e){return this._convert(e)}}})}})