montageDefine("eb3badc","data/ldap-access/ldap-mapping",{dependencies:["montage","data/mapping","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("data/mapping").BinderMapping,s=e("data/mapping").BlueprintMapping,o=e("data/mapping").AttributeMapping,u=e("data/mapping").AssociationMapping,a=e("core/logger").logger("ldap-mapping"),f=t.LdapBinderMapping=r.create(i,{}),l=t.LdapBlueprintMapping=r.create(s,{}),c=t.LdapAttributeMapping=r.create(o,{}),h=t.LdapAssociationMapping=r.create(u,{})}})