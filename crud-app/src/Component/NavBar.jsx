
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #111111;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="./" exact>Index</Tabs>
                <Tabs to="/users/all" exact>Usuarios</Tabs>
                <Tabs to="/users/add" exact>Agregar Usuarios</Tabs>
                <Tabs to="/products/allProducts" exact>Productos</Tabs>
                <Tabs to="/products/add" exact>Agregar productos</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;