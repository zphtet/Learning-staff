"use client";

import { useSession } from "next-auth/react";

export const ClientCom = () => {
  const { data: session } = useSession();
  return (
    <div>
      <p>Client COmponent : Session</p>
      {/* @ts-ignore */}
      <p>Expires at : {new Date(session?.expiresAt).toLocaleString()}</p>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};
