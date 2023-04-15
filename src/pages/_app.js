import "@/styles/globals.css";
import "@/styles/flex.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="opening"
        animate="animate"
        exit="leave"
        variants={{
          opening: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
          leave: {
            opacity: 0,
          },
        }}
        className={"cover"}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
