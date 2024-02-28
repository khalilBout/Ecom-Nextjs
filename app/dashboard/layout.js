import Sidebar from "@/app/components/dashboard/Sidebar";

export default function dashboardLayout({ children }) {
  return (
    <>
      <section className="py-2 sm:py-2  bg-blue-100">
        <div className="container max-w-screen-xl mx-auto px-2">
          <h1 className="text-bold text-2xl">Admin Dashboard</h1>
        </div>
      </section>

      <section className="">
        <div className="container max-w-screen-xl mx-auto ">
          <div className="flex flex-col md:flex-row ">
            <Sidebar />
            <main className="grow p-2 ">
              <div className="w-full rounded p-2 border border-gray-200  ">
                {children}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
//  <div className="">
//       <div className="flex flex-col md:flex-row ">
//         <Sidebar />
//         {children}
//       </div>
//     </div>
