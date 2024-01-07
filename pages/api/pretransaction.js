// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const https = require("https");

const PaytmChecksum = require("paytmchecksum");

export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log('coming in pretransactiono')
    var paytmParams = {};

    paytmParams.body = {
      requestType: "Payment",
      mid: `${process.env.PAYTM_MID}`,
      websiteName: "YOUR_WEBSITE_NAME",
      orderId: req.body.oid,
      callbackUrl: `${process.env.BASE_URL}/posttransaction`,
      txnAmount: {
        value: "1.00",
        currency: "INR",
      },
      userInfo: {
        custId: "ashishrai8880@gmail.com",
      },
    };

    console.log('payment params : ',paytmParams)
    /*
     * Generate checksum by parameters we have in body
     * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
     */
    const checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
    //   'Ashish',
      `${process.env.PAYTM_MKEY}`
    );
    
    console.log('checksum : ',checksum);

    paytmParams.head = {
      signature: checksum,
    };

    var post_data = JSON.stringify(paytmParams);

    const requestAsync = () => {
      return new Promise((resolve, reject) => {
        var options = {
          /* for Staging */
          // hostname: "securegw-stage.paytm.in",

          /* for Production */
          hostname: "securegw.paytm.in",

          port: 443,
          path: `/theia/api/v1/initiateTransaction?mid=${process.env.PAYTM_MID}&orderId=${req.body.oid}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };

        console.log('lin 63 options : ',options);

        var response = "";
        var post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            response += chunk;
          });

          post_res.on("end", function () {
            console.log("Response: ", response);
            resolve(JSON.parse( response).body);
          });
        });

        post_req.write(post_data);
        post_req.end();
      });
    };

    let myr = await requestAsync();
    console.log('lin 83 my response : ',myr);

    res.status(200).json(myr);
  }
}
