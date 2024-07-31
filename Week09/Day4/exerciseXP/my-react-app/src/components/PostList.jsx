import React, {useEffect, useState} from "react";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        fetch('/data.json')
        .then(response => response.json())
        .then(data => setPosts(data));
    
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
};

export default PostList;