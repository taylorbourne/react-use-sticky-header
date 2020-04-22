# react-use-sticky-header

> Easily create a sticky header for your react application

[![NPM](https://img.shields.io/npm/v/react-use-sticky-header.svg)](https://www.npmjs.com/package/react-use-sticky-header) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This hook will help you to create a sticky header that appears as "sticky" when the user begins to scroll back up after they have passed the threshold. Currently, this is designed to work with a single header at the top of the page – however an offset can be passed to account for an element or extra space above the header.

Be sure to note the structure of the DOM in the usage section – it is recommended that you use a container inside of your header element. That way, you can prevent a content jump when the header switches to "sticky".

For some example animations, check the `/example` folder.

## Demo
![alt text](https://s4.gifyu.com/images/use-sticky-header-demo.gif "Demo")

## Todo
- [ ] Add tests
- [ ] Allow sticky header at any Y position

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

## Running the example

```bash
cd example && yarn && yarn start
```

## License

MIT © [taylorbourne](https://github.com/taylorbourne)
