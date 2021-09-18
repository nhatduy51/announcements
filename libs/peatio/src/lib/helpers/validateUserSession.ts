import { peatioModel } from "@zozitech/sequelize"
import { isEmpty } from "lodash";

export const validateUid = async (uid: string) => {
  const user = await peatioModel.members.findOne({where: {uid: uid}});
  if(isEmpty(user)) {
    throw new Error("Uid is invalid");
  }
}
