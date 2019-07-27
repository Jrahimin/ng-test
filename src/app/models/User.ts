export interface User{
     name: string;
     age: number;
     address?:{               
          city: string,
          street: string
     },
     image?: string,
     isActive?: boolean,
     balance?: number,
     joined?: any
}