import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-shell page-transition">
      <Sidebar />
      <div>
        <Topbar />
        <main className="dashboard-main">{children}</main>
      </div>
    </div>
  );
}
