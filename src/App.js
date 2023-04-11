// import logo from './logo.svg';
import './App.css';
// import HomePage from './Components/HomePage'
// import Projects from './Components/Projects'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Workshops from './Components/Workshops'
import Navbar  from './Components/Navbar'
import Landing from './Components/Landing'
import Project from './Components/Project'
import Events from './Components/Events'
// import MemberCard from './Components/MemberCard';
import Carousel from './Components/Carousel';
import AboutUs from './Components/AboutUs';
// import FAQ from './Components/FAQ';
import FaqDisplay from './Components/FaqDisplay';
import MemberDisplay from './Components/MemberDisplay';
// import MemberAll from './Components/MemberDisplay';
// import Loader from './Components/MemberDisplay';
import Projects from './Components/Projects'






function App() {

   return(
    <Router>
      <div className="App">
        
        <Navbar />
        <Switch>


          <Route exact path="/"  component={Landing}/>   
          <Route path="/Project" exact component={Project} />
          <Route path="/Events" component={Events} />
          <Route path="/Workshops" component={Workshops} />
          <Route path="/Gallery" component={Carousel} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/OurTeam" component={MemberDisplay} />
          <Route path="/FAQ" component={FaqDisplay} />
          
          {/* <Route path="/Workshops" component={Workshops} /> */}


        </Switch>
      </div>


    </Router>
    // <div>
    //   <MemberCard />
    // </div>
    
  );
}

export default App;
