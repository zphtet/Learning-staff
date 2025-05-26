import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { ClientCom } from "@/components/client-com";
import ServerCom from "@/components/server-com";
import Toggle from "@/components/toggle";
import Locations from "@/components/locatons";
import { ProductTable } from "@/components/product-table";
import Products from "@/components/products";
export default function HomePage() {
  const t = useTranslations("IndexPage");

  return (
    <ContentLayout title="Dashboard">
      <div>
        <h1>{t("title")}</h1>

        <Products />

        <Link href={"/dashboard"}> Dashboard</Link>

        {/* <ProductTable /> */}

        {/* <ClientCom /> */}
        {/* <Locations /> */}
        {/* <p>{t("description")}</p> */}
        <p className="max-w-[590px]">
          {t.rich("description", {
            code: (chunks) => (
              <code className="font-mono text-white">{chunks}</code>
            ),
          })}
        </p>
        {/* <Link href={"/pathnames"}>{t("about")}</Link> */}
      </div>
      {/* <ServerCom /> */}
      <Toggle />
    </ContentLayout>
  );
}
