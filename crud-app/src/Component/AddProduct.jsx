import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addProduct } from '../Service/api';
import { useNavigate } from 'react-router-dom';

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
        margin-top: 20px;
`;

const AddProduct = () => {
    const [product, setProduct] = useState(initialValue);
    const { nombre, descripcion, precio, cantidad } = product;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const addProductDetails = async() => {
        await addProduct(product);
        navigate('/products/allproducts');
    }

    return (
        <Container>
            <Typography variant="h4">Agregar producto</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Nombre</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='nombre' value={nombre} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Descripcion</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='descripcion' value={descripcion} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Precio</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='precio' value={precio} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Cantidad</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='cantidad' value={cantidad} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addProductDetails()}>Agregar producto</Button>
            </FormControl>
        </Container>
    )
}

export default AddProduct;