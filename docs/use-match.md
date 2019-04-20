# useMatch hook

Returns the match from the closest parent [`Route`](./route.md).
This includes the matched route parameters as well as the matched path and url.

## API

```js
function useMatch(): {
  params: Object,
  path: string,
  url: string
}
```

## Usage

```js
// Get the matched user ID and fetch that user's details.
function UserDetails() {
  const { params } = useMatch();
  const { username } = UsersResource.read(params.id);

  return <div>{username}</div>;
}

// Render the UserDetails inside a Route.
function App() {
  return (
    <Route path={'/users/:id'}>
      <UserDetails />
    </Route>
  );
}
```
