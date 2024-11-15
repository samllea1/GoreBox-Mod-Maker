Blockly.Blocks['PLAYER_OnPlayer'] = {
    init: function() {
      var EVENT_OPTIONS = [
        ["Takes Damage", "OnLocalTakeDamage"],
        ["Dies", "OnLocalDied"],
        ["Gets Infected", "OnLocalInfected"],
        ["Gets Healed", "OnLocalHealed"],
        ["Gets Knocked Out", "OnLocalKnockout"],
        ["Wakes Up", "OnLocalWakeUp"],
        ["Spawns In", "OnLocalSpawned"],
        ["Ragdolls", "OnLocalRagdoll"],
        ["Gets Up", "OnLocalGetUp"],
        ["Starts An Emote", "OnLocalEmote"],
        ["Ends An Emote", "OnLocalEmoteEnd"],
      ];
      this.appendDummyInput()
        .appendField("When Ever The Player")
        .appendField(new Blockly.FieldDropdown(EVENT_OPTIONS), "EVENT");
      this.appendStatementInput("DO")
        .setCheck(null);
      this.setNextStatement(false, null);
      this.setColour("#50b800");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  javascript.javascriptGenerator.forBlock['PLAYER_OnPlayer'] = function(block, generator) {
    var dropdown_event = block.getFieldValue('EVENT');
    var statements_do = generator.statementToCode(block, 'DO');
    var code = '';
    code = '' + dropdown_event + ' = function(args)\n' + statements_do + '\nend function\n';
    return code;
  };  

  Blockly.Blocks["PLAYER_args"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("args.")
            .appendField(
                new Blockly.FieldDropdown([
                    ["damage amount", "damage"],
                    ["emote name", "emoteName"],
                ]),
                "dropdown"
            );
        this.setOutput(true, "String");
        this.setColour("#50b800");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['PLAYER_args'] = function(block, generator) {
    const argsDropdown = block.getFieldValue('dropdown');
    const code = `args.${argsDropdown}`;
    return [code, javascript.Order.ATOMIC];
  };

  Blockly.Blocks['PLAYER_drop_weapons'] = {
    init: function() {
        this.appendValueInput("state")
            .setCheck("Boolean")
            .appendField("Can The Player Drop Weapons?:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#50b800");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  javascript.javascriptGenerator.forBlock['PLAYER_drop_weapons'] = function(block, generator) {
    const state = generator.valueToCode(block, 'state', javascript.Order.ATOMIC);
    const code = `SetCanDropWeapons({"state": ${state}})\n`;
    return code;
};

Blockly.Blocks['PLAYER_heal'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Heal The Player");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#50b800");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['PLAYER_heal'] = function(block, generator) {
  const code = `PlayerHeal\n`;
  return code;
};

Blockly.Blocks['PLAYER_kill'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Kill The Player");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#50b800");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['PLAYER_kill'] = function(block, generator) {
  const code = `PlayerKill\n`;
  return code;
};

Blockly.Blocks['PLAYER_emote'] = {
  init: function() {
      this.appendValueInput("emoteName")
        .setCheck("String")
        .appendField("Play Emote:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#50b800");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['PLAYER_emote'] = function(block, generator) {
  const emoteName = generator.valueToCode(block, 'emoteName', javascript.Order.ATOMIC);
  const code = `PlayerEmote({"name": ${emoteName}})\n`;
  return code;
}

Blockly.Blocks["PLAYER_emotes"] = {
  init: function () {
      var EVENT_OPTIONS = [
        ["SalsaDancing", "SalsaDancing"],
        ["SambdaDancing", "SambdaDancing"],
        ["Search", "Search"],
        ["Shuffling", "Shuffling"],
        ["Situps", "Situps"],
        ["Bartend", "Bartend"],
        ["Cheer", "Cheer"],
        ["GolfDrive", "GolfDrive"],
        ["Guitar", "Guitar"],
        ["Jumping Jacks", "Jumping Jacks"],
        ["Praying Knees", "Praying Knees"],
        ["Agree", "Agree"],
        ["Punching Bag", "Punching Bag"],
        ["Roar", "Roar"],
        ["Angry", "Angry"],
        ["Kiss", "Kiss"],
        ["Sad", "Sad"],
        ["Argue", "Argue"],
        ["ChickenDance", "ChickenDance"],
        ["Clapping", "Clapping"],
        ["FloorSearch", "FloorSearch"],
        ["HipHopDancing", "HipHopDancing"],
        ["Point", "Point"],
        ["Pray", "Pray"],
        ["SoulSpin", "SoulSpin"],
        ["Suprised", "Suprised"],
        ["Talk", "Talk"],
        ["Taunt", "Taunt"],
        ["Surrender", "Surrender"],
        ["Surrender2", "Surrender2"],
        ["Yell", "Yell"],
        ["Texting", "Texting"],
        ["Texting2", "Texting2"],
        ["Twerk", "Twerk"],
        ["TwistDance", "TwistDance"],
        ["Whisper", "Whisper"],
      ];   
      this.appendDummyInput()
          .appendField("Emotes:")
          .appendField(
              new Blockly.FieldDropdown(EVENT_OPTIONS),
              "emote"
          );
      this.setOutput(true, "String");
      this.setColour("#50b800");
      this.setTooltip("");
      this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock['PLAYER_emotes'] = function(block, generator) {
  const emote = block.getFieldValue('emote');
  const code = `"${emote}"`;
  return [code, javascript.Order.ATOMIC];
};

Blockly.Blocks['PLAYER_end_emote'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("End Emote");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#50b800");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['PLAYER_end_emote'] = function(block, generator) {
  const code = `PlayerEndEmote\n`;
  return code;
};

Blockly.Blocks['PLAYER_cripple'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Cripple Player");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#50b800");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['PLAYER_cripple'] = function(block, generator) {
  const code = `PlayerCripple\n`;
  return code;
};

Blockly.Blocks['PLAYER_protect'] = {
  init: function() {
      this.appendValueInput("protectTime")
          .setCheck("Number")
          .appendField("Protect Player For");
      this.appendDummyInput()
          .appendField("Secconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#50b800");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['PLAYER_protect'] = function(block, generator) {
  const protectTime = generator.valueToCode(block, 'protectTime', javascript.Order.ATOMIC);
  const code = `PlayerProtect({"duration": ${protectTime}})\n`;
  return code;
}

Blockly.Blocks['PLAYER_set_team'] = {
  init: function() {
      this.appendValueInput("team")
          .setCheck("String")
          .appendField("Set Players Team:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#50b800");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['PLAYER_set_team'] = function(block, generator) {
  const team = generator.valueToCode(block, 'team', javascript.Order.ATOMIC);
  const code = `PlayerSetTeam({"team": ${team}})\n`;
  return code;
}

Blockly.Blocks["PLAYER_teams"] = {
  init: function () {
      var EVENT_OPTIONS = [
        ["Civilians", "Civilian"],
        ["Maniacs", "Maniac"],
        ["Mutants", "Mutant"],
      ];   
      this.appendDummyInput()
          .appendField("Teams:")
          .appendField(
              new Blockly.FieldDropdown(EVENT_OPTIONS),
              "team"
          );
      this.setOutput(true, "String");
      this.setColour("#50b800");
      this.setTooltip("");
      this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock['PLAYER_teams'] = function(block, generator) {
  const team = block.getFieldValue('team');
  const code = `"${team}"`;
  return [code, javascript.Order.ATOMIC];
};

Blockly.Blocks['PLAYER_ragdoll'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Ragdoll Player");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#50b800");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['PLAYER_ragdoll'] = function(block, generator) {
  const code = `PlayerRagdoll\n`;
  return code;
};

Blockly.Blocks['PLAYER_get_up'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Make Player Get Up");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#50b800");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['PLAYER_get_up'] = function(block, generator) {
  const code = `PlayerGetUp\n`;
  return code;
};

Blockly.Blocks['PLAYER_infect'] = {
  init: function() {
      this.appendValueInput("state")
          .setCheck("Boolean")
          .appendField("Player Is Infected?:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#50b800");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['PLAYER_infect'] = function(block, generator) {
  const state = generator.valueToCode(block, 'state', javascript.Order.ATOMIC);
  const code = `PlayerInfect({"state": ${state}})\n`;
  return code;
}