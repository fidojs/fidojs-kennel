const consoleApp = require('@fidojs/fidojs-kennel-console');
const { GlitchPlease } = require('glitch-please');
const path = require('path');

const please = new GlitchPlease({
  appPath: path.join(__dirname, 'kennel'),
  installedDirectory: ['node_modules', 'bit-docs', 'lib', 'configure', 'node_modules'],
  installPatterns (pkg) {
    return ['package.json'];
  },
  buildCommand: { cmd: 'npm', args: ['run', 'gen'] },
  buildPatterns (pkg) {
    // TODO: respect ignore pattern
    return [pkg['bit-docs']['glob']['pattern'], 'patch'];
  },
  distIndex: 'index.html',
  distDirectory (pkg) {
    if (pkg['bit-docs'].hasOwnProperty('dest')) {
      return pkg['bit-docs']['dest'];
    } else {
      return 'doc';
    }
  },
  distRoute (pkg) {
    if (pkg['bit-docs'].hasOwnProperty('dest')) {
      return `/${pkg['bit-docs']['dest']}`;
    } else {
      return '/doc';
    }
  }
});

please.server.use('/', consoleApp);
please.begin();
