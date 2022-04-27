import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Shipper, ShipperFormValues } from "../models/shipper";
import { store } from "./store";

export default class ShipperStore {
    shipperRegistery = new Map<number, Shipper>();
    selectedShippers: Shipper | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial= false;
    constructor(){
        makeAutoObservable(this)
    }

    // otomatik olarak arrow function ile bağlar.
    loadShippers = async () => {
        this.loadingInitial = true;
        try {
            const shippers = await agent.Shippers.list();
            shippers.forEach(shippers => {
                    this.setShipper(shippers);
                });
                this.setLoadingInitial(false);
            
            

        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
            
            
        }
    }
    loadShipper = async (id: number) => {
        let shipper = this.getShippers(id);
        if(shipper) {
            this.selectedShippers = shipper;
            return shipper;
        } else {
            this.loadingInitial = true;
            try{
                shipper = await agent.Shippers.details(id);
                this.setShipper(shipper);
                runInAction(() => {
                    this.selectedShippers = shipper;
                });
                this.setLoadingInitial(false);
                return shipper;
            }catch (error){
                console.log(error);
                this.setLoadingInitial(false);
                
            }
        }
    }

    private setShipper = (shipper: Shipper) => {
        this.shipperRegistery.set(shipper.id, shipper);
    }

    private getShippers = (id: number) => {
        return this.shipperRegistery.get(id);
    }
       
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    

    createShipper = async (shipper: ShipperFormValues) => {
        try {
            await agent.Shippers.create(shipper);
            const newShipper = new Shipper(shipper);
            this.setShipper(newShipper);
            runInAction(() => {
                this.selectedShippers = newShipper;
            })
        } catch(error) {
            console.log(error);
        }
    }

    updateShipper = async (shipper: ShipperFormValues) =>{
        
        try{
            await agent.Shippers.update(shipper);
            runInAction(() => {
                if(shipper.id) {
                    let updatedShipper = {...this.getShippers(shipper.id), ...shipper};
                    this.shipperRegistery.set(shipper.id, updatedShipper as Shipper);
                    this.selectedShippers = updatedShipper as Shipper;
                }
                
                
                
            });
        } catch(error){
            console.log(error);
        }
    }

    deleteShipper = async (id: number) => {
        this.loading = true;
        try{
            await agent.Shippers.delete(id);
            runInAction(() => {
                this.shipperRegistery.delete(id);
                this.loading = false;
            })
        }catch (error){
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }


}