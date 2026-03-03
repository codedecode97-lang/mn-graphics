"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  cubicBezier,
} from "framer-motion";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import {
  ArrowLeft, Check, Phone, ChevronRight,
  Zap, Clock, Shield, Star, Layers, Users,
} from "lucide-react";
import Link from "next/link";
import aluminumCuttingwork from "@/app/assets/cutting-image/aluminumCutting-work.webp";
import cncsheetmetalcutting from "@/app/assets/cutting-image/cnc-sheet-metal-cutting.webp";
import stainlesssteelgate from "@/app/assets/cutting-image/stainless-steel-gate.webp";
import customengravedplaques from "@/app/assets/engraving/custom-engraved-plaque.jpg";
import laserengraving from "@/app/assets/engraving/laser-engraving.jpg";
import personalizecorporateengarving from "@/app/assets/engraving/personalize-corporate-engraving.jpg";
import acryliclasercuttingmachine from "@/app/assets/acrylic-cutting-image/acryliclasercuttingmachine.jpg";
import customacryliccutting from "@/app/assets/acrylic-cutting-image/customacrylic.jpeg";
import precisionlaserfinish from "@/app/assets/acrylic-cutting-image/precision-laser-edge-finish.jpg";
/* ══════════════════════════════════════════════
   ANIMATION HELPERS
══════════════════════════════════════════════ */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.72, ease: cubicBezier(0.22, 1, 0.36, 1), delay },
  },
});

/* ══════════════════════════════════════════════
   TILT CARD — physics-based 3D on mouse move
══════════════════════════════════════════════ */
function TiltCard({
  children, className = "", style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 260, damping: 26 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 260, damping: 26 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mx.set((e.clientX - left) / width - 0.5);
    my.set((e.clientY - top) / height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: 1000, ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   RGBA HELPER
══════════════════════════════════════════════ */
function rg(hex: string, a: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
const printServices = [
  {
    name: "HP Latex Print",
    img: "https://www.insightwithin.com/wp-content/uploads/2017/07/Latex-560_Standard_Front_with-output-1024x629.png",
    accent: "#3b82f6",
    description: "High-quality water-resistant printing for indoor and outdoor applications. Perfect for banners, signage, and large format prints with vibrant, lasting colours.",
    gallery: [
      { img: "https://5.imimg.com/data5/SELLER/Default/2024/9/454721238/RP/JM/JB/45631869/hp-latex-vinyl-with-lamination-250x250.jpg", title: "HP Latex Vinyl" },
      { img: "https://5.imimg.com/data5/JI/NF/MY-11912779/eco-solvent-printing-250x250.jpg", title: "Eco-Solvent Printing" },
      { img: "https://5.imimg.com/data5/SELLER/Default/2024/4/412108170/QF/PY/OX/2307481/digital-banner-printing-service-250x250.jpg", title: "Digital Banner" },
    ],
  },
  {
    name: "Mutoh Eco Print",
    img: "https://tiimg.tistatic.com/fp/2/001/525/mutoh-valuejet-1604-ecosolvent-printer-992.jpg",
    accent: "#10b981",
    description: "Eco-solvent technology for durable outdoor prints. Excellent for vehicle wraps, PVC banners, and weather-resistant signage without harsh chemicals.",
    gallery: [
      { img: "https://img500.exportersindia.com/product_images/bc-500/dir_118/3532627/mutoh-valuejet-2638-104-inch-large-eco-solvent-1878362.jpeg", title: "Mutoh ValueJet" },
      { img: "https://i.ytimg.com/vi/KGcHGJFGRRA/hq720.jpg", title: "Eco-Solvent Output" },
      { img: "https://i.ebayimg.com/images/g/TcIAAOSwD1BftDMI/s-l1200.jpg", title: "Premium Print" },
    ],
  },
  {
    name: "UV Flatbed Print",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqFmysgNo9A_An68f00I1OVd6vvU0oLhmcDw&s",
    accent: "#8b5cf6",
    description: "Advanced UV printing for rigid substrates like wood, acrylic, and metal. Instant drying with superior colour accuracy and premium finishes.",
    gallery: [
      { img: "https://www.simco-ion.es/fileadmin/Simco/Applications/products/Flatbed_printer_rolltoroll.jpg", title: "UV Flatbed Printer" },
      { img: "https://5.imimg.com/data5/ANDROID/Default/2024/6/427796400/LA/BP/MS/2033066/product-jpeg-500x500.jpg", title: "UV Technology" },
      { img: "https://lh3.googleusercontent.com/proxy/ROk_NkT8z66YXAh2zE3vcvh28-q-G3g4kWHuMpT8mZOoXAsMh5KiKDo_bKDnUn_XDx_kGlZekmzIT3H_6XDwsa6yx0Ry_v15AE7pGettPN7jqYDYY578k-WqD_U3", title: "Premium Output" },
    ],
  },
  {
    name: "Flex Print",
    img: "https://dn-24.com/wp-content/uploads/2024/04/26dc7e915abaaf10ed1fefde1ec0b0d5.jpg",
    accent: "#f59e0b",
    description: "Flexible vinyl printing for garments, bags, and curved surfaces. Soft, breathable, and perfect for custom apparel and textile applications.",
    gallery: [
      { img: "https://static.vecteezy.com/system/resources/thumbnails/054/907/774/small/a-large-format-printing-machine-producing-vibrant-highquality-prints-in-a-commercial-printing-shop-using-modern-technology-photo.jpg", title: "Large Format Printing" },
      { img: "https://images.jdmagicbox.com/quickquotes/images_main/flex-printing-2220377487-1cvmr8ap.jpg", title: "Flex Technology" },
      { img: "https://sc04.alicdn.com/kf/HTB1bev9a7Y2gK0jSZFgq6A5OFXa1.jpg", title: "Quality Output" },
    ],
  },
  {
    name: "Digital Print",
    img: "https://cdn2.bigcommerce.com/server500/cd6a7/product_images/uploaded_images/digital-printing.jpg",
    accent: "#6366f1",
    description: "Fast and cost-effective printing for short runs and colour-rich designs. Ideal for marketing materials, brochures, and promotional items.",
    gallery: [
      { img: "https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/MGAUKXTXQRVQIAQVVUIEYBWQ6W3U09799.jpg", title: "Digital Machine" },
      { img: "https://content.jdmagicbox.com/comp/ernakulam/y6/0484px484.x484.220929134417.p4y6/catalogue/insight-advertising-and-marketing-elamakkara-ernakulam-flex-printing-services-edacmxob9p.jpg", title: "Flex Services" },
      { img: "https://imprintbd.com/wp-content/uploads/2021/08/Digital-Print-Image.jpg", title: "Digital Output" },
    ],
  },
  {
    name: "Canvas Print",
    img: "https://supraprint.pl/wp-content/uploads/2023/11/obrazy-canvas-na-plotnie-malarskim-934x700.webp",
    accent: "#ef4444",
    description: "Premium canvas printing for artistic displays and elegant wall décor. Gallery-quality finish perfect for corporate offices and modern spaces.",
    gallery: [
      { img: "https://5.imimg.com/data5/GLADMIN/Default/2023/1/NP/LH/AX/7854362/wallpaper-and-canvas-printing-machine.jpg", title: "Canvas Machine" },
      { img: "https://cpimg.tistatic.com/10961450/b/4/Ricoh-Gen5-Solvent-Printing-Machine..jpg", title: "Printing Technology" },
      { img: "https://5.imimg.com/data5/SELLER/Default/2022/6/QK/BG/MM/119706847/flex-printed-banner-250x250.jpg", title: "Canvas Output" },
    ],
  },
  {
    name: "Retro Print",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/4/410886102/DX/AX/AI/79727137/retro-print-cutting-plotter-500x500.jpg",
    accent: "#ec4899",
    description: "Vintage and retro-style printing with distressed finishes. Perfect for trendy merchandise, apparel, and nostalgic brand aesthetics.",
    gallery: [
      { img: "https://5.imimg.com/data5/SELLER/Default/2021/6/LU/IU/HT/130448126/retro-reflective-vinyl.jpg", title: "Retro Vinyl" },
      { img: "https://5.imimg.com/data5/NSDMERP/Default/2022/7/ZI/RF/EN/120988310/rato-print-service-1657200686197-500x500.jpg", title: "Retro Print" },
      { img: "https://5.imimg.com/data5/SELLER/Default/2025/7/529493457/OX/MG/GL/98937243/retro-vinyl-printing.jpg", title: "Retro Vinyl Printing" },
    ],
  },
  {
    name: "Transfer Print",
    img: "https://framerusercontent.com/images/HQ5VjoIZj9tte1nxmlde0Nqksqo.jpg?width=1300&height=730",
    accent: "#06b6d4",
    description: "Heat-transfer technology for direct-to-garment printing with vibrant, durable results. Ideal for custom t-shirts, hoodies, and personalised items.",
    gallery: [
      { img: "https://5.imimg.com/data5/SELLER/Default/2025/7/526842505/XK/UO/CC/228152791/digital-transfer-film-printing-service-500x500.jpg", title: "Digital Transfer Film" },
      { img: "https://5.imimg.com/data5/SELLER/Default/2025/7/526842509/SE/UO/TM/228152791/digital-transfer-film-printing-service.jpg", title: "Transfer Service" },
      { img: "https://5.imimg.com/data5/SELLER/Default/2024/11/468873601/VG/PQ/TM/190601809/dtf-heat-transfer-printing-services-250x250.png", title: "DTF Heat Transfer" },
    ],
  },
  // ── Letter & Signage Services ──
  {
    name: "Liquid Acrylic Letter",
    img: "https://5.imimg.com/data5/KA/NY/AI/SELLER-47867688/led-acrylic-letter.jpg",
    accent: "#3b82f6",
    description: "Stunning liquid acrylic letters with a glossy, premium finish. Perfect for modern storefronts and elegant brand signage with outstanding light reflection.",
    gallery: [
      { img: "https://5.imimg.com/data5/SELLER/Default/2023/3/AG/BI/JZ/35731241/6-5mm-led-acrylic-letter-sign-board-500x500.jpeg", title: "Acrylic Letter Sign" },
      { img: "https://i.pinimg.com/736x/eb/34/4c/eb344cfbc83e4ae89cc0f402409df3a1.jpg", title: "LED Backlit Letter" },
      { img: "https://foun10.in/wp-content/uploads/2024/12/Illuminated-Lettering.jpg", title: "Premium Finish" },
    ],
  },
  {
    name: "Channel Letter",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIcJQ35tRQJzGl4aES2BtSx1pwtTwGzSaKQ&s",
    accent: "#a855f7",
    description: "Professional channel letters with LEDs for round-the-clock visibility. Superior durability with fully customizable lighting and color options.",
    gallery: [
      { img: "https://www.shutterstock.com/image-photo/electric-channel-letter-sign-halo-600nw-2536199083.jpg", title: "Channel Letter Install" },
      { img: "https://m.media-amazon.com/images/I/81V6D5KECzL.jpg", title: "LED Channel Letter" },
      { img: "https://www.makeneon.com/cdn/shop/files/fully-lit-3d-acrylic-letter-sign-10_1800x1800.jpg?v=1747898125", title: "Custom Channel" },
    ],
  },
  {
    name: "Diamond Letter",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBewPELgZlB9UNUCX4_qG9ZhDTNDnwNUHMZw&s",
    accent: "#ec4899",
    description: "Luxurious diamond-shaped letters for premium branding. Striking visual impact with sophisticated geometry and modern elegance.",
    gallery: [
      { img: "https://content.jdmagicbox.com/quickquotes/images_main/diamond-letter-sign-board-2211845101-j40lekix.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit", title: "Diamond Letter Sample" },
      { img: "https://5.imimg.com/data5/FZ/WG/LL/SELLER-64217745/led-diamond-crystal-letter-sign-board-500x500.jpg", title: "Luxury Signage" },
      { img: "https://5.imimg.com/data5/SELLER/Default/2024/8/445464880/FM/VA/GC/29695377/crystal-sign-board.png", title: "Premium Grade" },
    ],
  },
  {
    name: "ACP Letter",
    img: "https://5.imimg.com/data5/LA/NI/MY-2396634/acp-board-acrylic-letters.jpg",
    accent: "#0ea5e9",
    description: "Durable ACP (Aluminium Composite Panel) letters designed for exterior signage. Weather-resistant, lightweight, and ideal for commercial branding.",
    gallery: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRkP3Trwi1225GqddFDhxgFyWS_rCfTDWD6w&s",
        title: "ACP Letter Board",
      },
      {
        img: "https://5.imimg.com/data5/SELLER/Default/2022/9/JX/PA/VQ/57578089/bakery-shop-acrylic-led-sign-board.jpg",
        title: "ACP LED Letter",
      },
      {
        img: "https://5.imimg.com/data5/SELLER/Default/2024/2/384019947/EW/TL/FF/106617319/acrylic-led-acp-sign-board-1-500x500.jpg",
        title: "ACP Channel Letter",
      },
    ],
  },
  {
    name: "Digital Letter",
    img: "https://5.imimg.com/data5/PK/ON/MY-5119902/digital-letter-display-board-500x500.jpg",
    accent: "#6366f1",
    description: "Cutting-edge digital display letters with dynamic lighting. Perfect for interactive storefronts and contemporary brand aesthetics.",
    gallery: [
      { img: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Medium/multicolor-acrylic-led-boards-20240305184336216.jpg", title: "Digital Display" },
      { img: "https://cdn.shopify.com/s/files/1/0237/3773/files/burberry_sign.jpg", title: "Dynamic Letters" },
      { img: "https://5.imimg.com/data5/SELLER/Default/2024/8/442433255/HW/BC/OS/63832344/acrylic-led-sign-board-500x500.jpg", title: "Modern Signage" },
    ],
  },
  {
    name: "PVC NEON Letter",
    img: "https://i.pinimg.com/736x/35/2d/db/352ddb13ae2c25833c015205f84b848a.jpg",
    accent: "#f97316",
    description: "Vibrant neon-style PVC letters with energy-efficient LED. Eye-catching and modern — ideal for bars, cafes, and entertainment venues.",
    gallery: [
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqs9At5b6LrXPTyXVfNWqlaFIasLsi5QLP4Q&s", title: "Neon Letter Display" },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-KPVF_6mPP2gas9GfCQFWJL4wq9mhTRTRYQ&s", title: "PVC Neon Style" },
      { img: "https://5.imimg.com/data5/SELLER/Default/2024/12/469930838/ZZ/RI/LV/236433469/led-neon-sign-board-500x500.jpg", title: "Cafe Signage" },
    ],
  },
  {
    name: "Acrylic Box Letter",
    img: "https://cpimg.tistatic.com/08282655/b/4/Acrylic-Box-Type-Letters.jpg",
    accent: "#22c55e",
    description: "3D acrylic box letters with depth and dimension. Premium finish for upscale retail, hotels, and corporate establishments.",
    gallery: [
      { img: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Medium/led-acrylic-letter-packaging--20240420044255828.jpg", title: "Acrylic Box Letter" },
      { img: "https://i.pinimg.com/1200x/76/e2/14/76e2141978c1cf974ac33cb0688d4476.jpg", title: "3D Box Letter" },
      { img: "https://www.e-arc.in/wp-content/uploads/2025/02/Acrylic-Sign-Board_Hyderabad.png", title: "Hotel Lobby Sign" },
    ],
  },
  {
    name: "Golden Steel Letter",
    img: "https://ssbspl.com/wp-content/uploads/2024/03/blob-7781f7b-1.png",
    accent: "#facc15",
    description: "Luxurious gold-finished steel letters that exude elegance and sophistication. Perfect for luxury brands and high-end businesses.",
    gallery: [
      { img: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/ExtraLarge/mirror-finish-stainless-steel-golden-ss-letter-for-adv20240102115515.jpg", title: "Steel Letter Gold" },
      { img: "https://5.imimg.com/data5/UB/EW/BY/SELLER-41386807/stainless-steel-letter-sign-board.jpg", title: "Stainless Steel" },
      { img: "https://5.imimg.com/data5/ST/WT/MY-13997078/stainless-steel-led-sign-letter-500x500.jpg", title: "Corporate Signage" },
    ],
  },
  // ── Cutting & Engraving Services ──
  {
    name: "Router Jali Cutting",
    img: "https://amazingsign.co.in/wp-content/uploads/2025/09/hq720-6.jpg",
    accent: "#facc15",
    description:
      "Precision router cutting for decorative jali patterns using MDF, plywood, and other materials. Ideal for architectural and interior design elements.",
    gallery: [
      {
        img: "https://www.shutterstock.com/image-vector/jali-side-indian-temples-vector-260nw-2479198649.jpg",
        title: "CNC Router Jali Design",
      },
      {
        img: "https://www.shutterstock.com/image-vector/jali-design-laser-cutting-cnc-260nw-2260474579.jpg",
        title: "Decorative MDF Jali Pattern",
      },
      {
        img: "https://www.crealityfalcon.com/cdn/shop/articles/Plywood_Laser_Cutter_88bf2152-8b54-4188-b710-90956c95f2fd.jpg?v=1757642695",
        title: "Precision Wood Cutting Detail",
      },
    ],
  },
  {
    name: "Ply Cutting",
    img: "https://cpimg.tistatic.com/11098810/b/6/30mm-Ply-Cutting-Services..jpg",
    accent: "#f97316",
    description:
      "Expert plywood cutting services for signage, display boards, and interior decoration with smooth finishing and accurate dimensions.",
    gallery: [
      {
        img: "https://5.imimg.com/data5/SELLER/Default/2024/9/452487637/YP/HK/RN/199295741/plywood-cnc-cutting-service.jpg",
        title: "Plywood CNC Cutting",
      },
      {
        img: "https://5.imimg.com/data5/SELLER/Default/2023/12/366806407/ZW/RU/OQ/11784449/6mm-green-panel-wood-flooring.jpg",
        title: "Custom Ply Display Panel",
      },
      {
        img: "https://archidplydecor.com/UploadImages/7840fc96-4881-4668-abf5-7190e17173c2-deskBanImg.webp",
        title: "Interior Plywood Fabrication",
      },
    ],
  },
  {
    name: "Corian Cutting",
    img: "https://cpimg.tistatic.com/02485569/b/5/Corian-Cutting-Service.jpg",
    accent: "#22c55e",
    description:
      "Waterproof Corian sheet cutting for countertops, panels, and wall cladding with precision finishing and professional support.",
    gallery: [
      {
        img: "https://images.jdmagicbox.com/quickquotes/images_main/corian-cutting-services-383854724-68709.jpg",
        title: "Corian Sheet Cutting",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UxnBvXm_Ji6BMtPcJJWV4W5fLH4u1Tq9vA&s",
        title: "Corian Countertop Finish",
      },
      {
        img: "https://cpimg.tistatic.com/04842384/b/4/Corian-Designer-Wall-Panel.jpeg",
        title: "Wall Panel Corian Work",
      },
    ],
  },
  {
    name: "ACP Sheet Cutting",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQinJuplxaSl5vDo73Ea4DCs-gFpY2DNHNFQ&s",
    accent: "#3b82f6",
    description:
      "High-precision ACP cutting for building facades, signage, and exterior cladding applications.",
    gallery: [
      {
        img: "https://blog-aludecor.s3.ap-south-1.amazonaws.com/wp-content/uploads/2020/11/CNC-cut-design-building-Subhanna-Kolkata.jpg",
        title: "ACP Panel Cutting",
      },
      {
        img: "https://image.made-in-china.com/202f0j00ahAoIgnBfwrL/2mm-3mm-4mm-Cladding-Exterior-Wall-ACP-Sheets-Aluminum-Composite-Panel-Panels-for-Facades-Outdoor-Indoor.webp",
        title: "ACP Facade Installation",
      },
      {
        img: "https://alstoneindia.com/uploads/product-gallery/122310833-evolution-&-classic-gallery-1.webp",
        title: "Exterior ACP Cladding",
      },
    ],
  },
  {
    name: "Vinyl Cutting",
    img: "https://framerusercontent.com/images/ffJ1ohu44pMwZQMVZ7esQJsaUY.jpg?width=1300&height=730",
    accent: "#a855f7",
    description:
      "Professional vinyl cutting for stickers, vehicle branding, wall decals, and window graphics with precision finishing.",
    gallery: [
      {
        img: "https://cdn.prod.website-files.com/63a1b781691d242ccc949f38/63bbc35f280184b2883505e3_Cutting%20Vinyl%20Letters.jpg",
        title: "Custom Vinyl Letter Cutting",
      },
      {
        img: "https://thumbs.dreamstime.com/b/professional-modern-car-bike-vehicle-graphics-vinyls-wrap-decals-kit-graphic-vehicles-decal-designs-ready-to-print-cut-107204216.jpg",
        title: "Vehicle Vinyl Graphics",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnD_fQQpCipwd5bZe4bU1Q8dWJl4b7Qadd_g&s",
        title: "Window & Wall Vinyl Decals",
      },
    ],
  },
  {
    name: "Acrylic Laser Cutting",
    img: "https://www.weetect.com/wp-content/uploads/2018/08/Figure-1-Laser-cutting-acrylic-sheet-1024x576.jpg",
    accent: "#06b6d4",
    description:
      "Advanced laser cutting for acrylic sheets with clean edges and premium finish suitable for signage and display work.",
    gallery: [
      {
        img: acryliclasercuttingmachine,
        title: "Acrylic Laser Cutting Machine",
      },
      {
        img: customacryliccutting,
        title: "Custom Acrylic Signage",
      },
      {
        img: precisionlaserfinish,
        title: "Precision Laser Edge Finish",
      },
    ],
  },
  {
    name: "Engraving",
    img: "https://static.vecteezy.com/system/resources/thumbnails/008/028/162/small/damask-vintage-baroque-scroll-ornament-swirl-victorian-monogram-heraldic-shield-swirl-retro-floral-leaf-pattern-border-foliage-antique-acanthus-calligraphy-engraved-tattoo-tile-decor-elemen-vector.jpg",
    accent: "#ec4899",
    description:
      "Premium engraving services on acrylic, wood, metal, and leather for plaques, awards, and customized corporate gifts.",
    gallery: [
      {
        img: laserengraving,
        title: "Laser Engraving Design",
      },
      {
        img: customengravedplaques,
        title: "Custom Engraved Plaque",
      },
      {
        img: personalizecorporateengarving,
        title: "Personalized Corporate Engraving",
      },
    ],
  },
  {
    name: "Metal Sheet Cutting",
    img: "https://londonmetalstore.co.uk/cdn/shop/articles/cut_sheet_metal.jpg?v=1694613468",
    accent: "#10b981",
    description:
      "Precision metal cutting for aluminum, steel, and stainless steel sheets suitable for industrial signage and fabrication projects.",
    gallery: [
      {
        img: cncsheetmetalcutting,
        title: "Metal Sheet CNC Cutting",
      },
      {
        img: stainlesssteelgate,
        title: "Stainless Steel Fabrication",
      },
      {
        img: aluminumCuttingwork,
        title: "Custom Aluminium Cutting Work",
      },
    ],
  },
];

const whyItems = [
  { icon: Zap, title: "Industry-Leading Equipment", body: "Latest HP, Mutoh, and UV technology for unmatched output quality." },
  { icon: Clock, title: "On-Time, Every Time", body: "We respect your deadlines — fast turnaround without cutting corners." },
  { icon: Shield, title: "Durable, Weatherproof Output", body: "Materials rated for outdoor exposure — colour-fast for years." },
  { icon: Star, title: "Proven Track Record", body: "500+ projects delivered for businesses across Kolkata since 2013." },
  { icon: Layers, title: "Fully Custom Solutions", body: "No templates — every order scoped to your exact specification." },
  { icon: Users, title: "Dedicated Project Support", body: "One contact from brief to delivery. Always responsive." },
];

const features = [
  "Premium Quality Output",
  "Fast Turnaround Time",
  "Eco-Friendly Options",
  "Expert Support Team",
  "Competitive Pricing",
  "Custom Solutions",
];

const PARTICLES = [
  { l: "6%", b: "14%", s: 3, d: "9s", del: "0s", c: "rgba(250,204,21,0.65)" },
  { l: "20%", b: "8%", s: 2, d: "13s", del: "1.7s", c: "rgba(255,255,255,0.38)" },
  { l: "44%", b: "6%", s: 3, d: "8.5s", del: "0.4s", c: "rgba(250,204,21,0.45)" },
  { l: "66%", b: "20%", s: 2, d: "11s", del: "1.4s", c: "rgba(255,255,255,0.32)" },
  { l: "82%", b: "9%", s: 2, d: "10s", del: "2.8s", c: "rgba(250,204,21,0.5)" },
  { l: "93%", b: "32%", s: 2, d: "14s", del: "4.2s", c: "rgba(255,255,255,0.28)" },
  { l: "3%", b: "40%", s: 2, d: "16s", del: "5s", c: "rgba(250,204,21,0.3)" },
  { l: "58%", b: "42%", s: 2, d: "19s", del: "6s", c: "rgba(255,255,255,0.22)" },
];

/* ══════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════ */
export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slugParam = params.name as string;
  const service = printServices.find(
    (s) => s.name.toLowerCase().replace(/\s+/g, "-") === slugParam
  );
  const [hoveredWC, setHoveredWC] = useState<number | null>(null);

  /* ── 404 ── */
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(135deg,#060608 0%,#0e0e16 100%)" }}>
        <div className="text-center px-6">
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.26em]"
            style={{ fontFamily: "'Orbitron',sans-serif", color: "rgba(250,204,21,0.6)" }}>
            404 — Not Found
          </p>
          <h1 className="text-4xl mb-4 text-white"
            style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 800 }}>
            Service not found
          </h1>
          <p className="mb-10 text-[0.9rem]"
            style={{ fontFamily: "'Rajdhani',sans-serif", color: "rgba(156,163,175,0.7)" }}>
            The service you requested doesn't exist in our catalogue.
          </p>
          <Link href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-slate-900"
            style={{
              fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, letterSpacing: "0.12em",
              background: "linear-gradient(90deg,#ca8a04,#facc15,#fef08a,#facc15,#ca8a04)",
              backgroundSize: "280% auto"
            }}>
            <ArrowLeft size={16} /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const ac = service.accent;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800;900&family=Rajdhani:wght@500;600;700&family=Outfit:wght@300;400;500&display=swap');

        /* ── Keyframes ── */
        @keyframes goldShimmer {
          0%   { background-position: -220% center; }
          100% { background-position:  220% center; }
        }
        @keyframes accentShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes neonPulse {
          0%, 100% { opacity: 0.45; }
          50%       { opacity: 1; }
        }
        @keyframes floatRise {
          0%   { transform: translateY(0) scale(1);    opacity: 0; }
          10%  { opacity: 0.9; }
          85%  { opacity: 0.55; }
          100% { transform: translateY(-200px) scale(0.35); opacity: 0; }
        }
        @keyframes grain {
          0%   { transform: translate(0, 0); }
          33%  { transform: translate(-1px, 1px); }
          66%  { transform: translate(1px, -1px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes blobDrift {
          0%, 100% { transform: translate(0,0) scale(1); }
          33%       { transform: translate(28px,-18px) scale(1.04); }
          66%       { transform: translate(-18px,12px) scale(0.97); }
        }
        @keyframes topBarFlow {
          0%   { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
        @keyframes imgReveal {
          from { transform: scale(1.07); }
          to   { transform: scale(1); }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-5px); }
        }

        /* ── Root — matches hero dark theme ── */
        .sdp-root {
          min-height: 100vh;
          background: linear-gradient(160deg, #060608 0%, #09090f 30%, #0b0a12 65%, #070709 100%);
          position: relative;
          overflow-x: hidden;
        }

        /* ── Atmosphere ── */
        .sdp-grain {
          position: fixed; inset: 0; pointer-events: none; z-index: 1;
          animation: grain 0.85s steps(1) infinite;
          opacity: 0.022;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 175px 175px;
        }
        .sdp-scanline {
          position: fixed; left: 0; right: 0; height: 2px; pointer-events: none; z-index: 2;
          background: linear-gradient(90deg, transparent, rgba(250,204,21,0.025), transparent);
          animation: scanline 14s linear infinite;
        }
        .sdp-grid {
          position: fixed; inset: 0; pointer-events: none; z-index: 1;
          opacity: 0.017;
          background-image:
            linear-gradient(rgba(250,204,21,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(250,204,21,1) 1px, transparent 1px);
          background-size: 80px 80px;
        }
        .sdp-blob {
          position: fixed; border-radius: 50%; pointer-events: none;
          filter: blur(90px); z-index: 0;
          animation: blobDrift ease-in-out infinite;
        }
        .sdp-particle {
          position: fixed; border-radius: 50%; pointer-events: none;
          animation: floatRise linear infinite; z-index: 2;
        }
        .sdp-top-bar {
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.55) 10%,
            rgba(250,204,21,0.95) 30%, rgba(254,240,138,1) 50%,
            rgba(250,204,21,0.95) 70%, rgba(236,72,153,0.55) 90%, transparent 100%);
          background-size: 300% auto;
          animation: topBarFlow 5s linear infinite;
        }

        /* ── Typography ── */
        .f-orb { font-family: 'Orbitron', sans-serif; }
        .f-raj { font-family: 'Rajdhani', sans-serif; }
        .f-out { font-family: 'Outfit', sans-serif; }

        /* Gold shimmer heading */
        .gold-heading {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          line-height: 1.05;
          background: linear-gradient(90deg,
            #78350f 0%, #d97706 15%, #facc15 32%,
            #fef08a 50%, #facc15 68%, #d97706 85%, #78350f 100%
          );
          background-size: 240% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: goldShimmer 5.5s linear infinite;
          filter: drop-shadow(0 0 22px rgba(250,204,21,0.28));
        }

        /* Accent shimmer for service name */
        .accent-heading {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          line-height: 1.05;
          background: linear-gradient(90deg, #fff 0%, ${ac} 35%, #fff 55%, ${ac} 75%, #fff 100%);
          background-size: 220% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: accentShimmer 5s linear infinite;
          filter: drop-shadow(0 0 16px ${rg(ac, 0.35)});
        }

        /* Section label */
        .sdp-label {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 0.66rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(250,204,21,0.75);
          display: inline-flex; align-items: center; gap: 8px;
        }
        .sdp-label::before {
          content: '';
          display: block; width: 18px; height: 1.5px;
          background: linear-gradient(90deg, #facc15, rgba(250,204,21,0.3));
          border-radius: 2px;
          box-shadow: 0 0 5px rgba(250,204,21,0.55);
        }

        /* Breadcrumb */
        .bc-item {
          font-family: 'Rajdhani', sans-serif; font-weight: 600;
          font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(156,163,175,0.55);
          transition: color 0.22s ease;
        }
        .bc-item:hover { color: rgba(250,204,21,0.8); }

        /* Accent animated rule */
        .accent-rule-flow {
          height: 2px;
          border-radius: 9999px;
          background: linear-gradient(90deg, transparent, #facc15, ${ac}, transparent);
          background-size: 300% auto;
          animation: topBarFlow 4s linear infinite, neonPulse 3s ease-in-out infinite;
          width: 80px;
        }

        /* Glass card */
        .glass {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px) saturate(150%);
          -webkit-backdrop-filter: blur(20px) saturate(150%);
          border: 1px solid rgba(255,255,255,0.07);
        }

        /* Hero image card */
        .hero-img-card {
          border-radius: 1.75rem;
          overflow: hidden;
          position: relative;
          border: 1px solid ${rg(ac, 0.2)};
          box-shadow: 0 0 0 1px ${rg(ac, 0.07)},
                      0 24px 72px rgba(0,0,0,0.65),
                      0 0 60px ${rg(ac, 0.08)};
        }
        .hero-img-inner {
          animation: imgReveal 1.3s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        /* Feature pill */
        .feature-pill {
          display: flex; align-items: center; gap: 12px;
          border-radius: 0.875rem; padding: 13px 16px;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          cursor: default;
          border: 1px solid rgba(255,255,255,0.065);
          background: rgba(255,255,255,0.025);
        }
        .feature-pill:hover {
          transform: translateX(7px);
          background: rgba(255,255,255,0.05) !important;
          border-color: ${rg(ac, 0.35)} !important;
          box-shadow: 0 0 20px ${rg(ac, 0.1)};
        }

        /* CTA — gold shimmer */
        .cta-gold {
          font-family: 'Rajdhani', sans-serif; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase; font-size: 0.82rem;
          color: #08080c;
          background: linear-gradient(90deg,#ca8a04 0%,#facc15 35%,#fef08a 55%,#facc15 75%,#ca8a04 100%);
          background-size: 280% auto;
          animation: goldShimmer 4s linear infinite;
          border-radius: 9999px; padding: 14px 36px;
          box-shadow: 0 0 16px rgba(250,204,21,0.45), 0 4px 18px rgba(0,0,0,0.45);
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease;
          display: inline-flex; align-items: center; gap: 8px; cursor: pointer;
        }
        .cta-gold:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 0 32px rgba(250,204,21,0.72), 0 8px 26px rgba(0,0,0,0.55);
        }

        /* CTA — glass outline */
        .cta-outline {
          font-family: 'Rajdhani', sans-serif; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase; font-size: 0.82rem;
          color: rgba(250,204,21,0.88);
          background: rgba(255,255,255,0.055);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(250,204,21,0.28);
          border-radius: 9999px; padding: 13px 30px;
          transition: all 0.3s ease;
          display: inline-flex; align-items: center; gap: 8px; cursor: pointer;
        }
        .cta-outline:hover {
          background: rgba(250,204,21,0.1);
          border-color: rgba(250,204,21,0.6);
          transform: translateY(-2px);
          box-shadow: 0 0 22px rgba(250,204,21,0.2);
        }

        /* Gallery card */
        .gal-card {
          border-radius: 1.25rem; overflow: hidden; position: relative;
          border: 1px solid rgba(255,255,255,0.065);
          box-shadow: 0 8px 30px rgba(0,0,0,0.45);
          transition: transform 0.38s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.38s ease, border-color 0.32s ease;
        }
        .gal-card:hover {
          transform: translateY(-9px) scale(1.025);
          box-shadow: 0 28px 70px rgba(0,0,0,0.65), 0 0 35px ${rg(ac, 0.15)};
          border-color: ${rg(ac, 0.3)};
        }
        .gal-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 38%, rgba(4,4,12,0.92) 100%);
          opacity: 0; transition: opacity 0.38s ease;
        }
        .gal-card:hover .gal-overlay { opacity: 1; }
        .gal-badge {
          position: absolute; bottom: 14px; left: 14px; right: 14px;
          background: rgba(6,6,14,0.75);
          backdrop-filter: blur(16px) saturate(160%);
          border: 1px solid rgba(250,204,21,0.18);
          border-radius: 0.75rem; padding: 10px 14px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .gal-card:hover .gal-badge { opacity: 1; transform: translateY(0); }

        /* Why card */
        .wc-card {
          border-radius: 1.25rem; padding: 26px 24px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          transition: transform 0.32s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.32s ease, border-color 0.32s ease,
                      background 0.32s ease;
        }
        .wc-card:hover {
          transform: translateY(-7px);
          background: rgba(255,255,255,0.045);
        }

        /* Divider */
        .sdp-divider {
          height: 1px;
          background: linear-gradient(90deg,
            transparent, rgba(250,204,21,0.12), rgba(255,255,255,0.05),
            rgba(250,204,21,0.12), transparent);
        }

        /* CTA Banner */
        .cta-banner {
          border-radius: 2rem; overflow: hidden; position: relative;
          background: linear-gradient(135deg, #09090f 0%, #111018 50%, #09090f 100%);
          border: 1px solid rgba(250,204,21,0.13);
          box-shadow: 0 0 60px rgba(250,204,21,0.04);
        }

        /* Stats pill */
        .stat-pill {
          display: flex; flex-direction: column; align-items: center;
          gap: 2px; padding: 14px 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 1rem;
          transition: all 0.3s ease;
        }
        .stat-pill:hover {
          background: rgba(255,255,255,0.055);
          border-color: rgba(250,204,21,0.22);
          transform: translateY(-3px);
        }
      `}</style>

      {/* ═══════════════════════════════════════
          ROOT
      ═══════════════════════════════════════ */}
      <div className="sdp-root">

        {/* Fixed atmosphere layers */}
        <div className="sdp-grain" />
        <div className="sdp-scanline" />
        <div className="sdp-grid" />

        {/* Ambient blobs */}
        <div className="sdp-blob" style={{
          top: "-12%", right: "-7%", width: 520, height: 430,
          background: rg(ac, 0.12), animationDuration: "20s", animationDelay: "0s"
        }} />
        <div className="sdp-blob" style={{
          bottom: "6%", left: "-8%", width: 460, height: 370,
          background: "rgba(250,204,21,0.06)", animationDuration: "24s", animationDelay: "7s"
        }} />
        <div className="sdp-blob" style={{
          top: "48%", left: "36%", width: 340, height: 270,
          background: "rgba(59,130,246,0.04)", animationDuration: "18s", animationDelay: "3.5s"
        }} />

        {/* Particles */}
        {PARTICLES.map((p, i) => (
          <div key={i} className="sdp-particle"
            style={{
              left: p.l, bottom: p.b, width: p.s, height: p.s,
              background: p.c, boxShadow: `0 0 ${p.s * 4}px ${p.c}`,
              animationDuration: p.d, animationDelay: p.del
            }} />
        ))}

        {/* Animated top border */}
        <div className="sdp-top-bar" />

        {/* ═══════════════════════════════════════
            CONTENT
        ═══════════════════════════════════════ */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 py-12">

          {/* ── NAV ROW ── */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: cubicBezier(0.22, 1, 0.36, 1) }}
            className="flex items-center justify-between mb-12 mt-12"
          >
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 group"
              style={{
                fontFamily: "'Rajdhani',sans-serif", fontWeight: 700,
                fontSize: "0.74rem", letterSpacing: "0.14em", textTransform: "uppercase",
                color: "white", transition: "color 0.22s ease", background: "none", border: "none", cursor: "pointer"
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(250,204,21,0.9)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(156,163,175,0.65)")}>
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Back
            </button>

       
          </motion.div>

          {/* ════════════════════════
              HERO GRID
          ════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 mb-24 items-center">

            {/* IMAGE */}
            <motion.div variants={fadeUp(0)} initial="hidden" animate="visible" className="relative">
              {/* Outer neon glow */}
              <div className="absolute -inset-4 rounded-[2.2rem] pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 50%, ${rg(ac, 0.18)} 0%, transparent 68%)`,
                  filter: "blur(26px)", animation: "neonPulse 5s ease-in-out infinite"
                }} />

              <TiltCard>
                <div className="hero-img-card">
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] z-10"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${ac}, rgba(250,204,21,0.7), ${ac}, transparent)`,
                      boxShadow: `0 0 12px ${rg(ac, 0.7)}`
                    }} />

                  <div className="relative h-[380px] lg:h-[520px] hero-img-inner">
                    <Image src={service.img} alt={service.name} fill priority
                      className="object-cover"
                      sizes="(max-width:1024px) 100vw, 50vw" />

                    {/* Bottom gradient */}
                    <div className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(180deg, transparent 45%, rgba(4,4,12,0.88) 100%)" }} />

                    {/* Corner glow top-right */}
                    <div className="absolute top-0 right-0 w-28 h-28 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at 100% 0%, ${rg(ac, 0.3)} 0%, transparent 70%)` }} />

                    {/* Glass bottom badge */}
                    <div className="absolute bottom-5 left-5 right-5 glass rounded-xl px-4 py-3 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: "#4ade80", boxShadow: "0 0 8px #4ade80" }} />
                      <span className="f-raj font-700 text-[0.64rem] uppercase tracking-[0.2em]"
                        style={{ color: "rgba(229,231,235,0.88)" }}>
                        M.N. Graphics · Kolkata
                      </span>
                      <span className="ml-auto f-raj font-600 text-[0.6rem] uppercase tracking-[0.1em]"
                        style={{ color: "rgba(250,204,21,0.65)" }}>Est. 2013</span>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Stats row below image */}
              <motion.div variants={fadeUp(0.55)} initial="hidden" animate="visible"
                className="grid grid-cols-3 gap-3 mt-5">
                {[
                  { v: "500+", l: "Projects" },
                  { v: "10+", l: "Years" },
                  { v: "100%", l: "Quality" },
                ].map(({ v, l }) => (
                  <div key={l} className="stat-pill">
                    <span className="f-orb font-800 text-[1.1rem]"
                      style={{ color: "rgba(250,204,21,0.9)", lineHeight: 1 }}>{v}</span>
                    <span className="f-raj font-600 text-[0.62rem] uppercase tracking-[0.16em]"
                      style={{ color: "rgba(156,163,175,0.6)" }}>{l}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* CONTENT */}
            <motion.div initial="hidden" animate="visible" className="flex flex-col gap-6">

              <motion.span variants={fadeUp(0.08)} className="sdp-label">
                Service Details
              </motion.span>

              <motion.div variants={fadeUp(0.15)}>
                <h1 className="accent-heading text-[2.5rem] sm:text-[3.1rem] lg:text-[3.6rem] mb-5">
                  {service.name}
                </h1>
                <div className="accent-rule-flow" />
              </motion.div>

              <motion.p variants={fadeUp(0.22)}
                className="f-out text-[1.0rem] leading-[1.84]"
                style={{ color: "rgba(156,163,175,0.82)" }}>
                {service.description}
              </motion.p>

              {/* Features */}
              <motion.div variants={fadeUp(0.3)}>
                <p className="f-raj font-700 text-[0.66rem] uppercase tracking-[0.22em] mb-4"
                  style={{ color: "rgba(250,204,21,0.45)" }}>Key Features</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {features.map((feat, i) => (
                    <motion.div key={feat}
                      variants={fadeUp(0.32 + i * 0.04)}
                      initial="hidden" animate="visible"
                      className="feature-pill">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: rg(ac, 0.14), border: `1px solid ${rg(ac, 0.32)}` }}>
                        <Check size={13} style={{ color: ac }} strokeWidth={2.5} />
                      </div>
                      <span className="f-raj font-600 text-[0.86rem]"
                        style={{ color: "rgba(229,231,235,0.85)" }}>{feat}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeUp(0.54)} className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="cta-gold">
                  Get a Quote <ChevronRight size={15} strokeWidth={2.5} />
                </Link>
                <a href="tel:9831016701" className="cta-outline">
                  <Phone size={14} strokeWidth={2} /> Call Now
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="sdp-divider mb-20" />

          {/* ════════════════════════
              GALLERY
          ════════════════════════ */}
          {service.gallery && (
            <motion.section
              variants={fadeUp(0)} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              className="mb-20"
            >
              <div className="mb-10">
                <span className="sdp-label">Portfolio</span>
                <h2 className="f-orb font-800 text-[1.85rem] mt-2 gold-heading">
                  Work Showcase
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {service.gallery.map((item, idx) => (
                  <motion.div key={idx}
                    variants={fadeUp(idx * 0.1)}
                    initial="hidden" whileInView="visible"
                    viewport={{ once: true }}
                    className="gal-card">
                    <div className="relative h-60">
                      <Image src={item.img} alt={item.title} fill
                        className="object-cover"
                        sizes="(max-width:768px) 100vw, 33vw" />
                      <div className="gal-overlay" />
                      <div className="gal-badge">
                        <p className="f-raj font-700 text-[0.72rem] uppercase tracking-[0.14em]"
                          style={{ color: "rgba(229,231,235,0.9)" }}>{item.title}</p>
                      </div>
                      {/* Corner accent glow */}
                      <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at 100% 0%, ${rg(ac, 0.35)} 0%, transparent 70%)`,
                          opacity: 0, transition: "opacity 0.38s ease"
                        }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Divider */}
          <div className="sdp-divider mb-20" />

          {/* ════════════════════════
              WHY CHOOSE
          ════════════════════════ */}
          <motion.section
            variants={fadeUp(0)} initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="mb-20"
          >
            <div className="mb-10">
              <span className="sdp-label">Why M.N. Graphics</span>
              <h2 className="f-orb font-800 text-[1.85rem] mt-2 gold-heading">
                Why Choose This Service?
              </h2>
            </div>

            {/* Container with accent border */}
            <div className="rounded-2xl p-7 md:p-9 glass"
              style={{
                border: `1px solid rgba(250,204,21,0.1)`,
                background: "linear-gradient(135deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.015) 100%)"
              }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {whyItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isHov = hoveredWC === idx;
                  return (
                    <motion.div key={idx}
                      variants={fadeUp(idx * 0.07)}
                      initial="hidden" whileInView="visible"
                      viewport={{ once: true }}
                      className="wc-card"
                      style={{
                        borderColor: isHov ? rg(ac, 0.32) : "rgba(255,255,255,0.06)",
                        boxShadow: isHov ? `0 18px 52px rgba(0,0,0,0.45), 0 0 36px ${rg(ac, 0.12)}` : "none",
                        background: isHov ? `rgba(255,255,255,0.045)` : "rgba(255,255,255,0.025)",
                      }}
                      onMouseEnter={() => setHoveredWC(idx)}
                      onMouseLeave={() => setHoveredWC(null)}
                    >
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                        style={{
                          background: isHov ? rg(ac, 0.18) : rg(ac, 0.1),
                          border: `1px solid ${rg(ac, isHov ? 0.42 : 0.24)}`,
                          transition: "all 0.32s ease",
                          boxShadow: isHov ? `0 0 16px ${rg(ac, 0.3)}` : "none"
                        }}>
                        <Icon size={19} style={{ color: ac }} strokeWidth={1.8} />
                      </div>
                      <h3 className="f-raj font-700 text-[0.9rem] mb-2 uppercase tracking-[0.06em]"
                        style={{
                          color: isHov ? "#fff" : "rgba(229,231,235,0.82)",
                          transition: "color 0.28s ease"
                        }}>
                        {item.title}
                      </h3>
                      <p className="f-out text-[0.8rem] leading-[1.75]"
                        style={{ color: "rgba(107,114,128,0.88)" }}>
                        {item.body}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          {/* Divider */}
          <div className="sdp-divider mb-20" />

          {/* ════════════════════════
              BOTTOM CTA BANNER
          ════════════════════════ */}
          <motion.div
            variants={fadeUp(0)} initial="hidden"
            whileInView="visible" viewport={{ once: true }}
            className="cta-banner mb-6"
          >
            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "160px 160px" }} />

            {/* Gold top accent */}
            <div className="h-[2px]"
              style={{
                background: "linear-gradient(90deg, transparent, #facc15, #fef08a, #facc15, transparent)",
                boxShadow: "0 0 14px rgba(250,204,21,0.5)", animation: "topBarFlow 5s linear infinite"
              }} />

            {/* Radial glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(250,204,21,0.06) 0%, transparent 58%)" }} />

            <div className="relative z-10 px-8 sm:px-12 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <span className="sdp-label mb-3 block">Ready to start?</span>
                <h3 className="f-orb font-800 text-[1.7rem] sm:text-[2rem] text-white leading-[1.1] mb-3">
                  Get your free quote today.
                </h3>
                <p className="f-out text-[0.9rem] max-w-md"
                  style={{ color: "rgba(156,163,175,0.72)" }}>
                  Talk to our team — no obligation, just expert advice and a clear price.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 flex-shrink-0">
                <Link href="/contact" className="cta-gold">
                  Get Free Quote <ChevronRight size={15} strokeWidth={2.5} />
                </Link>
                <a href="tel:9831016701" className="cta-outline">
                  <Phone size={14} /> 9831016701
                </a>
                <button
                  onClick={() => router.back()}
                  className="cta-outline"
                  style={{ cursor: "pointer" }}
                >
                  <ArrowLeft size={14} /> Go Back
                </button>
              </div>
            </div>
          </motion.div>

          <div className="h-10" />
        </div>
      </div>
    </>
  );
}