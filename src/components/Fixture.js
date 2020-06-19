import React from "react";
import Moment from "react-moment";

const Fixture = ({type, date, note,localteamName,visitorteamName,runs,status}) => {
  return (
    <div className="container-fluid">
    <div className="row match-block-t20i">
      <div className="col-md-1  my-3">
        <p className="match-block_type">{type}</p>
      </div>

      <div className="col-md-3  match-block my-3">
        <Moment format="Do MMMM YYYY">{date}</Moment><br></br>
        <Moment format=" hh:mm:ss A" className="match-block-time">{date}</Moment>
      </div>

      <div className="col-md-6 my-3 ">
        <div className="row">
          <div className="col-md-4 ">
            <div className="row pl-3 match-block-localteam">{localteamName}</div>
            <div className="row pl-3 match-block-localteam">{visitorteamName}</div>
          </div>
          <div className="col-md-4 ">
            {runs.map(item => (
              <>
              
                <div className="row pl-3 match-block-runs">{item.score}/{item.wickets}</div>
              </>
            ))}
          </div>
        </div>
        <div className="row pl-3 mt-1"> {note}</div>
      </div>
     
      <div className="col-md-2 my-3 ">
        <p className="match-block_status">{status}</p>
      </div>
     </div>
    </div>
  );
};

export default Fixture;