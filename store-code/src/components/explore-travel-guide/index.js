import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import "./index.css"
import { IoPerson } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";

const ExploreTravelGuide = ()=>{
    return(
        <div className="explore-travel-guide-page">
            <div className="explore-nav-bar">
                <FaChevronCircleLeft color="rgb(229, 8, 152)" size={30}/>
                <h1 className="explore-heading"><span className="heading-span">STORE</span> CODE</h1>
                <IoPerson color="rgb(229, 8, 152)" size={30}/>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search" className="explore-search-input"/>
                <LuFilter color="white" size={30}/>
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
            <div class="shop-item-container">
              <div class="list-item">
                <div>
                    <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702220604/5b6e9cec-bf8f-4352-b701-7e1aaa499ee11689274786124BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt3_fcp6dl.avif" alt="slide" className="slide-image"/>
                </div>
                <div>
                    <span class="myntra-word">AIRBNB</span>
                    <h1 class="heading">WANDERLUST EXTRAVAGANZA</h1>
                    <span class="paragraph-reel"><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702215505/free-instagram-reels-icon-13411-thumb_wkm8yb.png" class="reel-logo"/>Watch the reel</span>
                    <p class="paragraph">Products in this reel</p>
                    <ul class="list-container">
                        <li><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702213958/915d26ff-e55e-4f75-b6de-1ffdb6a95d7d1689274786101BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt5_ox4fsr.avif" class="list-images"/></li>
                        <li><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702213993/148568bf-8ecb-4fc0-8be2-508922255b501689274786111BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt1_ykvwcv.avif" class="list-images"/></li>
                        <li><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702213910/fdc90f51-1de3-42b6-ad09-5b88a047cda81689274786076BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt4_eud1sy.avif" class="list-images"/></li>
                        <li><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702218061/07b31426-7695-416a-85fd-ba685088c4001689274786088BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt2_y6ulf0.avif" class="list-images"/></li>
                        <li><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702218257/5b6e9cec-bf8f-4352-b701-7e1aaa499ee11689274786124BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt3_cvxacl.avif" class="list-images"/></li>
                    </ul>
                    <p class="paragraph">5 Trips at ₹6500 onwards</p>
                    <button class="shop-now-button">view Storecodes<FaCircleChevronRight color="white"/></button>
                </div>
              </div>
            </div>
            <div class="shop-item-container">
              <div class="list-item">
                <div>
                    <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702220604/5b6e9cec-bf8f-4352-b701-7e1aaa499ee11689274786124BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt3_fcp6dl.avif" alt="slide" className="slide-image"/>
                </div>
                <div>
                    <span class="myntra-word">MAKE MY TRIP</span>
                    <h1 class="heading">MEGA VOYAGE</h1>
                    <span class="paragraph-reel"><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702215505/free-instagram-reels-icon-13411-thumb_wkm8yb.png" class="reel-logo"/>Watch the reel</span>
                    <p class="paragraph">Products in this reel</p>
                    <ul class="list-container">
                        <li><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702213958/915d26ff-e55e-4f75-b6de-1ffdb6a95d7d1689274786101BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt5_ox4fsr.avif" class="list-images"/></li>
                        <li><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702213993/148568bf-8ecb-4fc0-8be2-508922255b501689274786111BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt1_ykvwcv.avif" class="list-images"/></li>
                        <li><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702213910/fdc90f51-1de3-42b6-ad09-5b88a047cda81689274786076BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt4_eud1sy.avif" class="list-images"/></li>
                        <li><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702218061/07b31426-7695-416a-85fd-ba685088c4001689274786088BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt2_y6ulf0.avif" class="list-images"/></li>
                        <li><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702218257/5b6e9cec-bf8f-4352-b701-7e1aaa499ee11689274786124BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt3_cvxacl.avif" class="list-images"/></li>
                    </ul>
                    <p class="paragraph">5 Products at ₹899 onwards</p>
                    <button class="shop-now-button">view Storecodes<FaCircleChevronRight color="white"/></button>
                </div>
              </div>
            </div>
            <div class="shop-item-container">
              <div class="list-item">
                <div>
                    <img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702220604/5b6e9cec-bf8f-4352-b701-7e1aaa499ee11689274786124BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt3_fcp6dl.avif" alt="slide" className="slide-image"/>
                </div>
                <div>
                    <span class="myntra-word">AGODA</span>
                    <h1 class="heading"> ADVENTURE AWAITS</h1>
                    <span class="paragraph-reel"><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702215505/free-instagram-reels-icon-13411-thumb_wkm8yb.png" class="reel-logo"/>Watch the reel</span>
                    <p class="paragraph">Products in this reel</p>
                    <ul class="list-container">
                        <li><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702213958/915d26ff-e55e-4f75-b6de-1ffdb6a95d7d1689274786101BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt5_ox4fsr.avif" class="list-images"/></li>
                        <li><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702213993/148568bf-8ecb-4fc0-8be2-508922255b501689274786111BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt1_ykvwcv.avif" class="list-images"/></li>
                        <li><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702213910/fdc90f51-1de3-42b6-ad09-5b88a047cda81689274786076BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt4_eud1sy.avif" class="list-images"/></li>
                        <li><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702218061/07b31426-7695-416a-85fd-ba685088c4001689274786088BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt2_y6ulf0.avif" class="list-images"/></li>
                        <li><img src="https://res.cloudinary.com/dmofgf8v0/image/upload/v1702218257/5b6e9cec-bf8f-4352-b701-7e1aaa499ee11689274786124BULLMERMenCream-ColouredPrintedV-NeckPocketsT-shirt3_cvxacl.avif" class="list-images"/></li>
                    </ul>
                    <p class="paragraph">5 Products at ₹699 onwards</p>
                    <button class="shop-now-button">view Storecodes<FaCircleChevronRight color="white"/></button>
                </div>
              </div>
            </div>
        </div>
    )
}
export default ExploreTravelGuide