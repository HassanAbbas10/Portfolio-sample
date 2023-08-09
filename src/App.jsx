import React from "react";
import { Container, Grid } from "@material-ui/core";
import "./App.css";
import Footer from "./Components/Footer/Footer.jsx";
import Header from "./Components/Header/Header.jsx";
import Portfol from "./Pages/Portfol/Portfol.jsx";
import Resume from "./Pages/Resume/Resume.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import { BrowserRouter as AppRouter, Route, Routes } from 'react-router-dom';


function App() {
 

  
  return (
 
    <AppRouter>
      <div>
         
        <Container className={"top_60"}>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <Profile />
            </Grid>
            <Grid item xs>
              <Header />
              <div className="main_content">
              
                  <Routes>
                    {/* <Route exact path="/portfol" element={<Portfol />} key='portfol' /> */}
                    <Route exact path="/portfol" element={<Portfol />} />
                    {/* <Route exact path="/" element={<Resume />} key='home' /> */}
                    <Route exact path="/" element={<Resume />} />
                  </Routes>

              </div>
              
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </div> 
      </AppRouter>
  );
}

export default App;
