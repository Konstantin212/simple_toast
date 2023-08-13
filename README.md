![reactjs-vite-tailwindcss-boilerplate](https://user-images.githubusercontent.com/16243531/217138979-b854309c-4742-4275-a705-f9fec5158217.jpg)

# React Tailwindcss Boilerplate build with Vite

This is a boilerplate build with Vite, React 18, TypeScript, Vitest, Testing Library, TailwindCSS 3, Eslint and Prettier.

## What is inside?

This project uses many tools like:

- [Vite](https://vitejs.dev)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)

## Getting Started

### Install

Install dependencies.

```bash
pnpm install
```

Serve with hot reload at <http://localhost:5173>.

```bash
pnpm run dev
```

### Lint

```bash
pnpm run lint
```

### Typecheck

```bash
pnpm run typecheck
```

### Build

```bash
pnpm run build
```

### Test

```bash
pnpm run test
```

View and interact with your tests via UI.

```bash
pnpm run test:ui
```

## Application testing
To test the application:
1) Install packages `pnpm install`
2) Run the dev server using `pnpm dev`
3) Open <http://localhost:5173>.
4) Using the configuration UI set Toast variation, title and delay.
5) Use `Show toast` button to see toast with small message or use `Show toast with long text` to see the toast with long message.
6) Toast notification should appear at the bottom of the web page.

## Toast component

To use Toast component independently you need to follow these steps:

### Preparation
- Install the [TailwindCSS](https://tailwindcss.com/docs/installation) library v.3.3.3 or higher
- Install [uuid](https://www.npmjs.com/package/uuid) v4 library
- Add link to your index.html or import [Montserrat](https://fonts.google.com/specimen/Montserrat) font directly to style file.

### Usage
1) Add `<ToastContainer />` on the top level of component hierarchy(e.g. `<App />`)
   - `<ToastContainer />` can receive `delay` properties that will prevent notification disappearing for provided time, or it will be on the screen for 6s.
2) In the place where you need to invoke the toast you need to add `useToast` hook.
   - `useToast` provides 3 functions `successToast`, `warningToast` and `dangerToast`.

     ```bash
     const { successToast, warningToast, dangerToast } = useToast()
     ```

   - Each function expect the object with `message` and optional `title`, if title won't be passing, than variation type (e.g. `Success`, `Warning` or `Danger`) will be using as a `title`.
     ```bash
     successToast({ title: 'Some optional title', message: 'Test message' })
     ```


## License

This project is licensed under the MIT License.
