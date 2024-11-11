Blockly.Blocks['OBJECTS_execute_as'] = {
    init: function() {
        this.appendValueInput("scriptName")
            .setCheck("String")
            .appendField("execute script:");
        this.appendValueInput("objectName")
            .setCheck("String")
            .appendField("as:");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

  
  javascript.javascriptGenerator.forBlock['OBJECTS_execute_as'] = function(block, generator) {
    const scriptName = generator.valueToCode(block, 'scriptName', javascript.Order.ATOMIC);
    const objectName = generator.valueToCode(block, 'objectName', javascript.Order.ATOMIC);
    const code = `ExecuteScript({"target": ${objectName}, "script": ${scriptName}})\n`;
    return code;
};

Blockly.Blocks['OBJECTS_execute_on_children'] = {
    init: function() {
        this.appendValueInput("scriptName")
            .setCheck("String")
            .appendField("execute script:");
        this.appendDummyInput()
            .appendField("on children");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

  
  javascript.javascriptGenerator.forBlock['OBJECTS_execute_on_children'] = function(block, generator) {
    const scriptName = generator.valueToCode(block, 'scriptName', javascript.Order.ATOMIC);
    const code = `ExecuteScriptOnChildren({"script": ${scriptName}})\n`;
    return code;
};

Blockly.Blocks['OBJECTS_register'] = {
    init: function() {
        this.appendValueInput("objectName")
            .setCheck("String")
            .appendField("register game object, object name:");
        this.appendValueInput("objectRegisteredName")
            .setCheck("String")
            .appendField("objects registered name:");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

  
  javascript.javascriptGenerator.forBlock['OBJECTS_register'] = function(block, generator) {
    const objectName = generator.valueToCode(block, 'objectName', javascript.Order.ATOMIC);
    const ObjectRegisteredName = generator.valueToCode(block, 'objectRegisteredName', javascript.Order.ATOMIC);
    const code = `RegisterGameObject({"name": ${objectName}, "registeredName": ${ObjectRegisteredName}})\n`;
    return code;
};

Blockly.Blocks["OBJECTS_name"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("name");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['OBJECTS_name'] = function(block, generator) {
    const code = 'name';
    return [code, javascript.Order.FUNCTION_CALL];
};

Blockly.Blocks["OBJECTS_child_count"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("child count");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['OBJECTS_child_count'] = function(block, generator) {
    const code = 'childCount';
    return [code, javascript.Order.FUNCTION_CALL];
};


Blockly.Blocks['OBJECTS_OnInstantiate'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Whenever An Object Is Spawned Run Code:")
      this.appendStatementInput("DO")
          .setCheck(null);
      this.setNextStatement(false, null);
      this.setColour("#00aaff");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  javascript.javascriptGenerator.forBlock['OBJECTS_OnInstantiate'] = function(block, generator) {
    var statements_do = generator.statementToCode(block, 'DO');
    var code = '';
      code = 'OnInstantiate = function(args)\n' + statements_do + '\nend function\n';
  
    return code;
  };

  Blockly.Blocks["OBJECTS_args"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("args.")
            .appendField(
                new Blockly.FieldDropdown([
                    ["object name", "name"],
                    ["player that spawned object", "player"],
                ]),
                "dropdown"
            );
        this.setOutput(true, "String");
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['OBJECTS_args'] = function(block, generator) {
    const argsDropdown = block.getFieldValue('dropdown');
    const code = `args.${argsDropdown}`;
    return [code, javascript.Order.ATOMIC];
  };

  Blockly.Blocks['OBJECTS_set_texture'] = {
    init: function() {
        this.appendValueInput("textureName")
            .setCheck("String")
            .appendField("Set Texture:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
        this.setInputsInline(true);
    }
  };
  
  javascript.javascriptGenerator.forBlock['OBJECTS_set_texture'] = function(block, generator) {
    const textureName = generator.valueToCode(block, 'textureName', javascript.Order.ATOMIC);
    const code = `SetTexture({"name": ${textureName}})\n`;
    return code;
  };

Blockly.Blocks['OBJECTS_instantiate_empty'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck("String")
            .appendField("Instantiate Empty - name:");
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("x:");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y:");
        this.appendValueInput("z")
            .setCheck("Number")
            .appendField("z:");
        this.appendValueInput("rotX")
            .setCheck("Number")
            .appendField("rotX:");
        this.appendValueInput("rotY")
            .setCheck("Number")
            .appendField("rotY:");
        this.appendValueInput("rotZ")
            .setCheck("Number")
            .appendField("rotZ:");
        this.appendValueInput("rotW")
            .setCheck("Number")
            .appendField("rotW:");
        this.appendDummyInput()
            .appendField("child:")
            .appendField(
                new Blockly.FieldDropdown([
                    ["no", "false"],
                    ["yes", "true"],
                ]),
                "child"
            );
        
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
        this.setInputsInline(false);
    }
  };
  
  javascript.javascriptGenerator.forBlock['OBJECTS_instantiate_empty'] = function(block, generator) {
    const name = generator.valueToCode(block, 'name', javascript.Order.ATOMIC);
    const x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    const y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    const z = generator.valueToCode(block, 'z', javascript.Order.ATOMIC);
    const rotX = generator.valueToCode(block, 'rotX', javascript.Order.ATOMIC);
    const rotY = generator.valueToCode(block, 'rotY', javascript.Order.ATOMIC);
    const rotZ = generator.valueToCode(block, 'rotZ', javascript.Order.ATOMIC);
    const rotW = generator.valueToCode(block, 'rotW', javascript.Order.ATOMIC);
    const child = block.getFieldValue('child');
    let functionName = 'InstantiateEmpty';
    if (child === 'true') {
        functionName = 'InstantiateEmptyChild';
    }
    const code = `${functionName}({"name": ${name}, "x": ${x}, "y": ${y}, "z": ${z}, "rotX": ${rotX}, "rotY": ${rotY}, "rotZ": ${rotZ}, "rotW": ${rotW}})\n`;
    return code;
};

Blockly.Blocks['OBJECTS_instantiate_model'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck("String")
            .appendField("Instantiate Model - name:");
        this.appendValueInput("model")
            .setCheck("String")
            .appendField("model:");
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("x:");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y:");
        this.appendValueInput("z")
            .setCheck("Number")
            .appendField("z:");
        this.appendValueInput("rotX")
            .setCheck("Number")
            .appendField("rotX:");
        this.appendValueInput("rotY")
            .setCheck("Number")
            .appendField("rotY:");
        this.appendValueInput("rotZ")
            .setCheck("Number")
            .appendField("rotZ:");
        this.appendValueInput("rotW")
            .setCheck("Number")
            .appendField("rotW:");
        this.appendValueInput("scale")
            .setCheck("Number")
            .appendField("scale:");
        this.appendDummyInput()
            .appendField("collisions:")
            .appendField(
                new Blockly.FieldDropdown([
                    ["yes", "true"],
                    ["no", "false"],
                ]),
                "collisions"
            );
        this.appendDummyInput()
            .appendField("convex:")
            .appendField(
                new Blockly.FieldDropdown([
                    ["yes", "true"],
                    ["no", "false"],
                ]),
                "convex"
            );
        this.appendDummyInput()
            .appendField("child:")
            .appendField(
                new Blockly.FieldDropdown([
                    ["no", "false"],
                    ["yes", "true"],
                ]),
                "child"
            );
        
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
        this.setInputsInline(false);
    }
  };
  
javascript.javascriptGenerator.forBlock['OBJECTS_instantiate_model'] = function(block, generator) {
    const name = generator.valueToCode(block, 'name', javascript.Order.ATOMIC);
    const model = generator.valueToCode(block, 'model', javascript.Order.ATOMIC);
    const x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    const y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    const z = generator.valueToCode(block, 'z', javascript.Order.ATOMIC);
    const rotX = generator.valueToCode(block, 'rotX', javascript.Order.ATOMIC);
    const rotY = generator.valueToCode(block, 'rotY', javascript.Order.ATOMIC);
    const rotZ = generator.valueToCode(block, 'rotZ', javascript.Order.ATOMIC);
    const rotW = generator.valueToCode(block, 'rotW', javascript.Order.ATOMIC);
    const scale = generator.valueToCode(block, 'scale', javascript.Order.ATOMIC);
    const child = block.getFieldValue('child');
    const collisions = block.getFieldValue('collisions');
    const convex = block.getFieldValue('convex');
    let functionName = 'InstantiateModel';
    if (child === 'true') {
        functionName = 'InstantiateModelChild';
    }
    const code = `${functionName}({"name": ${name}, "model": ${model}, "x": ${x}, "y": ${y}, "z": ${z}, "rotX": ${rotX}, "rotY": ${rotY}, "rotZ": ${rotZ}, "rotW": ${rotW}, "scale": ${scale}, "collisions": ${collisions}, "convex": ${convex}})\n`;
    return code;
};

Blockly.Blocks['OBJECTS_instantiate'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck("String")
            .appendField("Instantiate - name:");
        this.appendValueInput("path")
            .setCheck("String")
            .appendField("path:");
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("x:");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y:");
        this.appendValueInput("z")
            .setCheck("Number")
            .appendField("z:");
        this.appendValueInput("rotX")
            .setCheck("Number")
            .appendField("rotX:");
        this.appendValueInput("rotY")
            .setCheck("Number")
            .appendField("rotY:");
        this.appendValueInput("rotZ")
            .setCheck("Number")
            .appendField("rotZ:");
        this.appendValueInput("rotW")
            .setCheck("Number")
            .appendField("rotW:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
        this.setInputsInline(false);
    }
  };
  
  javascript.javascriptGenerator.forBlock['OBJECTS_instantiate_empty'] = function(block, generator) {
    const name = generator.valueToCode(block, 'name', javascript.Order.ATOMIC);
    const path = generator.valueToCode(block, 'path', javascript.Order.ATOMIC);
    const x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    const y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    const z = generator.valueToCode(block, 'z', javascript.Order.ATOMIC);
    const rotX = generator.valueToCode(block, 'rotX', javascript.Order.ATOMIC);
    const rotY = generator.valueToCode(block, 'rotY', javascript.Order.ATOMIC);
    const rotZ = generator.valueToCode(block, 'rotZ', javascript.Order.ATOMIC);
    const rotW = generator.valueToCode(block, 'rotW', javascript.Order.ATOMIC);
    const code = `Instantiate({"name": ${name}, "path": ${path}, "x": ${x}, "y": ${y}, "z": ${z}, "rotX": ${rotX}, "rotY": ${rotY}, "rotZ": ${rotZ}, "rotW": ${rotW}})\n`;
    return code;
};

Blockly.Blocks['OBJECTS_destroy_self'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Delete Self");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
        this.setInputsInline(true);
    }
  };
  
  javascript.javascriptGenerator.forBlock['OBJECTS_destroy_self'] = function(block, generator) {
    const code = `DestroySelf\n`;
    return code;
  };