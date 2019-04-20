# Getting started

## Installation

```sh
yarn add @bsonntag/router
```

This module requires at least version `16.8.0` of `react` and `react-dom`,
so make sure you have it installed.

```sh
yarn add react@^16.8.0 react-dom@^16.8.0
```

## Basic usage

The first thing to do is to render a [`Router`](./router.md) at the top level
of your application.
Then, routes can be rendered with the [`Route`](./route.md),
by passing `path` and `children`.

```js
function App() {
  return (
    <Router>
      <Route path={'/'}>
        <Home />
      </Route>

      <Route path={'/users'}>
        <Users />
      </Route>
    </Router>
  );
}
```

## Nested routes

It's possible to nest routes. For nesting to work, the parent route should be partial,
otherwise it won't match therefore not render its contents.

```js
<Route path={'/users'} partial>
  <Users />

  <Route path={'/users/:id'}>
    <UserDetails />
  </Route>
</Route>
```

## Route parameters

Dynamic routes can be defined in the following format: `/users/:id`.
In this example `:id` is a route parameter. This route will match the following routes:

- `/users/1`
- `/users/bsonntag`

The [useMatch](./use-match.md) hook can be used to access the matched parameters.

```js
function UserDetails() (
  const match = useMatch();
  const { id } = match.params;
}
```

## Navigation

To create links between routes, use [`Link`](./link.md).

```js
<Link to={'/'}>Home</Link>
```

The [`Redirect`](./redirect.md) component changes the current location when rendered.

```js
<Redirect to={'/'} />
```

Navigation can also be done imperatively by retrieving `navigate` from [`useRouter`](./use-router.md).

```js
function SignIn() {
  const { navigate } = useRouter();

  function submit() {
    // ...
    navigate({ pathname: '/' });
  }

  return <form onSubmit={submit}>...</form>;
}
```
