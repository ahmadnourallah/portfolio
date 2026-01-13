# Portfolio

A modern, customizable portfolio frontend application, built with React,
Typescript and Tailwind CSS.

## Demo

<div align="center">
    <img src="https://github.com/ahmadnourallah/portfolio/blob/main/src/assets/portfolio.webp?raw=true" height="800">
</div>

Check out the live version deployed on GitHub Pages
[here](https://ahmadnourallah.github.io/).

## Description

Built with React and Typescript and optimized with code splitting and lazy
loading, this portfolio offers an exceptional means to showcase your projects
and achievements.

The portfolio can be easily customized as it is built with React. Anyone can use
the components and building blocks in the project to build their unique and
modern portfolio.

Coupled with [Blogify](https://github.com/ahmadnourallah/blogify), you can add a
blog to your resume where you can express your ideas and show others your
expertise.

## Features

- :white_check_mark: Remote state management with Tanstack React Query.
- :white_check_mark: JWT, role-based authentication managed through the Context
  API.
- :white_check_mark: A blog system with support for CRUD operations.
- :white_check_mark: Rich text editing, syntax highlighting and markdown support
  in the blog system.
- :white_check_mark: Sleek, eye-catching animation with React Motion.
- :white_check_mark: Optimal page loading with lazy loading and code splitting.

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ahmadnourallah/portfolio
```

2. Install dependencies:

```bash
npm install
```

### Environment Variables

The only environment variable required is `VITE_API`. `VITE_API` must refer to
an accessible RESTful API with resources defined similar to those in
[Blogify](https://github.com/ahmadnourallah/blogify).

### Deployment

You can fire up the development server using:

```bash
npm run dev
```

Building the application can be done by running:

```bash
npm run build
```

You can preview the production build through:

```bash
npm run preview
```

Since it works on the client entirely, you can host Portfolio using a static
hosting service, such as GitHub Pages or Vercel. Check out
[this workflow](https://github.com/ahmadnourallah/portfolio/blob/main/.github/workflows/deploy.yml)
to get an idea about how to deploy the project to GitHub Pages through Actions.

## Technologies

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=ts,react,tailwind,vite" />
  </a>
</p>

The system is built the latest technologies:

- TypeScript
- React
- Tailwind CSS
- Motion
- TanStack Query
- MDXEditor
- React Router
- React Toastify
- Vite

## License

This project is licensed under the GNU GPLv3 License - see the LICENSE.md file
for details.
