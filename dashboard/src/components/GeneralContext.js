// import React, { useState } from "react";

// import BuyActionWindow from "./BuyActionWindow";

// const GeneralContext = React.createContext({
//   openBuyWindow: (uid) => {},
//   closeBuyWindow: () => {},
// });

// export const GeneralContextProvider = (props) => {
//   const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
//   const [selectedStockUID, setSelectedStockUID] = useState("");
// //
//   const handleOpenBuyWindow = (uid) => {
//     setIsBuyWindowOpen(true);
//     setSelectedStockUID(uid);
//   };

//   const handleCloseBuyWindow = () => {
//     setIsBuyWindowOpen(false);
//     setSelectedStockUID("");
//   };

//   return (
//     <GeneralContext.Provider
//       value={{
//         openBuyWindow: handleOpenBuyWindow,
//         closeBuyWindow: handleCloseBuyWindow,
//       }}
//     >
//       {props.children}
//       {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
//     </GeneralContext.Provider>
//   );
// };

// export default GeneralContext;

import React, { useState, createContext } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

export const GeneralContext = createContext();

export const GeneralContextProvider = (props) => {
  // 1. Separate visibility states for both windows
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUid, setSelectedStockUid] = useState("");

  // 2. Open Handlers
  const openBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setIsSellWindowOpen(false); // Make sure sell window closes when buy opens
    setSelectedStockUid(uid);
  };

  const openSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setIsBuyWindowOpen(false); // Make sure buy window closes when sell opens
    setSelectedStockUid(uid);
  };

  // 3. Close Handlers
  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
  };

  const closeSellWindow = () => {
    setIsSellWindowOpen(false);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
        openSellWindow, // Passed to context so WatchList can use it
        closeSellWindow, // Passed to context so SellActionWindow can use it
      }}
    >
      {props.children}

      {/* 4. Render the overlays conditionally based on state */}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUid} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUid} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
