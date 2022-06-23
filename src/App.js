import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import MainPage from './components/MainPage';
import Description from './components/Mainpage/Description/Description';
import Home from './components/Mainpage/Home';
import Rent from './components/Mainpage/menu/Rent';
import Buy from './components/Mainpage/menu/Buy';
import PreOrder from './components/Mainpage/menu/PreOrder';
import MovieBox from './components/Mainpage/menu/MovieBox/MovieBox';
import Bond from './components/Mainpage/menu/Bond';
import Premiere from './components/Mainpage/menu/Premiere';
import Voucher from './components/Mainpage/Voucher';
import Picks from './components/Mainpage/Store/Picks';
import Under3 from './components/Mainpage/Store/Under3';
import Under4 from './components/Mainpage/Store/Under4';
import Under5 from './components/Mainpage/Store/Under5';
import SpringSet from './components/Mainpage/Store/SpringSet';
import TVSet from './components/Mainpage/Store/TVSet';
import Startrek from './components/Mainpage/Store/Startrek';
import Gift from './components/Mainpage/Gift';
import Popular from './components/Mainpage/TV/Popular';
import NewStore from './components/Mainpage/TV/NewStore';
import Drama from './components/Mainpage/TV/Drama';
import Comedy from './components/Mainpage/TV/Comedy';
import Kids from './components/Mainpage/TV/Kids';
import All from './components/Mainpage/TV/All';
import AtoZ from './components/Mainpage/menu/AtoZ';
import Filmchart from './components/Mainpage/menu/FilmChart';


function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<MainPage />}>
            <Route index element={<Home />} />

            <Route path='description/:id' element={<Description />} />

            {/* Movies Tab */}
            <Route path='/rent' element={<Rent />} />
            <Route path='/buy' element={<Buy />} />
            <Route path='/preorder' element={<PreOrder />} />
            <Route path='/moviebox' element={<MovieBox />} />
            <Route path='/bond' element={<Bond />} />
            <Route path='/filmchart' element={<Filmchart />} />
            <Route path='/atoz' element={<AtoZ />} />
            {/* End Movies Tab */}


            <Route path='/prem' element={<Premiere />} />

            {/* Sale Tab */}
            <Route path='/picks' element={<Picks />} />
            <Route path='/under3' element={<Under3 />} />
            <Route path='/under4' element={<Under4 />} />
            <Route path='/under5' element={<Under5 />} />
            <Route path='/set' element={<SpringSet />} />
            <Route path='/tvset' element={<TVSet />} />
            <Route path='/set' element={<SpringSet />} />
            <Route path='/startrek' element={<Startrek />} />
            {/* End Sale Tab */}


            <Route path='/gift' element={<Gift />} />

            {/* TV Tab */}
            <Route path='/popular' element={<Popular />} />
            <Route path='/newstore' element={<NewStore />} />
            <Route path='/drama' element={<Drama />} />
            <Route path='/comedy' element={<Comedy />} />
            <Route path='/kids' element={<Kids />} />
            <Route path='/all' element={<All />} />
            {/* End TV Tab */}


            <Route path='/redeem' element={<Voucher />} />

            
          </Route>
          <Route path='/signin' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
