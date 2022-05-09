import { Button, TableCell, TableRow } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Category } from '../../../app/models/category';
import { useStore } from '../../../app/stores/store';

interface Props {
    category: Category
}

export default function CategoryListItem({ category }: Props) {
    const {categoryStore} = useStore();
    const {deleteCategory} = categoryStore
    return (
        <TableRow                  
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
            {category.id}
            </TableCell>
            <TableCell align="center">
            {category.category_name}
            </TableCell>
            <TableCell align="center" >
            <Button variant="contained" color="warning" style={{marginRight: 5}}>Edit</Button>
            <Button variant="contained" color="error" onClick={() => deleteCategory(category.id)}>Delete</Button>
            </TableCell>
        </TableRow>
    )
}