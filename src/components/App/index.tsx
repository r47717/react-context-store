import React from "react";
import { logout } from "../../api";
import { useState, useStoreDispatch } from "../../store";
import LoginPage from "../LoginPage";

function App() {
  const dispatch = useStoreDispatch();

  const {
    user: { name, authorized },
  } = useState();

  return (
    <div>
      {!authorized ? (
        <LoginPage />
      ) : (
        <div>
          {name}
          <button onClick={() => dispatch(logout)}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
