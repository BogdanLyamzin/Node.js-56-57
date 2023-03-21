import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import AuthLayout from "./modules/AuthLayout/AuthLayout";
import Navbar from "./modules/Navbar/Navbar";

import UserRoutes from "./UserRoutes";

import { store, persistor } from "./redux/store";

import "./shared/styles/styles.scss";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter>
            <Navbar />
            <UserRoutes />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
}

export default App;
