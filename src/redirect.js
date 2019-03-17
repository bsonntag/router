import { useEffect } from 'react';
import useRouter from './use-router';

const Redirect = ({ to }) => {
  const { navigate } = useRouter();

  useEffect(() => {
    navigate({ pathname: to });
  });

  return null;
};

export default Redirect;
