import connect from "../../lib/mongodb";
import UserModel from "../../model/Users";


async function handler(req, res) {
  if(req.method == "GET"){
    await connect();
    var semi = await UserModel.find({});
    // console.log("semisemisemisemi")
    console.log(JSON.stringify(semi))
    await res.status(200).json({success:true , data :semi})
  }
}
export default handler;