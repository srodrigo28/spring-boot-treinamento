import { Menu } from './components/Menu'
import { Aluno } from './views/Alunos'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
      <ToastContainer />
      <Menu />
      <div className="container">
        <Aluno />
      </div>
    </>
  )
}
export default App

