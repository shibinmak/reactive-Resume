/* eslint-disable lingui/no-unlocalized-strings */

import { HandHeart } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export const DonationBanner = () => (
  <motion.a
    href="https://makmyresume.online"
    target="_blank"
    whileHover={{ height: 48 }}
    initial={{ opacity: 0, y: -50, height: 32 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
    className="hidden w-screen items-center justify-center gap-x-2 bg-zinc-800 text-xs font-bold leading-relaxed text-zinc-50 lg:flex"
  >
    <HandHeart weight="bold" size={14} className="shrink-0" />
    <span>
     May you get the job !!
    </span>
  </motion.a>
);
