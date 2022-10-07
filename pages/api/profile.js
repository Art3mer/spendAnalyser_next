import connect from "../../lib/mongodb";
import profileModel from "../../model/profile";

async function handler(req, res) {
  if(req.method == "POST"){
    await connect();
  var findUser = (await profileModel.findOne({ Name: req.body.Name }) 
&& await profileModel.findOne({ Name: req.body.Name }) ? await profileModel.findOne({ Name: req.body.Name }) :"") 
  if(req.body.Name !== findUser.Name){
  
    var profilename = new profileModel ({
        Name: req.body.Name,
        Email: req.body.Email,
      });
    
      console.log("val: "+req.body.Name)
       await profilename.save(function (err , user) {
        if (err) {
          console.log(err);
          res.status(200).json({ status: "error", data: {} });
        } else {
          res.status(200).json({ status: "success", data: user });
        }
      });
    }
      else{
        var findUser = await profileModel.findOne({ Name: req.body.Name })
        console.log("thappu!!!!")
    }};
  };
export default handler;
