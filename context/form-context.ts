"use client";

import React, { createContext } from "react";

export const PopupFormContext = createContext<{
  showPopup: Boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  showPopup: false,
  setShowPopup: () => {},
});
