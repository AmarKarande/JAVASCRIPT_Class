// setting up a Node.js server using Express, and
// you're trying to use cors and multer for
//  handling cross-origin requests and file uploads, respectively
const express = require("express");
const cors = require("cors");
const multer = require("multer");

// Initialize the Express app
const app = express();
// Enable CORS
app.use(cors());
// this allows forms with arrays or objects to be sent and parsed correctly
app.use(express.urlencoded({ extended: true }));
// This middleware is used to parse incoming JSON payloads.
app.use(express.json());
//  creating a multer instance without specifying any storage configuration.
const upload = multer();

// This defines a POST route at /api/Exclusive.
app.post("/api/Exclusive", upload.none(), (req, res) => {
  // You are destructuring req.body to get the values of amount and gst from the form data.
  const { amount, gst } = req.body;
  console.log("amt=", amount);
  console.log("gst=", gst);

  // Convert the amount and GST rate to floats
  const gstfloat = parseFloat(gst);
  const amt = parseFloat(amount);

  // Initialize the result object
  let result = { gst: 0, postgst: 0, pregst: 0 };

  // Calculate the GST amount
  const per = gstfloat / 100;
  result.gst = amt * per;

  // Calculate the post-GST price (amt + GST)
  result.postgst = amt + gstfloat / 100;

  // Calculate the pre-GST price (reverse GST formula)
  result.pregst = parseFloat((amt * 100) / (100 + gstfloat));

  // Log the result to the console
  console.log(result);

  // Send the result back as JSON
  res.json({ result });
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`GSt running on port ${PORT}`);
});
