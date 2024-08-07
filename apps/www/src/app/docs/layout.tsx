import { DocsSidebar } from "./[[...slug]]/_components/docs-sidebar";

import "~/styles/mdx.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="border-b">
      <div className="container w-screen md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <DocsSidebar />
        {children}
      </div>
    </div>
  );
}
