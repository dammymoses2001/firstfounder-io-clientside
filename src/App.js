import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import WhatWeDo from "./Pages/WhatWeDo";
import VentureBooth from "./Pages/VentureBooth";
import FoundersVentureBooth from "./Pages/FoundersVentureBooth";
import FoundersInResidencs from "./Pages/FoundersInResidencs";
import MVPAcceleration from "./Pages/MVP-Acceleration";
import Built from "./Pages/Founders-In-Residence-Program";
import HowitWorks from "./Pages/HowitWorks";
import MeetTheTeam from "./Pages/MeetTheTeam";
import Contact from "./Pages/Contact";
import Press from "./Pages/Press";
import Blog from "./Pages/Blog";
import BlogRead from "./Pages/BlogRead";
import Career from "./Pages/Careers";
import MentoringProgram from "./Pages/MentoringProgram";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  //useSelector,
  useDispatch,
} from "react-redux";
//

import {
  TeamAction,
  PartnersAction,
  TestimonialsAction,
  BlogsAction,
  ClientProjectsAction,
  UpcomingEventsAction,
  MediaMentionAction,
  PressAction,
  HubLocationsAction,
  OpenPositionAction,
} from "./Redux/actions";

//aos
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TeamAction());
    dispatch(PartnersAction());
    dispatch(TestimonialsAction());
    dispatch(BlogsAction());
    dispatch(ClientProjectsAction());
    dispatch(UpcomingEventsAction());
    dispatch(MediaMentionAction());
    dispatch(PressAction());
    dispatch(HubLocationsAction());
    dispatch(OpenPositionAction());
  }, [dispatch]);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/whatwedo" component={WhatWeDo} />
      <Route exact path="/venturebooth" component={VentureBooth} />
      <Route exact path="/team" component={MeetTheTeam} />
      <Route exact path="/foundersinresidenceprogram" component={Built} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/mvp" component={MVPAcceleration} />
      <Route exact path="/howitworks" component={HowitWorks} />
      <Route exact path="/press" component={Press} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/:id/:title" component={BlogRead} />
      <Route
        exact
        path="/ventureboothapplication"
        component={FoundersVentureBooth}
      />
      <Route
        exact
        path="/venturefoundersinresidence"
        component={FoundersInResidencs}
      />
      <Route exact path="/careers" component={Career} />
      <Route exact path="/mentoringprogram" component={MentoringProgram} />
      {/* <Route exact path="/careers/:position" component={CareerPosition} /> */}
    </Switch>
  );
}

export default App;
