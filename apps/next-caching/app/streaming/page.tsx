import { getAllPersons } from "../lib";
import { Suspense } from "react";
import AllPersons from "./all-persons";
import Button from "../components/revalidate-btn";
import { revalidatePath } from "next/cache";

export default async function Streaming() {
  return (
    <div>
      <p>Streaming </p>

      <Suspense fallback={<div>Loading persons ...</div>}>
        <AllPersons />
      </Suspense>
      <Button
        func={async () => {
          "use server";
          revalidatePath("/streaming");
        }}
      />
    </div>
  );
}
