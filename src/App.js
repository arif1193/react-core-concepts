import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks =['Anowar', 'Jafor', 'Alomgir','Manna', 'bappi', 'Shuvo','Alom']
  const products = [
    {name:'Photoshop', price:'$99.99'}, 
    {name:'Illustrator', price:'$60'},
     {name:'PDF Reader', price: '$6.99'},
     {name:'premiere ei', price: '$6.99'}
    ]
  
  return (
    <div className="App">
      <header className="App-header">
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Counter></Counter>
        <Users></Users>
        {/* analog */}
      {/* <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product> */}
       <p>I am a react person</p>
       <ul>
         {
           nayoks.map(nayok => <li>{nayok}</li>)
         }
         {
           products.map(product=> <li>{product.name}</li>)
         }
       </ul>
       
       <Person name='Arif' job='Odiance'></Person>
       <Person name='Masum' job='football'></Person>
       </header>
    </div>
  );
 }
 function Counter(){
  const [count, setCount] = useState(10);
  const handelIncrease =() => {
    // const newCount = count + 1;
    setCount(count + 1);
  };
   return(
     <div>
       <h2>Count: {count}</h2>
       <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
       <button onClick={() => setCount(count + 1)}>Increase</button>
     </div>
   )
 }
 function Users (){
   const [users, setUsers] = useState([]);
   useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data =>setUsers(data));
    },[])

   return(
     <div>
       <h3>Dynamic user:{users.length}</h3>
       <ul>
         {
           users.map(user=> <li>{user.name}, {user.email}</li>)
         }
       </ul>
     </div>
   )
 }

function Product(props) {
  const productStyle={
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor:'lightgreen',
    height:'250px',
    width:'200px',
    float:'left',
    margin:'20px'
}
const {name, price}= props.product;
return(
  <div style={productStyle}>
    <h3>{name}</h3>
    <h5>{price}</h5>
    <button style={{backgroundColor:'green', borderRadius:'5px'}}>Buy Now</button>
  </div>
)
}
function Person(props){
  return(
    <div style= {{border:'2px solid green', width:'200px', padding:'20px', margin:'10px', borderRadius:'5px'}} >
      <h3>My Name is: {props.name}</h3>
      <p>My Profession:{props.job} </p>
    </div>
  )
}
  
export default App;
