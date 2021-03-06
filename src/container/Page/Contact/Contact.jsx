import React, {Component} from 'react';


class Contact extends Component {
	render(){
		return(
			<div className="body">
				<div className="page-title">
			        <h1>İletişim</h1>
			    </div>

			    <section id="contact-page">
			        <div className="container">
			            <div className="large-title text-center">
			                <h2>Mesajınızı bırakın. En kısa sürede size dönelim.</h2>
			                <p>All users on MySpace will know that there are millions of people out there. Every day besides so many people joining this community.</p>
			            </div>
			            <div className="row contact-wrap">

			                <form id="main-contact-form" className="contact-form" name="contact-form" method="post" action="sendemail.php">
			                    <div className="col-sm-5 col-sm-offset-1">
			                        <div className="form-group">
			                            <label>Adınız *</label>
			                            <input type="text" name="name" className="form-control" required="required"/>
			                        </div>
			                        <div className="form-group">
			                            <label>E-Mail adresiniz *</label>
			                            <input type="email" name="email" className="form-control" required="required"/>
			                        </div>
			                        <div className="form-group">
			                            <label>Telefon Numaranız</label>
			                            <input type="number" className="form-control"/>
			                        </div>
			                        <div className="form-group">
			                            <label>Şirket adı</label>
			                            <input type="text" className="form-control"/>
			                        </div>
			                    </div>
			                    <div className="col-sm-5">
			                        <div className="form-group">
			                            <label>Başlık *</label>
			                            <input type="text" name="subject" className="form-control" required="required"/>
			                        </div>
			                        <div className="form-group">
			                            <label>Mesajınız *</label>
			                            <textarea name="message" id="message" required="required" className="form-control" rows="8"></textarea>
			                        </div>
			                        <div className="form-group">
			                            <button type="submit" name="submit" className="btn btn-primary btn-lg" required="required">GÖNDER</button>
			                        </div>
			                    </div>
			                </form>
			            </div>
			        </div>
			    </section>
			</div>
		)
	}
}

export default Contact;