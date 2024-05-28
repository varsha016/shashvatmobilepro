import "./App.css";
import AppRoutes from "./AppRoutes";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor} from "./store";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={AppRoutes} />
      </PersistGate>
    </Provider>
  );
}

export default App;
