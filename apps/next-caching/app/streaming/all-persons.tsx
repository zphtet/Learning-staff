import { getAllPersons } from "../lib";

export default async function AllPersons() {
  // clea
  const res = await getAllPersons();
  console.log("Responses", res);
  return (
    <div>
      <div>
        {res.map((item, idx) => {
          return (
            <div key={idx}>
              {/* @ts-ignore */}
              <p>{item?.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
