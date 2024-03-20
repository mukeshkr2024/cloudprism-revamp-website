"use client";

import React, { useState } from "react";
import { PopupFormContext } from "./form-context";

const FormPopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <PopupFormContext.Provider
      value={{
        showPopup,
        setShowPopup,
      }}
    >
      {children}
    </PopupFormContext.Provider>
  );
};

export default FormPopupProvider;
