import ApiService from "./ApiService";

const ENDPOINTS = {
  PROFILE: "users/me",
  CHANGE_PASSWORD: "/user/change-password",
  USER: "/user",
};

class ProfileService extends ApiService {
  getProfile = () => {
    return this.apiClient.get(ENDPOINTS.PROFILE)
      .then((res) => {
        return {
          data: res.data,// @ts-ignore
          status: res.statusCode,
        };
      })
      .catch((reason) => {
        console.log(reason);
        return {
          status: reason.status,
        };
      });
  };

  /*  changePassword = data => {
      return this.apiClient.post(ENDPOINTS.CHANGE_PASSWORD, data);
    };

    updateUser = data => {
      let formData = new FormData();
      if (data.avatar) {
        const uri = data.avatar.uri;
        const name = uri.split("/").pop();
        const type = "image/jpeg";
        formData.append("avatar", {uri, name, type});
      }

      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      return this.apiClient.post(ENDPOINTS.USER, formData);
    };*/
}

const profileService = new ProfileService();
export default profileService;
