import axios from "axios";

export default axios.create({
  //! everytime you run the server, change  the baseURL.. it last only for 8 hours and it sucks
  baseURL: "https://b24e2243.ngrok.io"
});
