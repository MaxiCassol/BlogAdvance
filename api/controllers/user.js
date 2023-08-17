import { db } from "../db.js";

export const getUsers = (req, res) => { // trae todos los usuarios
  const q = req.query.user 
  ? "SELECT * FROM posts WHERE nada=?"
  : "SELECT * FROM blog.users";
    

  db.query(q, [req.query.username], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
    const q =
      "INSERT INTO users(`username`, `email`, `password`, `img`) VALUES (?)";

    const values = [
      req.body.username,
      req.body.email,
      req.body.password,
      req.body.img,
    ];
    //Also could check if user is already in db 
    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("User has been created.");
    });
}