import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss';

const Header = ({ currentUser }) => {
    //console.log('current User:' + currentUser);

    return (<div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
    </div>
    )
}

//state = RootReducer
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

//First arg: Function to access the State in Root Reducer
export default connect(mapStateToProps)(Header);