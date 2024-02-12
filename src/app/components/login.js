import axios from "axios";
import { cookies } from "next/headers";

function Login() {
  async function createUser(form) {
    "use server";

    try {
      const res = await axios.post(
        `${process.env.BACKEND_URL}/v1/user/create`,
        {
          username: form.get("username"),
          age: form.get("age"),
          email: form.get("email"),
        }
      );
      cookies().set("uid", res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      className="h-[500px] w-[250px] flex flex-col gap-3 items-center"
      action={createUser}
    >
      <h1>Create Account</h1>
      {/* username */}
      <div className="flex flex-col items-center justify-center text-center">
        <label>username</label>
        <input className="text-center" name="username" />
      </div>
      {/* age */}
      <div className="flex flex-col items-center justify-center text-center">
        <label>age</label>
        <input className="text-center" name="age" />
      </div>

      {/* email */}
      <div className="flex flex-col items-center justify-center text-center">
        <label>email</label>
        <input className="text-center" name="email" />
      </div>

      <button type="submit" className="h-10 w-16 text-yellow-300 bg-slate-500">
        Signup
      </button>
    </form>
  );
}

export default Login;
