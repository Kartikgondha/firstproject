import logo from './logo.svg';
import './App.css';


function App() {

  //  let data = [
  //     {
  //       id: 101,
  //       name: 'Abacavir',
  //       quantity: 25,
  //       price: 150,
  //       expiry: 2022,
  //       status: true
  //     },
  //     {
  //       id: 102,
  //       name: 'Eltrombopag',
  //       quantity: 90,
  //       price: 550,
  //       expiry: 2021,
  //       status: true
  //     },
  //     {
  //       id: 103,
  //       name: 'Meloxicam',
  //       quantity: 85,
  //       price: 450,
  //       expiry: 2025,
  //       status: false
  //     },
  //     {
  //       id: 104,
  //       name: 'Allopurinol',
  //       quantity: 50,
  //       price: 600,
  //       expiry: 2023,
  //       status: true
  //     },
  //     {
  //       id: 105,
  //       name: 'Phenytoin',
  //       quantity: 63,
  //       price: 250,
  //       expiry: 2021,
  //       status: false
  //     }
  //   ];


  //   let fdata = data.filter((a,i)=>a.status === true && a.expiry >= 2022);

  //   let totalprice = fdata.reduce((acc, a, i)=> acc + a.price, 0);
  //   console.log(totalprice);

  // return (

  //  <div>
  //  <table border="1">
  //    <tr>
  //      <th>id</th>
  //      <th>name</th>
  //      <th>quantity</th>
  //      <th>price</th>
  //      <th>expiry</th>
  //      <th>status</th>
  //      <th>totalprice</th>


  //   </tr>

  //   {
  //     fdata.map((a,i)=> {
  //     let {id, name, quantity, price, expiry, status}= a;
  //    return(
  //     <tr key={i}>
  //     <td>{id}</td>
  //     <td>{name}</td>
  //     <td>{quantity}</td>
  //     <td>{price}</td>
  //     <td>{expiry}</td>
  //     <td>{status.toString()}</td>
  //     {i === 0 ? <td rowSpan={2}>{totalprice}</td> :null}

  //   </tr>

  //    )})


  //   }



  //  </table>
  //  </div>

  // );

  let Data = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]

  let eData = Data.filter((a, i) => a.status === true);

  let totalESalary = eData.reduce((acc, a, i) => acc + a.salary + a.bonus, 0);
  console.log(totalESalary);

   
  return (
    <div>
      <table border="1">
        <tr>
          <th>name</th>
          <th>age</th>
          <th>salary</th>
          <th>bonus</th>
          <th>status</th>
          <th>total salary</th>
          <th>total Employed salary</th>
        </tr>

        {
          eData.map((a, i) =>{
            let {name, age, salary, bonus, status}=a;    //destructuring
            return(
          <tr>
              <td>{name}</td>
              <td>{age}</td>
              <td>{salary}</td>
              <td>{bonus}</td>
              <td>{status.toString()}</td>
              <td>{salary + a.bonus}</td>
              {i === 0 ? <td rowSpan={4}>{totalESalary}</td> :null}


            </tr>)})

        }

      </table>
    </div>

  );

}





export default App;
