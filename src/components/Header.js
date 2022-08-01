import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { apiCartList } from '../redux/actions/cartActions';

export default function Header() {
  
  const dispatch = useDispatch();
    const cartValue = useSelector((state) => state.cartData);
    const apiCartValue = useSelector((state) => state.apiCartData);
    console.log(apiCartValue);
  
  useEffect(() => {
    dispatch(apiCartList());
  }, [])
  return (
    <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">
            <img src="bird.jpg" alt="logo" style={{ width: 100, height: 100 }} />
        </a>
        
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cart({cartValue.length})</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">API Cart({apiCartValue.length})</a>
            </li>
        </ul>
        </nav>
    </>
  )
}
