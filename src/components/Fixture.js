import React from "react";
import { Link } from "@reach/router";
import  {Table} from "reactstrap";
import Moment from "react-moment";

const Fixture = ({type, date, note,total_overs_played, status}) => {
  return (
    <div className="row mx-3 match-block-t20i">
      
      
      <div className="col-md-1  my-3">
        <p className="match-block_type">{type}</p>
      </div>
      <div className="col-md-2  match-block my-3">
        <Moment format="Do MMMM YYYY">{date}</Moment><br></br>
        <Moment format=" hh:mm:ss A" className="match-block-time">{date}</Moment>
      </div>
      <div className="col-md-4 my-3 ">
        <div className="row pl-3"> {note}</div>
        <div className="row total-overs-played pl-3">Total overs played : {total_overs_played}</div>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-2 my-3 ">
        <p className="match-block_status">{status}</p>
      </div>
     
    </div>
  );
};

export default Fixture;