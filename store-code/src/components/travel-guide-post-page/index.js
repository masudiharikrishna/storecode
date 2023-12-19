import { Component } from "react";
import "./index.css"
import { FaChevronCircleLeft } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";


class TravelGuidePostPage extends Component{
    state={
        day1 : true,
        day2: false,
        day3: false,
        day4: false,
    }

    day1buttonclicked = () =>{
        this.setState({day1: true, day2:false, day3:false, day4:false})
    }

    day2buttonclicked = () =>{
        this.setState({day1: false, day2:true, day3:false, day4:false})
    }

    day3buttonclicked = () =>{
        this.setState({day1: false, day2:false, day3:true, day4:false})
    }

    day4buttonclicked = () =>{
        this.setState({day1: false, day2:false, day3:false, day4:true})
    }

    render(){
        const {day1, day2, day3, day4} = this.state

        return(
            <div className="travel-guide-post-page-container">
                <div className="explore-nav-bar">
                <FaChevronCircleLeft color="rgb(229, 8, 152)" size={30}/>
                <h1 className="heading-span">EXPLORE</h1> 
                <IoPerson color="rgb(229, 8, 152)" size={30}/>
                </div>
                <iframe
                id="youtubeFrame"
                width="90%" 
                height="190" 
                src="https://www.youtube.com/embed/G4rNQCu28EI?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1" 
                frameborder="0" 
                allowfullscreen
                ></iframe>
                <p className="value">RS.2,49,999/person</p>
                <div class="travel-guide-button-container">
                    <button class={day1 ?"active-day" : "travel-guide-button"} onClick={this.day1buttonclicked}>Day 1</button>
                    <button class={day2 ?"active-day" : "travel-guide-button"} onClick={this.day2buttonclicked}>Day 2</button>
                    <button class={day3 ?"active-day" : "travel-guide-button"} onClick={this.day3buttonclicked}>Day 3</button>
                    <button class={day4 ?"active-day" : "travel-guide-button"} onClick={this.day4buttonclicked}>Day 4</button>
                </div>
                <h1 class="travel-guide-heading">Detailed itinerary for 4-day trip to Himachal Pradesh</h1>
                    {day1 && <div className="posts-container">
                        <div className="post-descriptions-container">
                            <p className="post-time">7:00 AM</p>
                            <p className="post-paragraph">Book Journey to Shimla</p>
                            <div className="post-image-container">
                                <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703005117/Makemytrip-coupons_snbu4f.jpg" className="travel-guide-image"/>
                                <p className="post-paragraph">Exclusive Flight Offer - unleash Your Wanderlust with MakeMyTrip. Get ₹1500/- off flight bookings.</p>
                                <div className="rate-select-container">
                                    <p>Rs.14,999/person</p>
                                    <button className="select-button">#GFDS5879</button>
                                </div>
                            </div>
                        </div>
                        <div className="post-descriptions-container">
                            <p className="post-time">2:30 PM</p>
                            <p className="post-paragraph">Accomodation at Snow valley Resort</p>
                            <div className="post-image-container">
                                <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703008676/download_anqhhx.jpg" className="travel-guide-image"/>
                                <p className="post-paragraph">Discover Unique Stays with Airbnb - Unlock 20% Savings on Your Next Getaway.</p>
                                <div className="rate-select-container">
                                    <p>Rs.2,999/night</p>
                                    <button className="select-button">#FRGI6584</button>
                                </div>
                            </div>
                        </div>
                        <div className="post-descriptions-container">
                            <p className="post-time">4:00 PM</p>
                            <p className="post-paragraph">Explore Attraction to Shimla temple</p>
                            <div className="post-image-container">
                                <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703009354/pngtree-india-travel-background-cartoon-temple-poster-picture-image_1339685_euge0w.png" className="travel-guide-image"/>
                                <p className="post-paragraph">BookMyShow Presents: Wander for free - Your Passport to Limitless Adventures.</p>
                                <div className="rate-select-container">
                                    <p>Free</p>
                                    <button className="select-button">#GFYE2549</button>
                                </div>
                            </div>
                        </div>
                        <div className="post-descriptions-container">
                            <p className="post-time">8:00 PM</p>
                            <p className="post-paragraph">Dinner at Himachali Rasoi</p>
                            <div className="post-image-container">
                                <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703009639/Snacks_1_igco39.jpg" className="travel-guide-image"/>
                                <p className="post-paragraph">Magicpin Presents: Culinary Delights Await - Dine in Style at Your Favourite Restaurant upto 50% off</p>
                                <div className="rate-select-container">
                                    <p>Rs. 499/person</p>
                                    <button className="select-button">#YFGO6849</button>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {day2 && <div className="posts-container">
                        <div className="post-descriptions-container">
                            <p className="post-time">9:00 AM</p>
                            <p className="post-paragraph">Book Cabs for the entire day</p>
                            <div className="post-image-container">
                                <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703010407/istockphoto-1390171105-612x612_offpt1.jpg" className="travel-guide-image"/>
                                <p className="post-paragraph">Unlock the Ride of a Lifetime with Uber - Now 10% off on Cab Bookings</p>
                                <div className="rate-select-container">
                                    <p>Rs.159/Ride</p>
                                    <button className="select-button">#HFOP6984</button>
                                </div>
                            </div>
                        </div>
                        <div className="post-descriptions-container">
                            <p className="post-time">1:00 PM</p>
                            <p className="post-paragraph">Explore Attraction to Himalayan Nature Park</p>
                            <div className="post-image-container">
                                <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703009354/pngtree-india-travel-background-cartoon-temple-poster-picture-image_1339685_euge0w.png" className="travel-guide-image"/>
                                <p className="post-paragraph">BookMyShow Presents: Wander for free - Your Passport to Limitless Adventures.</p>
                                <div className="rate-select-container">
                                    <p>Free</p>
                                    <button className="select-button">#TFGS5644</button>
                                </div>
                            </div>
                        </div>
                        <div className="post-descriptions-container">
                            <p className="post-time">3:00 PM</p>
                            <p className="post-paragraph">Explore Adventure at Kufri fun World</p>
                            <div className="post-image-container">
                                <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703010827/employee-wealth-creation-opportunities-and-financial-education-for-employees-at-paytm_fycesp.png" className="travel-guide-image"/>
                                <p className="post-paragraph">Experience Fun World Magic with Paytm Tickets - Enjoy 15% off on Tickets</p>
                                <div className="rate-select-container">
                                    <p>Rs.1399/person</p>
                                    <button className="select-button">#REDS9842</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>}
                    {day3 && <div className="posts-container">
                        <div className="post-descriptions-container">
                            <p className="post-time">12:00 PM</p>
                            <p className="post-paragraph">Accomodation at Tiaraa Hotels & Resorts</p>
                            <div className="post-image-container">
                                <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703008676/download_anqhhx.jpg" className="travel-guide-image"/>
                                <p className="post-paragraph">Discover Unique Stays with Airbnb - Unlock 20% Savings on Your Next Getaway.</p>
                                <div className="rate-select-container">
                                    <p>Rs.5,999/night</p>
                                    <button className="select-button">#FEJU1269</button>
                                </div>
                            </div>
                        </div>
                        <div className="post-descriptions-container">
                            <p className="post-time">2:00 PM</p>
                            <p className="post-paragraph">Lunch at Reniassance</p>
                            <div className="post-image-container">
                                <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703009639/Snacks_1_igco39.jpg" className="travel-guide-image"/>
                                <p className="post-paragraph">Magicpin Presents: Culinary Delights Await - Dine in Style at Your Favourite Restaurant upto 50% off</p>
                                <div className="rate-select-container">
                                    <p>Rs.299/person</p>
                                    <button className="select-button">#TUOP7823</button>
                                </div>
                            </div>
                        </div>
                        <div className="post-descriptions-container">
                            <p className="post-time">4:00 PM</p>
                            <p className="post-paragraph">Explore Attraction to Manu Temple & Manaslu River</p>
                            <div className="post-image-container">
                                <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703009354/pngtree-india-travel-background-cartoon-temple-poster-picture-image_1339685_euge0w.png" className="travel-guide-image"/>
                                <p className="post-paragraph">BookMyShow Presents: Wander for free - Your Passport to Limitless Adventures.</p>
                                <div className="rate-select-container">
                                    <p>Free</p>
                                    <button className="select-button">#RHGR5697</button>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {day4 && <div className="posts-container">
                    <div className="post-descriptions-container">
                            <p className="post-time">10:10 AM</p>
                            <p className="post-paragraph">Explore Attraction to Solong valley & Rohtang Pass</p>
                            <div className="post-image-container">
                                <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703009354/pngtree-india-travel-background-cartoon-temple-poster-picture-image_1339685_euge0w.png" className="travel-guide-image"/>
                                <p className="post-paragraph">BookMyShow Presents: Wander for free - Your Passport to Limitless Adventures.</p>
                                <div className="rate-select-container">
                                    <p>Free</p>
                                    <button className="select-button">#RTUK4210</button>
                                </div>
                            </div>
                        </div>
                        <div className="post-descriptions-container">
                            <p className="post-time">2:00 PM</p>
                            <p className="post-paragraph">Dinner at Leaf Restaurant</p>
                            <div className="post-image-container">
                                <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703009639/Snacks_1_igco39.jpg" className="travel-guide-image"/>
                                <p className="post-paragraph">Magicpin Presents: Culinary Delights Await - Dine in Style at Your Favourite Restaurant upto 50% off</p>
                                <div className="rate-select-container">
                                    <p>Rs.399/person</p>
                                    <button className="select-button">#EFEO2145</button>
                                </div>
                            </div>
                        </div>
                        <div className="post-descriptions-container">
                            <p className="post-time">11:00 PM</p>
                            <p className="post-paragraph">Book Return Journey to Bengaluru</p>
                            <div className="post-image-container">
                                <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703005117/Makemytrip-coupons_snbu4f.jpg" className="travel-guide-image"/>
                                <p className="post-paragraph">Exclusive Flight Offer - unleash Your Wanderlust with MakeMyTrip. Get ₹1500/- off flight bookings.</p>
                                <div className="rate-select-container">
                                    <p>Rs.12,999/person</p>
                                    <button className="select-button">#TUJH2145</button>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        )
    }
}
export default TravelGuidePostPage