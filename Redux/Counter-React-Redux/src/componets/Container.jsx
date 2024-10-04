import React from 'react';

const Container = ({children}) => {
  return (
    <div>
      <div class="card" style={{width: "50%"}}>
 
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
       {children}
  </div>
</div>
    </div>
  );
}

export default Container;
