"use client";

import Script from "next/script";

const GTM_ID = "GTM-NC7PNMT9";

export const GoogleAnalytics = () => {
  return (
    <>
      {/* Google Analytics script  */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      {/* Additional  script */}
      <Script
        id="additional-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function () {
              var reb2b = window.reb2b = window.reb2b || [];
              if (reb2b.invoked) return;
              reb2b.invoked = true;
              reb2b.methods = ["identify", "collect"];
              reb2b.factory = function (method) {
                return function () {
                  var args = Array.prototype.slice.call(arguments);
                  args.unshift(method);
                  reb2b.push(args);
                  return reb2b;
                };
              };
              for (var i = 0; i < reb2b.methods.length; i++) {
                var key = reb2b.methods[i];
                reb2b[key] = reb2b.factory(key);
              }
              reb2b.load = function (key) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.async = true;
                script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";
                var first = document.getElementsByTagName("script")[0];
                first.parentNode.insertBefore(script, first);
              };
              reb2b.SNIPPET_VERSION = "1.0.1";
              reb2b.load("GOYPYHV3LZOX");
            }();
          `,
        }}
      />
    </>
  );
};
