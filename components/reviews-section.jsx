"use client"
import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Rahul Verma',
    role: 'Frontend Dev',
    text: 'Amazing platform! Super clean design and great performance.',
  },
  {
    name: 'Ayesha Khan',
    role: 'UI/UX Designer',
    text: 'Loved the animations and UX. Definitely recommending to others!',
  },
  {
    name: 'Kunal Joshi',
    role: 'Full Stack Dev',
    text: 'Easy to integrate, fast support, and scalable. Perfect for my startup.',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const ReviewSection = () => {
  return (
    <div className="w-full px-4 py-16 bg-gray-50 relative z-50 lg:top-[180rem] md:top-[195rem] top-[335rem]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What people are saying</h2>
        <p className="text-gray-600 mb-12">Real feedback from real users.</p>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <p className="text-gray-800 mb-4 italic">"{review.text}"</p>
              <h4 className="text-lg font-semibold">{review.name}</h4>
              <span className="text-sm text-gray-500">{review.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
