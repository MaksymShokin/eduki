import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest-setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native|@react-navigation|react-native-vector-icons|react-native-reanimated|react-native-animatable|react-native-mmkv|react-native-linear-gradient|react-native-qrcode-svg|expo-image|)/)'
  ]
};

export default config;
