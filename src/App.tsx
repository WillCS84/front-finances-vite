import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes";
// import store from "./redux";
// import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      {/* <Provider store={store}> */}
      <MainRoutes />
      {/* </Provider> */}
    </Router>
  );
}

export default App;
