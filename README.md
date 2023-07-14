# LinkUp-Frontend

Frontend client for El Proyecte Grande - LinkUp.

## installation

Clone the repository and run from the main folder:

```bash
pip install
```

## used libraries

- [react-aria](https://react-spectrum.adobe.com/react-aria/)
- [react-query](https://tanstack.com/query/v3/)
- [filepond](https://pqina.nl/filepond/)
- [framer-motion](https://www.framer.com/?utm_source=motion-readme)
- [react-dnd](https://react-dnd.github.io/react-dnd/about) (with html5 and touch backends)
- [swiper](https://swiperjs.com/react)
- testing ([jsdom](https://github.com/jsdom/jsdom#readme), [jest-dom](https://github.com/testing-library/jest-dom#readme), [react testing library](https://github.com/testing-library/react-testing-library#readme), [vitest](https://vitest.dev/))
- [postcss](https://postcss.org/)
- [tailwindcss](https://tailwindcss.com/)

## usage

### templates

When creating new files you can use predefined templates through IntelliSense. While using the template, you can use tab to jump over to predefined locations that need your attention.
| Type of file | prefix |
|----------------------|--------|
| Functional component | fcomp |
| Class component | ccomp |
| Testing | rtest |

Functional and class components will automatically use the name of the file. Remember to start it with an uppercase letter!

Test files will need input for the import name.

### imports

To import a file you can use a shortened syntax:

```javascript
import FooComponent from "@components/foo";
```

Each folder in the `./src` directory has this shortened syntax (`@assets`, `@hooks`, `@layouts`, `@middleware`, `@pages`, `@utils`) with the addition of the `scripts` folder (`@scripts`)

### scripts

Start server

```bash
npm run dev
```

Build project for deployment

```bash
npm run build
```

Run tests

```bash
npm test
```
