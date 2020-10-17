import React from 'react';

// Components
import Sidebar from './componets/Siderbar';
import NotesContainer from './componets/NotesContainer';

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <NotesContainer />
    </div>
  );
}

export default App;
