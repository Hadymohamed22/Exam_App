import Breadcrumbs from "./_components/breadcrumbs";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import Providers from "@/components/providers/dashboard";
import Aside from "./account-settings/_components/aside";

type LayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  // Variables
  const session = await getServerSession(authOptions);

  return (
    <Providers>
      <div className="grid grid-cols-4">
        {/* Aside */}
        <Aside session={session} />

        {/* Main Content */}
        <main className="col-span-4 lg:col-span-3">
          {/* Breadcrumbs */}
          <div className="breadcrumbs bg-white p-4">
            <Breadcrumbs />
          </div>

          {/* Path Content */}
          <div className="content bg-gray-50 p-6 min-h-[90vh]">{children}</div>
        </main>
      </div>
    </Providers>
  );
}
