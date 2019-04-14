import { useEffect } from 'react';
import { useRouter } from './router-context';

const Redirect = ({ replace, state, to }) => {
  const { navigate } = useRouter();

  useEffect(() => {
    navigate({ pathname: to, replace, state });
  });

  return null;
};

export default Redirect;
