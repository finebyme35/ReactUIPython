import { Category } from '../../../app/models/category';

interface Props {
    category: Category
}

export default function CategoryListItem({ category }: Props) {
    
    return <><h1>{category.category_name}</h1></>
}