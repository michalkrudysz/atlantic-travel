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
  },
};

export default endpoints;
