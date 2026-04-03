import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.jsx';

import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptop from './components/Laptop/Laptop.jsx';
import Banner from './components/Banner/Banner.jsx';

import Users from './components/Users/Users.jsx';
import Users2 from './components/Users2/Users2.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';

import Posts from './components/Posts/Posts.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .catch(error => {
    console.error('Error fetching users:', error);
    return [];
  });

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'home',
        Component: Home
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'mobiles',
        Component: Mobiles
      },
      {
        path: 'laptop',
        Component: Laptop
      },
      {
        path: 'banner',
        Component: Banner
      },
      {
        path: 'users',
        loader: async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          return response.json();
        },
        Component: Users
      },
      {
        path: 'users2',
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center mt-20 text-red-800 text-5xl">
                Loading...
              </div>
            }
          >
            <Users2 usersPromise={usersPromise} />
          </Suspense>
        )
      },
      {
        path: 'users/:userId',
        loader: async ({ params }) => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${params.userId}`
          );
          return response.json();
        },
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          return response.json();
        },
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetail
      }
    ]
  },
  {
    path: '/app',
    element: <App />
  },
  {
    path: '*',
    element: (
      <div className="flex justify-center items-center mt-20 text-red-800 text-5xl">
        404 - Page Not Found
      </div>
    )
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);