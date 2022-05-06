import { Box, Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../stores/store';



export default observer(function ModalContainer() {
    const {modalStore} = useStore();

    return (
        <Modal open={modalStore.modal.open} onClose={modalStore.closeModal} aria-labelledby="modal-modal-title">
            <div >
                {modalStore.modal.body}
            </div>

        </Modal>
    )
})