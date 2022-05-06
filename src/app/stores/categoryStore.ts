import {  makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Category, CategoryFormValues } from "../models/category";


export default class CategoryStore {
    categoryRegistery = new Map<number, Category>();
    selectedCategory: Category | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;
    
    constructor() {
        makeAutoObservable(this)
    }
    
    get getCategoryLists(){
        
        return Array.from(this.categoryRegistery.values()).sort((a, b) => Number(b.id) - Number(a.id))
    }
    get groupedCategory() {        
        return Object.entries(this.getCategoryLists)
    }

    loadCategorys =  async () => {
        this.loading = true;

        try {
            const Category = await agent.Categorys.list();
                Category.forEach(category => {
                    this.setCategory(category)

                })
            this.setLoadingInitial(false);
        }
        catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadCategory = async (id: number) => {
        let category = this.getCategory(id);

        if (category) {
            this.selectedCategory = category;
            return category;
        } else {
            this.loadingInitial = true;
            try {
                category = await agent.Categorys.details(id);
                this.setCategory(category);
                runInAction(() => {
                    this.selectedCategory = category;
                });
                this.setLoadingInitial(false);
                
                return category;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);

            }
        }
    }

    private setCategory = (category: Category) => { 
        this.categoryRegistery.set(category.id, category);
    }
    private getCategory = (id: number) => {
        return this.categoryRegistery.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }



    createCategory = async (category: CategoryFormValues) => {
        try {            
            await agent.Categorys.create(category);
            const newcategory = new Category(category);
            this.setCategory(newcategory);
            runInAction(() => {
                this.selectedCategory = newcategory;
            })
        } catch (error) {
            console.log(error);
        }
    }

    updateCategory = async (category: CategoryFormValues) => {

        try {
            await agent.Categorys.update(category);
            runInAction(() => {
                if (category.id) {
                    let updatedcategory = { ...this.getCategory(category.id), ...category };
                    this.categoryRegistery.set(category.id, updatedcategory as Category);
                    this.selectedCategory = updatedcategory as Category;
                }



            });
        } catch (error) {
            console.log(error);
        }
    }

    deleteCategory = async (id: number) => {
        this.loading = true;
        try {
            await agent.Categorys.delete(id);
            runInAction(() => {
                this.categoryRegistery.delete(id);
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }


}