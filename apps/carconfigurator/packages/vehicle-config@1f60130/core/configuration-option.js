var Montage=require("montage").Montage,ConfigurationOption=exports.ConfigurationOption=Montage.create(Montage,{initWithNameAndCost:{value:function(e,t){return this.name=e,this.cost=t||0,this}},name:{value:null},cost:{value:0}});exports.BooleanConfigurationOption=Montage.create(ConfigurationOption,{chosen:{value:!1}})