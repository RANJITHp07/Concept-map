"use client";
import Form from "./_components/form";
import Slider from "../components/slider";
export default function Page() {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        <Form />
        <Slider />
      </div>
    </>
  );
}
