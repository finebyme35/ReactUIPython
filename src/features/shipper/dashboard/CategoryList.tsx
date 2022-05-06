import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { Fragment, useEffect } from 'react';
import ModalContainer from '../../../app/common/modals/ModalContainer';

import { useStore } from '../../../app/stores/store';
import ShipperForm from '../../form/CategoryForm';



export default observer(function ShipperList(){
    const {categoryStore, modalStore} = useStore();
    const {openModal} = modalStore;
    const {groupedCategory} = categoryStore;
    useEffect(()=> {
    }, [groupedCategory])
    return (
    <Fragment>
        <Button variant="contained" color="primary" onClick={() => openModal(<ShipperForm />)} style={{margin: "1rem", float: "right", marginRight: "5rem", marginBottom: "0.1rem"}}>Add</Button>
        <ModalContainer />
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="center">Category Name</TableCell>
                <TableCell align="center">Action</TableCell>
                
            </TableRow>
            </TableHead>
            <TableBody>
            {groupedCategory.map(([group, category]) => {
                        return (<Fragment key={group}>
                        <TableRow
                                
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                {category.id}
                                </TableCell>
                                <TableCell align="center">
                                {category.category_name}
                                </TableCell>
                                <TableCell align="center" >
                                <Button variant="contained" color="warning" style={{marginRight: 5}}>Edit</Button>
                                <Button variant="contained" color="error" >Delete</Button>
                                
                                </TableCell>
                            </TableRow>
                        </Fragment>
                        )
                    })}
            

            </TableBody>
            {/* <TableFooter>
                <TableRow>
                    <TablePagination rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} />

                </TableRow>
            </TableFooter> */}
        </Table>
        </TableContainer>
    </Fragment>
    )
})