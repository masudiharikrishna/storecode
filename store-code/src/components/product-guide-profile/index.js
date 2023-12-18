import { FaChevronCircleLeft } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import "./index.css"
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

const ProductGuideProfile = () =>{
    return(
        <div className="product-guide-profile-page">
            <div className="explore-nav-bar">
                <FaChevronCircleLeft color="rgb(229, 8, 152)" size={30}/>
                <h1 className="product-guide-nav-heading">EXPLORE</h1>
                <IoPerson color="rgb(229, 8, 152)" size={30}/>
            </div>
            <div className="guide-profile-container">
                <div className="profile-image-container">
                    <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702307768/402925137_18217128553271246_2059378390249092064_n_ahxq56.jpg" alt="profile" className="guide-profile-logo"/>
                    <p className="profile-reccomands">Reccomends: 55.3k</p>
                </div>
                <div>
                    <h2 className="guide-profile-name">Sheetal Gauthaman</h2>
                    <p className="insta-link">@sheetal.gauthaman</p>
                    <p className="guide-profile-description">i'm Your go-to for the latest products and fashion.</p>
                    <div className="follow-container">
                        <p>Follow me:</p>
                        <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1701849841/channels4_profile_xodfdn.jpg" alt="youtube" className="guide-follow-logo"/>
                        <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1701849474/unnamed_uo5h37.png" alt="instagram" className="guide-follow-logo"/>
                    </div>
                    <div className="share-container">
                        <div>
                            <AiFillLike />
                            <AiFillDislike />
                        </div>
                        <p>SWIPE FOR MORE <FaArrowRight /></p>
                    </div>
                </div>
            </div>
            <div>
                <div class="button-container">
                    <button class="button">All</button>
                    <button class="button">Party</button>
                    <button class="button">Festive</button>
                    <button class="button">Casual</button>
                    <button class="button">Travel</button>
                    <button class="button">Beauty</button>
                    <button class="button">Home & Living</button>
                </div>
            </div>
            <div className="product-display-container">
                 <div className="video-container">
                    <iframe 
                        id="youtubeFrame"
                        width="100" 
                        height="100" 
                        src="https://www.youtube.com/embed/RRv5udKGG68?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1" 
                        frameborder="0" 
                        allowfullscreen
                        allow="autoplay"
                        className="youtube-video"
                    ></iframe>
                    <p className="get-product">#GET THIS PRODUCT @₹299/-</p>
                 </div>
                 <div className="video-container">
                    <iframe 
                        id="youtubeFrame"
                        width="100" 
                        height="100" 
                        src="https://www.youtube.com/embed/RRv5udKGG68?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1" 
                        frameborder="0" 
                        allowfullscreen
                        allow="autoplay"
                        className="youtube-video"
                    ></iframe>
                    <p className="get-product">#GET THIS PRODUCT @₹299/-</p>
                 </div>
                 <div className="video-container">
                    <iframe 
                        id="youtubeFrame"
                        width="100" 
                        height="100" 
                        src="https://www.youtube.com/embed/RRv5udKGG68?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1" 
                        frameborder="0" 
                        allowfullscreen
                        allow="autoplay"
                        className="youtube-video"
                    ></iframe>
                    <p className="get-product">#GET THIS PRODUCT @₹299/-</p>
                 </div>
                 <div className="video-container">
                    <iframe 
                        id="youtubeFrame"
                        width="100" 
                        height="100" 
                        src="https://www.youtube.com/embed/RRv5udKGG68?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1" 
                        frameborder="0" 
                        allowfullscreen
                        allow="autoplay"
                        className="youtube-video"
                    ></iframe>
                    <p className="get-product">#GET THIS PRODUCT @₹299/-</p>
                 </div>
                 <div className="video-container">
                    <iframe 
                        id="youtubeFrame"
                        width="100" 
                        height="100" 
                        src="https://www.youtube.com/embed/RRv5udKGG68?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1" 
                        frameborder="0" 
                        allowfullscreen
                        allow="autoplay"
                        className="youtube-video"
                    ></iframe>
                    <p className="get-product">#GET THIS PRODUCT @₹299/-</p>
                 </div>
                 <div className="video-container">
                    <iframe 
                        id="youtubeFrame"
                        width="100" 
                        height="100" 
                        src="https://www.youtube.com/embed/RRv5udKGG68?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1" 
                        frameborder="0" 
                        allowfullscreen
                        allow="autoplay"
                        className="youtube-video"
                    ></iframe>
                    <p className="get-product">#GET THIS PRODUCT @₹299/-</p>
                 </div>
                 <div className="video-container">
                    <iframe 
                        id="youtubeFrame"
                        width="100" 
                        height="100" 
                        src="https://www.youtube.com/embed/RRv5udKGG68?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1" 
                        frameborder="0" 
                        allowfullscreen
                        allow="autoplay"
                        className="youtube-video"
                    ></iframe>
                    <p className="get-product">#GET THIS PRODUCT @₹299/-</p>
                 </div>
                 <div className="video-container">
                    <iframe 
                        id="youtubeFrame"
                        width="100" 
                        height="100" 
                        src="https://www.youtube.com/embed/RRv5udKGG68?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1" 
                        frameborder="0" 
                        allowfullscreen
                        allow="autoplay"
                        className="youtube-video"
                    ></iframe>
                    <p className="get-product">#GET THIS PRODUCT @₹299/-</p>
                 </div>
                 <div className="video-container">
                    <iframe 
                        id="youtubeFrame"
                        width="100" 
                        height="100" 
                        src="https://www.youtube.com/embed/RRv5udKGG68?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1" 
                        frameborder="0" 
                        allowfullscreen
                        allow="autoplay"
                        className="youtube-video"
                    ></iframe>
                    <p className="get-product">#GET THIS PRODUCT @₹299/-</p>
                 </div>

            </div>
            <h3 className="last-word">@SHOPWITHSTORECODE</h3>
        </div>
    )
}
export default ProductGuideProfile