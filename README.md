# Co-space web forntend with React

Co-space provide all information you need about coworking spaces in indonesia.

## Tech Stack
test
- Node.js
- React.js
- React Router
- React Redux
- Redux
- Redux Thunk / Redux Saga
- Netlify
- CloudFlare
- Uniregistry

## App Structure

### React: View

- `src`
  - `index.js`: configures the whole React + Router + Redux
  - `App.js`: sets the routes for `pages`
  - `styles`: all global styles
    - `*.css`
  - `templates`: wraps `pages` components
    - `*.js`: usually formatted as `Layout*`
  - `pages`: contains `large` components
    - `*.js`
  - `large`: contains `medium` components
    - `*.js`
  - `medium`: contains `small` components
    - `*.js`
  - `small`: contains primitive DOM components
    - `*.js`

### Redux: Store + Reducers + Actions

- `redux`
  - `stores`
  - `reducers`
  - `actions`
  - `containers`

--------------------------------------------------------------------------------

## Development

### Installing

Install `yarn` with `npm`

```sh
npm install -g yarn
yarn install
```

### Running

```sh
yarn dev
```

### Building

```sh
yarn build
```

--------------------------------------------------------------------------------

## Deployment

### Application

`node` => `react` => `react-scripts` => `react-app-rewired`

### Infrastructure

GitHub => Netlify => CloudFlare

### Running

```sh
yarn deploy
```

--------------------------------------------------------------------------------

## Component Architecture

### Pages

| Route       | Component
|-------------|----------
| `/`         | home
| `/register` | register
| `/login`    | login
| `/profile`  | profile
| `/setting`  | setting

### Size

#### Small

-

#### Medium

-

#### Large Segments

-

#### Templates

-

--------------------------------------------------------------------------------

## License

[MIT License](./LICENSE)
