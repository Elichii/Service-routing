import { Injectable } from '@angular/core';

export class DbService {
    student = 
            [
                {id: "11",  name: "Elias Taye",  email: "elichii25@yahoo.com"},
                {id: "22",  name: "Abebe Taye",  email: "abebe@yahoo.com"},
                {id: "33",  name: "dase Taye",  email: "dase@yahoo.com"},
                {id: "44",  name: "tutu Taye",  email: "tutu@yahoo.com"},
                {id: "55",  name: "kala Taye",  email: "kala@yahoo.com"},
                {id: "66",  name: "fafa Taye",  email: "fafa@yahoo.com"},
                {id: "77",  name: "sasa Taye",  email: "sasa@yahoo.com"},
                {id: "88",  name: "mama Taye",  email: "mama@yahoo.com"},
                {id: "99",  name: "dada Taye",  email: "dada@yahoo.com"},
                {id: "10",  name: "tata Taye",  email: "tata@yahoo.com"},
                {id: "8",  name: "yaya Taye",  email: "yaya@yahoo.com"},
                {id: "7",  name: "lala Taye",  email: "lala@yahoo.com"},
                {id: "6",  name: "wawa Taye",  email: "wawa@yahoo.com"},
            ];
    constructor() {
    
     }

    getData(){
      return this.student;
    }
    
}
