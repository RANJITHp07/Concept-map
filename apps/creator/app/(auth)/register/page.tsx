import { Toaster } from "react-hot-toast";
import Form from "./_components/form";

export default function RegisterPage() {
  return (
    <>
       <div className="h-screen flex flex-col md:flex-row justify-center md:justify-start lg:justify-start">
       <Toaster position="top-center" />
        <Form /> 
      </div>
    </>
  );
}
