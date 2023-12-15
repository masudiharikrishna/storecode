import React, { Component } from 'react';
import "./index.css";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

class Manageposts extends Component{
    state={
        profile: true
    }

    toggleProfile = () => {
        this.setState(prevState => ({
            profile: !prevState.profile
        }));
    }
    
    handleAddNewPostClick = () => {
        if (this.props.onAddNewPostClick) {
            this.props.onAddNewPostClick();
        }
    };

    render(){
        const {profile} = this.state
        return(
            <div className='managepost-container'>
                <div className='profile-heading' onClick={this.toggleProfile}>
                    <h1>ProfileDetails</h1>
                    {profile ? <FaAngleUp className='icon'/>: <FaAngleDown className='icon'/>}
                </div>
                {profile ? (
                    <div className='profile-main-conatiner'>
                    <div className='profile-input-container'>
                        <div className='name-input-container'>
                            <input type='text' placeholder='UpdateName' className='name-input'/>
                            <input type='text' placeholder='About' className='about-input'/>
                        </div>
                        <input type='text' placeholder='Update Profile Picture' className='profile-pic-input'/>
                    </div>
                    <div className='social-handle-input-container'>
                        <input type='text' placeholder='Add Social Handles' className='social-handle-input'/>
                        <div className='input-icon'>
                            <FaFacebook  className='icon'/>
                            <FaInstagramSquare className='icon'/>
                            <IoLogoYoutube className='icon'/>
                        </div>
                    </div>
                </div>
                ): ""}
                <hr/>
                <button className='add-button' onClick={this.handleAddNewPostClick}>Add New Post</button>
                <hr/>
                <div className='table-container'>
                <table>
                <thead>
                    <tr>
                    <th>Sr. No</th>
                    <th>Post Name</th>
                    <th>View</th>
                    <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Pink Dress</td>
                    <td>8980</td>
                    <td><button className='table-button'>Edit Post</button></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Floral Dress</td>
                    <td>9019</td>
                    <td><button className='table-button'>Edit Post</button></td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Green Dress</td>
                    <td>9990</td>
                    <td><button className='table-button'>Edit Post</button></td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td>One-Shoulder</td>
                    <td>8759</td>
                    <td><button className='table-button'>Edit Post</button></td>
                    </tr>
                    <tr>
                    <td>5</td>
                    <td>Night Dress</td>
                    <td>8697</td>
                    <td><button className='table-button'>Edit Post</button></td>
                    </tr>
                    <tr>
                    <td>6</td>
                    <td>Casual Dress</td>
                    <td>8990</td>
                    <td><button className='table-button'>Edit Post</button></td>
                    </tr>

                </tbody>
                </table>
                </div>
                <footer class="footer-container">
            <div class="footer-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-house-door" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                  </svg>
                <p>home</p>
            </div>
            <div  class="footer-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894m-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                  </svg>
                <p>About</p>
            </div>
            <div  class="footer-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-wechat" viewBox="0 0 16 16">
                    <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356"/>
                    <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"/>
                  </svg>
                <p>Chat</p>
            </div>
            <div  class="footer-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-video3" viewBox="0 0 16 16">
                    <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2"/>
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783.059-.187.09-.386.09-.593V4a2 2 0 0 0-2-2z"/>
                  </svg>
                <p>Blog</p>
            </div>
            <div  class="footer-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
                  </svg>
                <p>Account</p>
            </div>
                </footer>
            </div>
        )
    }
}

export default Manageposts;
