import "./index.css"
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaSquarePen } from "react-icons/fa6";
import { PiSquaresFourFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";


const ProfileDashboard = ()=>{
    return(
        <div className="profile-dashboard">
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
            <div className="profile-button-section">
                <button className="profile-section-button"><FaPlusSquare size={24} className="button-icon"/>Create new post</button>
                <button className="profile-section-button"><FaSquarePen size={24} className="button-icon"/>Edit profile</button>
            </div>
            <hr className="line"/>
            <div className="all-posts-container">
                <h2 className="profile-post-word">ALL POSTS</h2>
                <PiSquaresFourFill size={36} color="white"/>
            </div>
            <ul className="profile-post-list-container">
                <li className="post-lists-item">
                    <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703434635/image0_0_abiylt.jpg" className="post-image"/>
                    <div>
                        <h3 className="post-heading">A Backpack of memories Paperback - Import, 27</h3>
                        <p className="store-code-value">#AVDU5464</p>
                        <p className="website-word">Amazon</p>
                        <div className="edit-post-button-container">
                            <p>5,312 views</p>
                            <div className="edit-delete-buttons">
                                <button className="edit-post-button"><FaSquarePen color="white"/>Edit Post</button>
                                <MdDelete className="delete-icon"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="post-lists-item">
                    <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703439767/image0_0_whhcqf.jpg" className="post-image"/>
                    <div>
                        <h3 className="post-heading">Mahindra Thar - compact off-road Dynamo</h3>
                        <p className="store-code-value">#YFBH9625</p>
                        <p className="website-word">Mahindra Adventures</p>
                        <div className="edit-post-button-container">
                            <p>4,581 views</p>
                            <div className="edit-delete-buttons">
                                <button className="edit-post-button"><FaSquarePen color="white"/>Edit Post</button>
                                <MdDelete className="delete-icon"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="post-lists-item">
                    <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703434635/image0_0_abiylt.jpg" className="post-image"/>
                    <div>
                        <h3 className="post-heading">A Backpack of memories Paperback - Import, 27</h3>
                        <p className="store-code-value">#AVDU5464</p>
                        <p className="website-word">Amazon</p>
                        <div className="edit-post-button-container">
                            <p>5,312 views</p>
                            <div className="edit-delete-buttons">
                                <button className="edit-post-button"><FaSquarePen color="white"/>Edit Post</button>
                                <MdDelete className="delete-icon"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="post-lists-item">
                    <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1703439767/image0_0_whhcqf.jpg" className="post-image"/>
                    <div>
                        <h3 className="post-heading">Mahindra Thar - compact off-road Dynamo</h3>
                        <p className="store-code-value">#YFBH9625</p>
                        <p className="website-word">Mahindra Adventures</p>
                        <div className="edit-post-button-container">
                            <p>4,581 views</p>
                            <div className="edit-delete-buttons">
                                <button className="edit-post-button"><FaSquarePen color="white"/>Edit Post</button>
                                <MdDelete className="delete-icon"/>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default ProfileDashboard