import React from 'react';

import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@mui/material';

const DialogComponent = ({ open, handleClose, submitHandler, onChangeHandler, data }) => {
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{ textAlign: 'center' }}>{data.type}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name='title'
                        value={data.title}
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={onChangeHandler}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name='price'
                        value={data.price}
                        label="Price"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={onChangeHandler}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name='description'
                        value={data.description}
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={onChangeHandler}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={submitHandler}>Submit</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>

        </>
    );
};

export default DialogComponent;