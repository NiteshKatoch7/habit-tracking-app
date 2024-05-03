import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HabitCalculator from './components/HabitCalculator/HabitCalculator';

// Setting up the Routing for our single page project!
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HabitCalculator />} />
      <Route path=':habitId' element={<HabitCalculator />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //Assigning our redux store to the parent node.
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);

