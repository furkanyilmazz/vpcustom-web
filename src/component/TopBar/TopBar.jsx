import React from 'react';
const TopBar = () => {
	return (
		<div className="top-bar">
				            <div className="container">
				                <div className="row">
				                    <div className="col-sm-6 col-xs-12">
				                        <div className="top-number">
				                            <p><i className="fa fa-phone-square"></i> +90 534 200 79 37</p>
				                        </div>
				                    </div>
				                    <div className="col-sm-6 col-xs-12">
				                        <div className="social">
				                            <ul className="social-share">
				                                <li><a href="#f"><i className="fa fa-facebook"></i></a></li>
				                                <li><a href="#f"><i className="fa fa-twitter"></i></a></li>
				                               {
											   //<li><a href="#f"><i className="fa fa-linkedin"></i></a></li>
											   }
				                            </ul>
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </div>
	)
}

export default TopBar;