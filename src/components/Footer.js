import React from "react";
import { Link } from "@reach/router";
import  {Table} from "reactstrap";
import Moment from "react-moment";
import crickbuzzFooter from '../images/crickbuzz_footer.PNG';

const Footer = ({type, date, note,total_overs_played, status}) => {
  return (
    <div className="footer mt-3" >
      <div>
         <div className="container">
            <div className="row pt-4" >

               <div className="col-sm-2 ">
                  <div className="row">
               <img  src={crickbuzzFooter} alt="crickbuzz"/>
               </div>
               </div>


               <div className="col-sm-2 footer-font" >
                  <ul className="footer-menu" >
                     <li><h4 className="menu-title footer-list" >CRICKET</h4></li>
                     <li>Live Scores Index</li>
                     <li>Men's Results</li>
                     <li>Women's Results</li>
                     
                  </ul>
               </div>
               <div className="col-sm-2 footer-font" >
                  <ul className="footer-menu" >
                     <h4 className="menu-title footer-list" >EVENTS</h4>
                     <li>Cricket World Cup</li>
                     <li>T20 World Cup</li>
                     <li>Champions Trophy</li>
                     <li>Women's World Cup</li>
                  </ul>
               </div>

               <div className="col-sm-2 footer-font" >
                  <ul className="footer-menu" >
                     <h4 className="menu-title footer-list" >RANKINGS</h4>
                     <li>Overview</li>
                     <li>Team Rankings</li>
                     <li>Player Rankings</li>
                     <li>Rankings Predictor</li>
                     <li>About the Rankings</li>
                     <li>Rankings FAQs</li>
                  </ul>
               </div>
               <div className="col-sm-2 footer-font" >
                  <ul className="footer-menu" >
                     <h4 className="menu-title footer-list" >NEWS</h4>
                     <li>News Index</li>
                     <li>Media Releases</li>
                     <li>Video Home</li>
                     <li>Photos</li>
                  </ul>
               </div>
               <div className="col-sm-2 footer-font" >
                  <ul className="footer-menu" >
                     <h4 className="menu-title footer-list" >MORE</h4>
                     <li>ICC on Social</li>
                     <li>Awards</li>
                     <li>Hall of Fame</li>
                     <li>ICC on Mobile</li>
                     <li>About ICC</li>
                     <li>MediaZone</li>
                     <li>T20 Shop</li>
                  </ul>
               </div>
            </div>
            
            <div className="row">
               <div className="col-md-2"></div>
               <div className="col-md-9 footer-copyright mb-4">© 2020 Cricbuzz.com, Times Internet Limited. All rights reserved | The Times of India | Navbharat Times</div>
            </div>
         </div>
      </div>
     
   </div>
  );
};

export default Footer;