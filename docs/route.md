# Route component

A component that renders its children conditionally on a `path`.
Passing `partial` makes the route match partial paths.

## Props

| Prop     | Type    | Required |
| -------- | ------- | -------- |
| children | Node    | No       |
| partial  | boolean | No       |
| path     | string  | Yes      |

## Usage

```js
<Route path={'/users'} partial>
  <Users />

  <Route path={'/users/:id'}>
    <UserDetails />
  </Route>
</Route>
```

## Route parameters

Route parameters can be defined like `:id`.
This will create a parameter named `id` with the matched value.

The match parameters can be accessed with the [`useMatch`](./use-match.md) hook.
