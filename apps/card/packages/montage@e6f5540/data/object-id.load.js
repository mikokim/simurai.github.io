montageDefine("e6f5540","data/object-id",{dependencies:["montage","core/uuid","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/uuid").Uuid,s=e("core/logger").logger("objectId"),o=t.ObjectId=r.create(r,{isTemporary:{get:function(){return!1}},_blueprint:{serializable:!0,enumerable:!1,value:null},blueprint:{get:function(){return this._blueprint}}}),u=t.TemporaryObjectId=r.create(o,{isTemporary:{get:function(){return!0}},_uuid:{serializable:!0,enumerable:!1,value:null},initWithBlueprint:{serializable:!1,enumerable:!1,value:function(e){return this._blueprint=e,this._uuid=i.generate(),s.isDebug&&s.debug(this,"New Temporary Object ID: "+this._uuid),Object.freeze(this),this}}})}})