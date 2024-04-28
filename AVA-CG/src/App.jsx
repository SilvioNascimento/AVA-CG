import './App.css'

//2 - reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

function App() {
//  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='App'>
        <Outlet />
      </div>
    </div>
      

  )
}

export default App
