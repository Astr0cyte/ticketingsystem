import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <main className="{workSans.variable}">
      <div className="flex flex-col h-[70vh] items-center justify-center">
        <div className="p-4">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 ">
            Enter Queue
          </h1>
          <div className="bg-gray-100 p-4 rounded-md flex flex-col gap-2 box-border w-96">
            <form className="flex flex-col font-sans gap-4 p-4 mx-auto w-full">
              <div>
                <h2 className="text-sm block font-bold text-[#A6192E]">
                  Student/Staff number
                </h2>
                <input
                  className="w-full border-2 rounded-md p-1 font-[Work_Sans]"
                  type="text"
                  placeholder="E.x. 4888888"
                />
              </div>
              <button
                className="border-2 rounded-md bg-[#A6192E] p-2 font-bold text-white"
                type="submit"
              >
                Enter
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
