import { Request, Response } from "express";
import * as testimonialsService from "../services/testimonialsService";
import { Testimonials } from "../models/testimonials";

function updateTestimonialUrl(
  testimonials: Testimonials[],
  req: Request
): void {
  testimonials.forEach((testimonial) => {
    if (testimonial.file_url) {
      testimonial.file_url = `${req.protocol}://${req.get("host")}/${
        testimonial.file_url
      }`;
    }
  });
}

export const getAllTestimonials = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let testimonials = await testimonialsService.getAllTestimonials();
    updateTestimonialUrl(testimonials, req);
    res.json(testimonials);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
};
