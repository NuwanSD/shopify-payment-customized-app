import ReactDOM from "react-dom";
import React from "react";

import "@shopify/connect-wallet/styles.css";
import "@shopify/tokengate/styles.css";

// The element ID is defined in app-block.liquid
const container = document.getElementById("tokengating-example-app");
if (container.dataset.product_gated === "true") {
  ReactDOM.createRoot(container).render(<p>Hello from React</p>);
} else {
  container.innerHTML = "This product is not gated.";
}
