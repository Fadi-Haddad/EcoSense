const login = (req,res)=>{

}
const createUser = async(req,res)=>{
    const { email, password, userType } = req.body;
    const saltRounds=10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({ email, password: hashedPassword, userType });
    await user.save();
    res.status(201).json({ message: 'User created successfully'});
}
module.exports = {login};