# Product Hunt Posts Challenge

This is a React + Vite project that displays Product Hunt posts with features like tabbed sorting, date filtering, infinite scroll, and search. It uses Apollo Client for GraphQL queries, SCSS for styling, and includes a floating widget for quick navigation.

## Features

- **React 19 + Vite** for fast development and HMR
- **Apollo Client** for GraphQL data fetching
- **Tabbed UI** for "Popular" and "Newest" posts
- **Date picker** to filter posts by date
- **Infinite scroll** to load more posts as you reach the bottom
- **Search** for posts by topic
- **Floating "Scroll to Top" widget**
- **SCSS** modular styling
- **Unit tests** with [Vitest](https://vitest.dev/) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (v9 or newer recommended)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/CrisleyAlves/producthunt-challenge.git
   cd challenge
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Copy `.env-sample` to `.env` and fill in your Product Hunt GraphQL API credentials:

   ```
   VITE_GRAPHQL_URI="https://api.producthunt.com/v2/api/graphql"
   VITE_GRAPHQL_TOKEN="your_token_here"
   ```

### Running the App

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

### Running Tests

This project uses [Vitest](https://vitest.dev/) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/):

```sh
npm run test
```

### Linting

```sh
npm run lint
```

## Project Structure

```
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── avatar/
│   │   ├── datepicker/
│   │   ├── floatingWidget/
│   │   ├── header/
│   │   ├── posts/
│   │   ├── search/
│   │   └── tab/
│   ├── config/
│   ├── graphql/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── .env
├── .env-sample
├── package.json
├── vite.config.js
├── vitest.config.ts
└── README.md
```

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run test` – Run unit tests
- `npm run lint` – Run ESLint

## License

MIT

The MIT License is a permissive open source license that allows you to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software. It requires that the original copyright and license notice be included in all copies or substantial portions of the software. The software is provided "as is", without warranty of any kind.

---

**Made with [Vite](https://vitejs.dev/) and [React](https://react.dev/)**
