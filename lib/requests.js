import axios from "axios";
export async function GetConversations(uid) {
  try {
    return await axios.get(
      `${process.env.BACKEND_URL}/v1/questions/conversation/${uid}`
    );
  } catch (error) {
    console.log(error);
  }
}

export async function GetSurvey() {
  try {
    return await axios.get(`${process.env.BACKEND_URL}/v1/survey/`);
  } catch (error) {
    console.log(error);
  }
}

export async function GetTask() {
  try {
    return await axios.get(`${process.env.BACKEND_URL}/v1/questions/start`);
  } catch (error) {
    console.log(error);
  }
}
