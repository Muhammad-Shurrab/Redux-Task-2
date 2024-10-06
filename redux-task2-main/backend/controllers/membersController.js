const pool = require("../config/db");

const updateMember = async (req, res) => {
  try {
    const { name, species, status, grade, qoute, image, powerLevel } = req.body;
    const member = await pool.query(
      "UPDATE Members SET name= $1,species= $2,status = $3,grade = $4,qoute = $5,image =$6 ,powerLevel = $7 , updated_at= CURRENT_TIMESTAMP WHERE id = $8 RETURNING *",
      [name, species, status, grade, qoute, image, powerLevel, req.params.id]
    );
    console.log(member);
    if (member.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

const deleteMember = async (req, res) => {
  try {
    const member = await pool.query(
      "DELETE FROM Members WHERE id = $1 RETURNING *",
      [req.params.id]
    );
    if (member.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = { updateMember, deleteMember };
