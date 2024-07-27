import "~/styles/mdx.css";
import { DocsSidebar } from "./[[...slug]]/_components/docs-sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="border-b">
      <div className="container md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <DocsSidebar />
        {children}
      </div>
    </div>
  );
}
