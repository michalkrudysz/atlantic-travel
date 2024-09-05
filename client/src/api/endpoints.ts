export const endpoints = {
  trips: {
    getTrips: "/trips",
    getTripDetails: "/trips/:tripId",
  },
  schoolTrips: {
    getSchoolTripsDetails: "/school/:schoolTrips",
  },
  testimonials: {
    getTestimonials: "/testimonials",
  },
  auth: {
    login: "/auth/login",
  },
  dashboard: {
    getDashboardData: "/dashboard",
    updateMainInfo: "/dashboard/updateMainInfo",
    updateDay: "/dashboard/updateDay",
    createDay: "/dashboard/createDay",
    modifyIncludedExcursionsTrip: "/dashboard/modifyIncludedExcursionsTrip",
    modifyServicesTrip: "/dashboard/modifyServicesTrip",
    modifyOptionalExcursionsTrip: "/dashboard/modifyOptionalExcursionsTrip",
    modifyContactTrip: "/dashboard/modifyContactTrip",
    updatePhotoTrip: "/dashboard/updatePhotoTrip",
    deleteTrip: "/dashboard/deleteTrip",
    addTrip: "/dashboard/addTrip",
  },
};

export default endpoints;
