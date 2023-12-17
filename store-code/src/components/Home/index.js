import React, { Component } from "react";
import Navbar from "../Navbar/index";
import "./index.css";

class Home extends Component {
  state = {
    productCode: "",
    redirectedLink: "",
    generatedCode: "",
    linkToGenerateCodeFor: "", // New state for the link to generate code for
  };

  handleProductCodeChange = (e) => {
    this.setState({ productCode: e.target.value });
  };

  handleSearchClick = async () => {
    const { productCode } = this.state;

    const response = await fetch("http://localhost:3004/getLink", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ Code: {productCode} }),
});

const data = await response.json();
console.log(data);

  };

  generateCode = async () => {
    const { linkToGenerateCodeFor } = this.state;

    // Ensure there is a link to generate code for
    if (!linkToGenerateCodeFor) {
      alert("Please enter a link before generating a code.");
      return;
    }

    // Make a request to your backend to generate a code
    try {
      const response = await fetch("http://localhost:3004/generateCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link: linkToGenerateCodeFor }),
      });

      const data = await response.json();

      // Assuming your backend responds with a generated code
      const generatedCode = data.code;

      // Set the generated code in the state
      this.setState({ generatedCode });
    } catch (error) {
      console.error("Error generating code:", error);
    }
  };

  handleLinkToGenerateCodeChange = (e) => {
    this.setState({ linkToGenerateCodeFor: e.target.value });
  };

  render() {
    const { productCode, generatedCode, linkToGenerateCodeFor } = this.state;

    return (
      <div>
        <Navbar />
        <div className="home-page-store-code-container">
          <div className="light-color-container">
            <div className="dark-color-container">
              <div className="store-container">
                <h4>Shop With</h4>
                <h1 className="main-heading">STORECODE</h1>
                <input
                  type="text"
                  placeholder="ENTER PRODUCT CODE"
                  className="store-code-input"
                  value={productCode}
                  onChange={this.handleProductCodeChange}
                />
                <button
                  className="search-button"
                  onClick={this.handleSearchClick}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="get-product-code-container">
          <div className="get-code-container">
              <div className="border-container">
                <div className="get-code-main-container">
                  <h1 className="code-heading">Get a code for your link</h1>
                  <div className="input-container">
                    <input
                      placeholder="Paste your link here.."
                      type="text"
                      className="get-code-input"
                      value={linkToGenerateCodeFor}
                      onChange={this.handleLinkToGenerateCodeChange}
                    />
                    <button
                      className="get-link-button"
                      onClick={this.generateCode}
                    >
                      Get Code
                    </button>
                  </div>
                  {generatedCode && (
                    <div>
                      <p>Your generated code: {generatedCode}</p>
                      <p>Use this code to access your link.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;
