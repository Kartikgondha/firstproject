import React, { Component } from 'react';

class Demo extends Component {
    render() {
        
            // const person = {
            //     name: "Amit",
            //     age: 25
            // }

            // console.log(person.name ,person.age);

            // const person = [
            //     {
            //         name: "Amit",
            //         age: 25,
            //     },
            //     {
            //         name: "Piyush",
            //         age: 40,
            //     },


            // ];

            // person.map((p,i)=>{
            //     console.log(p.name ,p.age);
            // })

            // const person = {
            //     name: "Amit",
            //     age: 25,
            //     course: [
            //         "C",
            //         "HTML"
            //     ]
            // }

            // console.log(person.name, person.age,);
            // person.course.map((p)=> console.log(p));

            // const person = [
            //     {
            //         name: "Amit",
            //         age: 25,
            //         course: [
            //             "C",
            //             "HTML"
            //         ]
            //     },
            //     {
            //         name: "Ajay",
            //         age: 40,
            //         course: [
            //             "Java",
            //             "JavaScript"
            //         ]
            //     }
            // ]

            // person.map((p, i)=>{
            //     console.log(p.name, p.age);
            //     p.course.map((c)=>console.log(c));
            // })

            // const myObj = {
            //     name: "John",
            //     age: 30,
            //     cars: {
            //         car1: "Ford",
            //         car2: "BMW",
            //         car3: "Fiat"
            //     }
            // }

            // // console.log(myObj.name , myObj.age, myObj.cars.car1, myObj.cars.car2, myObj.cars.car3);
                
            // for (let k in myObj){
            //     if(myObj[k]===myObj.cars){
            //         for(let j in myObj.cars){
            //             console.log(myObj.cars[j]);
            //         }
            //     }else{
            //         console.log(myObj[k]);
            //     }
            // }

            let data = {
                personal_info: {
                  name: "kartik",
                  age: 23,
                  city: "surat"
                },
                course: ["C", "javaScript", "React"],
                branches: {
                  rw1: {
                    admission: 50,
                    vacant_seat: 10
                  },
                  rw2: {
                    admission: 30,
                    vacant_seat: 20
                  },
                  rw3: {
                    admission: 25,
                    vacant_seat: 26
                  },
                  rw4: {
                    admission: 40,
                    vacant_seat: 10
                  },
                }
              };

              for(let a in data.personal_info){
                console.log(data.personal_info[a]);
              }
              data.course.map((c)=>console.log(c));
              for(let c in data.branches){
                 
                  if(data.branches[c] === data.branches.rw1){
                    for (let d in data.branches.rw1){
                        console.log(data.branches.rw1[d]);
                    }
                  }else if(data.branches[c] === data.branches.rw2){
                    for(let e in data.branches.rw2){
                        console.log(data.branches.rw2[e]);

                    }
                  }else if(data.branches[c] === data.branches.rw3){
                    for(let f in data.branches.rw3){
                        console.log(data.branches.rw3[f]);

                    }
                  }else if(data.branches[c] === data.branches.rw4){
                    for(let g in data.branches.rw4){
                        console.log(data.branches.rw4[g]);

                    }
              }else{
                console.log(data.branches[c]);
              }
            }
        }
}

export default Demo;