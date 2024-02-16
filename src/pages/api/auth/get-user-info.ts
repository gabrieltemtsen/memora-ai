import { use } from "next-api-middleware";
import type { NextApiRequest, NextApiResponse } from "next";

import { allowedHttpMethods } from "@/lib/middlewares/allowed-http-methods";
import { errorHandler } from "@/lib/middlewares/error-handler";
import { UserInfo } from "@/types/types";
import { auth } from "@/lib/auth/auth";

type HandlerResponse = {
  userId: string;
  user?: UserInfo;
};

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponse>
) {
  const { userId, user } = await auth(req, res);

  console.log('USERS::: here: ', user)

  res.status(200).json({ userId, user });
}

export default use(allowedHttpMethods("GET"), errorHandler)(handler);
