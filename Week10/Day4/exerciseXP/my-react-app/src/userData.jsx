import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUserData} from './userSlice';

const UserData = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userData);
    const loading = useSelector((state) => state.user.loading);
    const error = useSelector((state)=> state.user.error);

    useEffect(()=>{
        dispatch(fetchUserData());
    }, [dispatch]);

    useEffect(() => {
        console.log('User data from state:', userData);
      }, [userData]);

    if(loading){
        return <div>Loading...</div>;
    }

    if(error){
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <h1>User Data</h1>
            {userData.length > 0 ? (
            <ul>
                {userData.map((user) => (
                    <li key = {user.id}>
                        <p>ID: {user.id}</p>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
            ) : (
                <p>No user data available.</p>
            )}
        </div>
    );
};

export default UserData;