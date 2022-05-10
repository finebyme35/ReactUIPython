import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';
import ModalContainer from '../../../app/common/modals/ModalContainer';

import { useStore } from '../../../app/stores/store';
import CategoryForm from '../../form/CategoryForm';
import CategoryListItem from './CategoryListItem';


export default observer(function CategoryList(){
    const {categoryStore, modalStore} = useStore();
    const {openModal} = modalStore;
    const {groupedCategory} = categoryStore;
    return (
    <Fragment>
        <Button variant="contained" color="primary" onClick={() => openModal(<CategoryForm />)} style={{margin: "1rem", float: "right", marginRight: "5rem", marginBottom: "0.1rem"}}>Add</Button>
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
                            <CategoryListItem key={category.id} category={category}/>
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