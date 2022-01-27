import "./index.sass";
import { Outlet } from 'react-router-dom'

function App() {
  
  
  return (
    <div className="App">
      <h3 className='App-heading'>This is an exercise in using React Routing!</h3>

      {/* important for nesting Routes
     ! add outlet to parent */}
      <Outlet />
    </div>
  );
}
export default App;
