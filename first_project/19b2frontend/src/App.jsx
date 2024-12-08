import './App.css';
import SearchComponent from './component/SearchTheComponentGet';
// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>Hi from Adid Really cool
//       <FirstComponent />
//       <Checkbox defaultChecked />
//       <Checkbox />
//       <Checkbox disabled />
//       <Checkbox disabled checked />
//     </>




//     // <>
//     //   <div>
//     //     <a href="https://vitejs.dev" target="_blank">
//     //       <img src={viteLogo} className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://react.dev" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div>
//     //   <h1>Vite - React</h1>
//     //   <div className="card">
//     //     <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button>
//     //     <p>
//     //       Edit <code>src/App.jsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p>
//     // </>
//   )
// }

// export default App

function App() {
  // // Define the label object
  // // const label = {};
  // // const Name = "adid";
  // const roll = "2004082"
  // const fname = "mainoor rahman"
  // const array = ['banana', 'apple', 'orange'];
  // //creating an object:
  // const studentDetails = {
  //   id: "2004082",
  //   name: "adid rahman",
  //   number: 23,
  // }
  // const arrSDD = [{
  //   id: "2004082",
  //   name: "adid rahman",
  //   number: 23432343242,
  // },
  // {
  //   id: "2004082",
  //   name: "nanjiba mahi",
  //   number: 23432343242,
  // },
  // ]
  // //creating a function:
  // function test() {
  //   return "test value";
  // }
  // const arrSD = [
  //   1, 2
  // ]
  // //creating a function:
  // function test() {
  //   return "test value";
  // }

  // return (
  //   <>
  //     {/* <FirstComponent info={roll} fname={fname} fruits={array} sd={studentDetails} test={test()} aSD={arrSD} aSDD={arrSDD} /> */}
  //     {/* <Condit ionalComponent condition={1} /> */}
  //     {/* <FirstComponent /> */}
  //     {/* <ClickComponent /> */}


  //   </>


  // <>
  //   Hi from Adid Really cool
  //   <Component301024 > </Component301024>
  //   <Component301024 />

  //   {name === "did" ? (<Component301024 />) : (<FirstComponent></FirstComponent>)}
  //   <FirstComponent />

  //   {/* Use FormControlLabel to associate labels with checkboxes */}
  //   <FormControlLabel
  //     control={<Checkbox {...label} defaultChecked />}
  //     label="Default Checked"
  //   />

  //   <FormControlLabel
  //     control={<Checkbox {...label} />}
  //     label="Unchecked"
  //   />

  //   <FormControlLabel
  //     control={<Checkbox {...label} disabled />}
  //     label="Disabled"
  //   />

  //   <FormControlLabel
  //     control={<Checkbox {...label} disabled checked />}
  //     label="Disabled Checked"
  //   />
  // </>
  // );
  // const products = [
  //   { product_id: 1, product_tag: "shirt", product_name: "Casual Shirt", price: 25.99, discount: 5 },
  //   { product_id: 2, product_tag: "three piece", product_name: "Formal Suit", price: 199.99, discount: 20 },
  //   { product_id: 3, product_tag: "bag", product_name: "Leather Bag", price: 79.99, discount: 10 },
  //   { product_id: 4, product_tag: "shirt", product_name: "T-Shirt", price: 15.99, discount: 2 },
  //   { product_id: 5, product_tag: "three piece", product_name: "Wedding Suit", price: 299.99, discount: 25 },
  //   { product_id: 6, product_tag: "bag", product_name: "Backpack", price: 49.99, discount: 5 },
  //   { product_id: 7, product_tag: "shirt", product_name: "Polo Shirt", price: 35.99, discount: 7 }
  // ];

  // return (
  //   <>
  //     {/* <FirstComponent /> */}
  //     <ShoppingComponent arrProd={products} />
  //   </>
  // );
  // return (
  //   <>
  //     {/* <FirstComponent /> */}
  //     <ConditionalRendering />
  //   </>
  // );

  return (
    <>
      <SearchComponent />
    </>
  );  

}

export default App;
