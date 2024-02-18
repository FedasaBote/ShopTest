import Logo from "./logo";
import downArrow from "/images/down_arrow.svg";
import "./header.css";
// menu sign import here
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
function Header() {
  return (
    <div className="header">
      <div className="header_first">
        <Logo />
        <div className="header_first_1">
          <FaBars color="#00d094" size={30} />
          <p>카테고리</p>
        </div>
      </div>

      {/* Search Input goes FaSearch here with search Icon and place holder written inside */}
      <div className="header_second">
        <FaSearch color="#00d094" size={20} className="input_icon" />
        <input type="text" placeholder="테스트밸리 - 전자제품 사는게 즐겁다" />
      </div>

      {/* at the end the component goes here 로그인 / 회원가입*/}
      <div className="header_third">
        <img src={downArrow} alt="" />
        <p>|</p>
        <p>로그인/회원가입</p>
      </div>
    </div>
  );
}

export default Header;

// path header.css
/*


 */
