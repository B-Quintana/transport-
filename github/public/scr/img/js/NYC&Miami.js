import React from "react";
import { Navbar } from "./navbar";
import { Cards } from "./cards";
import { Jumbotron } from "./jumbotron";
let va =[ 
    " https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXPqxoR96IjRy5o1O1CUlRE1FlZJCBkLzd_d9bvFfn8qOSRUnI",
   "https://imgs.6sqft.com/wp-content/uploads/2017/10/25113913/L-train.jpg",
 " https://media.istockphoto.com/photos/subway-train-arriving-to-platform-harlem-manhattan-nyc-usa-picture-id694691542",
 "https://s.abcnews.com/images/US/subway-1-gty-file-ml-190524_hpMain_4x3_992.jpg",
 "https://upload.wikimedia.org/wikipedia/commons/7/70/Miami_Metrorail_Hitachi_train_20190117.jpg",
 "https://danphotographycool.files.wordpress.com/2013/01/dsc02866.jpg?w=848",
 "https://i.pinimg.com/originals/bb/0c/90/bb0c9020794a7bc80c5dc476f1ee5da4.jpg",
 "https://orenstransitpage.com/otpnycpics/r62int.jpg"

]
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />

			<div className="cards-group d-flex justify-content-center">
				{va.map((item, index) => (
					<Cards key={index} myimage={item} />
				))}
			</div>
		</>
	);
}