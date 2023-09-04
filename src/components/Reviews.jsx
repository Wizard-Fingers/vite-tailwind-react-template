import { motion } from "framer-motion";

export default function Reviews() {
  // An array of sample reviews
  const reviews = [
    {
      id: 1,
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo eu urna euismod tincidunt.",
    },
    {
      id: 2,
      author: "Jane Smith",
      content:
        "Vestibulum sed felis non nunc tincidunt eleifend. Sed id quam nec orci interdum fringilla.",
    },
    {
      id: 3,
      author: "Alice Johnson",
      content:
        "Pellentesque vehicula sapien at quam facilisis, ut malesuada risus tristique. Fusce fringilla.",
    },
  ];

  return (
    <div className="py-8 bg-Black ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl text-White font-semibold mb-4 ">
          Customer Reviews
        </h2>
        <div className="grid gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="bg-White p-4 "
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-Black mb-2">{review.content}</p>
              <p className="text-Black">- {review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
