# Switch component

Renders the first child that matches the current location.
Takes in consideration the `path` and `partial` props of each child.

## Props

| Prop     | Type | Required |
| -------- | ---- | -------- |
| children | Node | No       |

## Usage

```js
<Switch>
  <Route path={'/'}>
    <Home />
  </Route>

  <Route path={'/users'} partial>
    <Users />
  </Route>

  <Redirect to={'/'} />
</Switch>
```
