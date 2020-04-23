# react-use-sticky-header

> Easily create a sticky header for your react application

[![NPM](https://img.shields.io/npm/v/react-use-sticky-header.svg)](https://www.npmjs.com/package/react-use-sticky-header) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This hook will help you to create a sticky header by providing all the necessary classes. It was originally developed so that a header could be created that would slide into view when the user scrolls up (after scrolling past a threshold), however with the provided classes you should be able to make any top-positioned style of sticky header desired!

Be sure to note the structure of the DOM in the usage section – it is recommended that you use a container inside of your header element. That way, you can prevent a content jump when the header switches to "sticky".

For some example animations, check the `/example` folder.

## Demo
![Demo](demo.gif)

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
  customClasses: {
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
  const [setHeaderRef] = useStickyHeader(50, { 
    headerDetached: 'header--detached-custom' 
  });
  return (
    <div>
      <div className="header" ref={setHeaderRef}>
        <div className="header__container"/>
      </div>
      <div className="content"/>
    </div>
  );
};
export default App;

```

## CSS Classes

This hook makes no opinions about how you handle the actual display of your sticky header, the CSS is completely up to you. THe hook simply adds and removes all of the necesary classes. Though again, if you get stuck there is a solid example in `/example`.

### headerAttached
_default class name_: `header--attached`  
  
Applied when the header element is in its original position

### headerDetached
_default class name_: `header--detached`  
  
Applied when the the header element (plus any added Y offset) has been scrolled out of view. Note that if your sticky header is _always_ sticky, you'll want to utilize this class for that effect.

### headerSticky
_default class name_: `header--sticky`  
  
Applied while the header is sticky. Note that this class is removed while the user is scrolling down, and then reapplied when they start to scroll back up. Once the original header element location is completely in the viewport, this class is removed.

### headerUnsticky
_default class name_: `header--unsticky`  
  
Applied when the header goes from sticky to hidden when the user scrolls up. If you're not hiding your header when the user scrolls up this class is likely unnecessary.

## Running the example

```bash
cd example && yarn && yarn start
```

## License

MIT © [taylorbourne](https://github.com/taylorbourne)
