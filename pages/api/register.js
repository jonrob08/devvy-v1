import connectDB from "../../connectDB";
import User from "../../models/userModel";
import bcrypt from "bcrypt";

connectDB();

export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const { name, email, password } = req.body;
      const user = await User.findOne({ email: email });

      if (user) {
        res.status(422).json({ message: "User Already Exists" });
      }

      const HashedPassword = await bcrypt.hash(password, 12);

      const newUser = await new User({
        name: name,
        email: email,
        password: HashedPassword,
      }).save();
      res.status(200).json({ message: "Sign up success!" });
      console.log(newUser);
    }
  } catch (error) {
    console.log(error);
  }
};
