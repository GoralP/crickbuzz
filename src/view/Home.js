import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import '../crickbuzz.css';
import cricketStadium from '../images/cricket_stadium.jpg'; 
import {Header, Menu, Player, Slider, Fixture, Livescore, Footer, News} from "../components";
import {showSlider, hideSlider} from "../redux/action"
import  {Table} from "reactstrap";
import crickbuzz from '../images/crickbuzz.PNG';
import Moment from "react-moment";

// import { useDispatch } from "react-redux";
import { fetchPlayers,fetchFixtures, fetchCountries, fetchLiveScores} from "../redux/action";
import { Collapse, Navbar,NavbarText, NavbarToggler,NavbarBrand,Nav, NavItem, NavLink,Button } from 'reactstrap';


const Home = () =>{

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

     const dispatch = useDispatch();

     const [showHome, setShowHome] = useState(true);

     const [showFixture, setShowFixture] = useState(false);

     const [showplayers, setShowPlayers] = useState(false);

     const [showcountry, setShowCountry] = useState(false);

     const [showLivescore, setShowLivescore] = useState(false);

    const { loading, players, loding, fixtures, run, country, countries,livescore, livescores } = useSelector(state => ({
        loading: state.playersReducer.loading,
        players: state.playersReducer.players,
        loding: state.playersReducer.fixture.loading,
        fixtures: state.playersReducer.fixture.fixtures,
        runs: state.playersReducer.fixture.fixtures,
        country: state.playersReducer.country.loading,
        countries: state.playersReducer.country.countries,
        livescore: state.playersReducer.livescore.loading,
        livescores: state.playersReducer.livescore.livescores
    }));

   

    return (
        <div className="">
            <div>
                <Header></Header>
            </div>
           
            <div className=" mt-1">
                <Slider></Slider>
            </div>

            <div>
                <Navbar  light expand="md header">
                   
                    <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            {/* <Nav className="mr-auto" navbar></Nav> */}
                            <NavbarText className="pr-3 text-white ml-5 menubar" onClick={() => {setShowHome(true);setShowLivescore(false);setShowCountry(false);setShowPlayers(false);setShowFixture(false)}}>Home</NavbarText>

                            <NavbarText className="pr-3 menubar text-white" onClick={() => {dispatch(fetchLiveScores());setShowHome(false);setShowLivescore(true);setShowCountry(false);setShowPlayers(false);setShowFixture(false)}}>Live Scores</NavbarText>
                            <NavbarText className="pr-3 menubar text-white" onClick={() => {dispatch(fetchCountries());setShowHome(false);setShowLivescore(false);setShowCountry(true);setShowPlayers(false);setShowFixture(false)}}>Players</NavbarText>
                            
                            
                            <NavbarText className="pr-3 menubar text-white" onClick={() => {dispatch(fetchFixtures());setShowHome(false);setShowLivescore(false);setShowFixture(true);setShowPlayers(false);setShowCountry(false)}}>Fixtures</NavbarText>
                        </Collapse>
                    </Navbar>
            </div>

            { showHome &&
                <News></News>
            }   
            
            { showcountry &&  
                <div className="row mx-3 mt-3 border pl-2 shadow ">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="row ml-5">
                            {countries !== null &&
                                countries.map(list => (
                                <div className="col-md-2 mt-3 mx-2 country-name" onClick={() => {dispatch(fetchPlayers(list.id));setShowCountry(false);setShowPlayers(true);setShowFixture(false)}}>{list.name}</div>
                            ))}
                        </div>
                    )}
                </div>
            }       


            { showplayers &&  
                <div className="row mx-3 mt-3 border pl-2 shadow ">
                    <div className="row bg-secondary"><button>Back to home</button></div>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                    <div className="row">
                        
                            {players !== null && 
                                players.map(list => ( 
                                <Player
                                    image_path={list.image_path}
                                    fullname={list.fullname}
                                    position = {list.position.name}
                                    dateofbirth={list.dateofbirth}
                                    // gender = {list.gender}
                                />
                            ))}
                        </div>
                    )}
                </div>
            }       


        { showFixture &&        
            <div className=" mt-3 pl-5 border pl-2 shadow ">
            {/* <div className="row ml-5 mt-3  pl-2 "> */}
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        {fixtures !== null &&
                        fixtures.map(list => (
                            <Fixture
                                type={list.type}
                                date={list.starting_at}
                                note={list.note}
                                total_overs_played={list.total_overs_played}
                                status={list.status}
                            /> 
                            // <div className="row">   
                            
                            

                            // <Livescore
                            // seasonName={list.season.name}
                            // venue={list.venue.name}
                            // updated_at={list.runs.updated_at}
                            // type={list.type}
                            // localteamName={list.localteam.name}
                            // visitorteamName={list.visitorteam.name}
                            
                            // score={list.score}
                            // wickets={list.runs.wickets}
                            // over={list.runs.over}
                            // note={list.note}
                                
                            // />  
                        //  </div>
                        ))}
                    </>  
                )}
            </div>
        } 

        
        { showLivescore &&        
            // <div className=" mt-3 pl-5 border pl-2 shadow ">
            <div className="row ml-5 mt-3  pl-2 ">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        {fixtures !== null &&
                        fixtures.map(list => (
                            <Livescore
                            seasonName={list.season.name}
                            venue={list.venue.name}
                            updated_at={list.runs.updated_at}
                            type={list.type}
                            localteamName={list.localteam.name}
                            visitorteamName={list.visitorteam.name}
                            score={list.score}
                            wickets={list.runs.wickets}
                            over={list.runs.over}
                            note={list.note}
                                
                        />  
                        //  </div>
                        ))}
                    </>  
                )}
            </div>
        } 
    <Footer></Footer>
    </div>
    );
}

export default Home;
