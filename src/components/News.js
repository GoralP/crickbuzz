import React from "react";

import pakistan_tour from '../images/pakistan_tour.PNG';
import cricket_australia from '../images/cricket_australia.PNG';
import leadership from '../images/leadership.PNG';
import others from '../images/others.PNG';
import wahab from '../images/wahab.PNG';
import roach from '../images/roach.PNG';
import eksteen from '../images/eksteen.PNG';
import zampa from '../images/zampa.PNG';


const News = () => {
  return (
      <div className="container-fluid ">
        <div className="row cb-news-main-block"> 
            <div className="col-md-8 cricket-all-news cb-news-main-block ">
                <div className="row mt-3 ml-1">
                    <div className="col-md-7 cricket-news">
                        Cricket News and Editorials
                    </div>
                </div>

                <div className="row mx-1 mt-3 cb-news-block">
                    <div className="col-md-4 "><img className="news-image" src={pakistan_tour} alt="crickbuzz"/></div>
                    <div className="col-md-8 ">
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">PAKISTAN TOUR OF ENGLAND, 2020</div>
                        </div>
                        <div className="row">
                            <div className=" col-md-12 cb-news-headline mb-2">Zaman admits feeling overconfident before slump in form</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">Pakistan opener stressed he's worked on his technique and now hopes to gain his spot back in the squad</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time">1h ago</div>
                        </div> 
                    </div>
                </div>


                <div className="row mx-1 mt-3 cb-news-block">
                    <div className="col-md-4"><img className="news-image" src={cricket_australia} alt="crickbuzz"/></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">CRICKET AUSTRALIA TURMOIL</div>
                        </div>
                        <div className="row">
                            <div className=" col-md-12 cb-news-headline mb-2">Eddings desires 'better communication' as new CA leadership try to undo the knot</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">CA chairman said improving scenarios around Australia may help "reshape" controversial measures, including several staff redundancies</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time">5h ago</div>
                        </div> 
                    </div>
                </div>

                <div className="row mx-1 mt-3 cb-news-block">
                    <div className="col-md-4"><img className="news-image" src={leadership} alt="crickbuzz"/></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">LEADERSHIP CHANGE</div>
                        </div>
                        <div className="row">
                            <div className=" col-md-12 cb-news-headline mb-2">Nick Hockley takes over as interim Cricket Australia Chief Executive</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">The outgoing Kevin Roberts officially tendered his resignation on June 16</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time">1d ago</div>
                        </div> 
                    </div>
                </div>


                <div className="row mx-1 mt-3 cb-news-block">
                    <div className="col-md-4"><img className="news-image" src={others} alt="crickbuzz"/></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">AUSTRALIA CRICKET NEWS</div>
                        </div>
                        <div className="row">
                            <div className=" col-md-12 cb-news-headline mb-2">Under-pressure Kevin Roberts left facing the axe</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">Ironically, the rapidly improving scenario in Australia with regards to its response to COVID-19 has only put Roberts on even worse footing</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time">1d ago</div>
                        </div> 
                    </div>
                </div>


                <div className="row mx-1 mt-3 cb-news-block">
                    <div className="col-md-4"><img className="news-image" src={wahab} alt="crickbuzz"/></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">TEST RETURN</div>
                        </div>
                        <div className="row">
                            <div className=" col-md-12 cb-news-headline mb-2">Pakistan needed me, it was time to repay: Wahab on retirement reversal</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">The Pakistan pacer announced a surprise retirement from Test cricket and now wants to make a comeback after being approached by the PCB</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time">1d ago</div>
                        </div> 
                    </div>
                </div>


                <div className="row mx-1  mt-3 cb-news-block">
                    <div className="col-md-4"><img className="news-image" src={roach} alt="crickbuzz"/></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">WEST INDIES TOUR OF ENGLAND, 2020</div>
                        </div>
                        <div className="row">
                            <div className=" col-md-12 cb-news-headline mb-2">Roach 'excited' to work with West Indies' young aces</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">The veteran fast bowler noted that the pace battery would look to unsettle the England batting unit in the upcoming Test series with pace and aggression</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time">2d ago</div>
                        </div> 
                    </div>
                </div>

                <div className="row mx-1  mt-3 cb-news-block">
                    <div className="col-md-4"><img className="news-image" src={eksteen} alt="crickbuzz"/></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">TROUBLE FOR CSA</div>
                        </div>
                        <div className="row">
                            <div className=" col-md-12 cb-news-headline mb-2">Clive Eksteen to charge CSA with unfair dismissal</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">Sacked as sales and sponsorship head, Eksteen has decided to bring a case for unfair dismissal at the Commission for Conciliation</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time">15h ago</div>
                        </div> 
                    </div>
                </div>

                <div className="row mx-1  mt-3 ">
                    <div className="col-md-4"><img className="news-image" src={zampa} alt="crickbuzz"/></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">ONGOING INVESTIGATION</div>
                        </div>
                        <div className="row">
                            <div className=" col-md-12 cb-news-headline mb-2">Nenzani promised imminent progress on Moroe probe</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time mb-2">The saga has been a yoke around the neck of the game since Moroe was suspended on claims of misconduct in the first week of December</div>
                        </div>  
                        <div className="row">
                            <div className="col-md-12 cb-news-time">6h ago</div>
                        </div> 
                    </div>
                </div>
            </div>


            <div className="col-md-4 ">
                <div className="row schedule-all shadow ml-2 mr-1 pb-5"> 
                    <div className="row mt-3 ml-1">
                        <div className="col-md-7 cricket-news schedule-match-block">
                            SCHEDULE
                        </div>
                    </div>

                    <div className="row mt-3 mx-2 cb-news-block">
                        <div className="col-md-12 schedule-match">
                            England vs Australia, 1st T20I
                        </div>
                        <div className="col-md-12 schedule-match-time">
                        Fri Jul 03 • 11:00 PM GMT
                        </div>
                    </div>

                    <div className="row mt-3 mx-2 cb-news-block">
                        <div className="col-md-12 schedule-match">
                        Netherlands vs Pakistan, 1st ODI
                        </div>
                        <div className="col-md-12 schedule-match-time">
                        Sat Jul 04 • 2:30 PM GMT
                        </div>
                    </div>

                    <div className="row mt-3 mx-2 cb-news-block">
                        <div className="col-md-12 schedule-match">
                        England vs Australia, 2nd T20I
                        </div>
                        <div className="col-md-12 schedule-match-time">
                        Sun Jul 05 • 9:30 PM GMT
                        </div>
                    </div>

                    <div className="row mt-3 mx-2 cb-news-block">
                        <div className="col-md-12 schedule-match">
                        England vs Australia, 3rd T20I
                        </div>
                        <div className="col-md-12 schedule-match-time">
                        Tue Jul 07 • 11:00 PM GMT
                        </div>
                    </div>

                    <div className="row mt-3 mx-2 cb-news-block">
                        <div className="col-md-12 schedule-match">
                        Netherlands vs Pakistan, 2nd ODI
                        </div>
                        <div className="col-md-12 schedule-match-time">
                        Tue Jul 07 • 2:30 PM GMT
                        </div>
                    </div>

                    <div className="row mt-3 mx-2 cb-news-block">
                        <div className="col-md-12 schedule-match">
                            West Indies vs New Zealand, 1st ODI
                        </div>
                        <div className="col-md-12 schedule-match-time">
                        Wed Jul 08 • 7:30 PM GMT
                        </div>
                    </div>  

                    <div className="row mt-3 mx-2 cb-news-block">
                        <div className="col-md-12 schedule-match">
                        England vs West Indies, 1st Test, Day 1
                        </div>
                        <div className="col-md-12 schedule-match-time">
                        Wed Jul 08 • 3:30 PM GMT
                        </div>
                    </div>  

                     <div className="row mt-3 mx-2 cb-news-block">
                        <div className="col-md-12 schedule-match">
                        West Indies vs New Zealand, 1st ODI
                        </div>
                        <div className="col-md-12 schedule-match-time">
                        Tue Jul 07 • 11:00 PM GMT
                        </div>
                    </div>   

                     <div className="row mt-3 mx-2 cb-news-block">
                        <div className="col-md-12 schedule-match">
                        England vs West Indies, 1st Test, Day 1
                        </div>
                        <div className="col-md-12 schedule-match-time">
                        Wed Jul 08 • 3:30 PM GMT
                        </div>
                    </div>   

                     <div className="row mt-3 mx-2 cb-news-block">
                        <div className="col-md-12 schedule-match">
                        Netherlands vs Pakistan, 1st ODI
                        </div>
                        <div className="col-md-12 schedule-match-time">
                        Tue Jul 07 • 2:30 PM GMT
                        </div>
                    </div>       

                    <div className="row mt-3 mx-2 cb-news-block">
                        <div className="col-md-12 schedule-match">
                        England vs West Indies, 1st Test, Day 1
                        </div>
                        <div className="col-md-12 schedule-match-time">
                        Wed Jul 08 • 3:30 PM GMT
                        </div>
                    </div>  

                    <div className="row mt-3 mx-2 cb-news-block">
                        <div className="col-md-12 schedule-match">
                        West Indies vs New Zealand, 1st ODI
                        </div>
                        <div className="col-md-12 schedule-match-time">
                        Tue Jul 07 • 11:00 PM GMT
                        </div>
                    </div>   

                    <div className="row mt-3 mx-2 cb-news-block">
                        <div className="col-md-12 schedule-match">
                        Netherlands vs Pakistan, 1st ODI
                        </div>
                        <div className="col-md-12 schedule-match-time">
                        Tue Jul 07 • 2:30 PM GMT
                        </div>
                    </div>    

                    <div className="row mt-3 mx-2 cb-news-block">
                        <div className="col-md-12 schedule-match">
                        England vs West Indies, 1st Test, Day 1
                        </div>
                        <div className="col-md-12 schedule-match-time">
                        Wed Jul 08 • 3:30 PM GMT
                        </div>
                    </div> 
                </div>
            </div>
        </div> 
    </div>
  );
};

export default News;