# LinkUp-Frontend

Welcome to the LinkUp Frontend repository, the client application for El Proyecte Grande - LinkUp.

## Installation

To get started, clone the repository and install the required dependencies by running the following command from the main folder:

```bash
npm install
```

## Used Libraries

The LinkUp Frontend utilizes various libraries to enhance its functionality and user experience:

- [react-aria](https://react-spectrum.adobe.com/react-aria/): Accessibility hooks for enhanced user accessibility.
- [react-query](https://tanstack.com/query/v3/): State management and queries for efficient data handling.
- [filepond](https://pqina.nl/filepond/): A file upload library for seamless file uploads.
- [framer-motion](https://www.framer.com/motion/): An animation library for creating engaging animations.
- [react-dnd](https://react-dnd.github.io/react-dnd/about): HTML5 and touch backend support for drag-and-drop interactions.
- [swiper](https://swiperjs.com/element): Mobile-first swiping library for intuitive touch interactions.
- Testing:
  - [jsdom](https://github.com/jsdom/jsdom#readme)
  - [jest-dom](https://github.com/testing-library/jest-dom#readme)
  - [react testing library](https://github.com/testing-library/react-testing-library#readme)
  - [vitest](https://vitest.dev/)
- [postcss](https://postcss.org/): A CSS tool that transforms styles with JavaScript plugins.
- [react-hook-form](https://react-hook-form.com/): A library for simplifying form handling in React applications.
- [zod](https://zod.dev/): A type validation library for safer and more reliable code.
- [vite-plugin-svgr](https://github.com/underfin/vite-plugin-svgr): A Vite plugin that allows importing SVG files as React components.

## Usage

### Templates

When creating new files, you can use predefined templates with IntelliSense. While using the template, you can use the `Tab` key to navigate to predefined locations that need your attention. Here are the available templates and their prefixes:

- Functional component: `fcomp`
- Class component: `ccomp`
- Testing: `rtest`

Functional and class components will automatically use the name of the file, so ensure that the name starts with an uppercase letter. Test files will require input for the import name.

### Imports

To import files, you can use the following shortened syntax:

```javascript
import FooComponent from '@components/Foo.tsx';
```

This shortened syntax is available for each folder in the `./src` directory, including `@assets`, `@hooks`, `@layouts`, `@middleware`, `@pages`, `@utils`, and the addition of the `scripts` folder as `@scripts`.

### Available Scripts

You can use the following scripts to manage and run the LinkUp Frontend application:

#### Start Development Server

Start the development server to run your application locally. This allows you to make changes and see them in real-time as you develop.

```bash
npm run dev
```

#### Build for Deployment

Build the project for deployment to create optimized and production-ready assets. This is essential before deploying your application to a server or hosting platform.

```bash

npm run build
```

#### Run Tests

Run tests to ensure the stability and correctness of your code. This is crucial for maintaining the quality of your application.

```bash

npm run test
```

### Usage of vite-plugin-svgr

The LinkUp Frontend uses the `vite-plugin-svgr` plugin to seamlessly import SVG files as React components. This allows you to treat SVG files as native React components, making it easy to customize and interact with them in your application.

you can import SVG files as React components in your code:

```javascript
/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Logo } from '@assets/logo.svg';

const MyComponent = () => {
  return <Logo />;
};
```

The ReactComponent import allows you to use the SVG as a React component.

### Generating Documentation

We have set up the documentation generation process using Typedoc. This allows us to create clear and comprehensive documentation for our codebase. Follow the steps below to generate the documentation:

1. To generate the documentation, use the following CLI command:

   ```bash
   npx typedoc
   ```

   This command will analyze your codebase and generate documentation based on the provided type annotations, comments, and module structures.

2. After the process is complete, you can find the generated documentation in the `docs` folder. Open the `index.html` file in a web browser to view the documentation.

The generated documentation will provide insights into the various modules, functions, types, and interfaces used in your codebase. This will greatly assist developers and contributors in understanding the code and its usage.

## Final Notes

Feel free to update the documentation as your codebase evolves to ensure that it remains accurate and helpful for anyone working on the LinkUp Frontend.

Feel free to adjust and expand the content as needed to provide the most relevant information for users and contributors of your LinkUp Frontend repository.
