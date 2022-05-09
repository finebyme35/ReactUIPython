
export interface Category {
    id: number;
    category_name: string;
  }

  export class Category implements Category {
    constructor(init?: CategoryFormValues){
      Object.assign(this, init);
    }
  }

  export class  CategoryFormValues {
    id?: number;
    category_name: string = '';
    constructor(category?: CategoryFormValues){
      if(category){
        this.id =category.id;
        this.category_name = category.category_name
      }
    }
  }

 

  