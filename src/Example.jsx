import React from 'react'
import { useQuery } from 'react-query'

async function fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    return res.json()
}

const Example = () => {

    const { data, error, isError, isLoading } = useQuery('users', fetchPosts);

    if (isLoading) { return <div>yuklanmoqda...</div> }
    if (isError) { return <div>xatolik {error.message}</div> }

    return (
        <>
            <h1>Posts</h1>
            {data.map((posts, idx) => {
                return <li key={idx}>{posts.name}</li>
            })}
        </>
    )
}

export default Example