import { createContext, useContext } from 'react';

export const RouterContext = createContext();
export const useRouter = () => useContext(RouterContext);
