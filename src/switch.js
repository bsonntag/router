import { Children } from 'react';
import match from './match';
import useRouter from './use-router';

const Switch = ({ children }) => {
  const { location } = useRouter();

  return Children.toArray(children).find(child => match(child.props, location));
};

export default Switch;
