montageDefine("eb3badc","ui/input-text.reel/input-text",{dependencies:["montage","ui/component","ui/native/input-text.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/native/input-text.reel").InputText;t.InputText=r.create(s,{hasTemplate:{value:!0},willPrepareForDraw:{value:function(){s.willPrepareForDraw.call(this),this.element.classList.add("montage-InputText")}}})}})