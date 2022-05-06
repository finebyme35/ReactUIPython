import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import ShipperList from './CategoryList';
import InfiniteScroll from 'react-infinite-scroller';


export default observer(function CategoryDashboard(){

    
        const {categoryStore} = useStore();
        const {loadCategorys, categoryRegistery} = categoryStore;
        const [loadingNext, setLoadingNext] = useState(false);

    function handleGetNext() {
        setLoadingNext(true);
        loadCategorys().then(() => setLoadingNext(false));
    }
        useEffect(() => {
          if(categoryRegistery.size <= 1) loadCategorys();
          
          
        },[categoryRegistery.size, loadCategorys])
      
      
    return (
        <div className='container' >
             <InfiniteScroll
                            pageStart={0}
                            loadMore={handleGetNext}
                            initialLoad={false}
                        >
                            <ShipperList />

                        </InfiniteScroll>
        </div>
    )
})