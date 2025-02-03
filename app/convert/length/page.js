export const metadata = {
    title: "Length Converter | Convert Meters, Miles, Feet & More",
    description: "Easily convert between meters, miles, feet, and more with this instant length converter.",
    keywords: "length converter, meter to kilometer, miles to feet, convert length units",
  };
  

  import Converter from "@/components/Converter";

  export default function LengthConverter() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold text-green-400 mb-6">Length Converter</h1>
        <Converter defaultCategory="length" />
      </main>
    );
  }
