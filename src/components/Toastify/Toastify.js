import React from 'react';
import './Toastify.css'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
    const notify = () => toast.success('Good Job, Your Activity has been completed!', {
        position: toast.POSITION.TOP_CENTER
    });
    return (
        <><button className='notify' onClick={notify}>Activity Completed</button><ToastContainer /></>
    );
};

export default Toastify;