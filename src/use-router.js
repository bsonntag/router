import { useContext } from 'react';
import RouterContext from './router-context';

const useRouter = () => useContext(RouterContext);

export default useRouter;
