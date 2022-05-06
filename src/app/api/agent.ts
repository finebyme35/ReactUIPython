import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import {Category, CategoryCreateFormValues, CategoryFormValues} from '../models/category'
// const sleep = (delay: number) => {
//     return new Promise((resolve) =>{
//         setTimeout(resolve, delay)
//     })
// }

axios.defaults.baseURL = 'http://localhost:8080/api';



// axios.interceptors.response.use(async response => {
//     await sleep(1000);
//     return response;  
// }, (error: AxiosError) => {
//     const {data, status, config} = error.response!;
//     switch (status) {
//         case 400:
//             // if(typeof data === 'string') {
//             //         toast.error(data);
//             // }
//             // if(config.method === 'get' && data.errors.hasOwnProperty('id')){
//             // }
//             // if(data.errors) {
//             //     // const modalStateErrors = [];
//             //     // for (const key in data.errors){
//             //     //     if(data.errors[key]){
//             //     //         // modalStateErrors.push(data.errors[key]);
//             //     //     }
//             //     // }
//             //     // throw modalStateErrors.flat();

//             // }
//             break;
//         case 401:
//             toast.error('unauthorised');
//             break;
//         case 404:
//             break;
//         case 500:
//             break;
//     }
//     return Promise.reject(error);
// })

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get:<T> (url: string) => axios.get<T>(url).then(responseBody),
    post:<T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del:<T> (url: string) => axios.delete<T>(url).then(responseBody),
};


const Categorys = {
    list: () => requests.get<Category[]>('category/'),
    details: (id: number) => requests.get<Category>(`/category/${id}`),
    create: (shipper: CategoryCreateFormValues) => requests.post<void>('/category/creates/', shipper),
    update: (shipper: CategoryFormValues) => requests.put<void>(`/category/${shipper.id}`, shipper),
    delete: (id: number) => requests.del<void>(`/category/${id}`),
}




const agent = {
    Categorys,
}

export default agent;