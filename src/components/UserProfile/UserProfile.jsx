import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { RotatingLines } from 'react-loader-spinner';

const UserProfile = () => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return  <RotatingLines
        strokeColor="purple"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    } 

    console.log(user);


    return (

        
<div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div>
        <img class="rounded mx-32 mt-4" src={user.photoURL} alt="" />
    </div>
    <div class="p-5">
            <h5 class="mb-2 text-xl tracking-tight text-gray-900 dark:text-white"><span className='font-bold'>Name:</span> {user.displayName}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><span  className='font-bold'>User Email:</span> {user.email}</p>
        <p><span  className='font-bold'>Joined On:</span> {user.metadata.creationTime}</p>
     
    </div>
</div>


    );
};

export default UserProfile;