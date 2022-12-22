
import './App.css';
import RootLayout from './Components/Layouts/RootLayout';
import {createBrowserRouter, RouterProvider, useParams} from 'react-router-dom'
import Home from './Components/Home/Home';
import All from './Components/All/All';
import AuthLayout from './Components/Layouts/AuthLayout';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import PC from './Components/Platform/PC';
import Browser from './Components/Platform/Browser';
import Popularity from './Components/SortBy/Popularity/Popularity';
import ReleaseDate from './Components/SortBy/Release-Date/ReleaseDate';
import Alphabetical from './Components/SortBy/Alphabetical/Alphabetical';
import Relevance from './Components/SortBy/Relevance/Relevance';
import Action from './Components/Categories/Action';
import BattleRoyal from './Components/Categories/BattleRoyal';
import ActionRPG from './Components/Categories/ActionRPG';
import FLight from './Components/Categories/FLight';
import Fantasy from './Components/Categories/Fantasy';
import Zombie from './Components/Categories/Zombie';
import OpenWorld from './Components/Categories/OpenWorld';
import Shooter from './Components/Categories/Shooter';
import Social from './Components/Categories/Social';
import Sports from './Components/Categories/Sports';
import Racing from './Components/Categories/Racing';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';


function App() {



let routes=createBrowserRouter([
  {path:'/', element:<ProtectedRoute><RootLayout/></ProtectedRoute>, children:[
    {index:true, element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'home', element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'all', element:<ProtectedRoute><All/></ProtectedRoute>},
    {path:'details/:id', element:<ProtectedRoute><ItemDetails/></ProtectedRoute>},
    {path:"release-date", element:<ProtectedRoute><ReleaseDate/></ProtectedRoute>},
    {path:"popularity", element:<ProtectedRoute><Popularity/></ProtectedRoute>},
    {path:"alphabetical", element:<ProtectedRoute><Alphabetical/></ProtectedRoute>},
    {path:"relevance", element:<ProtectedRoute><Relevance/></ProtectedRoute>},
    {path:'pc', element:<ProtectedRoute><PC/></ProtectedRoute>},
    {path:'browser', element:<ProtectedRoute><Browser/></ProtectedRoute>},
    {path:'action', element:<ProtectedRoute><Action/></ProtectedRoute>},
    {path:'battle-royale', element:<ProtectedRoute><BattleRoyal/></ProtectedRoute>},
    {path:'action-rpg', element:<ProtectedRoute><ActionRPG/></ProtectedRoute>},    
    {path:'popularity', element:<ProtectedRoute><Popularity/></ProtectedRoute>},
    {path:'flight', element:<ProtectedRoute><FLight/></ProtectedRoute>},
    {path:'fantasy', element:<ProtectedRoute><Fantasy/></ProtectedRoute>},
    {path:'zombie', element:<ProtectedRoute><Zombie/></ProtectedRoute>},
    {path:'open-world', element:<ProtectedRoute><OpenWorld/></ProtectedRoute>},
    {path:'shooter', element:<ProtectedRoute><Shooter/></ProtectedRoute>},
    {path:'social', element:<ProtectedRoute>\<Social/></ProtectedRoute>},
    {path:'sports', element:<ProtectedRoute><Sports/></ProtectedRoute>},
    {path:'racing', element:<ProtectedRoute><Racing/></ProtectedRoute>},
    {path:'*', element:<><h1>404</h1><h2>Page Not Found</h2></>}

  ]},
{path:'/', element:<AuthLayout/>, children:[
  {index:true, element:<Signin/>},
  {path:'/signin', element:<Signin/>},
  {path:'/signup', element:<Signup/>},
]},
])

  return (
    <>
   <RouterProvider router={routes}/>

   
    </>
  );
}

export default App;
