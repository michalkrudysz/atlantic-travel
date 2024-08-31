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
  dashboard: { getDashboardData: "/dashboard" },
};

export default endpoints;
