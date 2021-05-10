# React Carousel Project

This is a simple carousel created using only React core, HTML and CSS.

---

## Setup

After downloading the project, install dependencies using:

```
npm install
```

You can then bundle the code using:

```
npm run create
```

And run the app using:

```
npm start
```

---

## Description

The carousel accepts two props:

| Prop         | Description                                                                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| items        | An array of items to display. Each item must have a unique _key_ and can be either an HTML element or a component. **NOTE: Each item in the array must have a unique _key_.** |
| itemsPerPage | An integer. Must be positive and less than the length of the items array.                                                                                                     |
