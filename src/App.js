import React, { useState } from 'react';
import defStore from './routeLibrary';
import LayoutHeader from "./LayoutHeader";
import LayoutContent from "./LayoutContent";
import LayoutFooter from "./LayoutFooter";

export function pushRedirect(v_props,v_pageActive) {
  v_props.history.push(defStore.baseUrl + defStore.linkRoute[v_pageActive]);
}

function App(props) {
  const [activeNav] = useState(["active","","",""]);

  function redirectPage(el,v_pageActive) {
    pushRedirect(props,v_pageActive);
	}

  return (
    <div>
      <LayoutHeader activeNav={activeNav} redirectPage={redirectPage} />
      <LayoutContent nav="0" />
      <LayoutFooter />
    </div>
  );
}

export default App;
