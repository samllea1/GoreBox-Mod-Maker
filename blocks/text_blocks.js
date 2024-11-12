Blockly.Blocks["TEXT_string"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("text")
            .appendField(new Blockly.FieldTextInput("Hello, world!"), "TextString");
        this.setOutput(true, "String");
        this.setColour("#00a800");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['TEXT_string'] = function(block, generator) {
    const TextString = block.getFieldValue('TextString');
    const code = `"${TextString}"`;
    return [code, javascript.Order.ATOMIC];
};


Blockly.Blocks["TEXT_string_join"] = {
    init: function () {
        this.appendValueInput("join1")
        this.appendDummyInput()
            .appendField("join");
        this.appendValueInput("join2")
        this.setOutput(true, "String");
        this.setColour("#00a800");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['TEXT_string_join'] = function(block, generator) {
    const join1 = generator.valueToCode(block, 'join1', javascript.Order.ADDITION);
    const join2 = generator.valueToCode(block, 'join2', javascript.Order.ADDITION);
    const code = `${join1} + ${join2}`;
    return [code, javascript.Order.ADDITION];
};

Blockly.Blocks["TEXT_length"] = {
    init: function() {
      this.setOutput(true, "String");
      this.appendValueInput("Num")
          .appendField("length");
      this.setInputsInline(true);
      this.setPreviousStatement(false, null);
      this.setNextStatement(false, null);
      this.setColour("#00a800");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
javascript.javascriptGenerator.forBlock['TEXT_length'] = function(block, generator) {
  var Num = generator.valueToCode(block, 'Num', javascript.Order.ATOMIC);
  var code = `${Num}.len`;
  return [code, javascript.Order.MEMBER];
};

Blockly.Blocks["TEXT_split"] = {
    init: function() {
        this.setOutput(true, "String");
        this.appendValueInput("item")
            .setCheck("Number")
            .appendField("item");
        this.appendValueInput("text")
            .setCheck("String")
            .appendField("of");
        this.appendValueInput("splitter")
            .setCheck("String")
            .appendField("split by");
        this.setInputsInline(true);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setColour("#00a800");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
javascript.javascriptGenerator.forBlock['TEXT_split'] = function(block, generator) {
  var item = generator.valueToCode(block, 'item', javascript.Order.ATOMIC);
  var text = generator.valueToCode(block, 'text', javascript.Order.ATOMIC);
  var splitter = generator.valueToCode(block, 'splitter', javascript.Order.ATOMIC);
  var code = `${text}.split(${splitter})[${item-1}]`;
  return [code, javascript.Order.MEMBER];
};

Blockly.Blocks["TEXT_letter"] = {
    init: function() {
        this.setOutput(true, "String");
        this.appendValueInput("letter")
            .setCheck("Number")
            .appendField("letter");
        this.appendValueInput("text")
            .setCheck("String")
            .appendField("of");
        this.setInputsInline(true);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setColour("#00a800");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
javascript.javascriptGenerator.forBlock['TEXT_letter'] = function(block, generator) {
  var letter = generator.valueToCode(block, 'letter', javascript.Order.ATOMIC);
  var text = generator.valueToCode(block, 'text', javascript.Order.ATOMIC);
  var code = `${text}.split("")[${letter-1}]`;
  return [code, javascript.Order.MEMBER];
};

Blockly.Blocks["TEXT_value"] = {
    init: function() {
    this.setOutput(true, "Number");
    this.appendValueInput("string")
        .setCheck("String")
    this.appendDummyInput()
        .appendField("Value");
    this.setInputsInline(true);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour("#00a800");
    this.setTooltip("");
    this.setHelpUrl("");
    }
  };
  
javascript.javascriptGenerator.forBlock['TEXT_value'] = function(block, generator) {
  var string = generator.valueToCode(block, 'string', javascript.Order.ATOMIC);
  var code = `${string}.val`;
  return [code, javascript.Order.MEMBER];
};

Blockly.Blocks["TEXT_string_contains"] = {
    init: function () {
        this.appendValueInput("string")
            .appendField("does string:")
            .setCheck("String");
        this.appendDummyInput()
            .appendField("contain:");
        this.appendValueInput("target")
            .setCheck("String");
        this.setOutput(true, "Boolean");
        this.setColour("#00a800");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['TEXT_string_contains'] = function(block, generator) {
    const string = generator.valueToCode(block, 'string', javascript.Order.ADDITION);
    const target = generator.valueToCode(block, 'target', javascript.Order.ADDITION);
    const code = `StringContains({"string": ${string}, "target": ${target}})`;
    return [code, javascript.Order.ADDITION];
};