montageDefine("eb3badc","data/sql-access/sql-store",{dependencies:["montage","data/store","data/sql-access/sql-mapping","data/sql-access/sql-selector-semantics","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("data/store").Store,s=e("data/sql-access/sql-mapping").SqlBinderMapping,o=e("data/sql-access/sql-mapping").SqlBlueprintMapping,u=e("data/sql-access/sql-mapping").SqlAttributeMapping,a=e("data/sql-access/sql-mapping").SqlAssociationMapping,f=e("data/sql-access/sql-selector-semantics").SqlSemantics,l=e("core/logger").logger("sql-store"),c=t.SqlStore=r.create(i,{pledgeForObjectId$Implementation:{value:function(e,t,n){return null}},pledgeForSourceObjectAssociation$Implementation:{value:function(e,t,n,r){return null}},queryInContext$Implementation:{value:function(e,t,n){var r=f/create().initWithStore(this,n),i=r.evaluate(e.selector.syntax,e.blueprint,e.parameters,null);return(new PledgedSortedSet.create).initWithQueryAndContext(e,t)}},createBinderMapping:{get:function(){return s.create()}},createBlueprintMapping:{get:function(){return o.create()}},createAttributeMapping:{get:function(){return u.create()}},createAssociationMapping:{get:function(){return a.create()}}})}})