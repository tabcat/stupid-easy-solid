import { BrowserSolidLdoProvider } from '@ldo/solid-react';
import { Login } from './Login';

function App() {
  return (
    <BrowserSolidLdoProvider>
      <Login />
    </BrowserSolidLdoProvider>
  );
}

export default App;
