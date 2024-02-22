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
  console.log(formData);
  try {
    return await fetch(`${process.env.BACKEND_URL}/v1/user/create`, {
      method: "POST",
      body: {
        username,
        age,
        email,
      },
    });
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

export async function SubmitPreSurvey(formData) {
  console.log(formData);
  const userID = formDatap[0].userID;

  const results = formData.map((res) => {
    const { questionNo, answer, input } = res;
    return {
      questionNo,
      answer,
      input,
    };
  });

  try {
    await fetch(`${process.env.BACKEND_LOCAL}/v1/survey/create/pre/${userID}`, {
      method: "POST",
      body: {
        results,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function SubmitFinalSurvey(formData) {
  console.log(formData);

  const results = formData.map((res) => {
    const { questionNo, answer, input, userID } = res;

    return {
      questionNo,
      answer,
      input,
      userID,
    };
  });

  try {
    await fetch(`${process.env.BACKEND_LOCAL}/v1/survey/create/final`, {
      method: "POST",
      body: {
        results,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
