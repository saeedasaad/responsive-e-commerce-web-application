import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, name: "Admin", email: "admin@example.com", role: "Admin" },
  ]);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
    setCurrentUser(user);
  };

  return (
    <UserContext.Provider value={{ users, currentUser, addUser }}>
      {children}
    </UserContext.Provider>
  );
}