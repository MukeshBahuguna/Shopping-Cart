import React from 'react'
import { Badge, Container, Dropdown, FormControl, Nav, Navbar, NavbarBrand } from 'react-bootstrap'

import {FaShoppingCart} from 'react-icons/fa';
import { CartState } from '../context/Context';

const Header = () => {


  const {state : {cart} ,dispatch} = CartState();

  return (
        <Navbar bg='dark' variant='dark' style={{height:80}}>
            <Container>
                <Navbar.Brand>
                    <a href="/" >Shopping Cart</a>
                </Navbar.Brand>

                <Navbar.Text className='search'>

                    <FormControl style={{width:500}} 
                    placeholder='Search a Product ' 
                    className='m-auto'/>

                </Navbar.Text>

                <Nav>
                    <Dropdown align={'right'}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <FaShoppingCart color='white' fontSize={'25px'}/>
                            <Badge>{cart.length}</Badge>

                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{minWidth :370}}>
                           <span style={{padding:10}}>Cart is Empty!!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                   
            </Container>
        </Navbar> 
    
    )
}

export default Header