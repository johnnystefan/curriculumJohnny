import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from "../components/Info";
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import useGetData from '../hocks/useGetData';

const GlobalStyle = createGlobalStyle `
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background: rgba(223,233,241,0.94);
background: -moz-linear-gradient(45deg, rgba(223,233,241,0.94) 0%, rgba(223,233,241,0.95) 13%, rgba(255,255,255,0.97) 32%, rgba(223,233,241,0.98) 39%, rgba(223,233,241,0.98) 47%, rgba(255,255,255,1) 60%, rgba(248,250,252,1) 65%, rgba(223,233,241,1) 82%, rgba(223,233,241,1) 91%);
background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(223,233,241,0.94)), color-stop(13%, rgba(223,233,241,0.95)), color-stop(32%, rgba(255,255,255,0.97)), color-stop(39%, rgba(223,233,241,0.98)), color-stop(47%, rgba(223,233,241,0.98)), color-stop(60%, rgba(255,255,255,1)), color-stop(65%, rgba(248,250,252,1)), color-stop(82%, rgba(223,233,241,1)), color-stop(91%, rgba(223,233,241,1)));
background: -webkit-linear-gradient(45deg, rgba(223,233,241,0.94) 0%, rgba(223,233,241,0.95) 13%, rgba(255,255,255,0.97) 32%, rgba(223,233,241,0.98) 39%, rgba(223,233,241,0.98) 47%, rgba(255,255,255,1) 60%, rgba(248,250,252,1) 65%, rgba(223,233,241,1) 82%, rgba(223,233,241,1) 91%);
background: -o-linear-gradient(45deg, rgba(223,233,241,0.94) 0%, rgba(223,233,241,0.95) 13%, rgba(255,255,255,0.97) 32%, rgba(223,233,241,0.98) 39%, rgba(223,233,241,0.98) 47%, rgba(255,255,255,1) 60%, rgba(248,250,252,1) 65%, rgba(223,233,241,1) 82%, rgba(223,233,241,1) 91%);
background: -ms-linear-gradient(45deg, rgba(223,233,241,0.94) 0%, rgba(223,233,241,0.95) 13%, rgba(255,255,255,0.97) 32%, rgba(223,233,241,0.98) 39%, rgba(223,233,241,0.98) 47%, rgba(255,255,255,1) 60%, rgba(248,250,252,1) 65%, rgba(223,233,241,1) 82%, rgba(223,233,241,1) 91%);
background: linear-gradient(45deg, rgba(223,233,241,0.94) 0%, rgba(223,233,241,0.95) 13%, rgba(255,255,255,0.97) 32%, rgba(223,233,241,0.98) 39%, rgba(223,233,241,0.98) 47%, rgba(255,255,255,1) 60%, rgba(248,250,252,1) 65%, rgba(223,233,241,1) 82%, rgba(223,233,241,1) 91%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dfe9f1', endColorstr='#dfe9f1', GradientType=1 );
  }
`;

const App = () => {
  const data = useGetData();
  console.log(data);
  
  return data.length === 0 ? <h1>Cargando..</h1> : (
    <Main>
      <GlobalStyle/>
      <Sidebar>
        <About
          avatar={data.data.avatar}
          name={data.data.name}
          profession={data.data.profession}
          bio={data.data.bio}
          address={data.data.address}
          social={data.data.social}
        />
      </Sidebar>
     <Info>
        <Education
          data={data.data.education}
        />
        <Experience
          data={data.data.experience}
        />
        <Certificates
          data={data.data.certificate}
        />
        <Skills
          data={data.data.skills}
        />
      </Info>
    </Main>
  );
}

export default App;