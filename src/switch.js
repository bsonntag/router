import { Children } from 'react';
import { matchPath } from './match';
import useRouter from './use-router';

const Switch = ({ children }) => {
  const { location } = useRouter();

  return Children.toArray(children).find(child => {
    return matchPath(location.pathname, child.props);
  });
};

export default Switch;
