import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents/dist/ComboBox";
import "@ui5/webcomponents/dist/Card";


function App() {
  return (
    <div className="App">
      <header>
      <ui5-shellbar
primary-title="Орг.Структура"
secondary-title="( Презентация )"
logo="asset/img/sap.svg"
show-co-pilot
show-product-switch
show-notifications
notification-count="16"
>



	<ui5-avatar slot="profile" image="asset/img/iam.png"></ui5-avatar>

</ui5-shellbar>

      </header>
      



     
    </div>
  );
}

export default App;
