// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiRequest, NextApiResponse} from "next";
import {getSession, withApiAuthRequired} from "@auth0/nextjs-auth0";

const HelloRoute = (req: NextApiRequest, res: NextApiResponse) => {
  const session = getSession(req, res)
  res.status(200).json({ message: `Hello ${session?.user?.name} 
    \n Here is your session data: ${JSON.stringify(session)}` })
}

export default withApiAuthRequired(HelloRoute)