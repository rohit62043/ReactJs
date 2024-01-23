import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    //const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rohit62043').then((res) => res.json()).then((data) => {
    //         setData(data);
    //     });
    // }, [])

    const data = useLoaderData()
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers}
            <img src={data.avatar_url} alt="github_image" /></div>
    )
}

export default Github

export const githubData = async function () {
    const response = await fetch('https://api.github.com/users/rohit62043')
    return response.json();
}