import React, { createContext, useState, ReactNode } from 'react';

interface UserContextType {
  user: { username: string } | null;
  setUser: (user: { username: string }) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {}
});

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ username: string } | null>(null);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;