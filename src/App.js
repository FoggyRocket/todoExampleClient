import './App.css';
import 'antd/dist/reset.css';
import {Route,Routes} from 'react-router-dom'
import {Navbar} from './components'
import { Create, Detail, Home,Auth } from './pages';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* Agregar las rutas!! */}
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/create" element={<Create/>} />
        <Route path="/detail/:idTodo" element={<Detail/>} /> 
        <Route path="/login" element={<Auth/>} />
        <Route path="/signup" element={<Auth signup={true}/>} />

        {/* 404 */}
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
