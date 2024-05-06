import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
 console.log(pizzaData);



function App(){
  return(
<div className='container'>
  <Header/>
  <Menu />
  <Footer/>
  </div>
  );
  }

  function Header(){
    // const style={color:'red', fontSize:'45px', textTransform:'uppercase', fontWeight:'bold'};
    // return <h1 style ={style}> Welcome to Pizzas World!</h1>
    const style={};
    return ( 
    <header className='header'>
      <h1 style ={style}> Welcome to Pizzas World!</h1>
      </header>
    );

  }

  function Menu(){
    return (
    <main className='menu'>
    <h2> Our Menu </h2>
  
   <Pizza name='pizzas/spinaci' ingredient='Tomato, mozarella, spinach, and ricotta cheese' price={300} photoName='pizzas/spinaci.jpg'/>
    <Pizza name='pizzas/funghi' ingredient='Tomato, moz mushroom potato' price={400 } photoName='pizzas/funghi.jpg'/>
    <Pizza name='pizzas/focaccia' ingredient='Tomato, muhroom, meant  sausage' price={430} photoName='pizzas/focaccia.jpg'/>

    <Pizza name='pizzas/margherita' ingredient='Tomato, mozarella' price={200} photoName='pizzas/margherita.jpg'/>
    <Pizza name='pizzas/prosciutto' ingredient='Tomato, mozarella, ham, aragula, and burrata cheese' price={500} photoName='pizzas/prosciutto.jpg'/>
    <Pizza name='pizzas/salamino' ingredient='Tomato, mozarella, and pepperoni' price={350} photoName='pizzas/salamino.jpg'/>
  
    
    
    
  </main>
    );

  }

 
  function Footer(){
    return(
      <footer className='footer'>
        {new Date().toLocaleTimeString()} we 're currently open</footer>
    );

  }







    // const hour=new Date().getHours();
    // const openHour=8;
    // const closeHour=22;

    // const isOpen=hour>=openHour && hour <= closeHour;
    // console.log(isOpen);
    // if(hour>=openHour && hour<=closeHour) alert('welcome our guest');
    // else alert('sorry we are closed');
    // // console.log(hour);
  //   return (
  //   <div>
  //   <footer>{new Date().toLocaleTimeString()}</footer>
  //   <h1> we are currently open</h1>
  //   </div>
  //   )
  // }




  function Pizza(props){
     console.log(props);
// 
    return(
    <div className='pizza'>
    <img src={props.photoName}/> 
  <h2>{props.name}</h2>
  <p>{props.ingredient}</p>
  <p>{props.price}</p>
  <p>{props.soldOut}</p>
</div>



  )}

  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>

      <App />
    </React.StrictMode>
  );
  React.render(<App/>, document.getElementById("root"));