// src/PostsList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postsSlice';
import { reactionAdded } from './postsSlice';

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const status = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);

    let content;

    if (status === 'loading') {
        content = <div>Loading...</div>;
    } else if (status === 'succeeded') {
        content = (
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <div>
                            {Object.entries(reactionEmoji).map(([name, emoji]) => (
                                <span key={name}>
                                    {emoji} {post.reactions[name]}{' '}
                                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        );
    } else if (status === 'failed') {
        content = <div>{error}</div>;
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    );
};

export default PostsList;
