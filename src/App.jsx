import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import Example from './Example'
import Todo from './Todo'

const queryClient = new QueryClient()

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Example />
        <br />
        <Todo />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default App