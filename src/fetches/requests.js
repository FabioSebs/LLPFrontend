// Streaming
export async function GetConversations(uid) {
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/v1/questions/conversation/${uid}`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function GetPreSurvey() {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/v1/survey/pre`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function GetFinalSurvey() {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/v1/survey/final`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

// Streaming
export async function GetTask() {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/v1/questions/start`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function CreateUser(formData) {
  const { username, age, email } = formData;
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/v1/user/create`, {
      method: "POST",
      body: {
        username,
        age,
        email,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function ContinueConversation(formData) {
  const { uid, question } = formData;
  try {
    await fetch(`${process.env.BACKEND_LOCAL}/v1/questions/create/${uid}`, {
      method: "POST",
      body: {
        question,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
