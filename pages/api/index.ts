import type { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../config/mongodb';

type Data = {
  name: string
}

connect();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
