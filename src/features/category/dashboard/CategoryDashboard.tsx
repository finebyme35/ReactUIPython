import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import CategoryList from './CategoryList';
import InfiniteScroll from 'react-infinite-scroller';


export default observer(function CategoryDashboard(){

    
        const {categoryStore} = useStore();
        const {loadCategorys, categoryRegistery} = categoryStore;
        const [loadingNext, setLoadingNext] = useState(false);

    
        useEffect(() => {
          if(categoryRegistery.size <= 1) loadCategorys();
          
          
        },[categoryRegistery.size, loadCategorys])
      
      
    return (<>
        <div className='container' >
            <CategoryList />
        </div>
        </>
    )
})