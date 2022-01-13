import ApiService from "./ApiService";
import {API_ROUTES} from "../constants/api";
import {sanitizeUserActivityPayload} from "../functions/sanitizePayload";
import {getUserActivitiesFilterParams, UserActivityInterface} from "../interface/activityInterface";

class ActivityService extends ApiService {
  constructor() {
    super();
  }

  getActivities = (params?: getUserActivitiesFilterParams): Promise<{data?: [UserActivityInterface]; status: number}> => {
    return this.apiClient
      .get(API_ROUTES.activity.userActivities, {params})
      .then((res) => {
          return {
            data: sanitizeUserActivityPayload(res.data),
            // @ts-ignore
            status: res.statusCode,
          };
        },
      )
      .catch((e) => {
        return {
          status: e.status,
        };
      });
  };
}

const activityService = new ActivityService();
export default activityService;
