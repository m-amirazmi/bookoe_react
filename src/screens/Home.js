import MainLayout from "../layouts/MainLayout";

export default function Home() {
	return (
		<MainLayout>
			<div className="container mt-4">
				<div className="row">
					<div className="col-md-9">
						<div style={{ position: "relative", height: "500px", width: "100%", borderRadius: "24px", background: "#F2F0FE" }}>
							<div style={{ position: "relative", height: "100%" }}>
								<img
									src={require("../assets/images/home-hero/circle-orange.svg").default}
									alt="circle-orange"
									style={{ width: "350px", position: "absolute", right: "0px", borderTopRightRadius: "24px" }}
								/>
								<img
									src={require("../assets/images/home-hero/circle-purple.svg").default}
									alt="circle-purple"
									style={{ width: "300px", position: "absolute", bottom: "0px", left: "0px", transform: "translate(130%, 0%)" }}
								/>
								<img
									src={require("../assets/images/home-hero/dots-2.svg").default}
									alt="dots-2"
									style={{ position: "absolute", bottom: "0px", left: "0px", transform: "translate(670%, -160%)" }}
								/>
								<img
									src={require("../assets/images/home-hero/dots-1.svg").default}
									alt="dots-1"
									style={{ position: "absolute", top: "0px", left: "0px", transform: "translate(100%, 100%)" }}
								/>
							</div>
							<div style={{ position: "absolute", top: "0px", left: "0px", width: "500px", transform: "translate(16%, 40%)" }}>
								<h6 className="text-primary" style={{ letterSpacing: "2px", fontSize: "12px" }}>
									BACK TO SCHOOL
								</h6>
								<h2 style={{ fontWeight: "700", fontSize: "50px" }}>Special 50% Off</h2>
								<h4>for our student community</h4>
								<p style={{ fontSize: "12px" }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris
								</p>
								<div>
									<button className="shadow btn btn-primary px-3 py-2">
										<span>Get the deal</span>
									</button>
									<button className="btn">
										<span className="text-dark">See other promos</span>
									</button>
								</div>
								<div className="mt-5 d-flex gap-2">
									<div style={{ width: "8px", height: "8px", borderRadius: "24px", cursor: "pointer", background: "#D7D0FB" }}></div>
									<div className="bg-primary" style={{ width: "8px", height: "8px", borderRadius: "24px", cursor: "pointer" }}></div>
									<div style={{ width: "8px", height: "8px", borderRadius: "24px", cursor: "pointer", background: "#D7D0FB" }}></div>
									<div style={{ width: "8px", height: "8px", borderRadius: "24px", cursor: "pointer", background: "#D7D0FB" }}></div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="bg-grey-1" style={{ height: "500px", width: "100%", borderRadius: "24px" }}></div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
