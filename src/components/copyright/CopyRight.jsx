import React from 'react';
import "./CopyRight.css";


const CopyRight = () => {
  return ( 
    <div className="copyright">
       <p> Copyright &copy; {(new Date().getFullYear())} Jatuah Joseph. All Rights Reserved</p>
    </div>
   );
}
 
export default CopyRight;