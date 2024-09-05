"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTestimonials = void 0;
const testimonials_1 = require("../models/testimonials");
const getAllTestimonials = async () => {
    try {
        const testimonials = await testimonials_1.Testimonials.findAll({
            attributes: ["testimonial_id", "title", "description", "file_url"],
        });
        return testimonials;
    }
    catch (error) {
        throw error;
    }
};
exports.getAllTestimonials = getAllTestimonials;
