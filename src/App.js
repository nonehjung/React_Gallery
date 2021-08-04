// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;





import './App.css';
import AppHeader from './components/AppHeader';
import SuperstarItem from './components/SuperstarItem';
import SuperstarPost from './components/SuperstarPost';
import superstars from './data/superstars';

import React, { useState } from "react";
import AppSearch from './components/AppSearch';




function App() {

  const [selectedSuperstar, setSelectedSuperstar] = useState(null);
  const [searchText, setSearchtext] = useState('');


  function onSuperstarOpenClick(theSuperstar) {
    setSelectedSuperstar(theSuperstar);
  }


  function onSuperstarCloseClick() {
    setSelectedSuperstar(null);
  }




  const superstarElements = superstars.filter((superstar) => {
    return superstar.title.includes(searchText);
  }).map((superstar, index) => {
    return <SuperstarItem key={index} superstar ={superstar} onSuperstarClick={onSuperstarOpenClick} />;
  })



  let superstarPost = null;

  if (!!selectedSuperstar) {
      superstarPost = <SuperstarPost superstar={selectedSuperstar} onBgClick={onSuperstarCloseClick} />
  }



  return (

    <div className="app">

      <AppHeader />
      

      <section className="app-section">
        <div className="app-container">
        <AppSearch value={searchText} onValueChange={setSearchtext} />

    


            <div className="app-grid">

              {superstarElements}


            </div>


        </div>
      </section>

        

      {superstarPost}

        







    </div>



  );
}

export default App;






