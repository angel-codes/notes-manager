import React from 'react';

// Context
import NotesProvider from './context/NotesProvider';

// Components
import Sidebar from './componets/Siderbar';
import NotesContainer from './componets/NotesContainer';

function App() {
  return (
    <NotesProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <NotesContainer />
      </div>
    </NotesProvider>
  );
}

export default App;
