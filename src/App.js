import { Provider } from "react-redux";
import Tasks from "./Components/Tasks";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
         
          <Tasks/>
    </div> 
    </Provider>
  );
}

export default App; 
