jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);
jest.mock('react-native/Libraries/BatchedBridge/NativeModules');
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
