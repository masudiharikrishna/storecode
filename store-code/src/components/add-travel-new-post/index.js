import "./index.css"
import { TiTick } from "react-icons/ti";

const Addtravelnewpost = () =>{
    return(
        <div className="addtravelnewpostpage">
            <div className="addtravelnewpost-container">
                <p className="profile-heading">Select Category</p>
                <div>
                    <button className="active-travel-button">Domestic <TiTick /></button>
                    <button className="travel-button">International</button>
                </div>
                <p className="profile-heading">Post Name</p>
                <input className="details" placeholder="Men Casual Wears" type="text"/>
                <p className="profile-heading">Full Trip Price</p>
                <input className="details" placeholder="Enter Full Trip Price" type="text"/>
                <p className="profile-heading">Video Link</p>
                <input className="details" placeholder="https://www.youtube.com/watch?v=qnNUzGCjFSs" type="text"/>
                <div>
                    <p className="profile-heading">Day 1</p>
                    <div>
                        <button className="active-travel-button">Book Journey <TiTick /></button>
                        <button className="travel-button">Accomodation</button>
                        <button className="travel-button">Culinary Delight</button>
                    </div>
                    <div>
                        <input className="details-input" placeholder="Related Name" type="text"/>
                        <input className="details-input" placeholder="Description" type="text"/>
                        <input className="details-input" placeholder="Time" type="text"/>
                        <input className="details-input" placeholder="Add Image" type="text"/>
                        <input className="details-input" placeholder="Google Map Link" type="text"/>
                        <input className="details-input" placeholder="Price" type="text"/>
                        <div>
                            <button className="active-travel-button">Add New Day</button>
                            <button className="travel-button">Upload Post</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="profile-heading">Day 2</p>
                    <div className="button-container">
                        <button className="travel-button">Book Journey </button>
                        <button className="active-travel-button">Accomodation <TiTick /></button>
                        <button className="travel-button">Culinary Delight</button>
                    </div>
                    <div>
                        <input className="details-input" placeholder="Related Name" type="text"/>
                        <input className="details-input" placeholder="Description" type="text"/>
                        <input className="details-input" placeholder="Time" type="text"/>
                        <input className="details-input" placeholder="Add Image" type="text"/>
                        <input className="details-input" placeholder="Google Map Link" type="text"/>
                        <input className="details-input" placeholder="Price" type="text"/>
                        <div>
                            <button className="travel-button">Add New Day</button>
                            <button className="active-travel-button">Upload Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Addtravelnewpost