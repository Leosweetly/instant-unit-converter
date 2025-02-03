export const metadata = {
    title: "Weight Converter | Convert Kilograms, Pounds, Ounces & More",
    description: "Easily convert between kilograms, pounds, ounces, and more with this instant weight converter.",
    keywords: "weight converter, kilogram to pound, grams to ounces, convert weight units",
  };
  
  import Converter from "@/Components/Converter";
  
  export default function WeightConverter() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold text-green-400 mb-6">Weight Converter</h1>
        <Converter defaultCategory="weight" />
      </main>
    );
  }
