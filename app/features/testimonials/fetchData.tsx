export const getTestimonialData = async () => {
    const res = await fetch('/testimonialData.json');
    return await res.json();
} 