import React, { useState } from 'react';

type PostType = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

export const MainPage: React.FC = () => {

    const [data, setData] = useState<PostType[]>()

    const fetchPosts = async () => {
        const url: string = 'https://jsonplaceholder.typicode.com/posts';

        try {
            const res = await fetch(url);
            const json = await res.json();
            console.log(json)
            setData(json);
        } catch(err) {
            alert(err)
        }

    };

    return (
        <>
            <button onClick={fetchPosts}>Получить посты</button>
            {data && data.map(post => (<pre>{post.title}</pre>))}
        </>
    )
}