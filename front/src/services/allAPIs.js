import { BASE_URL } from "./base_url";
import { commonRequest } from "./commonReq";

// create post
export const createPost = async (body, header) => {
  return await commonRequest("POST", `${BASE_URL}/create-post`, body, header);
};
