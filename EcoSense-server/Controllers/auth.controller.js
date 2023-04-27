const login = (req,res)=>{

}
const createUser = async(req,res)=>{
    const { email, password, userType } = req.body;
    const saltRounds=10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({ email, password: hashedPassword, userType });
    await user.save();
}
module.exports = {login};