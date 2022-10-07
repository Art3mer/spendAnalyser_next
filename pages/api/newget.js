import { json } from "express";
import { ObjectId } from "mongodb";
import connect from "../../lib/mongodb";
import UserModel from "../../model/Users";

async function handler(req, res) {
  if(req.method == "GET"){
    const valariyon = req.query.id;
    console.log(typeof valariyon)
    await connect();
    var semi = await UserModel.findOne({ProfileId: ObjectId(valariyon)});
    console.log("googlre : "+JSON.stringify(valariyon,null,2))
    console.log("googlre : "+JSON.stringify(semi,null,2))
    await res.status(200).json({success:true , data :semi})
  }
}
export default handler;
