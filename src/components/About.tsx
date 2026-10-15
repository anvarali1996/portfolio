// import React from 'react';

// const About: React.FC = () => {
//   return (
//     <section id="about" className="container py-5" style={{ paddingTop: '80px' }}>

//       <h2 className="text-center mb-4">About Me</h2>
//       <p>
//         Junior Full-Stack Developer with a solid foundation in software development, testing, and maintenance. Skilled in front-end technologies such as JavaScript, React, and Next.js, with working knowledge of Node.js and Python. Focused on creating high-performance, secure, and data-driven applications with clean, reliable code.
//       </p>
//     </section>
//   );
// };

// export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaGraduationCap, FaRocket } from 'react-icons/fa';

const About: React.FC = () => {
  // Texnik yo'nalishlar va maqsadlar uchun qisqa vizual kartochkalar
  const highlights = [
    {
      icon: <FaCode className="fs-3 text-primary" />,
      title: 'Frontend',
      desc: 'React, Next.js, JavaScript',
    },
    {
      icon: <FaServer className="fs-3 text-success" />,
      title: 'Backend',
      desc: 'Node.js, Python',
    },
    {
      icon: <FaGraduationCap className="fs-3 text-warning" />,
      title: 'Maqom',
      desc: 'Junior Full-Stack Dev',
    },
    {
      icon: <FaRocket className="fs-3 text-danger" />,
      title: 'Yondashuv',
      desc: 'Clean & Scalable Code',
    },
  ];

  return (
    <section id="about" className="container py-5" style={{ paddingTop: '80px' }}>
      {/* Dynamic Sarlavha */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <h2 className="fw-bold display-5">About Me</h2>
        <p className="text-muted">Tajribam va maqsadlarim haqida qisqacha</p>
      </motion.div>

      {/* Asosiy Matn (Glassmorphism Kartochka) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card border-0 shadow-lg p-4 p-md-5 mb-5 rounded-4 glass-card"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <p className="fs-5 lh-lg text-secondary mb-0 text-center text-md-start">
          I'm a <strong className="text-primary">Junior Full-Stack Developer</strong> with a solid foundation in software development, testing, and maintenance. Skilled in front-end technologies such as <span className="badge bg-primary bg-opacity-10 text-primary fs-6 mx-1">JavaScript</span>, <span className="badge bg-info bg-opacity-10 text-info fs-6 mx-1">React</span>, and <span className="badge bg-dark bg-opacity-10 text-dark fs-6 mx-1">Next.js</span>, with working knowledge of <span className="badge bg-success bg-opacity-10 text-success fs-6 mx-1">Node.js</span> and <span className="badge bg-warning bg-opacity-10 text-warning fs-6 mx-1">Python</span>. Focused on creating high-performance, secure, and data-driven applications with clean, reliable code.
        </p>
      </motion.div>

      {/* Yo'nalishlar Ko'rsatkichi (Mini Cards) */}
      <div className="row g-4">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className="col-6 col-md-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-3 text-center rounded-4 shadow-sm h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="mb-2">{item.icon}</div>
              <h6 className="fw-bold mb-1">{item.title}</h6>
              <small className="text-muted d-block">{item.desc}</small>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;