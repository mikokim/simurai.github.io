montageDefine("eb3badc","core/meta/validation-rule-blueprint.json",{exports:{blueprint_owner_reference:{prototype:"core/meta/blueprint-reference",properties:{valueReference:{blueprintName:"Blueprint",blueprintModuleId:"core/meta/blueprint-blueprint.json",prototypeName:"Blueprint"}}},validation_rule_blueprint_name:{prototype:"core/meta/property-blueprint",properties:{name:"name",blueprint:{"@":"root"},cardinality:1,mandatory:!0,denyDelete:!1,readOnly:!0,valueType:"string",enumValues:[],helpKey:""}},validation_rule_owner_blueprint:{prototype:"core/meta/association-blueprint",properties:{name:"blueprint",blueprint:{"@":"root"},cardinality:1,mandatory:!0,denyDelete:!1,readOnly:!0,valueType:"object",enumValues:[],helpKey:"",targetBlueprint:{"@":"blueprint_owner_reference"}}},validation_rule_blueprint_validationSelector:{prototype:"core/meta/property-blueprint",properties:{name:"validationSelector",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"object",valueObjectPrototypeName:"Selector",valueObjectModuleId:"core/selector",enumValues:[],helpKey:""}},validation_rule_blueprint_messageKey:{prototype:"core/meta/property-blueprint",properties:{name:"messageKey",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"string",enumValues:[],helpKey:""}},root:{prototype:"core/meta/blueprint",properties:{name:"PropertyValidationRule",blueprintModuleId:"core/meta/validation-rule-blueprint.json",prototypeName:"PropertyValidationRule",customPrototype:!1,propertyBlueprints:[{"@":"validation_rule_blueprint_name"},{"@":"validation_rule_owner_blueprint"},{"@":"validation_rule_blueprint_validationSelector"},{"@":"validation_rule_blueprint_messageKey"}],propertyBlueprintGroups:{"validation-rule-blueprint":[{"@":"validation_rule_blueprint_name"},{"@":"validation_rule_owner_blueprint"},{"@":"validation_rule_blueprint_validationSelector"},{"@":"validation_rule_blueprint_messageKey"}]},propertyValidationRules:{}}}}})