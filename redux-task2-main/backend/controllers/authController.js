const bcrypt = require("bcryptjs");
const pool = require("../config/db");
const jwtGenerator = require("../utils/jwtGenerator");
// التسجييل

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows > 0) {
      return res.status(401).send("User already exist");
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    // create new user

    const newUser = await pool.query(
      "INSERT INTO users (name,email,password,role)VALUES ($1,$2,$3,$4) RETURNING *",
      [name, email, bcryptPassword, role]
    );

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET
    );

    res.json({ token });

    console.log(newUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Email or Password is incorrect");
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(401).json("Email or Password is incorrect");
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "10h",
      }
    );
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
};

module.exports = {
  registerUser,
  loginUser,
};
