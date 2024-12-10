import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
    message: string
  }
   
  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    console.log('TAYLOR WAS HERE')
    res.status(200).json({ message: 'Taylor, Hello from Next.js!' })
  }