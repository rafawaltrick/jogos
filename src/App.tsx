import { Provider } from "./contexts";
import Main from "./pages/Main";
import React from 'react';

function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default App;
