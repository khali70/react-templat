import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Nav from "./Component/Navbar/Navbar";
import Main from "./Component/Main";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
// import "./text.css";
//basename="react-templat/"
function App() {
  return (
    <BrowserRouter basename="react-templat/">
      <Nav />
      <Route exact path="/" component={Main} />
      <Route path="/Contact" component={Contact} />
      <Footer />
    </BrowserRouter>
  );
}
/*TODO rwact router root path
/react-templat
Create All Components place holder
Creat imge Folder
Use Router lib
react-Router reacr-router-dom
fonst awosame
install libs.
Create JSON file for Data
====== Components ============  
"Navbar" 
"Home" 
"Works" 
"Profile" 
"portofolio" 
"About" 
"Social Media" 
"Footer" 
"Contact"}
TODO scroll "react-scroll": "^1.7.16"


*/
export default App;
