import "./LoaderStyles.css";
import logo from "../../assets/logo.png";

const Loader = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <img src={logo} alt="Logo" className="spinner-logo" />
      </div>
      <h1 className="spinner-header">LOADING...</h1>
    </div>
  );
};

export default Loader;
