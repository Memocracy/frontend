# Useful snippets

## Responsiveness

Using fresnel:

```json
        breakpoints: {
          sm: 0,
          md: 768,
          lg: 1024,
          xl: 1192,
        },
```

```jsx
        <Media greaterThanOrEqual="lg">
          This is desktop version
          <Logo sizing="width" />
        </Media>
```

```jsx
<Media lessThan="md">{MenuPrerendered}</Media>
```

## React

### Component

```jsx
import React from "react";
import { Link } from "gatsby";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Menu = ({ items = [] }) => {
  return (
    <nav>
      {items.map((item) => (
        <Link key={item.id} to={item.path} activeClassName="active">
          { item.label }
        </Link>
      ))}
    </nav>
  );
};

```

### Importing styles

```js
import * as logoStyles from "./Logo.module.scss";
```

## Styling

### Importing modules

```scss
@use "@styles/breakpoints";
@use "@styles/colors";


a {
    color: colors.$blue;
}
```
