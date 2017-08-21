const consoleApp = require('@fidojs/fidojs-kennel-console');
const { GlitchPlease } = require('glitch-please');
const path = require('path');
const fs = require('fs');

const please = new GlitchPlease({
  appRoot: path.join(__dirname, 'kennel'),
  appIsInstalled (appRoot) {
    return fs.existsSync(path.join(appRoot, 'node_modules', 'bit-docs', 'lib', 'configure', 'node_modules'));
  },
  distPath (appRoot, appPackageJSON) {
    if (appPackageJSON['bit-docs'].hasOwnProperty('dest')) {
      return path.join(appRoot, appPackageJSON['bit-docs']['dest']);
    } else {
      return path.join(appRoot, 'doc');
    }
  },
  distRoute (appPackageJSON) {
    if (appPackageJSON['bit-docs'].hasOwnProperty('dest')) {
      return '/' + appPackageJSON['bit-docs']['dest'];
    } else {
      return '/doc';
    }
  }
});

please.appWatchRun(function(appPackageJSON) {
  return [appPackageJSON['bit-docs']['glob']['pattern']];
}, { cmd: 'npm', args: ['run', 'fido'] });

please.server.use('/', consoleApp);
please.startup();
