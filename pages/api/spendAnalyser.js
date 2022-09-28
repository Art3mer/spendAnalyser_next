import connect from "../../lib/mongodb";
import UserModel from "../../model/Users";
async function handler(req, res) {
  // console.log(1111111);
    if (req.method == "POST") {
await connect();
var Food =req.body.Food;
var Amount=req.body.Amount;
console.log(req.body);
      var user = new UserModel({
        _id:req.body.id,
        Food: `${Food}`,
        Amount:`${Amount}`
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
