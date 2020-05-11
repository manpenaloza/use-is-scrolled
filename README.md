A react hook to detect whether a user has already scrolled on a page or entered a page at a lower section.

I needed a way of detecting whether the user has scrolled. The main idea of how this hook is built was taken from [this livestream (starting at about 46:00)](https://www.pscp.tv/w/1PlKQmelwMyKE) done by [Max Stoiber](https://twitter.com/mxstbr).

## Usage

Using npm:
```bash
  npm install use-is-scrolled
```

Using yarn:
```bash
  yarn add use-is-scrolled
```

After installation, in your react component:
```javascript
  import useIsScrolled from "use-is-scrolled"

  // from within your react component and receive true or false
  const isScrolled = useIsScrolled();
```