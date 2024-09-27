import React, { createContext, useState, ReactNode, useEffect } from 'react';
import User from '../services/User/User';
interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  clearUser: () => {}
});

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserState(JSON.parse(storedUser));
    }
  }, []);

  const setUser = (user: User) => {
    setUserState(user);
    localStorage.setItem('user', user.toString());
  }

  const clearUser = () => {
    setUserState(null);
    localStorage.removeItem('user');
  }

  return <UserContext.Provider value={{ user, setUser, clearUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;