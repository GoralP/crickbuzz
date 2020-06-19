import React from "react";
import Moment from "react-moment";

const Livescore = ({ seasonName, venue, starting_at,localteamName,visitorteamName,runs ,note,  }) => {
  
    return (
        <>
            
            <div className="col-md-5 livescore-block-com mt-3 livescore py-2 border" >
                <div className="row ">
                    <div className="col-md-12 livescore-season">
                        Season {seasonName}
                    </div>
                </div> 

                <div className="row livescore-venue pt-2">
                    <div className="col-md-8 livescore-venue-date">{venue}, <Moment format="Do MMMM YYYY">{starting_at}</Moment></div>
                    <div className="col-md-4"><span className="livescore-block_type px-2 py-1">RESULT</span></div>  
                </div>

                <div className="row livescore-scoreboard mt-3 pb-2">
                    <div className="col-md-8">
                        <div className="">{localteamName}</div>
                        <div className="">{visitorteamName}</div>
                    </div>
                    <div className="col-md-4 font-weight-bold">
                        {runs.map(item => (
                            <>
                                <div className="">{item.score}/{item.wickets} ({item.overs})</div>
                            </>
                        ))} 
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 pt-2">
                        {note}
                    </div>
                </div>
           
            </div>
        </>
    );
};

export default Livescore;