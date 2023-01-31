import axios from 'axios'
import React from 'react'
import {useMutation} from 'react-query'

const Todo = () => {

    const mutation = useMutation(newTodo => {
        return axios.post('https://jsonplaceholder.typicode.com/posts', newTodo)
    })

  return (
    <>
        {mutation.isLoading ? (
            'malumot qowilmoqda...'
        ) : (
            <>

                {mutation.isSuccess ? <div>success</div> : null}
                {mutation.isError ? <div>xato {error.message}</div> : null}

                <button onClick={() => mutation.mutate({title: 'to whatever you...'})}>
                    Post something
                </button>
            </>
        )}
    </>
  )
}

export default Todo