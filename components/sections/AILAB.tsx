// import React from 'react'
// import { AILAB_HEADING, AILAB_CONTENT, AILAB_SUBTEXT } from '@/lib/constants'
// const AILAB = () => {
//   return (
//     <section id="AILAB" className='bg-background py-20 px-4 relative overflow-hidden'>
//       {/* holographic background */}
//       <div className='max-w-7xl mx-auto'>
//         <div className="absolute inset-0 overflow-hidden">
//           <div
//             className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full blur-3xl animate-holographic holographic-gradient opacity-20"
//             style={{ animationDelay: "2s" }}
//           >

//           </div>
//         </div>
//         {/* title */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-md font-mono text-brand-primary">
//             AI LAB - Coming Soon
//           </div>
//           <h2 className="text-3xl md:text-7xl font-bold leading-relaxed font-sans">
//             {AILAB_HEADING}
//           </h2>
//           <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-mono">
//             {AILAB_SUBTEXT}
//           </p>
//         </div>

//         {/* content */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {AILAB_CONTENT.map((item, index) => (
//             <div key={index} className='glass-effect rounded-lg p-6 transition-all duration-300 relative overflow-hidden group hover:scale-105'>
//               <div className="flex items-start gap-4">
//                 <div className="glass-effect p-3 rounded-lg">
//                   <item.icon className="h-6 w-6" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                   <p className="text-muted-foreground">{item.description}</p>
//                 </div>
//               </div>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   )
// }

// export default AILAB