import React, { useEffect } from 'react';
import LayoutSetting from "./LayoutSetting";
let l_setting = new LayoutSetting();

function LayoutHeader (props) {

	useEffect(() => {
    l_setting.setBackToTop("backTop");
  },[]);

	return (
		<div id="header">
      <div className="container">
        <h1>Coming Soon On Cinema</h1>
        <ul className="navi">
          <li id="nav1" className={props.activeNav[0]} onClick={ (el) => props.redirectPage(el,0) }>Action</li>
          <li id="nav2" className={props.activeNav[1]} onClick={ (el) => props.redirectPage(el,1) }>Drama</li>
          <li id="nav3" className={props.activeNav[2]} onClick={ (el) => props.redirectPage(el,2) }>Horror</li>
          <li id="nav4" className={props.activeNav[3]} onClick={ (el) => props.redirectPage(el,3) }>Animation</li>
        </ul>
      </div>
      <div className="nav-border">&nbsp;</div>
    </div>
	);
}

export default LayoutHeader;
