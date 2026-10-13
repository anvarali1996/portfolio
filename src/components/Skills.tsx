// import React from 'react';

// const skills = [
//   { category: 'Frontend', list: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'] },
//   { category: 'Backend', list: ['Node.js', 'Express.js', 'MongoDB'] },
//   { category: 'Tools', list: ['Git', 'Firebase', 'Stripe'] },
// ];

// const Skills: React.FC = () => {
//   return (
//     <section className="container my-5" id="skills">
//       <h2>Skills</h2>
//       {skills.map((skill, index) => (
//         <div key={index} className="mb-3">
//           <h4>{skill.category}</h4>
//           <ul>
//             {skill.list.map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Skills;
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiFirebase, SiStripe } from 'react-icons/si';


const skills = [
  { 
    category: 'Frontend', 
    list: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'], 
    icons: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />, <SiTypescript />] 
  },
  { 
    category: 'Backend', 
    list: ['Node.js', 'Express.js', 'MongoDB', 'Python'], 
    icons: [<FaNodeJs />, <SiExpress />, <FaDatabase />, <FaPython />,] 
  },
  { 
    category: 'Tools', 
    list: ['Git', 'Firebase', 'Stripe'], 
    icons: [<FaGitAlt />, <SiFirebase />, <SiStripe />] 
  },
];


const Skills: React.FC = () => {
  return (
    <section id="skills" className="container py-5">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-4" key={index}>
            <h4>{skill.category}</h4>
            <ul>
              {skill.list.map((item, idx) => (
                <li key={idx} className="d-flex align-items-center">
                  <span className="me-2">{skill.icons[idx]}</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
