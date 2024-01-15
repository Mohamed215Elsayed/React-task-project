// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ErrorBoundary from './Components/ErrorBoundary';
// import Home from "./Components/Home/Home";
// import Parent from "./Components/Parent/Parent";
// import Gallary from "./Components/Gallary/Gallary";
// import Layout from "./Components/Layout/Layout";
// import About from "./Components/About/About";
// import Contacts from "./Components/Contacts/Contacts";
// import Notfound from "./Components/Notfound/Notfound";
// import Mobile from "./Components/Mobile/Mobile";
// import Web from "./Components/Web/Web";

// const App = () => {
//   return (
//     <>
//       <Router>
//         <ErrorBoundary>
//           <Routes>
//             <Route path="/" element={<Layout />}>
//               <Route path="/" element={<Home />} />
//               <Route path="/home" element={<Home />} />
//               <Route path="about" element={<About />} />
//               <Route path="contacts" element={<Contacts />} />
//               <Route path="gallary" element={<Gallary />}>
//                 <Route path="web" element={<Web />} />
//                 <Route path="mobile" element={<Mobile />} />
//               </Route>
//               <Route path="parent" element={<Parent />} />
//             </Route>
//             <Route path="*" element={<Notfound />} />
//           </Routes>
//         </ErrorBoundary>
//       </Router>
//     </>
//   );
// };
// export default App;
/********************* */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Parent from './Components/Parent/Parent';
import Gallary from './Components/Gallary/Gallary';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Notfound from './Components/Notfound/Notfound';
import Mobile from './Components/Mobile/Mobile';
import Web from './Components/Web/Web';

const createBrowserRouter = (routes) => {
  const renderRoutes = (routes) => {
    return routes.map((route) => {
      const { path, element, children } = route;
      return (
        <Route key={path} path={path} element={element}>
          {children && renderRoutes(children)}
        </Route>
      );
    });
  };

  return (
    <Router>
      <Routes>
        {renderRoutes(routes)}
      </Routes>
    </Router>
  );
};

const routers = createBrowserRouter([
  {
    path: 'home',
    element: <Layout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contacts', element: <Contacts /> },
      {
        path: 'gallary',
        element: <Gallary />,
        children: [
          { path: 'web', element: <Web /> },
          { path: 'mobile', element: <Mobile /> }
        ]
      },
      { path: 'parent', element: <Parent /> }
    ]
  },
  { path: '*', element: <Notfound /> }
]);

export default function App() {
  return (
    <>
      {routers}
    </>
  );
}