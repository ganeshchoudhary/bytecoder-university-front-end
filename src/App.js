import './App.css';
 import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
// import Header from './bizbud/header';
// import Background from './bizbud/background';
// import Home from './bizbud/home';
// import  Services from './bizbud/services';
// import Container3 from './bizbud/cont3';
// import About from './bizbud/about';
// import Testimonials from './bizbud/testimonials';
// import Clients from './bizbud/clients';
// import Contact from './bizbud/contact';
import Header from './resumebuild/header';
import Homepage from './resumebuild/home';

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Background/>
//      <Home/>
//      <Services/>
//      <Container3/>
//      <About/> 

//     </div>
//   );
// }
// export default App;

// export default function App() {
//   return (
//     <div> <Header/>
//     <BrowserRouter>
//       <Routes>
      
//           <Route path='/'element={<Background/>}/>
//           <Route path='/home' element={<Home />} />
//           <Route path='/service' element={<Services/>} />
//           <Route path='/about' element={<About/>}/>
//           <Route path='/testimonials' element={<Testimonials/>}/>
//           <Route path='/clients' element={<Clients/>}/>
//           <Route path='/contact' element={<Contact/>}/>
//       </Routes>
//     </BrowserRouter>
//   </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
export default function App() {
   return (
       <div> 
        <Header/>
       <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Homepage/>}/>
        </Routes>
   </BrowserRouter>
   </div>
   );
 }
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);