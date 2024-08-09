import { Testimonials } from "../models/testimonials";

export const getAllTestimonials = async (): Promise<Testimonials[]> => {
  try {
    const testimonials = await Testimonials.findAll({
      attributes: ["testimonial_id", "title", "description", "file_url"],
    });
    return testimonials;
  } catch (error) {
    throw error;
  }
};
