/* eslint-disable linebreak-style */
import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'


export default [
  // eslint-disable-next-line linebreak-style
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  // eslint-disable-next-line linebreak-style
  pluginReactConfig,
]