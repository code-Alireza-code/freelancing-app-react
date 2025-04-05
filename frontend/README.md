# Freelancing App

This project is a freelancing platform built with React, TypeScript, and Vite. It allows users to create projects, submit proposals, and manage their freelancing activities.

## Features

- User authentication and profile management
- Project creation and management for owners
- Proposal submission and status tracking for freelancers
- Admin dashboard for managing users, projects, and proposals
- Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **State Management**: React Query
- **Form Validation**: React Hook Form, Zod
- **Notifications**: React Hot Toast

## Development

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/freelancing-app.git
   cd freelancing-app
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables:
   - Create `.env` files in both `frontend` and `backend` directories.
   - Refer to `.env.example` files for required variables.

### Running the Application

1. Start the backend server:

   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend development server:

   ```bash
   cd frontend
   npm run dev
   ```

3. Open the app in your browser at `http://localhost:5173`.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the ESLint configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
- Optionally add `...tseslint.configs.stylisticTypeChecked`.
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the React version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the React plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## License

This project is licensed under the MIT License.
