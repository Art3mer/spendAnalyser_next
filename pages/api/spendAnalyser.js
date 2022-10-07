import connect from "../../lib/mongodb";
import UserModel from "../../model/Users";
import profileModel from "../../model/profile"

async function handler(req, res) {
  // console.log(1111111);
    if (req.method == "POST") {
await connect();
var findUser = await profileModel.findOne({ _id: req.body.id })
var Food =req.body.Food;
var Amount=req.body.Amount;
console.log("hiihello",JSON.stringify(findUser,null,2));
      var user = new UserModel({
        ProfileId: findUser ? findUser._id :"no Idea",
        Food: `${Food}`,
        Amount:`${Amount}`,
      });
      await user.save(function (err , user) {
        if (err) {
          console.log(err);
          res.status(200).json({ status: "error", data: {} });
        } else {
          res.status(200).json({ status: "success", data: user });
        }
      });
    }
    
  }
export default handler;
