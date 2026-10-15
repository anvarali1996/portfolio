
// ============================--------------------===================   

// export default Skills;
// import React from 'react';
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaPython } from 'react-icons/fa';
// import { SiTypescript, SiExpress, SiFirebase, SiStripe } from 'react-icons/si';


// const skills = [
//   { 
//     category: 'Frontend', 
//     list: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'], 
//     icons: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />, <SiTypescript />] 
//   },
//   { 
//     category: 'Backend', 
//     list: ['Node.js', 'Express.js', 'MongoDB', 'Python'], 
//     icons: [<FaNodeJs />, <SiExpress />, <FaDatabase />, <FaPython />,] 
//   },
//   { 
//     category: 'Tools', 
//     list: ['Git', 'Firebase', 'Stripe'], 
//     icons: [<FaGitAlt />, <SiFirebase />, <SiStripe />] 
//   },
// ];


// const Skills: React.FC = () => {
//   return (
//     <section id="skills" className="container py-5">
//       <h2 className="text-center mb-4">Skills</h2>
//       <div className="row">
//         {skills.map((skill, index) => (
//           <div className="col-md-4" key={index}>
//             <h4>{skill.category}</h4>
//             <ul>
//               {skill.list.map((item, idx) => (
//                 <li key={idx} className="d-flex align-items-center">
//                   <span className="me-2">{skill.icons[idx]}</span> {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

// =============================================================================

import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiFirebase, SiStripe } from 'react-icons/si';

interface SkillCategory {
  category: string;
  list: string[];
  icons: React.ReactNode[];
}

const skills: SkillCategory[] = [
  { 
    category: 'Frontend', 
    list: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'], 
    icons: [<FaHtml5 color="#E34F26" />, <FaCss3Alt color="#1572B6" />, <FaJs color="#F7DF1E" />, <FaReact color="#61DAFB" />, <SiTypescript color="#3178C6" />] 
  },
  { 
    category: 'Backend', 
    list: ['Node.js', 'Express.js', 'MongoDB', 'Python'], 
    icons: [<FaNodeJs color="#339933" />, <SiExpress color="#000000" />, <FaDatabase color="#47A248" />, <FaPython color="#3776AB" />] 
  },
  { 
    category: 'Tools & Services', 
    list: ['Git', 'Firebase', 'Stripe'], 
    icons: [<FaGitAlt color="#F05032" />, <SiFirebase color="#FFCA28" />, <SiStripe color="#008CDD" />] 
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="container py-5">
      {/* Sarlavha animatsiyasi */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <h2 className="fw-bold display-5 text-gradient">Mening Ko'nikmalarim</h2>
        <p className="text-muted">Kunlik ishlatadigan texnologiyalarim va vositalarim</p>
      </motion.div>

      {/* Kartochkalar qatori */}
      <div className="row g-4 justify-content-center">
        {skills.map((group, index) => (
          <motion.div
            key={index}
            className="col-md-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div 
              className="card h-150 border-0 shadow-sm p-4 h-100 rounded-4 glass-card"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <h4 className="fw-semibold mb-4 text-primary border-bottom pb-2">
                {group.category}
              </h4>
              <ul className="list-unstyled d-flex flex-column gap-3">
                {group.list.map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="d-flex align-items-center p-2 rounded-3 bg-light bg-opacity-10 shadow-sm"
                  >
                    <span className="fs-4 me-3 d-flex align-items-center">
                      {group.icons[idx]}
                    </span>
                    <span className="fw-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;