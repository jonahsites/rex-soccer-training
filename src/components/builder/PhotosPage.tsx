import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Share2, MoreHorizontal, Bell, Expand, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Builder } from '@builder.io/react';

export const PhotosPage = ({
  onBack = () => window.dispatchEvent(new CustomEvent('changePage', { detail: 'home' })),
  title = "Training Gallery",
  photos = [
    { src: "https://lh3.googleusercontent.com/d/1etZ43OxAu9o0txlet_IVg5o2SBpjEl1I" },
    { src: "https://lh3.googleusercontent.com/d/1IIry7hEJtJuvOzPFOXIRZWcI4AkBLUpE" },
    { src: "https://lh3.googleusercontent.com/d/1dgo0R5kV4CiFJbPrbWYXXkiEYZB_tpur" },
    { src: "https://lh3.googleusercontent.com/d/1A7uH4tuMDmH07CD_Z7zY3Iwt91md92vU" },
    { src: "https://lh3.googleusercontent.com/d/1vhEBQOJfure9bxmb_HcjSN8Iy5xBeXwl" },
    { src: "https://lh3.googleusercontent.com/d/1l3xOIw56gIqJ3z0LRsq_vQyd-rkO7w-9" },
    { src: "https://lh3.googleusercontent.com/d/1_zOQ8fYscaJoIsjD3uAozlVUOwMFFxBi" },
    { src: "https://lh3.googleusercontent.com/d/1zDcjZhinu25Qq4rlZ7N3NJrvb4A2BLtn" },
    { src: "https://lh3.googleusercontent.com/d/1WGl8aCGmAxEOjGK21dtM-7-Eclf3ikLQ" },
    { src: "https://lh3.googleusercontent.com/d/16ZOrxp26e6yZcwn2N2VvGOKyc7R6Kq0W" },
    { src: "https://lh3.googleusercontent.com/d/16EVfBtvwEMTfRpGj6WfFlm_-Dv1TLh_y" },
    { src: "https://lh3.googleusercontent.com/d/17J7z8RYmgsXI38j4Ke3pp8ess-8ccFiU" },
    { src: "https://lh3.googleusercontent.com/d/1UXYuKg1-dq43djtnADqnxfTwSl9D-fkg" },
    { src: "https://lh3.googleusercontent.com/d/1ghtNiMhwmQqAfq5EpVuNIYze5utG_MGe" },
    { src: "https://lh3.googleusercontent.com/d/1w0J54f8kmx-RolTziFdHlCnP4KpzKRlE" },
    { src: "https://lh3.googleusercontent.com/d/1ZhS3igNWMggmt82rdrLFeoVKdmg1gClO" },
    { src: "https://lh3.googleusercontent.com/d/18OwlbXF11cEiHFA7Uxrw5oxdYKzB7DVH" },
    { src: "https://lh3.googleusercontent.com/d/1Qs847rEF6HD-AOQ6g4YCvwe-ghZISaf_" },
    { src: "https://lh3.googleusercontent.com/d/1sVU0piQ69Ythi9f4vhrMy0DZ1wHgGGzQ" },
    { src: "https://lh3.googleusercontent.com/d/11ZXWR0S0rOV67sOY4DlXk-uLK7aIsY1u" },
    { src: "https://lh3.googleusercontent.com/d/1xGGrZG0RYfpV8GfO6wAUyFbNGk5CHZjX" },
    { src: "https://lh3.googleusercontent.com/d/1-x8hSU5yKJgnsFqQFSZljfr1tYJxBiXu" },
    { src: "https://lh3.googleusercontent.com/d/1863M-ZlDCLid51eRLOAX_lcIdxaf0CK-" },
    { src: "https://lh3.googleusercontent.com/d/1QVGF_e_1Ks1V2nq8Xc6Q3Rk16HMUv_8H" },
    { src: "https://lh3.googleusercontent.com/d/1OyVvwbxqp8QeQ2c_ncb4sE5t3LTdhR8J" },
    { src: "https://lh3.googleusercontent.com/d/1X3OmRp7wM6U0PEZWnpB4XjuTy4Z7uK-A" },
    { src: "https://lh3.googleusercontent.com/d/1k5pITD1LyVaE_nGM2B1sozNl9eXF0LIf" },
    { src: "https://lh3.googleusercontent.com/d/1_FLIZYGAuFcPFrKHy7d6hJ3DW4e6mqm3" },
    { src: "https://lh3.googleusercontent.com/d/1P3TSqNcrE6ssawMnvUSqPzmD9-SzFxHF" },
    { src: "https://lh3.googleusercontent.com/d/1h_djVKBzqhM2pjvT-R6FRE-cx6TLcQjX" },
    { src: "https://lh3.googleusercontent.com/d/12ni4ykdeFKFUoprUX1-uY19mQBEjyGhz" },
    { src: "https://lh3.googleusercontent.com/d/1Gs6dDhqIV3fwjfdtl7fzTkkUXNOdaxEP" },
    { src: "https://lh3.googleusercontent.com/d/1jGGD6ub8HyV-ggXBnZAqT0o1OG3A3FI0" },
    { src: "https://lh3.googleusercontent.com/d/1U8WdnoOU1pG63gNKQ7NsJagVovbccbQ0" },
    { src: "https://lh3.googleusercontent.com/d/1fU6GYvA6yt3AUk_QoDtOc1O35jD4wUde" },
    { src: "https://lh3.googleusercontent.com/d/1tTyY4epvBnCpWxH_Cu8cIDsUaZA61Vei" },
    { src: "https://lh3.googleusercontent.com/d/12-HMS2W4xDQ3o-w_00YfJ6SEJFiSiFS0" },
    { src: "https://lh3.googleusercontent.com/d/1Gbgxdx3VrlC7IYj_Nqj9Ffu0nm7s0igz" },
    { src: "https://lh3.googleusercontent.com/d/1BovbBmA4k3XhHB8gu7HJyhqo8GnGrox6" },
    { src: "https://lh3.googleusercontent.com/d/1_orANRBtQ3NfIo1pz7XDM6MO_RpVLJmX" },
    { src: "https://lh3.googleusercontent.com/d/1f9MpIMsIJ78KYw3Dip6LpT7cKheR_M9Q" },
    { src: "https://lh3.googleusercontent.com/d/1fwb7_Nt2bdLfJk9KF5fC-LudUNgnC5sV" },
    { src: "https://lh3.googleusercontent.com/d/1q3CdXENp7VdQUInQIYj6wizuFokw-5LM" },
    { src: "https://lh3.googleusercontent.com/d/1_JP4BQ8__LohbkshWVxePcg4gaQNx0KR" },
    { src: "https://lh3.googleusercontent.com/d/1gzQX9jBQTAhaBYWETX9h_j8th411HmCH" },
    { src: "https://lh3.googleusercontent.com/d/1tSTxsaiXvkcP1fimAiHS22i_UtjLnAZZ" },
    { src: "https://lh3.googleusercontent.com/d/14ySCDlB6spbjp9_gPPMU3WF5GTVxoRh8" },
    { src: "https://lh3.googleusercontent.com/d/1H9UVO-Fiwhd4d1NdPTofqcJAhNTeFwDg" },
    { src: "https://lh3.googleusercontent.com/d/1rToMtbq6zUqA-3ojUoM974XEX5Cro1Er" },
    { src: "https://lh3.googleusercontent.com/d/1Q-Wdxqnsb0L1ZVPvi7GXYIbdZQCf--GU" },
    { src: "https://lh3.googleusercontent.com/d/1CRzZMW7F_n3qJwgMfKOBA-b0mjl8Hb5v" },
    { src: "https://lh3.googleusercontent.com/d/1_KPsmMhosRBInbbzCpBaaCIOUVVrCJGD" },
    { src: "https://lh3.googleusercontent.com/d/1l5KH_i9dQUog8RpfFvLyISCopXA0NmVl" },
    { src: "https://lh3.googleusercontent.com/d/1pVn8-00OTetb5AungyUgHs_XvBG9takQ" },
    { src: "https://lh3.googleusercontent.com/d/1czzMY5R0Vkasi89xa0DL82pT0HtayXfW" },
    { src: "https://lh3.googleusercontent.com/d/18qsDyqxIRIxxLO-xZ2VYnPwlPj5R9cGF" },
    { src: "https://lh3.googleusercontent.com/d/1lM1EhhmLveSinyCGu4f2DEW_gVf3FY65" },
    { src: "https://lh3.googleusercontent.com/d/1ZOXz0pCXmgMn2FoEbvOfAPBmSYdeQFnc" },
    { src: "https://lh3.googleusercontent.com/d/1riHjYUBY5QHiJDJFHjS3o2jq2713qaI0" },
    { src: "https://lh3.googleusercontent.com/d/1g4QJ9y9DjiecXXFDeSqtA9Y4aM-QtpL5" },
    { src: "https://lh3.googleusercontent.com/d/1cuCTuCk-yzWV4_2EgNoLJwPThO0OaJnb" },
    { src: "https://lh3.googleusercontent.com/d/10xDBaRYG6gIn7mJFgIzyOLcDpNEju-4s" },
    { src: "https://lh3.googleusercontent.com/d/17gFjtR2tZ8gnHa8z_prlyrZY7zQWwRdH" },
    { src: "https://lh3.googleusercontent.com/d/19ycP7SoTozfTPXmidow_s6rBZf2fg-H7" },
    { src: "https://lh3.googleusercontent.com/d/1SIyPwK5AIrY_weU7mHy2frxEpyU3DAF2" },
    { src: "https://lh3.googleusercontent.com/d/17A1nEF2k_fhksM_bInS3cLmwPlKfDB47" },
    { src: "https://lh3.googleusercontent.com/d/1mZGGBGIAeRh-8xqWLYquchQ5MUQi44XG" },
    { src: "https://lh3.googleusercontent.com/d/1VfkoyNW1v_N6rqbHIHdvzcOShRvx0oVU" },
    { src: "https://lh3.googleusercontent.com/d/1Eudirr4nKJKo1K0bFs7ymI1MRcjUMSiS" },
    { src: "https://lh3.googleusercontent.com/d/1Jo9KhU662Uep37wjW4cFCHIqf_ZWhOdD" },
    { src: "https://lh3.googleusercontent.com/d/1FhtGKm6-wp9a8OETLmUnjnQBsTjMzA-Q" },
    { src: "https://lh3.googleusercontent.com/d/1TEWf1aLi7QrKc2sbpx60u-PfnSN6P6yh" },
    { src: "https://lh3.googleusercontent.com/d/1Xz4Ea8zbJzvYxJzyL29fvT1qs2xaurWL" },
    { src: "https://lh3.googleusercontent.com/d/1NSSChO85pk0lUkOkdH63qyv8G-8n-BZh" },
    { src: "https://lh3.googleusercontent.com/d/10h8ED8NpfOmR3EkAaFE6UStT1UXlwSJV" },
    { src: "https://lh3.googleusercontent.com/d/15dCTNWht0Wemw468HjB3RnwJo5eA2YCm" },
  ],
  backgroundColor = "bg-white",
}: {
  onBack?: () => void;
  title?: string;
  photos?: { src: string }[];
  backgroundColor?: string;
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  // Helper to get grid spans for a mosaic look
  const getGridSpan = (index: number) => {
    const pattern = [
      "row-span-2 col-span-1", // Tall
      "col-span-1 row-span-1", // Square
      "col-span-1 row-span-1", // Square
      "col-span-1 row-span-2", // Tall
      "col-span-2 row-span-1", // Wide
      "col-span-1 row-span-1", // Square
      "col-span-1 row-span-1", // Square
      "col-span-1 row-span-1", // Square
      "col-span-2 row-span-2", // Large Square
    ];
    return pattern[index % pattern.length];
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen ${backgroundColor} flex flex-col`}
    >
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-black/60" />
          </button>
          
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-bold text-black tracking-tight">{title}</h1>
            <div className="flex items-center gap-2 text-[10px] font-medium text-black/40 uppercase tracking-widest mt-0.5">
              <span>April 6, 2026</span>
              <span className="w-1 h-1 rounded-full bg-black/10" />
              <span>{photos.length} Photos</span>
              <span className="w-1 h-1 rounded-full bg-black/10" />
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-ice-blue/20 flex items-center justify-center overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/d/1_orANRBtQ3NfIo1pz7XDM6MO_RpVLJmX" className="w-full h-full object-cover" />
                </div>
                <span className="text-black/60">Coach Raza</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-black transition-colors">Share</button>
            <div className="flex items-center gap-1">
              <button className="p-2 hover:bg-black/5 rounded-full transition-colors"><MoreHorizontal className="w-5 h-5 text-black/40" /></button>
              <button className="p-2 hover:bg-black/5 rounded-full transition-colors"><Bell className="w-5 h-5 text-black/40" /></button>
              <div className="w-8 h-8 rounded-full bg-black/5 ml-2 overflow-hidden border border-black/10">
                <img src="https://lh3.googleusercontent.com/d/1_orANRBtQ3NfIo1pz7XDM6MO_RpVLJmX" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full pt-32 pb-20 px-4 md:px-6">
        {/* Mosaic Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-1 md:gap-2">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 12) * 0.05 }}
              className={`${getGridSpan(i)} relative group cursor-pointer overflow-hidden bg-black/5`}
              onClick={() => setSelectedPhoto(i)}
            >
              <img 
                src={photo.src} 
                alt={`Soccer ${i}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                  <Expand className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-20"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 p-2 text-white/40 hover:text-white transition-colors bg-white/5 rounded-full"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2">
              <button 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto((prev) => (prev! - 1 + photos.length) % photos.length);
                }}
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2">
              <button 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto((prev) => (prev! + 1) % photos.length);
                }}
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={photos[selectedPhoto].src} 
                alt="Enlarged" 
                className="max-w-full max-h-full object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 py-8 flex justify-center">
                <span className="text-white/40 font-black tracking-widest text-[10px] uppercase bg-black/20 px-4 py-2 rounded-full backdrop-blur-md">
                  {selectedPhoto + 1} / {photos.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

Builder.registerComponent(PhotosPage, {
  name: 'PhotosPage',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-white' },
    { name: 'title', type: 'string', defaultValue: "Training Gallery" },
    { 
      name: 'photos', 
      type: 'list', 
      subFields: [
        { name: 'src', type: 'file' },
      ], 
      defaultValue: [
        { src: "https://lh3.googleusercontent.com/d/1etZ43OxAu9o0txlet_IVg5o2SBpjEl1I" },
        { src: "https://lh3.googleusercontent.com/d/1IIry7hEJtJuvOzPFOXIRZWcI4AkBLUpE" },
        { src: "https://lh3.googleusercontent.com/d/1dgo0R5kV4CiFJbPrbWYXXkiEYZB_tpur" },
        { src: "https://lh3.googleusercontent.com/d/1A7uH4tuMDmH07CD_Z7zY3Iwt91md92vU" },
        { src: "https://lh3.googleusercontent.com/d/1vhEBQOJfure9bxmb_HcjSN8Iy5xBeXwl" },
        { src: "https://lh3.googleusercontent.com/d/1l3xOIw56gIqJ3z0LRsq_vQyd-rkO7w-9" },
        { src: "https://lh3.googleusercontent.com/d/1_zOQ8fYscaJoIsjD3uAozlVUOwMFFxBi" },
        { src: "https://lh3.googleusercontent.com/d/1zDcjZhinu25Qq4rlZ7N3NJrvb4A2BLtn" },
        { src: "https://lh3.googleusercontent.com/d/1WGl8aCGmAxEOjGK21dtM-7-Eclf3ikLQ" },
        { src: "https://lh3.googleusercontent.com/d/16ZOrxp26e6yZcwn2N2VvGOKyc7R6Kq0W" },
        { src: "https://lh3.googleusercontent.com/d/16EVfBtvwEMTfRpGj6WfFlm_-Dv1TLh_y" },
        { src: "https://lh3.googleusercontent.com/d/17J7z8RYmgsXI38j4Ke3pp8ess-8ccFiU" },
        { src: "https://lh3.googleusercontent.com/d/1UXYuKg1-dq43djtnADqnxfTwSl9D-fkg" },
        { src: "https://lh3.googleusercontent.com/d/1ghtNiMhwmQqAfq5EpVuNIYze5utG_MGe" },
        { src: "https://lh3.googleusercontent.com/d/1w0J54f8kmx-RolTziFdHlCnP4KpzKRlE" },
        { src: "https://lh3.googleusercontent.com/d/1ZhS3igNWMggmt82rdrLFeoVKdmg1gClO" },
        { src: "https://lh3.googleusercontent.com/d/18OwlbXF11cEiHFA7Uxrw5oxdYKzB7DVH" },
        { src: "https://lh3.googleusercontent.com/d/1Qs847rEF6HD-AOQ6g4YCvwe-ghZISaf_" },
        { src: "https://lh3.googleusercontent.com/d/1sVU0piQ69Ythi9f4vhrMy0DZ1wHgGGzQ" },
        { src: "https://lh3.googleusercontent.com/d/11ZXWR0S0rOV67sOY4DlXk-uLK7aIsY1u" },
        { src: "https://lh3.googleusercontent.com/d/1xGGrZG0RYfpV8GfO6wAUyFbNGk5CHZjX" },
        { src: "https://lh3.googleusercontent.com/d/1-x8hSU5yKJgnsFqQFSZljfr1tYJxBiXu" },
        { src: "https://lh3.googleusercontent.com/d/1863M-ZlDCLid51eRLOAX_lcIdxaf0CK-" },
        { src: "https://lh3.googleusercontent.com/d/1QVGF_e_1Ks1V2nq8Xc6Q3Rk16HMUv_8H" },
        { src: "https://lh3.googleusercontent.com/d/1OyVvwbxqp8QeQ2c_ncb4sE5t3LTdhR8J" },
        { src: "https://lh3.googleusercontent.com/d/1X3OmRp7wM6U0PEZWnpB4XjuTy4Z7uK-A" },
        { src: "https://lh3.googleusercontent.com/d/1k5pITD1LyVaE_nGM2B1sozNl9eXF0LIf" },
        { src: "https://lh3.googleusercontent.com/d/1_FLIZYGAuFcPFrKHy7d6hJ3DW4e6mqm3" },
        { src: "https://lh3.googleusercontent.com/d/1P3TSqNcrE6ssawMnvUSqPzmD9-SzFxHF" },
        { src: "https://lh3.googleusercontent.com/d/1h_djVKBzqhM2pjvT-R6FRE-cx6TLcQjX" },
        { src: "https://lh3.googleusercontent.com/d/12ni4ykdeFKFUoprUX1-uY19mQBEjyGhz" },
        { src: "https://lh3.googleusercontent.com/d/1Gs6dDhqIV3fwjfdtl7fzTkkUXNOdaxEP" },
        { src: "https://lh3.googleusercontent.com/d/1jGGD6ub8HyV-ggXBnZAqT0o1OG3A3FI0" },
        { src: "https://lh3.googleusercontent.com/d/1U8WdnoOU1pG63gNKQ7NsJagVovbccbQ0" },
        { src: "https://lh3.googleusercontent.com/d/1fU6GYvA6yt3AUk_QoDtOc1O35jD4wUde" },
        { src: "https://lh3.googleusercontent.com/d/1tTyY4epvBnCpWxH_Cu8cIDsUaZA61Vei" },
        { src: "https://lh3.googleusercontent.com/d/12-HMS2W4xDQ3o-w_00YfJ6SEJFiSiFS0" },
        { src: "https://lh3.googleusercontent.com/d/1Gbgxdx3VrlC7IYj_Nqj9Ffu0nm7s0igz" },
        { src: "https://lh3.googleusercontent.com/d/1BovbBmA4k3XhHB8gu7HJyhqo8GnGrox6" },
        { src: "https://lh3.googleusercontent.com/d/1_orANRBtQ3NfIo1pz7XDM6MO_RpVLJmX" },
        { src: "https://lh3.googleusercontent.com/d/1f9MpIMsIJ78KYw3Dip6LpT7cKheR_M9Q" },
        { src: "https://lh3.googleusercontent.com/d/1fwb7_Nt2bdLfJk9KF5fC-LudUNgnC5sV" },
        { src: "https://lh3.googleusercontent.com/d/1q3CdXENp7VdQUInQIYj6wizuFokw-5LM" },
        { src: "https://lh3.googleusercontent.com/d/1_JP4BQ8__LohbkshWVxePcg4gaQNx0KR" },
        { src: "https://lh3.googleusercontent.com/d/1gzQX9jBQTAhaBYWETX9h_j8th411HmCH" },
        { src: "https://lh3.googleusercontent.com/d/1tSTxsaiXvkcP1fimAiHS22i_UtjLnAZZ" },
        { src: "https://lh3.googleusercontent.com/d/14ySCDlB6spbjp9_gPPMU3WF5GTVxoRh8" },
        { src: "https://lh3.googleusercontent.com/d/1H9UVO-Fiwhd4d1NdPTofqcJAhNTeFwDg" },
        { src: "https://lh3.googleusercontent.com/d/1rToMtbq6zUqA-3ojUoM974XEX5Cro1Er" },
        { src: "https://lh3.googleusercontent.com/d/1Q-Wdxqnsb0L1ZVPvi7GXYIbdZQCf--GU" },
        { src: "https://lh3.googleusercontent.com/d/1CRzZMW7F_n3qJwgMfKOBA-b0mjl8Hb5v" },
        { src: "https://lh3.googleusercontent.com/d/1_KPsmMhosRBInbbzCpBaaCIOUVVrCJGD" },
        { src: "https://lh3.googleusercontent.com/d/1l5KH_i9dQUog8RpfFvLyISCopXA0NmVl" },
        { src: "https://lh3.googleusercontent.com/d/1pVn8-00OTetb5AungyUgHs_XvBG9takQ" },
        { src: "https://lh3.googleusercontent.com/d/1czzMY5R0Vkasi89xa0DL82pT0HtayXfW" },
        { src: "https://lh3.googleusercontent.com/d/18qsDyqxIRIxxLO-xZ2VYnPwlPj5R9cGF" },
        { src: "https://lh3.googleusercontent.com/d/1lM1EhhmLveSinyCGu4f2DEW_gVf3FY65" },
        { src: "https://lh3.googleusercontent.com/d/1ZOXz0pCXmgMn2FoEbvOfAPBmSYdeQFnc" },
        { src: "https://lh3.googleusercontent.com/d/1riHjYUBY5QHiJDJFHjS3o2jq2713qaI0" },
        { src: "https://lh3.googleusercontent.com/d/1g4QJ9y9DjiecXXFDeSqtA9Y4aM-QtpL5" },
        { src: "https://lh3.googleusercontent.com/d/1cuCTuCk-yzWV4_2EgNoLJwPThO0OaJnb" },
        { src: "https://lh3.googleusercontent.com/d/10xDBaRYG6gIn7mJFgIzyOLcDpNEju-4s" },
        { src: "https://lh3.googleusercontent.com/d/17gFjtR2tZ8gnHa8z_prlyrZY7zQWwRdH" },
        { src: "https://lh3.googleusercontent.com/d/19ycP7SoTozfTPXmidow_s6rBZf2fg-H7" },
        { src: "https://lh3.googleusercontent.com/d/1SIyPwK5AIrY_weU7mHy2frxEpyU3DAF2" },
        { src: "https://lh3.googleusercontent.com/d/17A1nEF2k_fhksM_bInS3cLmwPlKfDB47" },
        { src: "https://lh3.googleusercontent.com/d/1mZGGBGIAeRh-8xqWLYquchQ5MUQi44XG" },
        { src: "https://lh3.googleusercontent.com/d/1VfkoyNW1v_N6rqbHIHdvzcOShRvx0oVU" },
        { src: "https://lh3.googleusercontent.com/d/1Eudirr4nKJKo1K0bFs7ymI1MRcjUMSiS" },
        { src: "https://lh3.googleusercontent.com/d/1Jo9KhU662Uep37wjW4cFCHIqf_ZWhOdD" },
        { src: "https://lh3.googleusercontent.com/d/1FhtGKm6-wp9a8OETLmUnjnQBsTjMzA-Q" },
        { src: "https://lh3.googleusercontent.com/d/1TEWf1aLi7QrKc2sbpx60u-PfnSN6P6yh" },
        { src: "https://lh3.googleusercontent.com/d/1Xz4Ea8zbJzvYxJzyL29fvT1qs2xaurWL" },
        { src: "https://lh3.googleusercontent.com/d/1NSSChO85pk0lUkOkdH63qyv8G-8n-BZh" },
        { src: "https://lh3.googleusercontent.com/d/10h8ED8NpfOmR3EkAaFE6UStT1UXlwSJV" },
        { src: "https://lh3.googleusercontent.com/d/15dCTNWht0Wemw468HjB3RnwJo5eA2YCm" },
      ]
    },
  ],
});
