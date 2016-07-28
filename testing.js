var router = require("express").Router();
router.route("/school/:id?").get(getSchools);
router.route("/school/add/:id").post(addSchool);
router.route("/school/delete/:id").delete(deleteSchool)

function getSchools(req, res){
  console.log("ingetSchools :\n")
  // console.log("req :\n", req)
}
function addSchool(req, res){
  console.log("addSchool :\n")

  // console.log("req :\n", req)
}
function deleteSchool(req, res){
  // console.log("req :\n", req)
  console.log("deleteschol :\n")
}

module.exports = router;
