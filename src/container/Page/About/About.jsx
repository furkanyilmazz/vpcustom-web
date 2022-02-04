import React, {Component} from 'react';
import Team from '../../../component/Team/Team';

class About extends Component {
	render(){
		return(
			<div className="body">
				<div className="page-title">
			        <h1>Hakkımızda</h1>
			    </div>

			    <section id="about-us">
			        <div className="container">
			            <div className="row">
			                <div className="col-md-7">
			                    <div className="about-img">
			                        <img src="https://demo.themeum.com/html/corlate/images/about-img.png" alt=""/>
			                    </div>
			                </div>
			                <div className="col-md-5">
			                    <div className="about-content">
			                        <h2>Biz kimiz?</h2>
			                        <p>Photographs are a way of preserving a moment in our lives for the rest of our lives. Many of us have at least been tempted at the flashy array of photo printers which seemingly leap off the shelves at even the least tech-savvy. It surely seems old fashioned to talk about 35mm film and non-digital cameras in today’s day and age.</p>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>


			    <section id="middle" className="skill-area">
			        <div className="container">
			            <div className="row">
			                <div className="col-sm-12 fadeInDown">
			                    <div className="skill">
			                        <h2>Deneyimimiz</h2>
			                        <p>All users on MySpace will know that there are millions of people out there. Every day besides so many people joining this community.</p>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>


			    <section id="team-area">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Ekibimiz</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>
			            <div className="row">
			                <Team
			                	img="https://demo.themeum.com/html/corlate/images/team1.png"
			                	name="İsmail AYAN"
			                	job="Pleksi Ustası"
			                	facebook="#"
			                />
			                <Team
			                	img="https://demo.themeum.com/html/corlate/images/team2.png"
			                	name="Ömer KAPLAN"
			                	job="Yancı"
			                	facebook="#"
			                />
							   <Team
			                	img="https://demo.themeum.com/html/corlate/images/team2.png"
			                	name="Aleyna AYAN"
			                	job="Big Boss"
			                	facebook="#"
			                />

			            </div>
			        </div>
			    </section>
			</div>
		)
	}
}

export default About;