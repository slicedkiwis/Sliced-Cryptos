import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import {Footer,Header} from './components'
import {Home,Coins,Exchanges,About,News,More} from './components/Pages'
import "./app.css";
const App = () => {
  const [lightMode,setLightMode] = useState(false);
  return( 
    <>
      <Header lightMode = {lightMode} setLightMode={setLightMode}/>
      <Routes>
          <Route path = '/' element = {<Home mode ={lightMode}/>}></Route>
          <Route path = 'coins' element = {<Coins mode ={lightMode}/>}></Route>
          <Route path = 'exchanges' element = {<Exchanges mode ={lightMode}/>}></Route>
          <Route path = 'about' element = {<About mode ={lightMode}/>}></Route>
          <Route path = 'news' element = {<News mode ={lightMode}/>}></Route>
          <Route path = 'More' element = {<More mode ={lightMode}/>}></Route>
      </Routes>
      <Footer mode = {lightMode}></Footer>
    </>
  )};

export default App;
