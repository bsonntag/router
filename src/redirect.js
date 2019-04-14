import { useEffect } from 'react';
import { useRouter } from './router-context';
import PropTypes from 'prop-types';

const Redirect = ({ replace, state, to }) => {
  const { navigate } = useRouter();

  useEffect(() => {
    navigate({ pathname: to, replace, state });
  });

  return null;
};

Redirect.propTypes = {
  replace: PropTypes.bool,
  state: PropTypes.any,
  to: PropTypes.string.isRequired,
};

export default Redirect;
