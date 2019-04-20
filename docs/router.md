# Router component

Provides the necessary context for all other routing components.

## Props

| Prop     | Type | Required |
| -------- | ---- | -------- |
| children | Node | No       |

## Usage

```js
function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'}>
          <Home />
        </Route>

        <Route path={'/users'} partial>
          <Users />
        </Route>

        <Redirect to={'/'} />
      </Switch>
    </Router>
  );
}
```
