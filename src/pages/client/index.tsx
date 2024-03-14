import { useUser } from '@monocloud/monocloud-nextjs/client';

export default function ClientSide() {
  const { user, isAuthenticated, isLoading, isError } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !user) return <div>Something went wrong!</div>;
  if (!isAuthenticated) return <div>Please Sign In...</div>;

  return (
    <div className='mt-5 ml-5'>
      <p>Hi {user.email} from Client Side Component</p>
      <h1>User :</h1>
      <div className='pl-2 flex flex-col gap-2'>
        <textarea
          className='text-black w-3/5 p-2 rounded-md text-sm'
          name='user'
          cols={30}
          rows={10}
          value={JSON.stringify(
            { user, isAuthenticated, isError, isLoading },
            undefined,
            2
          )}
          readOnly={true}
        ></textarea>
      </div>
    </div>
  );
}
