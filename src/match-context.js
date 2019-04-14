import { createContext, useContext } from 'react';

export const MatchContext = createContext({ match: null });
export const useMatch = () => useContext(MatchContext);
