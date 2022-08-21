import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Dashboard from './pages/Dashboard';
import Budget from './pages/Budget/Budget';
import Gis from './pages/Gis/Gis';
import Map from './components/Map/Map';
import Backlog from './pages/Backlog/Backlog';
import Create from './pages/Backlog/create/Create';
import Createeconomic from './pages/Idp/Economicimpact/createeconomic/createeconomic';
import Createreporting from './pages/Idp/Standardreporting/createreporting/createreporting';
import Createperformance from './pages/Idp/Projectperformance/createperformance/createperformance';
import Createcouncillor from './pages/Councillor/Createcouncillor/Createcouncillor';
import Findbudget from './pages/Budget/Findbudget/Findbudget';
import Mscoa from './pages/Budget/Mscoa/Mscoa';
import Prioritisation from './pages/Budget/Prioritisation/Prioritisation';
import Prioritisation2 from './pages/Budget/Prioritisation2/Prioritisation2';
import Sourcesfunding from './pages/Budget/Sourcesfunding/Sourcesfunding';
import Facilitieslease from './pages/Budget/Sourcesfunding/Facilitieslease/Facilitieslease';
import Govt from './pages/Budget/Sourcesfunding/Govt/Govt';
import Loan from './pages/Budget/Sourcesfunding/Loan/Loan';
import Municipalitygrants from './pages/Budget/Sourcesfunding/Municipalitygrunts/Municipalitygrunts';
import Provincialgrants from './pages/Budget/Sourcesfunding/Provincialgrants/Provincialgrants';
import Publicdonations from './pages/Budget/Sourcesfunding/Publicdonations/Publicdonations';
import Reserves from './pages/Budget/Sourcesfunding/Reserves/Reserves';
import Selfgenrating from './pages/Budget/Sourcesfunding/Selfgenerating/Selfgenerating';
import Login from './pages/Login';
import Legislation from './pages/Legislation/Legislation';
import Unauthorised from './components/Unauthorized';
import Capture from './pages/Project/Capture/Capture';
import Giss from './components/gis/Giss';
import Councillor from './pages/Councillor/Councillor';
import Cosa from './pages/Legislation/Cosa/Cosa';
import Dora from './pages/Legislation/Dora/Dora';
import Mfma from './pages/Legislation/Mfma/Mfma';
import Msa from './pages/Legislation/Msa//Msa';
import Pfma from './pages/Legislation/Pfma/Pfma';
import Spluma from './pages/Legislation/Spluma/Spluma';
import Idp from './pages/Idp/Idp';
import Projects from './pages/Budget/Mscoa/Projects/Projects';
import Standardreporting from './pages/Idp/Standardreporting/Standardreporting';
import Projectperformance from './pages/Idp/Projectperformance/Projectperformance';
import Economicimpact from './pages/Idp/Economicimpact/Economicimpact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path='Backlog' element={<Backlog />} />
            <Route path="Unauthorised" element={<Unauthorised />} />
              <Route path="/Budget" element={<Budget />} />
              <Route path="/Gis" element={<Gis />} />
              <Route path="/Map" element={<Map />} />
              <Route path="/Cosa" element={<Cosa />} />
              <Route path="/Dora" element={<Dora />} />
              <Route path="/Mfma" element={<Mfma />} />
              <Route path="/Msa" element={<Msa />} />
              <Route path="/Pfma" element={<Pfma />} />
              <Route path="/Spluma" element={<Spluma />} />
              <Route path="/Idp" element={<Idp />} />
              <Route path="/Facilitieslease" element={<Facilitieslease />} />
              <Route path="/Standardreporting" element={<Standardreporting />} />
              <Route path="/Projectperformance" element={<Projectperformance />} />
              <Route path="/Economicimpact" element={<Economicimpact />} />
              <Route path="/Govt" element={<Govt />} />
              <Route path="/Loan" element={<Loan />} />
              <Route path="/Municipalitygrants" element={<Municipalitygrants />} />
              <Route path="/Provincialgrants" element={<Provincialgrants />} />
              <Route path="/Publicdonations" element={<Publicdonations />} />
              <Route path="/Reserves" element={<Reserves />} />
              <Route path="/Selfgenerating" element={<Selfgenrating />} />
              <Route path="/Backlog" element={<Backlog />} />
              <Route path="/Create" element={<Create />} />
              <Route path="/Createeconomic" element={<Createeconomic />} />
              <Route path="/Createreporting" element={<Createreporting />} />
              <Route path="/Createperformance" element={<Createperformance />} />
              <Route path="/Createcouncillor" element={<Createcouncillor />} />
              <Route path="/Capture" element={<Capture />} />
              <Route path="/Findbudget" element={<Findbudget />} />
              <Route path="/Mscoa" element={<Mscoa />} />
              <Route path="/Prioritisation" element={<Prioritisation />} />
              <Route path="/Prioritisation2" element={<Prioritisation2 />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Sourcesfunding" element={<Sourcesfunding />} />
              <Route path="/Legislation" element={<Legislation />} />
              <Route path="/Giss" element={<Giss />} />
              <Route path="/Councillor" element={<Councillor />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
