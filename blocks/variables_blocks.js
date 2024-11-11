Blockly.Blocks['VARIABLES_set_variable'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("set variable:")
            .appendField(new Blockly.FieldTextInput("MyVariable"), "variableName");
        this.appendValueInput("value")
            .appendField("to value:");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff7b00");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
javascript.javascriptGenerator.forBlock['VARIABLES_set_variable'] = function(block, generator) {
    const variableName = block.getFieldValue('variableName');
    const value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
    const code = `${variableName} = ${value}\n`;
    return code;
};

Blockly.Blocks["VARIABLES_variable"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("variable:")
            .appendField(new Blockly.FieldTextInput("MyVariable"), "variableName");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour("#ff7b00");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['VARIABLES_variable'] = function(block, generator) {
    const variableName = block.getFieldValue('variableName');
    const code = variableName;
    return [code, javascript.Order.FUNCTION_CALL];
  };

  Blockly.Blocks['VARIABLES_set_variable_global'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("set variable global:")
            .appendField(new Blockly.FieldTextInput("MyVariable"), "variableName");
        this.appendValueInput("value")
            .appendField("to value:");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff7b00");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
javascript.javascriptGenerator.forBlock['VARIABLES_set_variable_global'] = function(block, generator) {
    const variableName = block.getFieldValue('variableName');
    const value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
    const code = `globals.${variableName} = ${value}\n`;
    return code;
};

Blockly.Blocks["VARIABLES_variable_global"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("variable global:")
            .appendField(new Blockly.FieldTextInput("MyVariable"), "variableName");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour("#ff7b00");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['VARIABLES_variable_global'] = function(block, generator) {
    const variableName = block.getFieldValue('variableName');
    const code = 'globals.'+variableName;
    return [code, javascript.Order.FUNCTION_CALL];
  };