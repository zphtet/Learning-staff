import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/admin-panel/user-nav";
import { SheetMenu } from "@/components/admin-panel/sheet-menu";
import { ThemeColorToggle } from "../color-toggle";
import LocaleSwitcher from "../locale-switcher";
interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary sticky top-0 z-10 w-full shadow backdrop-blur">
      <div className="mx-4 flex h-14 items-center sm:mx-8">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <LocaleSwitcher />
          <ThemeColorToggle />
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
