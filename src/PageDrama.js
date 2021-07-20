import React, { useState } from 'react';
import { pushRedirect } from './App';
import LayoutHeader from "./LayoutHeader";
import LayoutContent from "./LayoutContent";
import LayoutFooter from "./LayoutFooter";

function PageDrama (props) {
	const [activeNav] = useState(["","active","",""]);

	function redirectPage(el,v_pageActive) {
		pushRedirect(props,v_pageActive);
	}

	return (
		<div>
			<LayoutHeader activeNav={activeNav} redirectPage={redirectPage} />
      <LayoutContent nav="1" />
      <LayoutFooter />
		</div>
	);
}

export default PageDrama;
