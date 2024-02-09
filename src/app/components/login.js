import axios from "axios";
import { cookies } from "next/headers";

function Login() {
  async function createUser(form) {
    "use server";

    const res = await axios.post("http://localhost:8000/v1/user/create", {
      username: form.get("username"),
      age: form.get("age"),
      email: form.get("email"),
    });
    cookies().set("uid", res.data.data);
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
        <input className="text-center" />
      </div>
      {/* age */}
      <div className="flex flex-col items-center justify-center text-center">
        <label>age</label>
        <input className="text-center" />
      </div>

      {/* email */}
      <div className="flex flex-col items-center justify-center text-center">
        <label>email</label>
        <input className="text-center" />
      </div>

      <button type="submit"> Signup </button>
      <input />
    </form>
  );
}

export default Login;
