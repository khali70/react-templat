import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Nav from "./Component/Navbar/Navbar";
import Main from "./Component/Main";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
// import "./text.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route exact path="/" component={Main} />
      <Route path="/Contact" component={Contact} />
      <Footer />
    </BrowserRouter>
  );
}
/*
done-Create All Components place holder
doneCreat imge Folder
done-Use Router lib
donereact-Router reacr-router-dom
done fonst awosame
done install libs.
done Create JSON file for Data
====== Components ============  
done"Navbar" 
done"Home" 
done"Works" 
done"Profile" 
done"portofolio" 
TODO"About" 
TODO"Social Media" 
TODO"Footer" 
TODO"Contact"}
TODO scroll "react-scroll": "^1.7.16"


*/
export default App;
