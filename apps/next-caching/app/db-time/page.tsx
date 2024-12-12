import { headers } from "next/headers";
import { DbTimeCache } from "./db-time";
import Button from "../components/revalidate-btn";
import { revalidateTag } from "next/cache";

// export const dynamic = "force-dynamic";
const page = async () => {
  // headers();
  const { time } = await DbTimeCache();
  async function revalidatePage() {
    "use server";
    revalidateTag("db-time");
  }
  return (
    <div className="px-5 py-5">
      <p className="text-2xl">DB Time</p>
      <p>{time}</p>
      <Button func={revalidatePage} />
    </div>
  );
};
export default page;
