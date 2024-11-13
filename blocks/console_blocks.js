Blockly.Blocks["GB_print"] = {
    init: function () {
        this.appendValueInput("text")
            .setCheck(null)
            .appendField("print");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#696969");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['GB_print'] = function(block, generator) {
  const text = generator.valueToCode(block, 'text', javascript.Order.ATOMIC);
  const code = `print ${text}\n`;
  return code;
};

Blockly.Blocks["GB_open_console"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Open Console");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#696969");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['GB_open_console'] = function(block, generator) {
  const code = `OpenConsole\n`;
  return code;
  };
  
  Blockly.Blocks["GB_close_console"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Close Console");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#696969");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['GB_close_console'] = function(block, generator) {
  const code = `CloseConsole\n`;
  return code;
  };