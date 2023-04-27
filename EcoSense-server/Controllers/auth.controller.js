const login = async (req,res)=>{
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid || !user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
    const token = jwt.sign({ email: user.email, userType: user.userType }, process.env.JWT_SECRET);
    res.json({ token });

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