// import { ContentLayout } from "@/components/admin-panel/content-layout";
// import { Button } from "@/components/ui/button";

import { redirect } from "next/navigation";

// const Home = () => {
//   return (
//     <ContentLayout title="Home">
//       <p>Hello World</p>
//       <Button>Hello WOrld</Button>
//     </ContentLayout>
//   );
// };
// export default Home;

const Home = () => {
  return redirect("/en");
};
export default Home;
