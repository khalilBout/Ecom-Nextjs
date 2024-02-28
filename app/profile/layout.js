// import Sidebar from "@/";

import Sidebar from "../components/profilePage/Sidebar";

export default function profileLayout({ children }) {
  return (
    <>
      <section className="py-1 sm:py-2 bg-blue-100">
        <div className="container max-w-screen-xl mx-auto px-2">
          <h1 className="text-bold text-2xl">User Profile</h1>
        </div>
      </section>

      <section className="py-2">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <Sidebar />
            <main className="grow px-2">
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
{
  /* <div className="">
      <div className="flex flex-col md:flex-row ">
        <Sidebar />
        {children}
      </div>
    </div> */
}
