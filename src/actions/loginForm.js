"use server";

export async function LoginFormAction(form) {
  "use server";
  try {
    await CreateUser(form.get("username"), form.get("age"), form.get("email"));
  } catch (error) {
    console.log(error);
  }
}
