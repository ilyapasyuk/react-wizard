# react-onboarding [![](https://img.shields.io/twitter/url/http/shields.io.svg?style=social?style=social)](https://github.com/ilyapasyuk/react-onboarding)
 
Simple wizard component for React.js
+ TypeScript ready

![size](https://img.shields.io/bundlephobia/min/react-onboarding.svg)
![](https://img.shields.io/npm/v/react-onboarding.svg?style=flat-square)

[NPM](https://www.npmjs.com/package/react-onboarding) |
[Github](https://github.com/ilyapasyuk/react-onboarding) |
[Feature request](https://github.com/ilyapasyuk/react-onboarding/issues/new)

### Preview
![Preview](https://github.com/ilyapasyuk/react-wizard-tour/assets/5953765/83f51ea6-4d00-4eec-8328-2c6c71c28325)




### Installation

* `npm install --save react-onboarding`
* `yarn add react-onboarding`

### How To Use

First import this component where you want to use it

`import Wizard from "react-onboarding"`

Then just render it

`<Wizard />`

### Props

| _Property_           | _Description_             | _type_         | _Default value_ |
|----------------------|:--------------------------|----------------|:---------------:|
| `rule`               | array rules for wizard    | `WizardStep[]` |                 |
| `isShow`             | Sets view mode            | `boolean?`     |     `true`      |
| `prevButtonTitle`    | title for previous button | `string?`      |     `Prev`      |
| `nextButtonTitle`    | title for next button     | `string?`      |     `Next`      |
| `closeButtonTitle`   | Text on Close button      | `string?`      |     `Close`     |
| `closeButtonElement` |                           | `ReactNode?`   |   `<button>`    |
| `pinColor`           |                           | `string?`      |    `1787fc`     |
| `lineColor`          |                           | `string?`      |    `1787fc`     |
| `isScrollToElement`  |                           | `boolean?`     |     `false`     |

### Example

``` tsx
import React, { Component } from "react";
import Wizard from "react-onboarding";

const rule = [
    {
        elementId: 'elementId1',
        title: 'Title 1',
        description: 'description 1',
    },
    {
        elementId: 'elementId2',
        title: 'Title 2',
        description: 'description 2',
    },
]

const App = () => {
    return (
        <Wizard rule={rule} />
    );
}

export default App;
```
