import { unstable_cache } from "next/cache";

const DbTime = async () => {
  return { time: new Date().toLocaleTimeString() };
};

export const DbTimeCache = unstable_cache(DbTime, ["db-time"], {
  tags: ["db-time"],
});
