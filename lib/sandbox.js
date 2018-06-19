"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vm = require("vm");
const _sbox = new vm.SandBox({
    'fs': require('fs'),
    'path': require('path'),
    'os': require('os'),
    'url': require('url'),
    'tty': require('tty'),
    'util': require('util'),
    'events': require('events'),
    'assert': require('assert'),
    'crypto': require('crypto')
});
exports.default = _sbox.require('knex', __dirname);
