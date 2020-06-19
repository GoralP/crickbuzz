import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import '../crickbuzz.css';
import {Header, Player, Slider, Fixture, Livescore, Footer, News} from "../components";
import { fetchPlayers,fetchFixtures, fetchCountries} from "../redux/action";
import { Collapse, Navbar,NavbarText, NavbarToggler } from 'reactstrap';
import { Link } from '@reach/router';


const Home = () =>{

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const dispatch = useDispatch();

    const [showHome, setShowHome] = useState(true);

    const [showFixture, setShowFixture] = useState(false);

    const [showplayers, setShowPlayers] = useState(false);

    const [showcountry, setShowCountry] = useState(false);

    const [showLivescore, setShowLivescore] = useState(false);

    function backToHome(){
        setShowCountry(true);
        setShowPlayers(false);
    }

    const { loading, players, fixtures, countries } = useSelector(state => ({
        loading: state.playersReducer.loading,
        players: state.playersReducer.players,
        fixtures: state.playersReducer.fixture.fixtures,
        countries: state.playersReducer.country.countries,
    }));

    return (
        <div className="">
            <div className="">
                <Header></Header>
            </div>
           
            <div className=" mt-1">
                <Slider></Slider>
            </div>

            <div>
                <Navbar  light expand="md header">
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <NavbarText className="pr-3 text-white ml-5 menubar" onClick={() => {setShowHome(true);setShowLivescore(false);setShowCountry(false);setShowPlayers(false);setShowFixture(false)}}><Link to ="/" className="text-white">Home</Link></NavbarText>

                        <NavbarText className="pr-3 menubar text-white" onClick={() => {dispatch(fetchFixtures());setShowLivescore(true);setShowHome(false);setShowCountry(false);setShowPlayers(false);setShowFixture(false)}}><Link to ="/livescore" className="text-white">Live Scores</Link></NavbarText>

                        <NavbarText className="pr-3 menubar text-white" onClick={() => { dispatch(fetchCountries());setShowHome(false);setShowLivescore(false);setShowCountry(true);setShowPlayers(false);setShowFixture(false)}}><Link to ="/player" className="text-white">Players</Link></NavbarText>
                            
                        <NavbarText className="pr-3 menubar text-white" onClick={() => {dispatch(fetchFixtures());setShowHome(false);setShowLivescore(false);setShowFixture(true);setShowPlayers(false);setShowCountry(false)}}><Link to ="/fixture" className="text-white">Fixtures</Link></NavbarText>
                    </Collapse>
                </Navbar>
            </div>

            {showHome &&
                <News></News>
            }   
            
            { showcountry &&  
                <div className="row mx-3 mt-3 border pl-2 shadow ">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="col-md-12">
                            <div className="row ">
                                {countries !== null &&
                                    countries.map(list => (
                                    <div className="col-md-2 mt-3 country-block country-name" onClick={() => {dispatch(fetchPlayers(list.id));setShowCountry(false);setShowPlayers(true);setShowFixture(false)}}>{list.name}</div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            }       


            {showplayers && 
                <div className="row mx-3 mt-3 border pl-2 shadow">
                    <div className="mt-1 "><button className="back-to-home" onClick={backToHome}>Back to home</button></div>
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
                                />
                            ))}
                        </div>
                    )}
                </div>
            }       


            {showFixture &&        
                <div className=" mt-3  border pl-2 shadow ">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <>
                            {fixtures !== null &&
                            fixtures.map(list => (
                                <Fixture
                                    type={list.type}
                                    date={list.starting_at}
                                    localteamName={list.localteam.name}
                                    visitorteamName={list.visitorteam.name}
                                    runs={list.runs}
                                    note={list.note}
                                    total_overs_played={list.total_overs_played}
                                    status={list.status}
                                /> 
                            ))}
                        </>  
                    )}
                </div>
            } 

        
            {showLivescore && 
            <div className="container-fluid">
                <div className="row livescore-block mt-3  pl-2 ">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <>
                            {fixtures !== null &&
                            fixtures.map(list => (
                                <Livescore
                                    seasonName={list.season.name}
                                    venue={list.venue.name}
                                    starting_at={list.starting_at}
                                    runs={list.runs}
                                    type={list.type}
                                    localteamName={list.localteam.name}
                                    visitorteamName={list.visitorteam.name}
                                    runs={list.runs}
                                    note={list.note}
                                /> 
                            ))}
                        </>  
                    )}
                </div>
                </div>
            } 

        <Footer></Footer>
    </div>
    );
}

export default Home;
