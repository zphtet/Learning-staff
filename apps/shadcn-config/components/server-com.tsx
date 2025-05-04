import { auth } from "@/auth";

const ServerCom = async () => {
  const session = await auth();
  return (
    <div>
      <p>Server component</p>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default ServerCom;
