import ApiService from "./ApiService";
import {sanitizeUserActivityPayload} from "../functions/sanitizePayload";
import {getUserActivitiesFilterParams, UserActivityInterface} from "../interface/activityInterface";

const ENDPOINTS = {getUserActivities: "activities/user-activities"};

class ActivityService extends ApiService {
  constructor() {
    super();
  }

  getActivities = (params?: getUserActivitiesFilterParams): Promise<{data?: [UserActivityInterface]; status: number}> => {
    return this.apiClient
      .get(ENDPOINTS.getUserActivities, {params})
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
