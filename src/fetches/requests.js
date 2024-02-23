import axios from "axios";
// Streaming
export async function GetConversations(uid) {
  try {
    const res = await fetch(
      `http://localhost:8000/v1/questions/conversation/${uid}`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function GetPreSurvey() {
  try {
    const res = await fetch(`http://localhost:8000/v1/survey/pre`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function GetFinalSurvey() {
  try {
    const res = await fetch(`http://localhost:8000/v1/survey/final`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

// Streaming
export async function GetTask() {
  try {
    const res = await fetch(`http://localhost:8000/v1/questions/start`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function CreateUser(formData) {
  const { username, age, email } = formData;
  try {
    const res = await axios.post(`http://localhost:8000/v1/user/create`, {
      username,
      age,
      email,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function ContinueConversation(formData) {
  const { uid, question } = formData;
  try {
    const res = await axios.post(
      `http://localhost:8000/v1/questions/create/${uid}`,
      {
        question,
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function SubmitPreSurvey(formData) {
  console.log(formData);

  const results = formData.map((res) => {
    const { questionNo, answer, input, userID, type } = res;
    return {
      questionNo,
      answer,
      input,
      userID,
      type,
    };
  });

  try {
    const res = await axios.post(`http://localhost:8000/v1/survey/create`, {
      results,
    });
    return res.data;
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
    const res = await axios.post(
      `http://localhost:8000/v1/survey/create/final`,
      {
        results,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
