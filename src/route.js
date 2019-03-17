import match from './match';
import useRouter from './use-router';

const Route = ({ children, ...rest }) => {
  const { location } = useRouter();

  if (!match(rest, location)) {
    return null;
  }

  return children;
};

export default Route;
