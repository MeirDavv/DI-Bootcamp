/**
 * info.js -> module wit a function getUsers
 * getUsers return the users array from this api
 * https://jsonplaceholder.typicode.com/users
 *
 * in main.js - get the array and log
 *
 * use es6 module
 */

export const getUsers = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        return data;
    }
    catch(err){
        console.error(err)
    }
}