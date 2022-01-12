import {UserActivityInterface} from "../interface/activityInterface";

export const sanitizeUserActivityPayload = (activity_data: any): [UserActivityInterface] => {
  return activity_data.map((activityData: {_id: any; activityFor: any; allowedBy: any; dailyHelp: {_id: any; name: any; phone: any; typeOfWork: any;}; inTime: any; outTime: any; status: any; type: any; details: {name: any; photo: any; company: any; number: any; carNumber: any;};}) => {
    return {
      _id: activityData._id,
      activityFor: activityData.activityFor,
      allowedBy: activityData.allowedBy,
      dailyHelp: activityData.dailyHelp ? {
        _id: activityData.dailyHelp._id,
        name: activityData.dailyHelp.name,
        phone: activityData.dailyHelp.phone,
        typeOfWork: activityData.dailyHelp.typeOfWork,
      } : undefined,
      inTime: activityData.inTime,
      outTime: activityData.outTime,
      status: activityData.status,
      type: activityData.type,
      details: activityData.details ? {
        name: activityData.details.name,
        photo: activityData.details.photo,
        company: activityData.details.company,
        number: activityData.details.number,
        carNumber: activityData.details.carNumber,
      } : undefined,
    };
  });
};
