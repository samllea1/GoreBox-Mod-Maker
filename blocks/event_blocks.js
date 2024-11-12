Blockly.Blocks["EVENTS_OnStart"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("when ever the script starts, run code:");
        this.setNextStatement(true, null);
        this.setColour("#ffbc03");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['EVENTS_OnStart'] = function(block) {
    let code = '';
    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock) {
      code = Blockly.JavaScript.statementToCode(block, '');
    }
    let prependCode = '';
    return prependCode + code;
  };