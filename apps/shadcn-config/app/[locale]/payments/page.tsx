import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Payment, columns } from "./column";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
    { id: "safs", amount: 200, status: "success", email: "hello@example.com" },
    {
      id: "a73df1b2",
      amount: 150,
      status: "pending",
      email: "user1@example.com",
    },
    {
      id: "b65ac31d",
      amount: 300,
      status: "success",
      email: "user2@example.com",
    },
    {
      id: "d72e413c",
      amount: 120,
      status: "pending",
      email: "user3@example.com",
    },
    {
      id: "c14adf35",
      amount: 400,
      status: "success",
      email: "user4@example.com",
    },
    {
      id: "e81fd53b",
      amount: 500,
      status: "pending",
      email: "user5@example.com",
    },
    {
      id: "f32cd61e",
      amount: 250,
      status: "success",
      email: "user6@example.com",
    },
    {
      id: "g44ef73a",
      amount: 350,
      status: "pending",
      email: "user7@example.com",
    },
    {
      id: "h53fd82b",
      amount: 275,
      status: "success",
      email: "user8@example.com",
    },
    {
      id: "i62ad93d",
      amount: 180,
      status: "pending",
      email: "user9@example.com",
    },
    {
      id: "j71bd04e",
      amount: 450,
      status: "success",
      email: "user10@example.com",
    },
    {
      id: "k82de15f",
      amount: 125,
      status: "pending",
      email: "user11@example.com",
    },
    {
      id: "l93ef26a",
      amount: 500,
      status: "success",
      email: "user12@example.com",
    },
    {
      id: "m04fd37b",
      amount: 275,
      status: "pending",
      email: "user13@example.com",
    },
    {
      id: "n15ad48c",
      amount: 220,
      status: "success",
      email: "user14@example.com",
    },
    {
      id: "o26bd59d",
      amount: 300,
      status: "pending",
      email: "user15@example.com",
    },
    {
      id: "p37ce60e",
      amount: 400,
      status: "success",
      email: "user16@example.com",
    },
    {
      id: "q48df71f",
      amount: 275,
      status: "pending",
      email: "user17@example.com",
    },
    {
      id: "r59ef82a",
      amount: 350,
      status: "success",
      email: "user18@example.com",
    },
    {
      id: "s60fd93b",
      amount: 150,
      status: "pending",
      email: "user19@example.com",
    },
    {
      id: "t71ad04c",
      amount: 420,
      status: "success",
      email: "user20@example.com",
    },
    {
      id: "u82bd15d",
      amount: 225,
      status: "pending",
      email: "user21@example.com",
    },
    {
      id: "v93ce26e",
      amount: 480,
      status: "success",
      email: "user22@example.com",
    },
    {
      id: "w04df37f",
      amount: 125,
      status: "pending",
      email: "user23@example.com",
    },
    {
      id: "x15ef48a",
      amount: 325,
      status: "success",
      email: "user24@example.com",
    },
    {
      id: "y26fd59b",
      amount: 225,
      status: "pending",
      email: "user25@example.com",
    },
    {
      id: "z37ad60c",
      amount: 410,
      status: "success",
      email: "user26@example.com",
    },
    {
      id: "aa48bd71d",
      amount: 190,
      status: "pending",
      email: "user27@example.com",
    },
    {
      id: "bb59ce82e",
      amount: 460,
      status: "success",
      email: "user28@example.com",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <ContentLayout title="Payments">
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </ContentLayout>
  );
}
