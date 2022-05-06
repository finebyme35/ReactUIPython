import { createContext, useContext } from "react";
import ModalStore from "./modalStore";
import CategoryStore from "./categoryStore";
interface Store {
    categoryStore: CategoryStore;
    modalStore: ModalStore;
}

export const store: Store = {
    categoryStore: new CategoryStore(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore () {
    return useContext(StoreContext);
}