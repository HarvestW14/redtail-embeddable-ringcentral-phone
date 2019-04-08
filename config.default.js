const os = require('os')
const extend = require('recursive-assign')
let config = {

  //dev related
  devCPUCount: os.cpus().length,
  devPort: 8020,

  //build options
  minimize: false,

  //congfigs to build app

  //ringcentral config
  ringCentralConfigs: {
    clientID: 'OxyEdCaWRG2KQsUJy0-u4A',
    clientSecret: 'D7ePwREoQoq6gRTvTLqeKQmHEVBfQtTKaTqgsPfdhu-Q',
    appServer: 'https://platform.ringcentral.com'
  },

  //for third party related
  thirdPartyConfigs: {
    serviceName: 'RedtailCRM',
    showCallLogSyncForm: true
  }

}

try {
  extend(config, require('./config.js'))
} catch (e) {
  if (e.stack.includes('Cannot find module \'./config.js\'')) {
    console.warn('no custom config file, it is ok, but you can use "cp config.sample.js config.js" to create one')
  } else {
    console.log(e)
  }
}
module.exports = config



