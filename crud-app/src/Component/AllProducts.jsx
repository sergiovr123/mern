import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getProducts, deleteProduct } from '../Service/api';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllProducts = () => {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) {
              navigate("/login");
            }
            const { data } = await axios.post(
              "http://localhost:8080",
              {},
              { withCredentials: true }
            );
            const { status, user } = data;
            setUsername(user);
            return status
              ? toast(`Hello ${user}`, {
                  position: "top-right",
                })
              : (removeCookie("token"), navigate("/login"));
          };
          verifyCookie();
        getAllProducts();
    }, [cookies, navigate, removeCookie]);
    const Logout = () => {
        removeCookie("token");
        navigate("/login");
      };
    const deleteProductData = async (id) => {
        await deleteProduct(id);
        getAllProducts();
    }

    const getAllProducts = async () => {
        let response = await getProducts();
        setProducts(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Descripcion</TableCell>
                    <TableCell>Precio</TableCell>
                    <TableCell>Cantidad</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {products.map((product) => (
                    <TRow key={product.id}>
                        <TableCell>{product._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{product.nombre}</TableCell>
                        <TableCell>{product.descripcion}</TableCell>
                        <TableCell>{product.precio}</TableCell>
                        <TableCell>{product.cantidad}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/products/edit/${product._id}`}>Editar</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteProductData(product._id)}>Borrar</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
        
    )
}

export default AllProducts;