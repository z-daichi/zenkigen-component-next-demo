import componentConfig from '@zenkigen-inc/component-config';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@zenkigen-inc/**/*.{js,ts,jsx,tsx}',
  ],
  // presets: [componentConfig],
  presets: [
    require('@zenkigen-inc/component-config')
  ],
};