import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  completeLocation: string;
}

const BiggerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full h-[100vh] max-w-[1440px] flex flex-col  items-center justify-center bg-blue-100">
      <h1 className="text-2xl">Registration Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-3 rounded-2xl border-blue-300 border-2 flex flex-col gap-1"
      >
        <div className="">
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "First Name is required" })}
            className="border-2 border-blue-200/30 rounded-md"
          />
          {errors.firstName && (
            <p className="w-full text-[10px] text-red-600">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="">
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Last Name is required" })}
            className="border-2 border-blue-200/30 rounded-md"
          />
          {errors.lastName && (
            <p className="w-full text-[10px] text-red-600">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className="">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className="border-2 border-blue-200/30 rounded-md ml-9"
          />
          {errors.email && (
            <p className="w-full text-[10px] text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="">
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            {...register("city", { required: "City Name is required" })}
            className="border-2 border-blue-200/30 rounded-md ml-12"
          />
          {errors.city && (
            <p className="w-full text-[10px] text-red-600">
              {errors.city.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-400 rounded text-blue-100 border-2 border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BiggerForm;
