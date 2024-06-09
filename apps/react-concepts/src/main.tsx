import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.tsx'
import ErrorPage from './error-page.tsx'
import Contact from './routes/contact.tsx'
import { contactLoader, singleContactLoader } from './loaders/contact.ts'
import { createContactAction } from './action/create-contact-action.ts'
import EditForm from './routes/edit.tsx'
import updateContactAction from './action/update-contact-action.ts'
import deleteContactAction from './action/delete-contact-action.ts'
import Index from './routes/index.tsx'
import { addFavouriteAction } from './action/add-fav-action.ts'


import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// import usePrevious from "../lib/usePrevious";


const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: contactLoader,
    action: createContactAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: singleContactLoader,
        action: addFavouriteAction,
        errorElement: <div>Oops : This docs might not be there</div>
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditForm />,
        loader: singleContactLoader,
        action: updateContactAction
      }
      ,
      {
        path: 'contacts/:contactId/destroy',
        action: deleteContactAction,
        errorElement: <p>Oops : Error while deleting this row</p>

      },
      {
        index: true,
        element: <Index />
      }
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>

    <React.StrictMode>

      {/* <App /> */}

      <RouterProvider router={router} />
    </React.StrictMode>
  </ApolloProvider>,
)
