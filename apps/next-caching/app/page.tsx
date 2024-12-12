import { revalidatePath } from "next/cache";
import Button from "./components/revalidate-btn";

export default function Home() {
  return (
    <div className="px-5 py-5">
      <p>{new Date().toLocaleTimeString()}</p>
      <Button
        func={async () => {
          "use server";
          revalidatePath("/");
        }}
      />
    </div>
  );
}

// Auto revalidate after some seconds
// export const revalidate = 5;
