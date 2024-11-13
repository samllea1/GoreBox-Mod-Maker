Blockly.Blocks['DATA_save_number'] = {
    init: function() {
        this.appendValueInput("number")
            .setCheck("Number")
            .appendField("save number:")
        this.appendValueInput("key")
            .setCheck("String")
            .appendField("with key:");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff7b00");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
javascript.javascriptGenerator.forBlock['DATA_save_number'] = function(block, generator) {
    const number = generator.valueToCode(block, 'number', javascript.Order.ATOMIC);
    const key = generator.valueToCode(block, 'key', javascript.Order.ATOMIC);
    const code = `SaveFloat({"key": ${key}, "value": ${number}})\n`;
    return code;
};

Blockly.Blocks['DATA_save_text'] = {
    init: function() {
        this.appendValueInput("text")
            .setCheck("String")
            .appendField("save text:")
        this.appendValueInput("key")
            .setCheck("String")
            .appendField("with key:");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff7b00");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
javascript.javascriptGenerator.forBlock['DATA_save_text'] = function(block, generator) {
    const text = generator.valueToCode(block, 'text', javascript.Order.ATOMIC);
    const key = generator.valueToCode(block, 'key', javascript.Order.ATOMIC);
    const code = `SaveString({"key": ${key}, "value": ${text}})\n`;
    return code;
};

Blockly.Blocks["DATA_get_number"] = {
    init: function() {
        this.appendValueInput("key")
            .setCheck("String")
            .appendField("Load Number With Key:")
        this.appendValueInput("defaultNumber")
            .setCheck("Number")
            .appendField("Default Number:");
        this.setInputsInline(true);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setColour("#ff7b00");
        this.setOutput(true, "Number");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  javascript.javascriptGenerator.forBlock['DATA_get_number'] = function(block, generator) {
    const defaultNumber = generator.valueToCode(block, 'defaultNumber', javascript.Order.ATOMIC);
    const key = generator.valueToCode(block, 'key', javascript.Order.ATOMIC);
    const code = `GetFloat({"key": ${key}, "defaultValue": ${defaultNumber}})`;
    return [code, javascript.Order.FUNCTION_CALL];
};

Blockly.Blocks["DATA_get_text"] = {
    init: function() {
        this.appendValueInput("key")
            .setCheck("String")
            .appendField("Load Text With Key:")
        this.appendValueInput("defaultText")
            .setCheck("String")
            .appendField("Default Text:");
        this.setInputsInline(true);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setColour("#ff7b00");
        this.setOutput(true, "String");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  javascript.javascriptGenerator.forBlock['DATA_get_text'] = function(block, generator) {
    const defaultText = generator.valueToCode(block, 'defaultText', javascript.Order.ATOMIC);
    const key = generator.valueToCode(block, 'key', javascript.Order.ATOMIC);
    const code = `GetString({"key": ${key}, "defaultValue": ${defaultText}})`;
    return [code, javascript.Order.FUNCTION_CALL];
};