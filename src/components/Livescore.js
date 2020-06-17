import React from "react";

const Livescore = ({ seasonName, venue, updated_at,type,localteamName,visitorteamName,score, wickets,over,note }) => {
  return (
    // <div className="row">
    //     <div className="card-body pl-5">
    //         <div className="row">
    //             <div className="col-12">
    //                 Season {seasonName}
    //             </div>
    //             <div className="row livescore-scoreboard">
    //                 <div className="col-8">
    //                     <div className="mb-5">{venue},{updated_at}</div>
    //                     <div>{localteamName}</div>
    //                     <div>{score}/{wickets} ({over})</div>
    //                 </div>
    //                 <div className="col-4">
    //                     <div className="mb-5">{type}</div>
    //                     <div>{visitorteamName}</div>
    //                     <div>{score}/{wickets} ({over})</div>
    //                 </div>
    //             </div>
    //             <div className="col-12">
    //                {note}
    //             </div>
    //         </div>
    //     </div>
    // </div>
<>
    {/* <div className="row border mt-3"> */}
        <div className="col-5 mx-3 mt-3 livescore py-2 border">
            <div className="row ">
                <div className="col-12 livescore-season">
                    Season {seasonName}
                </div>
            </div> 
            <div className="row livescore-venue pt-2">
              <div className="col-md-9 livescore-venue-date">{venue},{updated_at}</div>
              <div className="col-md-3"><span className="livescore-block_type px-2 py-1">RESULT</span></div>  
            </div>
            <div className="row livescore-scoreboard mt-3 pb-2">
                <div className="col-9">
                    {/* <div className="border">{venue},{updated_at}</div> */}
                    <div className="">{localteamName}</div>
                    <div className="">{visitorteamName}</div>
                </div>
                <div className="col-3 ">
                    {/* <div className=" border">{type}</div> */}
                    <div className="">{score}/{wickets} ({over})</div>
                    <div className="">{score}/{wickets} ({over})</div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 pt-2">
                   {note}
                </div>
            </div>
        </div>
    {/* </div> */}
</>

  );
};

export default Livescore;