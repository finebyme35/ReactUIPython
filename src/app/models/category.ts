
export interface Category {
    id: number;
    category_name: string;
  }

  export class Category implements Category {
    constructor(init?: CategoryFormValues, initCreate?: CategoryCreateFormValues){
      Object.assign(this, init, initCreate);
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

  export class  CategoryCreateFormValues {
    category_name: string = '';
    constructor(category?: CategoryFormValues){
      if(category){
        this.category_name = category.category_name
      }
    }
  }

  