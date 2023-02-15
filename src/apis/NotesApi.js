import axios from 'axios';

class NotesApi {
  endpoint = 'https://us-central1-take-home-6fb23.cloudfunctions.net/api';

  username = 'ENTER_USER_NAME_HERE';

  baseUrl = `${this.endpoint}/${this.username}`;

  async listNotes() {
    try {
      const response = await axios({
        method: 'get',
        baseURL: this.baseUrl,
        url: 'notes',
      });

      // Parse the data from the response
      const { data } = response.data;

      return {
        success: true,
        data,
      };
    } catch (error) {
      // Grab the error message from the server
      const {
        data: { message },
      } = error.response;

      return {
        success: false,
        message: message ?? error.message,
      };
    }
  }
}

export default NotesApi;
