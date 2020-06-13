import React, { useEffect, useCallback, useState } from "react";
import api from "./services";

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = useCallback(async () => {
    try {
      const response = await api.get<IUser[]>("/users");

      const { data } = response;

      setUsers(data);
    } catch (err) {
      console.log("error", err);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="App">
      {users.map((user) => (
        <p key={new Date().getTime()}>{user.name} </p>
      ))}
    </div>
  );
}

export default App;
