# useRouter hook

Returns the router context, which includes the current location and navigation functions.

## API

```js
function useRouter(): {
  location: RouterLocation,
  navitate: ({ pathname: string, replace?: boolean, state?: any }) => void,
  goBack: () => void
}

type RouterLocation = {
  hash: string,
  host: string,
  hostname: string,
  href: string,
  origin: string,
  pathname: string,
  port: string,
  protocol: string,
  search: string,
  state: any
};
```
