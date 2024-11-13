Blockly.Blocks["GB_comment"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("//")
            .appendField(new Blockly.FieldTextInput("Comment"), "text");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#696969");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['GB_comment'] = function(block, generator) {
  const text = block.getFieldValue('text');
  const code = `// ${text}\n`;
  return code;
  };