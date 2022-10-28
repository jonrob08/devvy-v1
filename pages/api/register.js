import connectDB from "../../connectDB"
import User from "../../models/userModel"

connectDB()

export default async (req, res) => {
    if (req.method === "POST") {
        const { name, email, password } = req.body
        console.log(name, email, password)
        const newUser = await new User({ name: name, email: email, password: password }).save()
        console.log(newUser)
    }
    
}

