import {NativeBaseProvider} from 'native-base';

import {theme} from './src/theme';

import {AppNavigator} from './src/navigation/AppNavigator';

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigator />
    </NativeBaseProvider>
  );
}

export default App;
