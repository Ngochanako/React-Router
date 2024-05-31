import React from 'react'
import { Link, useLocation,Navigate} from 'react-router-dom'
export default function CustomLink() {
  const location = useLocation();
  
  // if (location.pathname === '/homepage') {
  //   return <Navigate to="homepage" />;
  // } else {
  //   return <Navigate to="*" />;
  // }
  return (
    <div>
      <Link to="/homepage">Home Page</Link>
    </div>
  )
}
