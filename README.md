# react-use-sticky-header

> Easily create a sticky header for your react application

[![NPM](https://img.shields.io/npm/v/react-use-sticky-header.svg)](https://www.npmjs.com/package/react-use-sticky-header) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add react-use-sticky-header
```

## Usage

```tsx
useStickyHeader(
  offsetY:number, 
  classNames: {
    headerAttached: string;
    headerDetached: string;
    headerSticky: string;
    headerUnsticky: string;
  } = {
    headerAttached: "header--attached",
    headerDetached: "header--detached",
    headerSticky: "header--sticky",
    headerUnsticky: "header--unsticky",
  })
```

```tsx
 import React from "react";

import { useStickyHeader } from "react-use-sticky-header";

const App = () => {
  const [headerRef] = useStickyHeader(50);
  return (
    <div>
      <div className="header" ref={headerRef}>
        <div className="header__container"/>
      </div>
      <div className="content"/>
    </div>
  );
};
export default App;

```

## Usage
Running the example

```bash
cd example && yarn && yarn start
```

## License

MIT © [taylorbourne](https://github.com/taylorbourne)
