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

### Component with links

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
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
```

### Component

```jsx
import React from "react";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Menu = ({ items = [] }) => {
  return <nav></nav>;
};
```

### Component with additional classes (pattern)

```jsx
import React from "react";
import * as banerStyles from "./ProjectBaner.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const ProjectBaner = ({ additionalClasses = [] }) => {
  const classes = `
    ${banerStyles.base}
    ${additionalClasses.join(" ")}
  `;

  return <div className={classes}></div>;
};
```

### Spread props

```jsx
const Button = (props) => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};
```

### Importing styles

```js
import * as logoStyles from "./Logo.module.scss";
```

### Extending classes

```jsx
const classes = `
    ${sizing === "width" ? logoStyles.fullWidth : logoStyles.fullHeight}
    ${additionalClasses.join(" ")}
  `;
```

### Importing svg assets

```jsx
import MemocracyLogo from "../../../assets/images/logo-memocracy.svg";
```

### Importing images

```jsx
import { StaticImage } from "gatsby-plugin-image";
```

## Styling

### Importing modules

```scss
@use "@styles/breakpoints";
@use "@styles/colors";
@use "@styles/typography";

a {
  color: colors.$blue;
}
```

### Using breakpoints

```scss
.selector {
  color: red;

  @include breakpoints.respond-to("md|lg|xl") {
    color: blue;
  }
}
```

### Raw CSS classes

```scss
:global(.pan) {
  max-width: 66%;
}
```

## GraphQL

#### CPT query with ordering

> Please remember to clean Gatsby cache after changes in schema!

```graphql
query MyQuery {
  allWpTeamMember(sort: { fields: menuOrder, order: ASC }) {
    nodes {
      slug
      twitterHandle
      title
      content
      menuOrder
    }
  }
}
```
