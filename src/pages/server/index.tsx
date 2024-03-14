import { getSession } from '@monocloud/monocloud-nextjs';
import {
  InferGetServerSidePropsType,
  NextApiRequest,
  NextApiResponse,
} from 'next';

export const getServerSideProps = async ({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  const session = await getSession(req, res);
  return { props: { user: session?.user } };
};

export default function ServerSide({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!user) return <div>Please Sign In...</div>;

  return (
    <div className='mt-5 ml-5'>
      <p>Hi {user.email} from Server Side Props</p>
      <h1>User :</h1>
      <div className='pl-2 flex flex-col gap-2'>
        <textarea
          className='text-black w-3/5 p-2 rounded-md text-sm'
          name='user'
          cols={30}
          rows={10}
          value={JSON.stringify(user, undefined, 2)}
          readOnly={true}
        ></textarea>
      </div>
    </div>
  );
}
