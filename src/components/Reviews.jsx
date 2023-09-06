import { motion } from "framer-motion";
import Art from "../../public/Art.png";
import Arthur from "../../public/Arthur.png";

export default function Reviews() {
  // An array of sample reviews
  const reviews = [
    {
      id: 1,
      picture: "../../public/Jackie-Wells.png",
      author: "Jackie Wells",
      content:
        "Working with Art has been an absolute delight. His dedication, skill, and passion for his craft are clearly evident in all our interactions. I'm continuously impressed by how quickly and eagerly Art responds whenever I have a question or need help. He clearly takes pride in providing the best service possible. But beyond his immense talent, what I appreciate most is his warmth and cooperative spirit. Art genuinely cares about understanding my vision and goals. He offers creative suggestions while also making sure I'm happy with the direction. Our collaboration feels less like a transaction and more like a partnership thanks to his sincerely collaborative attitude. I couldn't ask for a more skilled, attentive, or kind developer to work with on this project. Art goes above and beyond expectations to deliver phenomenal work with care and heart.",
    },
    {
      id: 2,
      picture: "../../public/Alexandra-Kowalski.png",
      author: "Alexandra Kowalski",
      content:
        "I am having Bear Digital Studios do recent changes for my scrapbook membership website. They work very fast and do quality work. I am so impress! My English not so good, but they are patient and understand what I need for my business. They help me make updates to membership pages for my scrapbooking customers. Always very quick turn around when I need new feature or fix problem on site. The designs also very nice looking and easy for customers to use. I recommend Bear Digital Studios for your web work. They are professionals who care about helping my scrapbook business succeed. I am very happy with services they provide and how nice they are to work with. Very fast, very skilled, and very good communication. I feel in good hands with Bear Digital Studios for web work.",
    },
    {
      id: 3,
      picture: "../../public/Aiden-MacLeod.png",
      author: "Aiden MacLeod",
      content:
        "I canna recommend Art enough for any web design or development work. He completely reimagined my whisky investment website from the ground up. Took my rough ideas and turned them into a proper professional site - a true work of art :)",
    },
    {
      id: 4,
      picture: "../../public/Aiden-MacLeod.png",
      author: "Carl Porter",
      content:
        "We feel so blessed to have had Arthur's help in getting the Wrougton Grace Church website up and running. He went out of his way to make sure we were comfortable with the process every step of the way. Thanks Arthur and the Team.",
    },
    {
      id: 5,
      picture: "../../public/Aiden-MacLeod.png",
      author: "Chico Cook",
      content:
        "Bear Digital Studios helped me and my wife build a business Landing Page for our Project Management Company. For the price we paid, we were very happy with the final product. 10/10 would recommend.",
    },
  ];

  return (
    <>
      <div className="pt-[12rem] bg-Black ">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl lg:text-7xl text-White font-semibold mb-4 flex justify-end pr-4">
            Reviews
          </h2>
          <div className="w-full flex justify-end">
            <div className=" w-2/4 lg:w-1/2 h-[0.8rem] bg-White" />
          </div>
          <div className="grid gap-8 mx-8">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                className="bg-White p-4 mt-8 border-l-4 border-t-4 border-Orange"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute -translate-x-12 -translate-y-16">
                  <img
                    src={review.picture}
                    alt={review.author}
                    className="w-16 h-16 rounded-full bg-Blue mr-4 border-Orange border-spacing-4 border-4"
                  />
                </div>
                <p className="text-Black mb-2  text-xl font-bold">
                  {review.content}
                </p>
                <p className="text-Blue font-bold text-xl text-end drop-shadow-xl">
                  - {review.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex justify-between bg-Black">
        <img src={Arthur} alt="Arthur Guilherme" className="hidden lg:flex" />

        <img src={Art} alt="Art Beckett" className="hidden lg:flex" />
      </div>
    </>
  );
}
