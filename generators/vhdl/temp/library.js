/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating vhdl for blocks.
 * @author info@blocklyvhdl.com (hotmas erombas)
 */
'use strict';

goog.provide('Blockly.VHDL.library');

goog.require('Blockly.VHDL');

Blockly.VHDL['library'] = function(block) {
  var statements_declarations = Blockly.VHDL.statementToCode(block, 'declarations');
  var dropdown_ieee = block.getFieldValue('library');
  var code = 'library ' + dropdown_ieee + ';\n' + statements_declarations;
  return code;
};

Blockly.VHDL['ieee'] = function(block) {
  var dropdown_ieee = block.getFieldValue('IEEE');
  var code = 'use IEEE.' + dropdown_ieee + '.all;\n';
  return code;
};

Blockly.VHDL['std_textio'] = function(block) {
  var code = 'use STD.textio;\n';
  return code;
};

Blockly.VHDL['use'] = function(block) {
  var value_use = Blockly.VHDL.valueToCode(block, 'use', Blockly.VHDL.ORDER_NONE);
  var value_library = Blockly.VHDL.valueToCode(block, 'library', Blockly.VHDL.ORDER_NONE);
  var code = 'use ' + value_use + '.' + value_library + ';\n';
  return code;
};

Blockly.VHDL['std_logic'] = function(block) {
  var dropdown_std_bit = block.getFieldValue('std_bit');
  var code = dropdown_std_bit;
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['std_logic_init'] = function(block) {
  var dropdown_std_bit = block.getFieldValue('std_bit');
  var text_bit_value = Blockly.VHDL.valueToCode(block, 'bit_value', Blockly.VHDL.ORDER_NONE);
  var code = dropdown_std_bit + ' := ' + text_bit_value;
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['vector'] = function(block) {
  var dropdown_vector = block.getFieldValue('vector');
  var text_msb = Blockly.VHDL.valueToCode(block, 'msb', Blockly.VHDL.ORDER_NONE);
  var dropdown_range = block.getFieldValue('range');
  var text_lsb = Blockly.VHDL.valueToCode(block, 'lsb', Blockly.VHDL.ORDER_NONE);
  var code = dropdown_vector + "(" + text_msb + " " + dropdown_range + " " + text_lsb + ")";
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['vector_init'] = function(block) {
  var dropdown_vector = block.getFieldValue('vector');
  var text_msb = Blockly.VHDL.valueToCode(block, 'msb', Blockly.VHDL.ORDER_NONE);
  var dropdown_range = block.getFieldValue('range');
  var text_lsb = Blockly.VHDL.valueToCode(block, 'lsb', Blockly.VHDL.ORDER_NONE);
  var text_init = Blockly.VHDL.valueToCode(block, 'init', Blockly.VHDL.ORDER_NONE);
  var code = dropdown_vector + "(" + text_msb + " " + dropdown_range + " " + text_lsb + ") :=" + text_init + ";"; //"\"" + text_init + "\"";
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['integer'] = function(block) {
  var dropdown_integer = block.getFieldValue('integer');
  var code = dropdown_integer;
  return [code, Blockly.VHDL.ORDER_NONE];
};

Blockly.VHDL['integer_init'] = function(block) {
  var dropdown_integer = block.getFieldValue('integer');
  var text_integer_value = Blockly.VHDL.valueToCode(block, 'integer_value', Blockly.VHDL.ORDER_NONE);
  var code = dropdown_integer + ' := ' + text_integer_value;
  return [code, Blockly.VHDL.ORDER_NONE];
};



