import { Children } from 'react';
import { useRouter } from './router-context';
import matchPath from './match-path';

const Switch = ({ children }) => {
  const { location } = useRouter();

  return Children.toArray(children).find(child => {
    return matchPath(location.pathname, child.props);
  });
};

export default Switch;
