import { motion } from "motion/react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1722811087953-b745cf16a0c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
    caption: "Caption for Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1755306064502-6df8d7ee33f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    caption: "Caption for Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1755306064800-50206a7562f4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Caption for Image 3",
  },
];

const ImageGallery = () => {
  return (
    <div className="w-[80%] flex">
      {images.map((image, index) => (
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          key={index}
          className="relative m-[1rem] overflow-hidden rounded-lg shadow-lg"
        >
          <img src={image.src} alt={image.caption} className="w-full h-auto" />
          <motion.div whileHover={{ opacity: 1 }} className="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <p className="text-lg">{image.caption}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;
