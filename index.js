const { NativeModules } = require('react-native')
const { RNI18n } = NativeModules

module.exports = (RNI18n) ? RNI18n.locale.replace(/_/, '-') : ''
