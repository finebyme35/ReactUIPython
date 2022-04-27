
export interface Shipper {
    id: number;
    shipperName: string;
    phoneNumber: string;
    isActive: boolean;
  }

  export class Shipper implements Shipper {
    constructor(init?: ShipperFormValues){
      Object.assign(this, init);
    }
  }

  export class  ShipperFormValues {
    id?: number = undefined;
    shipperName: string = '';
    phoneNumber: string = '';
    isActive: boolean = true;
    constructor(shipper?: ShipperFormValues){
      if(shipper){
        this.id =shipper.id;
        this.shipperName = shipper.shipperName
        this.phoneNumber = shipper.phoneNumber
        this.isActive = shipper.isActive
      }
    }
  }