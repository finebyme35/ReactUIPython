import { Button, TableCell, TableRow } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Category } from '../../../app/models/category';
import { useStore } from '../../../app/stores/store';
import CategoryForm from '../../form/CategoryForm';

interface Props {
    category: Category
}

export default function CategoryListItem({ category }: Props) {
    const {categoryStore, modalStore} = useStore();
    const {deleteCategory} = categoryStore
    const {openModal} = modalStore
    function handleClick(){
        openModal(<CategoryForm />)
    }
    
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
            <Link to={`/category/${category.id}`} ><Button variant="contained" color="warning" style={{marginRight: 5}} onClick={handleClick}>Edit</Button></Link>
            <Button variant="contained" color="error" onClick={() => deleteCategory(category.id)}>Delete</Button>
            </TableCell>
        </TableRow>
    )
}