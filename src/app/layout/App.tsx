import { observer } from 'mobx-react-lite';
import { Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
import ShipperDashboard from '../../features/shipper/dashboard/CategoryDashboard';
import './style.css'

function App() {

  return (
    <div className='root'>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <ShipperDashboard />
    </div>
  );
}

export default observer(App);