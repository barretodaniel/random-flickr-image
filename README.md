# RandomFlickrImage

A React component that shows a random image from flickr every X seconds using the [flicker api](https://www.flickr.com/services/api/).

## Setup

Make sure you have the latest versions of Node.js and npm installed.

Install all the the dependencies with npm:

```
npm install
```

## Running the demo

Start the project:

```
npm start
```

This should open a window in your default browser with a Storybook instance demoing the component.

Use can use the viewport tool to change the size of the area the component is being rendered in.

![Image of Viewport Tool](./Viewport.png)

## Usage

The `RandomFlickrImage` component is built with sensible defaults in mind and can be used without passing any props.

```jsx
<RandomFlickrImage />
```

The component can be passed an `interval` prop number representing the number of seconds you want the component to wait before fetching a new photo.

```jsx
<RandomFlickrImage interval={5} />
```

The component can also be passed a `size` prop which correpsonds to the sizes allowed by the flickr api.

```jsx
<RandomFlickrImage size="q" />
```

To facilitate style overrides, the component will pass down the `className` and `style` props to the underlying `img` tag.

```jsx
<RandomFlickrImage
    className="image"
    style={{ border: '1px solid #CCC', padding: 8, borderRadius: 150 }}
/>
```

## Testing

The project uses Jest to run the associated tests:

```
npm test
```
