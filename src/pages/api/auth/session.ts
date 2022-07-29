import { NextApiRequest, NextApiResponse } from 'next';
import connect from 'next-connect';
import { AuthUserReqExtender } from 'adapt-auth-sdk';
import { auth } from '../../../utils/authInstance';

const sessionHandler = connect<NextApiRequest, NextApiResponse>()
  .use(auth.authorize())
  .get<AuthUserReqExtender>((req, res) => res.json(req.user));

export default sessionHandler;
