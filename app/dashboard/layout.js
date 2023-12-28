import Sidebar from "@/app/components/dashboard/Sidebar";

export default function dashboardLayout({ children }) {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row ">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
