import { createContext, useContext } from "react";
import ModalStore from "./modalStore";
import ShipperStore from "./shipperStore";

interface Store {
    shipperStore: ShipperStore;
    modalStore: ModalStore;
}

export const store: Store = {
    shipperStore: new ShipperStore(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore () {
    return useContext(StoreContext);
}