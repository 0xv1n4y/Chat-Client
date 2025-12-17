import axios from "axios";
axios.defaults.withCredentials = true;

const getApiHost = () => {
//   Production (Vercel)
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }

  // Local fallback
  return "http://localhost:4000";
};

export const API_HOST = getApiHost();

export const GLOBALS = {
  api_login: `${API_HOST}/api/v1/login`,
  api_newuser: `${API_HOST}/api/v1/newuser/add`,
  api_fetchtoken: `${API_HOST}/api/v1/details`,
  api_logout: `${API_HOST}/api/v1/logout`,

//   api_usersemedia: `${API_HOST}/media/users/`,
  api_getusers: `${API_HOST}/api/v1/users`,

  api_createchat: `${API_HOST}/api/v1/chat`,
  api_fecthchats: `${API_HOST}/api/v1/chats`,

  api_fetchmessages: `${API_HOST}/api/v1/messages`,
  api_sendnewmessage: `${API_HOST}/api/v1/messages/new`,

  api_creategroup: `${API_HOST}/api/v1/group/new`,
  api_leavegroup: `${API_HOST}/api/v1/group`,

  api_updategroupname: `${API_HOST}/api/v1/groups/`,
  api_addmembers: `${API_HOST}/api/v1/groups/`,
  api_removemembers: `${API_HOST}/api/v1/groups/`,
};
