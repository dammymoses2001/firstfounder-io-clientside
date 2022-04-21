import { combineReducers } from "redux";
import Team from "./teamReducer";
import Partners from "./PartnerReducer";
import Testimonials from "./TestimonialReducer";
import Blogs from "./BlogReducer";
import ClientProjects from "./ClientProjectsReducer";
import UpcomingEvents from "./UpcomingEventReducer";
import MediaMentions from "./MediaMentionReducer";
import Presses from "./PressReducer";
import HubLocations from "./HubsLocationReducer";
import Investor from "./InvestorReducer";
import Mentor from "./MentorReducer";
import Founder from "./FounderReducer";
import RSVPInvitation from "./RSVPInvitationReducer";
import FutureMaker from "./FutureMakerReducer";
import HubForm from "./HubFormReducer";
import PartnersHub from "./PartnersHubReducer";
import Enrol from "./EnrolReducer";
import StartAProject from "./StartAProjectReducer";
import Notification from "./NotificationReducer";
import Subscribe from "./SubscribeReducer";
import Comment from "./CommentReducer";
import Connect from "./ConnectToUsReducer";
import Developer from "./DeveloperReducer";
import PitchDeck from "./PitchDeckReducer";
import Sendinblue from "./Sendinblue";
import OpenPosition from "./OpenPositionReducer";
import Application from "./ApplicationReducer";

const rootReducer = combineReducers({
  getTeam: Team,
  Partners: Partners,
  Testimonials: Testimonials,
  Blogs: Blogs,
  ClientProjects: ClientProjects,
  UpcomingEvents: UpcomingEvents,
  MediaMentions: MediaMentions,
  Presses: Presses,
  HubLocations: HubLocations,
  Investor: Investor,
  Mentor: Mentor,
  Founder: Founder,
  RSVPInvitation: RSVPInvitation,
  FutureMaker: FutureMaker,
  HubForm: HubForm,
  PartnersHub: PartnersHub,
  Enrol: Enrol,
  StartAProject: StartAProject,
  Notification: Notification,
  Subscribe: Subscribe,
  Comment: Comment,
  Connect: Connect,
  Developer: Developer,
  PitchDeck: PitchDeck,
  Sendinblue: Sendinblue,
  OpenPosition: OpenPosition,
  Application: Application,
});
export default rootReducer;
