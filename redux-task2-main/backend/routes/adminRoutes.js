const router = require("express").Router();
const {
  updateMember,
  deleteMember,
} = require("../controllers/membersController");
const { authenticateToken, isAdmin } = require("../middleware/auth");
router.put("/", authenticateToken, isAdmin, updateMember);

router.delete("/:id", authenticateToken, isAdmin, deleteMember);

module.exports = router;
