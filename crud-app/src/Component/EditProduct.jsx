import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts, editProduct } from '../Service/api';

const initialValue = {
    nombre: '',
    descripcion: '',
    precio: '',
    cantidad: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditProduct = () => {
    const [product, setProduct] = useState(initialValue);
    const { nombre, descripcion, precio, cantidad } = product;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadProductDetails();
    }, []);

    const loadProductDetails = async() => {
        const response = await getProducts(id);
        setProduct(response.data);
    }

    const editProductDetails = async() => {
        const response = await editProduct(id, product);
        navigate('/products/allproducts');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setProduct({...product, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Editar Informacion</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Nombre</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='nombre' value={nombre} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Descripcion</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='descripcion' value={descripcion} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Precio</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='precio' value={precio} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Cantidad</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='cantidad' value={cantidad} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editProductDetails()}>Editar Producto</Button>
            </FormControl>
        </Container>
    )
}

export default EditProduct;