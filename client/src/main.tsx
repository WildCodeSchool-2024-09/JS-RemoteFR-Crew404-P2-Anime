// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContext";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import Genre from "./pages/Genre";
import Home from "./pages/Home";

import CardAnime from "./pages/CardAnime";

import PageAction from "./pages/CategoryGenre/PageAction/PageAction";
import PageAdventure from "./pages/CategoryGenre/PageAdventure/PageAdventure";
import PageComedy from "./pages/CategoryGenre/PageComedy/PageComedy";
import PageDrama from "./pages/CategoryGenre/PageDrama/PageDrama";

// Import additional components for new routes
// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/genre",
        element: <Genre />,
      },
      {
        path: "/genre",
        element: <Genre />,
      },
      {
        path: "/anime/data/:id",
        element: <CardAnime />,
      },
      {
        path: "/home/genre/action",
        element: <PageAction />,
      },
      {
        path: "/home/genre/adventure",
        element: <PageAdventure />,
      },
      {
        path: "/home/genre/comedy",
        element: <PageComedy />,
      },
      {
        path: "/home/genre/drama",
        element: <PageDrama />,
      },
    ],
  },
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
