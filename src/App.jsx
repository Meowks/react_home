import React from 'react';
import "../src/style/main.css"
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import PageFive from './pages/PageFive';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from './contexts/themeProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageOne />
  },
  {
    path: "/page-two",
    element: <PageTwo />
  },
  {
    path: "/page-three",
    element: <PageThree />
  },
  {
    path: "/page-four",
    element: <PageFour />
  },
  {
    path: "/page-five",
    element: <PageFive />
  },
])


const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router}>
        <div className="App" />
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;













