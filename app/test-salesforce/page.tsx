/* eslint-disable no-undef */
"use client";

import React, { useEffect } from "react";

const LightningComponent: React.FC = () => {
  useEffect(() => {
    const loadLightningScript = () => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src =
          "https://nsus--webdev.sandbox.lightning.force.com/lightning/lightning.out.js";
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error("Failed to load lightning.out.js"));
        document.body.appendChild(script);
      });
    };

    const initializeLightning = () => {
      // @ts-ignore
      $Lightning.use(
        "c:MyLightningOutA1pp",
        () => {
          // @ts-ignore
          $Lightning.createComponent(
            "c:chatCustomInterface",
            {},
            "lightningComponent",
            (cmp: any) => {
              console.log("Component was successfully created");
            }
          );
        },
        "https://nsus--webdev.sandbox.lightning.force.com/"
      );
    };

    loadLightningScript().then(initializeLightning).catch(console.error);
  }, []);

  return <div id="lightningComponent"></div>;
};

export default LightningComponent;
