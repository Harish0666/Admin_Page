import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

function Widget (){
  

  return (
    <div className="widget">
      <div className="left">
        <span className="title">user</span>
        <span className="counter">
          $ 100
        </span>
        <span className="link">see all users</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          <p>20%</p>
        </div>
        <PersonOutlinedIcon className="icon" />
      </div>
    </div>
  );
};

export default Widget;