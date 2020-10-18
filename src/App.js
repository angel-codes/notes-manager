import React, { useContext } from 'react';

// Context
import NotesProvider from './context/NotesProvider';

// Containers
import Main from './containers/Main';
// Components
import Sidebar from './componets/Siderbar';
import NotesContainer from './componets/NotesContainer';

function App() {
  return (
    <NotesProvider>
      <Main>
        <Sidebar />
        <NotesContainer />
      </Main>
    </NotesProvider>
  );
}

export default App;
