import { Injectable } from '@angular/core';
import { productstr } from './productStructure';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() { }
  productList:productstr[]=[
    {
      id: 1,
      title: "HTML",
      description: "HyperText Markup Language is the standard language used to create the structure of web pages and web applications. It defines the meaning and structure of web content.",
      img: "https://img.icons8.com/color/96/html-5.png",
      category:'frontend',
      price:"1000"
    },
    {
      id: 2,
      title: "CSS",
      description: "Cascading Style Sheets is used to control the layout and appearance of HTML elements, including colors, fonts, spacing, and responsiveness.",
      img: "https://img.icons8.com/color/96/css3.png",
       category:'frontend',
       price:"1200"
    },
    {
      id: 3,
      title: "JavaScript",
      description: "A versatile scripting language that enables interactive web pages and dynamic functionality such as animations, form validation, and real-time updates.",
      img: "https://img.icons8.com/color/96/javascript.png",
       category:'frontend',
       price:"1500"
    },
    {
      id: 4,
      title: "TypeScript",
      description: "A superset of JavaScript that adds static typing, interfaces, and other features, helping developers catch errors during development and build scalable applications.",
      img: "https://img.icons8.com/color/96/typescript.png",
       category:'frontend',
       price:"2000"
    },
    {
      id: 5,
      title: "ES6",
      description: "Also known as ECMAScript 2015, ES6 introduced modern JavaScript features like arrow functions, classes, template literals, promises, and modules.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvhEypnAZChuXg3YJ6ccAnzyfc3eGPyeQKw&s",
       category:'frontend',
        price:"1000"
    },
    {
      id: 6,
      title: "Bootstrap",
      description: "A powerful front-end framework for designing responsive and mobile-first websites using ready-to-use components, grid systems, and JavaScript plugins.",
      img: "https://img.icons8.com/color/96/bootstrap.png",
       category:'framework',
        price:"500"
    },
    {
      id: 7,
      title: "TailwindCSS",
      description: "A utility-first CSS framework that enables rapid UI development with minimal custom CSS by using predefined classes for layout, spacing, and styling.",
      img: "https://img.icons8.com/color/96/tailwindcss.png",
       category:'tool',
        price:"800"
    },
    {
      id: 8,
      title: "React",
      description: "A JavaScript library developed by Facebook for building fast and interactive user interfaces using a component-based architecture and virtual DOM.",
      img: "https://img.icons8.com/color/96/react-native.png",
       category:'frontend',
        price:"5000"
    },
    {
      id: 9,
      title: "NextJS",
      description: "A React-based framework that provides features like server-side rendering, static site generation, API routes, and better performance optimization for web apps.",
      img: "https://img.icons8.com/color/96/nextjs.png",
       category:'framework',
        price:"2500"
    },
    {
      id: 10,
      title: "Angular",
      description: "A robust front-end web application framework maintained by Google that supports MVC architecture, two-way data binding, and large-scale enterprise applications.",
      img: "https://img.icons8.com/color/96/angularjs.png",
       category:'framework',
        price:"6000"
    },
    {
      id: 11,
      title: "ExpressJS",
      description: "A minimalist Node.js web framework used for building RESTful APIs and web applications quickly and efficiently with robust routing and middleware support.",
      img: "https://img.icons8.com/ios/96/express-js.png",
       category:'backend',
        price:"1100"
    },
    {
      id: 12,
      title: "NodeJS",
      description: "An open-source, cross-platform JavaScript runtime environment that executes JavaScript code on the server, enabling full-stack JavaScript development.",
      img: "https://img.icons8.com/color/96/nodejs.png",
       category:'backend',
        price:"900"
    },
    {
      id: 13,
      title: "MongoDB",
      description: "A NoSQL document database that stores data in flexible, JSON-like documents. Ideal for handling large volumes of unstructured or semi-structured data.",
      img: "https://img.icons8.com/color/96/mongodb.png",
       category:'tool',
        price:"2200"
    },
    {
      id: 14,
      title: "SQL",
      description: "Structured Query Language is used for managing and querying relational databases, enabling precise control over data manipulation and structure.",
      img: "https://img.icons8.com/color/96/sql.png",
       category:'tool',
        price:"2500"
    },
    {
      id: 15,
      title: "GitHub",
      description: "A web-based platform for version control using Git, enabling collaboration, code sharing, pull requests, and issue tracking across development teams.",
      img: "https://img.icons8.com/ios-glyphs/96/github.png",
       category:'tool',
        price:"3000"
    },
    {
      id: 16,
      title: "Firebase",
      description: "A Backend-as-a-Service (BaaS) platform by Google offering real-time databases, authentication, cloud functions, and hosting for web and mobile apps.",
      img: "https://img.icons8.com/color/96/firebase.png",
       category:'frontend',
        price:"1000"
    },
     {
      id: 17,
      title: "REST API",
      description: "REST (Representational State Transfer) API is an architectural style for designing networked applications. It uses HTTP requests to perform CRUD operations and is stateless, scalable, and easy to implement.",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
       category:'frontend',
        price:"500"
    }
  ];

  getProducts(){
    return of(this.productList);
  }

  addProduct(techObj:productstr){
   this.productList.push(techObj);
   return "Sucessfully added";
  }

  index:any;
  deleteProduct(pid:any){
    this.index=this.productList.findIndex((e)=>e.id==pid);
    this.productList.splice(this.index,1);
    return "Successfully deleted";
  }
  index2:any;
  updateProduct(Obj:any){
    this.index2=this.productList.findIndex((e)=>e.id==Obj.id);
    this.productList.splice(this.index2,1,Obj);
    return "Updated Successfully";
  }


  users:any=[];
  addUser(user:any){
    this.users.push(user);
    return "Successfully added ";
  }

filteredProducts:any;
filterData(str:any){
  console.log(this.productList.filter((p)=>p.title.toLowerCase().includes(str)))
  this.filteredProducts=this.productList.filter((p)=>p.title.toLowerCase().includes(str));
  return of(this.filteredProducts);
}

getProductById(pid:any){
  return this.productList.find(e=>e.id==pid);
}


getProductLength(){
  return this.productList.length;
}

selectedProducts:any;
getSelectCategoryProducts(scp:any){
  this.selectedProducts=this.productList.filter((p)=>p.category.toLowerCase().includes(scp.toLowerCase()));
  return of(this.selectedProducts);

}
}
