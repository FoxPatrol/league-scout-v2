import { Search } from "./search";

export default function Home() {
  return (
    <div className="p-24">
      <div className="flex flex-col gap-16 justify-center align-middle">
        <span>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            League Scout
          </h1>
          <h2 className="scroll-m-10 text-2xl font-bold tracking-tight lg:text-3xl">
            Conquer the Rift, Together!
          </h2>
        </span>
        <Search />
      </div>
    </div>
  );
}
