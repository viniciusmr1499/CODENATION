import { api } from "./service/api";

async function executeChallenge() {
  const response = await api.get();
  console.log(response.data);
}

executeChallenge();
