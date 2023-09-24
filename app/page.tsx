import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-full m-auto">
        <Image
          src="/maintenance.svg"
          alt="Maintenance"
          className="w-5/6 max-w-screen-md m-auto dark:invert"
          priority
          width="256"
          height="256"
        />
      </div>
    </main>
  );
}
