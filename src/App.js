import { useState, createContext, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList/UserList';
import UserPage from './components/UserPage/UserPage';
import './App.css';

const ModalContext = createContext(null);

function App() {  
  const [modalContext, setModalContext] = useState(
    {
      filterValue: '',
    }
  );
 return (
  <ModalContext.Provider
        value={{
          modalContext,
          setModalContext
        }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />}/>
        <Route path="/user/:id" element={<UserPage />}/>
      </Routes>
    </BrowserRouter>
    </ModalContext.Provider>
  );
}

export default App;

export function useModal() {
  return useContext(ModalContext);
}
