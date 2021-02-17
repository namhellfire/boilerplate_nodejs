/**
 * GET /contact
 * Contact form page.
 */
exports.test = (req, res) => {
  const response = {
    code: 1,
    message: "Ok",
    error: "",
  }

  res.status(200).json(response);
};