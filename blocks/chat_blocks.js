Blockly.Blocks['CHAT_OnChatMessage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Whenever A Chat Message Is Sent Run Code:")
    this.appendStatementInput("DO")
        .setCheck(null);
    this.setNextStatement(false, null);
    this.setColour("#fc3903");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['CHAT_OnChatMessage'] = function(block, generator) {
  var statements_do = generator.statementToCode(block, 'DO');
  var code = '';
    code = 'OnChatMessage = function(args)\n' + statements_do + '\nend function\n';

  return code;
};
Blockly.Blocks['CHAT_SendChatMessage'] = {
  init: function() {
      this.appendValueInput("sender")
          .setCheck("String")
          .appendField("Send Chat Message - Sender:");
      this.appendValueInput("message")
          .setCheck("String")
          .appendField("Message:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#fc3903");
      this.setTooltip("");
      this.setHelpUrl("");
      this.setInputsInline(true);
  }
};

javascript.javascriptGenerator.forBlock['CHAT_SendChatMessage'] = function(block, generator) {
  const message = generator.valueToCode(block, 'message', javascript.Order.ATOMIC);
  const sender = generator.valueToCode(block, 'sender', javascript.Order.ATOMIC);
  const code = `SendChatMessage({"sender": ${sender}, "message": ${message}})\n`;
  return code;
};

Blockly.Blocks['CHAT_SendLocalChatMessage'] = {
  init: function() {
      this.appendValueInput("sender")
          .setCheck("String")
          .appendField("Send Local Chat Message - Sender:");
      this.appendValueInput("message")
          .setCheck("String")
          .appendField("Message:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#fc3903");
      this.setTooltip("");
      this.setHelpUrl("");
      this.setInputsInline(true);
  }
};

javascript.javascriptGenerator.forBlock['CHAT_SendLocalChatMessage'] = function(block, generator) {
  const message = generator.valueToCode(block, 'message', javascript.Order.ATOMIC);
  const sender = generator.valueToCode(block, 'sender', javascript.Order.ATOMIC);
  const code = `SendLocalChatMessage({"sender": ${sender}, "message": ${message}})\n`;
  return code;
};

Blockly.Blocks['CHAT_SendErrorMessage'] = {
  init: function() {
      this.appendValueInput("message")
          .setCheck("String")
          .appendField("Send Error Message:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#fc3903");
      this.setTooltip("");
      this.setHelpUrl("");
      this.setInputsInline(true);
  }
};

javascript.javascriptGenerator.forBlock['CHAT_SendErrorMessage'] = function(block, generator) {
  const message = generator.valueToCode(block, 'message', javascript.Order.ATOMIC);
  const code = `SendErrorMessage({"message": ${message}})\n`;
  return code;
};

Blockly.Blocks["CHAT_args"] = {
  init: function () {
      this.appendDummyInput()
          .appendField("args.")
          .appendField(
              new Blockly.FieldDropdown([
                  ["message", "message"],
                  ["message sender", "sender"],
              ]),
              "dropdown"
          );
      this.setOutput(true, "String");
      this.setColour("#fc3903");
      this.setTooltip("");
      this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock['CHAT_args'] = function(block, generator) {
  const argsDropdown = block.getFieldValue('dropdown');
  const code = `args.${argsDropdown}`;
  return [code, javascript.Order.ATOMIC];
};