import React from 'react';

function Exam(props) {
    import React from 'react';

      const EmployeeData =
    
      [
      
          {
      
              id: 101,
      
              name: 'Amit',
      
              joining_date: "01-06-2021",
      
              salary: 50000
      
          },
      
          {
      
              id: 102,
      
              name: 'Piyush',
      
              joining_date: "01-01-2019",
      
              salary: 60000
      
          },
      
          {
      
              id: 103,
      
              name: 'Meet',
      
              joining_date: "01-03-2020",
      
              salary: 25000
      
          },
      
          {
      
              id: 104,
      
              name: 'Lalit',
      
              joining_date: "01-12-2021",
      
              salary: 30000
      
          }
      
      ]
      
    }
    
    function app(){
    return (
       <table border="1">
           <tr>
               <th>id</th>
               <th>name</th>
               <th>joining_date</th>
               <th>salary</th>
           </tr>
           {
               fdata.map ((a,i)=>{
                   let {id,name,joining_date,salary} = a;
                   return(
                       <tr key={i}>
                           <td>{id}</td>
                           <td>{name}</td>
                           <td>{joining_date}</td>
                           <td>{salary}</td>
                       </tr>
                   )
               })
           }
       </table>
    );
    }
    

export default Exam;