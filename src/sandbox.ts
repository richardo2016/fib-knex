import vm = require('vm')

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
})

export default _sbox.require('knex', __dirname)