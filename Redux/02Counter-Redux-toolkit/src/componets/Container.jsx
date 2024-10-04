import React from 'react';

const Container = ({children}) => {
  return (
    <div>
      <div class="card" style={{width: "50%"}}>
 
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
       {children}
  </div>
</div>
    </div>
  );
}

export default Container;
