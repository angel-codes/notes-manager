import React from 'react';

// Context
import NotesProvider from './context/NotesProvider';

// Components
import Sidebar from './componets/Siderbar';
import NotesContainer from './componets/NotesContainer';

function App() {
  return (
    <NotesProvider>
      <div className="grid grid-cols-6 min-h-screen">
        <Sidebar />
        <NotesContainer />
      </div>
    </NotesProvider>
  );
}

export default App;
