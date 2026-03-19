import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className="outline rounded"
        />

        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email address",
            },
          })}
          className="outline rounded"
        />

        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
          className="outline rounded"
        />

        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-400 text-white rounded outline-1 border-2 border-amber-800 p-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
