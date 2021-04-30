import logo from './logo.svg';
import './App.css';
import Posts from "./components/posts";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <div className="container-fluid">
           <NavBar />
           <div className="container">
               <div className="content">
                   <Switch>
                       <Route path="/posts" component={Posts} />}
                       />
                       <Route path="/" exact component={Home} />
                       <Route component={NotFound}/>
                   </Switch>
               </div>
           </div>
         </div>

  );
}

export default App;
