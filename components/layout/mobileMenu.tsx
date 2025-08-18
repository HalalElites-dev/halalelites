// 'use client';
// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import { Button } from "../ui/button";
// import { Navigation } from "./Navigation";
// import Image from 'next/image';

// export function MobileMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openMenu = () => setIsOpen(true);
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <>
//       {/* Mobile Menu Trigger - Only shows Menu icon */}
//       <Button
//         variant="ghost"
//         size="sm"
//         onClick={openMenu}
//         className="md:hidden"
//       >
//         <Menu className="h-5 w-5" />
//       </Button>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 md:hidden">
//           <div className="mx-auto w-full  animate-in slide-in-from-top duration-300 bg-background   ">
//             {/* Header with Close Button */}

//             <div className="flex items-center justify-between  px-6 py-4  glass-effect">
//               <div className="flex items-center space-x-2 ">
//                 <Image 
//                   suppressHydrationWarning
//                   src="/LogoW.png"
//                   alt="Logo"
//                   width={160}
//                   height={32}
//                   className="block dark:hidden"
//                 />
//                 <Image 
//                   suppressHydrationWarning
//                   src="/Logo.png"
//                   alt="Logo"
//                   width={160}
//                   height={32}
//                   className="hidden dark:block"
//                 />
//               </div>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={closeMenu}
//                 className="rounded-full hover:bg-secondary text-foreground hover:text-foreground"
//               >
//                 <X className="h-4 w-4" />
//               </Button>
//             </div>

//             {/* Navigation Content */}
//             <div className="flex flex-col h-full glass-effect">
//               <div onClick={closeMenu} className="flex-1 px-6 py-6">
//                 <Navigation />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }