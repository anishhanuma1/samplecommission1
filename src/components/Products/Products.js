import React from 'react';
import TablePagination from '@mui/material/TablePagination';
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useGetProductsQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } from '../../services/product';
import Sidebar from '../Sidebar';
import DialogComponent from './DialogComponent';

const Products = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [open, setOpen] = React.useState(false);
    const [productObj, setProductObj] = React.useState({
        id: '',
        title: '',
        price: '',
        description: '',
        edit: false,
        type: "Add Product"
    });
    const [addProduct] = useAddProductMutation();
    const [updateProduct] = useUpdateProductMutation();
    const [deleteProduct] = useDeleteProductMutation();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const onChangeHandler = (e) => {
        setProductObj((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const handleEdit = (data) => {
        setOpen(true);
        setProductObj({
            id: data.id,
            title: data.title,
            price: data.price,
            description: data.description,
            type: "Edit Product",
            edit: true
        })
        console.log("inside handle edit", data);
    };

    const handleDelete = async (productId) => {
        console.log("inside handle delete", productId);
        await deleteProduct(productId);
    };

    const submitEditHandler = async () => {
        console.log("inside edit submit handler", productObj);
        await updateProduct(productObj);
    };

    const submitAddHandler = async () => {
        console.log("inside Add submit handler", productObj);
        await addProduct(productObj);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { data, error, isLoading, isFetching, isSuccess } = useGetProductsQuery();
    console.log("my data productObj", productObj);
    return (
        <div>
            <Sidebar />
            <DialogComponent
                open={open}
                handleClose={handleClose}
                submitHandler={productObj.edit ? submitEditHandler : submitAddHandler}
                onChangeHandler={onChangeHandler}
                data={productObj}
            />

            {isLoading && <h2>...Loading</h2>}
            {isFetching && <h2>...isFetching</h2>}
            {error && <h2>Something went wrong</h2>}

            {isSuccess && (
                <div style={{ marginLeft: '250px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{ fontWeight: 'bold', height: '35px' }}>Products Data</h1>
                    </div>

                    <div style={{ float: 'right' }}>
                        <Button variant="outlined" onClick= {handleClickOpen}>
                            Add Product
                        </Button>
                    </div>

                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>id</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => (
                                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>{row.title}</TableCell>
                                            <TableCell>{row.price}</TableCell>
                                            <TableCell>{row.description}</TableCell>
                                            <TableCell> <EditIcon onClick={() => handleEdit(row)} style={{ cursor: 'pointer' }} /></TableCell>
                                            <TableCell> <DeleteIcon onClick={() => handleDelete(row.id)} style={{ cursor: 'pointer' }} /></TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                        <TablePagination
                            component="div"
                            rowsPerPageOptions={[5, 10, 25]}
                            count={data.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableContainer>

                </div>
            )}

        </div>
    );
};

export default Products;