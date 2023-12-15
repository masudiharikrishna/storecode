import "./index.css"
import { IoIosArrowBack } from "react-icons/io";

const Header = props =>{
    const {managepostpage} = props
    return(
        <div className="header"> 
            <IoIosArrowBack className="back-arrow"/>
            {managepostpage ? (
                <h1 className="header-name">Manage posts</h1>
            ) : (<h1 className="header-name">Add New Post</h1>)}
            <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702033434/406834344_18218930107271246_1447647007328352136_n_m8mmbm.jpg" alt="profilephoto" className="profile-pic"/>
        </div>
    )
}
export default Header