import Sidebar from "@/app/components/dashboard/Sidebar";

export default function dashboardLayout({ children }) {
  return (
    <div className="py-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}
