Blockly.Blocks["MATH_number"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 0.1), "NumberValue");
        this.setOutput(true, "Number");
        this.setColour("#ffffff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['MATH_number'] = function(block, generator) {
    const NumberValue = block.getFieldValue('NumberValue');
    const code = NumberValue.toString();
    return [code, javascript.Order.ATOMIC];
};

Blockly.Blocks["MATH_addition"] = {
    init: function () {
        this.appendValueInput("VARIABLE")
            .setCheck("Number")
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField("+");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#6b00de");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['MATH_addition'] = function(block, generator) {
    const variableCode = generator.valueToCode(block, 'VARIABLE', javascript.Order.ADDITION);
    const numberCode = generator.valueToCode(block, 'NUMBER', javascript.Order.ADDITION);
    const code = `(${variableCode} + ${numberCode})`;
    return [code, javascript.Order.ADDITION];
};

Blockly.Blocks["MATH_subtraction"] = {
    init: function () {
        this.appendValueInput("VARIABLE")
            .setCheck("Number")
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField("-");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#6b00de");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['MATH_subtraction'] = function(block, generator) {
    const variableCode = generator.valueToCode(block, 'VARIABLE', javascript.Order.SUBTRACTION);
    const numberCode = generator.valueToCode(block, 'NUMBER', javascript.Order.SUBTRACTION);
    const code = `(${variableCode} - ${numberCode})`;
    return [code, javascript.Order.SUBTRACTION];
};

Blockly.Blocks["MATH_multiplication"] = {
    init: function () {
        this.appendValueInput("VARIABLE")
            .setCheck("Number")
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField("*");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#6b00de");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['MATH_multiplication'] = function(block, generator) {
    const variableCode = generator.valueToCode(block, 'VARIABLE', javascript.Order.MULTIPLICATION);
    const numberCode = generator.valueToCode(block, 'NUMBER', javascript.Order.MULTIPLICATION);
    const code = `(${variableCode} * ${numberCode})`;
    return [code, javascript.Order.MULTIPLICATION];
};

Blockly.Blocks["MATH_division"] = {
    init: function () {
        this.appendValueInput("VARIABLE")
            .setCheck("Number")
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField("/");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#6b00de");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['MATH_division'] = function(block, generator) {
    const variableCode = generator.valueToCode(block, 'VARIABLE', javascript.Order.DIVISION);
    const numberCode = generator.valueToCode(block, 'NUMBER', javascript.Order.DIVISION);
    const code = `(${variableCode} / ${numberCode})`;
    return [code, javascript.Order.DIVISION];
};

Blockly.Blocks["MATH_modulo"] = {
    init: function () {
        this.appendValueInput("VARIABLE")
            .setCheck("Number")
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField("mod");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#6b00de");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['MATH_modulo'] = function(block, generator) {
    const variableCode = generator.valueToCode(block, 'VARIABLE', javascript.Order.MODULUS);
    const numberCode = generator.valueToCode(block, 'NUMBER', javascript.Order.MODULUS);
    const code = `(${variableCode} % ${numberCode})`;
    return [code, javascript.Order.MODULUS];
};

Blockly.Blocks["MATH_power"] = {
    init: function () {
        this.appendValueInput("VARIABLE")
            .setCheck("Number")
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField("^");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#6b00de");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['MATH_power'] = function(block, generator) {
    const variableCode = generator.valueToCode(block, 'VARIABLE', javascript.Order.POWER);
    const numberCode = generator.valueToCode(block, 'NUMBER', javascript.Order.POWER);
    const code = `(${variableCode} ^ ${numberCode})`;
    return [code, javascript.Order.POWER];
};

Blockly.Blocks["MATH_special"] = {
    init: function () {
        this.appendValueInput("DROPDOWN")
            .setCheck(null)
            .appendField(
                new Blockly.FieldDropdown([
                    ["round", "round"],
                    ["floor", "floor"],
                    ["ceiling", "ceil"],
                    ["sqrt", "sqrt"],
                    ["sin", "sin"],
                    ["cos", "cos"],
                    ["tan", "tan"],
                    ["asin", "asin"],
                    ["acos", "acos"],
                    ["atan", "atan"],
                ]),
                "dropdown"
            )
            .appendField("of");
        this.setOutput(true, "Number");
        this.setColour("#6b00de");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

  
javascript.javascriptGenerator.forBlock['MATH_special'] = function(block, generator) {
    const argsDropdown = block.getFieldValue('dropdown');
    const value_DROPDOWN = generator.valueToCode(block, 'DROPDOWN', javascript.Order.NONE);
    const code = `${argsDropdown}(${value_DROPDOWN})`;
    return [code, javascript.Order.FUNCTION_CALL];
};

Blockly.Blocks["MATH_pi"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("pi");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#6b00de");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['MATH_pi'] = function(block, generator) {
    const code = 'pi';
    return [code, javascript.Order.FUNCTION_CALL];
};

Blockly.Blocks["MATH_random_integer"] = {
    init: function () {
        this.appendValueInput("ran1")
            .appendField("pick random int")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField("to");
        this.appendValueInput("ran2")
            .setCheck("Number");
        this.setOutput(true, "Number");
        this.setColour("#6b00de");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['MATH_random_integer'] = function(block, generator) {
    const join1 = generator.valueToCode(block, 'ran1', javascript.Order.ADDITION);
    const join2 = generator.valueToCode(block, 'ran2', javascript.Order.ADDITION);
    const code = `RandomInt({"min": ${join1}, "max": ${join2}})`;
    return [code, javascript.Order.ADDITION];
};

Blockly.Blocks["MATH_random_float"] = {
    init: function () {
        this.appendValueInput("ran1")
            .appendField("pick random float")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField("to");
        this.appendValueInput("ran2")
            .setCheck("Number");
        this.setOutput(true, "Number");
        this.setColour("#6b00de");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['MATH_random_float'] = function(block, generator) {
    const join1 = generator.valueToCode(block, 'ran1', javascript.Order.ADDITION);
    const join2 = generator.valueToCode(block, 'ran2', javascript.Order.ADDITION);
    const code = `RandomFloat({"min": ${join1}, "max": ${join2}})`;
    return [code, javascript.Order.ADDITION];
};

Blockly.Blocks["MATH_distance"] = {
    init: function () {
        this.appendValueInput("X1")
            .setCheck("Number")
            .appendField("distance from - x:");
        this.appendValueInput("Y1")
            .setCheck("Number")
            .appendField("y:");
        this.appendValueInput("Z1")
            .setCheck("Number")
            .appendField("z:");
        this.appendValueInput("X2")
            .setCheck("Number")
            .appendField("to x:");
        this.appendValueInput("Y2")
            .setCheck("Number")
            .appendField("y:");
        this.appendValueInput("Z2")
            .setCheck("Number")
            .appendField("z:");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#6b00de");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['MATH_distance'] = function(block, generator) {
    const X1 = generator.valueToCode(block, 'X1', javascript.Order.ADDITION);
    const Y1 = generator.valueToCode(block, 'Y1', javascript.Order.ADDITION);
    const Z1 = generator.valueToCode(block, 'Z1', javascript.Order.ADDITION);
    const X2 = generator.valueToCode(block, 'X2', javascript.Order.ADDITION);
    const Y2 = generator.valueToCode(block, 'Y2', javascript.Order.ADDITION);
    const Z2 = generator.valueToCode(block, 'Z2', javascript.Order.ADDITION);
    const code = `sqrt((${X1} - ${X2}) * (${X1} - ${X2}) + (${Y1} - ${Y2}) * (${Y1} - ${Y2}) + (${Z1} - ${Z2}) * (${Z1} - ${Z2}))`;
    return [code, javascript.Order.ADDITION];
};


// sqrt((X1 - X2) * (X1 - X2) + (Y1 - Y2) * (Y1 - Y2) + (Z1 - Z2) * (Z1 - Z2))