import "./index.css"
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Profile = () =>{
    const navigate = useNavigate();

    const handleAddNewPostClick = () => {
        navigate('/add-travel-new-post');
    };

    return(
        <div className="profile-page">
            <div className="profile-container">
                <button type="button" className="add-new-post-button" onClick={handleAddNewPostClick}>ADD NEW POST</button>
                <p className="profile-heading">Your Profile</p>
                <div>
                    <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702033434/406834344_18218930107271246_1447647007328352136_n_m8mmbm.jpg" alt="profile" className="profile-photo"/>
                    <FaRegEdit className="edit-icon"/>
                </div>
                <div className="heading-container">
                    <p className="profile-heading">Name</p>
                    <MdOutlineEdit className="edit-icon"/>
                </div>
                <p className="details">Jack Peterson</p>
                <div className="heading-container">
                    <p className="profile-heading">About</p>
                    <MdOutlineEdit className="edit-icon"/>
                </div>
                <p className="details">"Remember that happiness is a way of travel - not a destination."</p>
                <div className="heading-container">
                    <p className="profile-heading">Instagram Link</p>
                    <MdOutlineEdit className="edit-icon"/>
                </div>
                <p className="details">https://www.instagram.com/sheetal.gauthaman/?hl=en</p>
                <div className="heading-container">
                    <p className="profile-heading">Youtube Link</p>
                    <MdOutlineEdit className="edit-icon"/>
                </div>
                <p className="details">https://www.youtube.com/@Sheetal_Gauthaman</p>
                <p className="profile-heading">Manage Your Posts</p>
                <table>
                <thead>
                    <tr className="table-heading">
                    <th>Sr. No</th>
                    <th>Post Name</th>
                    <th>Views</th>
                    <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Goa 5 days</td>
                    <td>10,203</td>
                    <td><button className="profile-table-button">Edit Post</button></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Manali 7 days</td>
                    <td>8686</td>
                    <td><button className='profile-table-button'>Edit Post</button></td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Ooty 3 days</td>
                    <td>3456</td>
                    <td><button className='profile-table-button'>Edit Post</button></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}
export default Profile