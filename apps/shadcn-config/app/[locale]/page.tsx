import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function HomePage() {
  const t = useTranslations("IndexPage");
  return (
    <ContentLayout title="Dashboard">
      <div>
        <h1>{t("title")}</h1>
        <Link href={"/dashboard"}> Dashboard</Link>
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
    </ContentLayout>
  );
}
