// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiRequest, NextApiResponse} from "next";
import {getAccessToken, getSession, withApiAuthRequired} from "@auth0/nextjs-auth0";

const HelloRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = getSession(req, res)
  const {accessToken} = await getAccessToken(req, res)
  res.status(200).json({ message: `Hello ${session?.user?.name} 
    \n Here is your session data: ${JSON.stringify(session)}. \n 
    Access Token is: ${accessToken}` })
}

export default withApiAuthRequired(HelloRoute)