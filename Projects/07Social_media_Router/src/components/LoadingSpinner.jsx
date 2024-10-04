import React from 'react';

const LoadingSpinner = () => {
  return (
    <div>
        <div class="d-flex justify-content-center spinner">
            <div class="spinner-border" role="status" style={{width:"6rem",height:'6rem'}}>
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
  );
}

export default LoadingSpinner;
