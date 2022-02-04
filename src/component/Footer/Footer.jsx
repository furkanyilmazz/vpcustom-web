import React from 'react';
// eslint-disable-next-line
//eslint-disable no-unused-vars

import Logo from "../../assets/logo.png"
const Footer = () => {
	return (
		<div>
			<section id="bottom"  >
			    <div className="container fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
			        <div className="row">
			            <div className="col-md-2">
			               <a href="#ff" className="footer-logo">
			                    <img src={Logo} alt="VPCustom"/>
			                </a>
			            </div>
			            <div className="col-md-10">
			                <div className="row">
			                    <div className="col-md-5 col-sm-3">
			                        <div className="widget">
			                            <h3>KURUMSAL</h3>
			                            <ul>
			                                <li><a href="#f">Hakkımızda</a></li>
			                                <li><a href="#f">Kullanım Şartları</a></li>
			                                <li><a href="#f">Gizlilik Politikası</a></li>
			                                <li><a href="#f">Bize Ulaşın</a></li>
			                            </ul>
			                        </div>
			                    </div>

			                    <div className="col-md-5 col-sm-3">
			                        <div className="widget">
			                            <h3>ÜRÜNLER</h3>
			                            <ul>
			                                <li><a href="#f">VP Custom Aksesuarları</a></li>
			                                <li><a href="#f">Motor Camları</a></li>
			                                <li><a href="#f">Motor Teyp</a></li>
			                            </ul>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			     </div>
			</section>

			<div id="footer" className="midnight-blue">
			    <div className="container">
			        <div className="row">
			            <div className="col-sm-12 text-center">
			                &copy; 2022 <a target="noreferrer" href="http://cmnsoftware.com/" title="CMNSoftware Teknoloji Ltd. Şti.">CMNSoftware</a>. Tüm hakları saklıdır.
			            </div>
			        </div>
			    </div>
			</div>
		</div>
	)
}

export default Footer;