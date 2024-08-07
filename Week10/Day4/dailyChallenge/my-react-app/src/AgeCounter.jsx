import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { ageUpAsync,ageDownAsync } from './ageSlice';
import logo from './assets/react.svg';

const AgeCounter = () => {
    const dispatch = useDispatch();
    const age = useSelector((state)=> state.age.age);
    const loading = useSelector((state)=> state.age.loading)

    const handleAgeUp = () => {
        dispatch(ageUpAsync(1));
    };

    const handleAgeDown = () =>{
        dispatch(ageDownAsync(1));
    };

    return (
        <div>
            <h1>Age: {age}</h1>
            <button onClick={handleAgeUp} disabled={loading}>
                Age Up
            </button>
            <button onClick={handleAgeDown} disabled={loading}>
                Age Down
            </button>
            {loading && <img src={logo} alt='Loading...'/>}
        </div>
    );
};

export default AgeCounter;