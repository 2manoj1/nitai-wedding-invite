import React from "react";

const Weadingloaction = () => {
	return (
		<section className="section w-details-area center-text">
			<div className="container">
				<div className="row">
					<div className="col-sm-1"></div>
					<div className="col-sm-10">
						<div className="heading">
							<h2 className="title">Wedding & Reception Details</h2>
							<span className="heading-bottom">
								<i className="icon icon-star"></i>
							</span>
						</div>

						<div className="wedding-details margin-bottom">
							<div className="w-detail right">
								<i className="icon icon-ciurclke"></i>
								<h4 className="title">WEDDING CEREMONY</h4>
								<p>
									Monday, November 27<sup>th</sup>, 2023
								</p>
								<p>
									<i className="icon icon-email-plane"></i>
								</p>
								<p>Ekachali, Chhatna, Bankura</p>
								<p>
									<div className="map-responsive">
										<iframe
											src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3093.023384937014!2d86.88179728352031!3d23.316013691251666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1698305196034!5m2!1sen!2sin"
											width="600"
											height="450"
											style={{ border: 0 }}
											allowFullScreen=""
											loading="lazy"
											referrerPolicy="no-referrer-when-downgrade"></iframe>
									</div>
								</p>
							</div>

							{/* <div className="w-detail right">
								<i className="icon icon-wine-glass"></i>
								<h4 className="title">DINNER</h4>
								<p>Time: 7PM Onwards</p>
							</div> */}

							<div className="w-detail left">
								<i className="icon icon-cake"></i>
								<h4 className="title">RECEPTION PARTY</h4>
								<p>
									Tuesday, November 28<sup>th</sup>, 2023
								</p>
								<p>
									<i className="icon icon-email-plane"></i>
								</p>
								<p>Nekrakunda, Kamalpur, Bankura</p>
								<p>
									<div className="map-responsive">
										<iframe
											src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d987.7040713353294!2d86.85051559595333!3d23.29669409850306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1698305035587!5m2!1sen!2sin"
											width="600"
											height="450"
											style={{ border: 0 }}
											allowFullScreen=""
											loading="lazy"
											referrerPolicy="no-referrer-when-downgrade"></iframe>
									</div>
								</p>
							</div>

							<div className="w-detail left">
								<i className="icon icon-wine-glass"></i>
								<h4 className="title">DINNER</h4>
								<p>Time: 7:30 PM Onwards</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Weadingloaction;
