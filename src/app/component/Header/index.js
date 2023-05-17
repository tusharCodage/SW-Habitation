import Component from "../Component";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import Logo from "../Logo";
import Nav from "../Nav";
import Search from "../Search";

const Header = ({ mainHeader, dark, category }) => {

  const {darkHeader} = dark || {}
  const { header } = mainHeader || {};
  const { scrollDirection, scroll } = useScrollDirection();

  return (
    <header
      className={`headerSection ${darkHeader == true ? "dark" : ""} ${
        scrollDirection === "up" && scroll === true ? "sticky" : ""
      } `}
    >
      <div className="container">
        <div className="headerContent">
          {header && (
            <>
              <Logo logo={header.logo} />
              <Nav nav={mainHeader} cat={category}/>
              <Search />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
