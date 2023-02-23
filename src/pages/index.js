import { Inter } from "@next/font/google";
import { style } from "@/styles/Home.style";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="main">
        <div>Hello World</div>
      </main>
      <style jsx>{style}</style>
    </>
  );
}
