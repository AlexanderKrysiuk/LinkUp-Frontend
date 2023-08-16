# LinkUp-Frontend

Frontend client for El Proyecte Grande - LinkUp.

## installation

Clone the repository and run from the main folder:

```bash
npm install
```

## used libraries

- [react-aria](https://react-spectrum.adobe.com/react-aria/) (accessibility hooks)
- [react-query](https://tanstack.com/query/v3/) (state management and queries)
- [filepond](https://pqina.nl/filepond/) (file upload library)
- [framer-motion](https://www.framer.com/motion/) (animations)
- [react-dnd](https://react-dnd.github.io/react-dnd/about) (with html5 and touch backends)
- [swiper](https://swiperjs.com/element) (mobile first swiping)
- testing ([jsdom](https://github.com/jsdom/jsdom#readme), [jest-dom](https://github.com/testing-library/jest-dom#readme), [react testing library](https://github.com/testing-library/react-testing-library#readme), [vitest](https://vitest.dev/))
- [postcss](https://postcss.org/)
- [tailwindcss](https://tailwindcss.com/) (utility css library)
- [react-hook-form](https://react-hook-form.com/) (simpler forms)
- [zod](https://zod.dev/) (type validation)

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
import FooComponent from '@components/Foo.tsx';
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
