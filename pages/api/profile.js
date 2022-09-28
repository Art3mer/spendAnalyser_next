import connect from "../../lib/mongodb";
import profileModel from "../../model/profile";


async function handler(req, res) {
  if(req.method == "POST"){
    await connect();
   var profilename = new profileModel({
        Name: req.body.Name,
        Email: req.body.Email,
      });
      console.log("val: "+profilename)
      await profilename.save(function (err , user) {
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
