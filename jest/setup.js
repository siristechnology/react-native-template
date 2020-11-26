jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'))
jest.mock('@react-navigation/stack')
jest.mock('react-native/Libraries/BatchedBridge/NativeModules')
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')

// jest.mock('react-native-track-player')
