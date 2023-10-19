import React, { useState } from 'react';
import './../App.css';
function id_result() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const user_id = urlParams.get('user_id');
    console.log(`User Id: ${user_id}`);
    return (
        <div>

        </div>
    );
}
export default id_result;