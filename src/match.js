function match(route, location) {
  if (route.path == null) {
    return true;
  }

  if (route.path === location.pathname) {
    return true;
  }

  if (route.partial && location.pathname.startsWith(route.path)) {
    return true;
  }

  return false;
}

export default match;
