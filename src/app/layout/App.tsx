import { observer } from 'mobx-react-lite';
import React from 'react';
import { Outlet, Route } from 'react-router';
import { Routes } from 'react-router-dom';
import CategoryDashboard from '../../features/category/dashboard/CategoryDashboard';

import CategoryForm from '../../features/form/CategoryForm';
import { useStore } from '../stores/store';
import './style.css'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<CategoryDashboard />} >
          <Route path='/category/:id/' element={<Outlet />} />
      </Route>
      <Route  path='/category/creates/' element={<CategoryForm />} />

    </Routes>
  </>
  );
}

export default observer(App);