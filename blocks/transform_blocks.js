Blockly.Blocks["GB_move"] = {
    init: function() {
      this.appendValueInput("X")
          .setCheck('Number')
          .appendField("Move - X:");
      this.appendValueInput("Y")
          .setCheck('Number')
          .appendField("Y:");
      this.appendValueInput("Z")
          .setCheck('Number')
          .appendField("Z:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0048ff");
      this.setTooltip("Moves The Targeted Object");
      this.setHelpUrl("");
    }
  };
  
  javascript.javascriptGenerator.forBlock['GB_move'] = function(block, generator) {
    var x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var z = generator.valueToCode(block, 'Z', javascript.Order.ATOMIC);
    var code = `Move({"x": ${x}, "y": ${y}, "z": ${z}})\n`;
    return code;
  };
  
  Blockly.Blocks["GB_move_local"] = {
    init: function() {
      this.appendValueInput("X")
          .setCheck('Number')
          .appendField("Move Local - X:");
      this.appendValueInput("Y")
          .setCheck('Number')
          .appendField("Y:");
      this.appendValueInput("Z")
          .setCheck('Number')
          .appendField("Z:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0048ff");
      this.setTooltip("Moves The Targeted Object");
      this.setHelpUrl("");
    }
  };
  
  javascript.javascriptGenerator.forBlock['GB_move_local'] = function(block, generator) {
    var x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var z = generator.valueToCode(block, 'Z', javascript.Order.ATOMIC);
    var code = `MoveLocal({"x": ${x}, "y": ${y}, "z": ${z}})\n`;
    return code;
  };
  
  Blockly.Blocks["GB_set_position"] = {
    init: function() {
      this.appendValueInput("X")
          .setCheck('Number')
          .appendField("Set Position - X:");
      this.appendValueInput("Y")
          .setCheck('Number')
          .appendField("Y:");
      this.appendValueInput("Z")
          .setCheck('Number')
          .appendField("Z:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0048ff");
      this.setTooltip("Moves The Targeted Object");
      this.setHelpUrl("");
    }
  };
  
  javascript.javascriptGenerator.forBlock['GB_set_position'] = function(block, generator) {
    var x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var z = generator.valueToCode(block, 'Z', javascript.Order.ATOMIC);
    var code = `SetPosition({"x": ${x}, "y": ${y}, "z": ${z}})\n`;
    return code;
  };
  
  Blockly.Blocks["GB_set_local_position"] = {
    init: function() {
      this.appendValueInput("X")
          .setCheck('Number')
          .appendField("Set Local Position - X:");
      this.appendValueInput("Y")
          .setCheck('Number')
          .appendField("Y:");
      this.appendValueInput("Z")
          .setCheck('Number')
          .appendField("Z:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0048ff");
      this.setTooltip("Moves The Targeted Object");
      this.setHelpUrl("");
    }
  };
  
  javascript.javascriptGenerator.forBlock['GB_set_local_position'] = function(block, generator) {
    var x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var z = generator.valueToCode(block, 'Z', javascript.Order.ATOMIC);
    var code = `SetLocalPosition({"x": ${x}, "y": ${y}, "z": ${z}})\n`;
    return code;
  };
  
  Blockly.Blocks["GB_set_rotation"] = {
    init: function() {
      this.appendValueInput("X")
          .setCheck('Number')
          .appendField("Set Rotation - X:");
      this.appendValueInput("Y")
          .setCheck('Number')
          .appendField("Y:");
      this.appendValueInput("Z")
          .setCheck('Number')
          .appendField("Z:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0048ff");
      this.setTooltip("Moves The Targeted Object");
      this.setHelpUrl("");
    }
  };
  
  javascript.javascriptGenerator.forBlock['GB_set_rotation'] = function(block, generator) {
    var x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var z = generator.valueToCode(block, 'Z', javascript.Order.ATOMIC);
    var code = `SetRotation({"x": ${x}, "y": ${y}, "z": ${z}})\n`;
    return code;
  };
  
  Blockly.Blocks["GB_set_local_rotation"] = {
    init: function() {
      this.appendValueInput("X")
          .setCheck('Number')
          .appendField("Set Local Rotation - X:");
      this.appendValueInput("Y")
          .setCheck('Number')
          .appendField("Y:");
      this.appendValueInput("Z")
          .setCheck('Number')
          .appendField("Z:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0048ff");
      this.setTooltip("Moves The Targeted Object");
      this.setHelpUrl("");
    }
  };
  
  javascript.javascriptGenerator.forBlock['GB_set_local_rotation'] = function(block, generator) {
    var x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var z = generator.valueToCode(block, 'Z', javascript.Order.ATOMIC);
    var code = `SetLocalRotation({"x": ${x}, "y": ${y}, "z": ${z}})\n`;
    return code;
  };
  
  Blockly.Blocks["GB_rotate"] = {
    init: function() {
      this.appendValueInput("X")
          .setCheck('Number')
          .appendField("Rotate - X:");
      this.appendValueInput("Y")
          .setCheck('Number')
          .appendField("Y:");
      this.appendValueInput("Z")
          .setCheck('Number')
          .appendField("Z:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0048ff");
      this.setTooltip("Moves The Targeted Object");
      this.setHelpUrl("");
    }
  };
  
  javascript.javascriptGenerator.forBlock['GB_rotate'] = function(block, generator) {
    var x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var z = generator.valueToCode(block, 'Z', javascript.Order.ATOMIC);
    var code = `Rotate({"x": ${x}, "y": ${y}, "z": ${z}})\n`;
    return code;
  };
  
  Blockly.Blocks["GB_rotate_local"] = {
    init: function() {
      this.appendValueInput("X")
          .setCheck('Number')
          .appendField("Rotate Local - X:");
      this.appendValueInput("Y")
          .setCheck('Number')
          .appendField("Y:");
      this.appendValueInput("Z")
          .setCheck('Number')
          .appendField("Z:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0048ff");
      this.setTooltip("Moves The Targeted Object");
      this.setHelpUrl("");
    }
  };
  
  javascript.javascriptGenerator.forBlock['GB_rotate_local'] = function(block, generator) {
    var x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var z = generator.valueToCode(block, 'Z', javascript.Order.ATOMIC);
    var code = `RotateLocal({"x": ${x}, "y": ${y}, "z": ${z}})\n`;
    return code;
  };
  
  Blockly.Blocks["GB_add_scale"] = {
    init: function() {
      this.appendValueInput("X")
          .setCheck('Number')
          .appendField("Add Scale - X:");
      this.appendValueInput("Y")
          .setCheck('Number')
          .appendField("Y:");
      this.appendValueInput("Z")
          .setCheck('Number')
          .appendField("Z:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0048ff");
      this.setTooltip("Moves The Targeted Object");
      this.setHelpUrl("");
    }
  };
  
  javascript.javascriptGenerator.forBlock['GB_add_scale'] = function(block, generator) {
    var x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var z = generator.valueToCode(block, 'Z', javascript.Order.ATOMIC);
    var code = `AddScale({"x": ${x}, "y": ${y}, "z": ${z}})\n`;
    return code;
  };
  
  Blockly.Blocks["GB_set_scale"] = {
    init: function() {
      this.appendValueInput("X")
          .setCheck('Number')
          .appendField("Set Scale - X:");
      this.appendValueInput("Y")
          .setCheck('Number')
          .appendField("Y:");
      this.appendValueInput("Z")
          .setCheck('Number')
          .appendField("Z:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0048ff");
      this.setTooltip("Moves The Targeted Object");
      this.setHelpUrl("");
    }
  };
  
  javascript.javascriptGenerator.forBlock['GB_set_scale'] = function(block, generator) {
    var x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var z = generator.valueToCode(block, 'Z', javascript.Order.ATOMIC);
    var code = `SetScale({"x": ${x}, "y": ${y}, "z": ${z}})\n`;
    return code;
  };
  
  Blockly.Blocks["GB_add_rigidbody"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Add RigidBody Physics");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#0048ff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['GB_add_rigidbody'] = function(block, generator) {
  const code = `AddRigidbody\n`;
  return code;
  };
  
  Blockly.Blocks["GB_remove_rigidbody"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Remove RigidBody Physics");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#0048ff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['GB_remove_rigidbody'] = function(block, generator) {
  const code = `RemoveRigidbody\n`;
  return code;
  };
  
  
  Blockly.Blocks["GB_pos_x"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["global", "global"], ["local", "local"]]), "POS_TYPE")
            .appendField("x position");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#0048ff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['GB_pos_x'] = function(block, generator) {
    const posType = block.getFieldValue('POS_TYPE');
    const code = posType === 'global' ? 'posX' : 'localPosX';
    return [code, javascript.Order.FUNCTION_CALL];
  };
  
  Blockly.Blocks["GB_pos_y"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["global", "global"], ["local", "local"]]), "POS_TYPE")
            .appendField("y position");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#0048ff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['GB_pos_y'] = function(block, generator) {
    const posType = block.getFieldValue('POS_TYPE');
    const code = posType === 'global' ? 'posY' : 'localPosY';
    return [code, javascript.Order.FUNCTION_CALL];
  };
  
  Blockly.Blocks["GB_pos_z"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["global", "global"], ["local", "local"]]), "POS_TYPE")
            .appendField("z position");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#0048ff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['GB_pos_z'] = function(block, generator) {
    const posType = block.getFieldValue('POS_TYPE');
    const code = posType === 'global' ? 'posZ' : 'localPosZ';
    return [code, javascript.Order.FUNCTION_CALL];
  };
  
  Blockly.Blocks["GB_rot_x"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["global", "global"], ["local", "local"]]), "ROT_TYPE")
            .appendField("x rotation");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#0048ff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['GB_rot_x'] = function(block, generator) {
    const rotType = block.getFieldValue('ROT_TYPE');
    const code = rotType === 'global' ? 'rotX' : 'localRotX';
    return [code, javascript.Order.FUNCTION_CALL];
  };
  
  Blockly.Blocks["GB_rot_y"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["global", "global"], ["local", "local"]]), "ROT_TYPE")
            .appendField("y rotation");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#0048ff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['GB_rot_y'] = function(block, generator) {
    const rotType = block.getFieldValue('ROT_TYPE');
    const code = rotType === 'global' ? 'rotY' : 'localRotY';
    return [code, javascript.Order.FUNCTION_CALL];
  };
  
  Blockly.Blocks["GB_rot_z"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["global", "global"], ["local", "local"]]), "ROT_TYPE")
            .appendField("z rotation");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#0048ff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['GB_rot_z'] = function(block, generator) {
    const rotType = block.getFieldValue('ROT_TYPE');
    const code = rotType === 'global' ? 'rotZ' : 'localRotZ';
    return [code, javascript.Order.FUNCTION_CALL];
  };
  
  Blockly.Blocks["GB_scale_x"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("scale x");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#0048ff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['GB_scale_x'] = function(block, generator) {
    const code = 'scaleX';
    return [code, javascript.Order.FUNCTION_CALL];
  };
  
  Blockly.Blocks["GB_scale_y"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("scale y");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#0048ff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['GB_scale_y'] = function(block, generator) {
    const code = 'scaleY';
    return [code, javascript.Order.FUNCTION_CALL];
  };
  
  Blockly.Blocks["GB_scale_z"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("scale z");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#0048ff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['GB_scale_z'] = function(block, generator) {
    const code = 'scaleZ';
    return [code, javascript.Order.FUNCTION_CALL];
  };