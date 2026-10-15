// import React from 'react';
// import { Form, Button } from 'react-bootstrap';

// const Contact: React.FC = () => {
//   return (
//     <section id="contact" className="container py-5">
//       <h2 className="text-center mb-4">Contact Me</h2>
//       <Form>
//         <Form.Group controlId="formName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" placeholder="Your Name" required />
//         </Form.Group>
//         <Form.Group controlId="formEmail" className="mt-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="Your Email" required />
//         </Form.Group>
//         <Form.Group controlId="formMessage" className="mt-3">
//           <Form.Label>Message</Form.Label>
//           <Form.Control as="textarea" rows={3} placeholder="Your Message" required />
//         </Form.Group>
//         <Button variant="primary" type="submit" className="mt-4">
//           Submit
//         </Button>
//       </Form>
//     </section>
//   );
// };

// export default Contact;




// import React, { useState, useRef } from 'react';
// import emailjs from 'emailjs-com';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';  // Import Bootstrap components

// const Contact: React.FC = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const formRef = useRef<HTMLFormElement>(null);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Send email using emailjs
//     emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current!, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
//       .then((result) => {
//         console.log(result.text);
//         setSubmitted(true); // Set submitted state to true
//       }, (error) => {
//         console.log(error.text);
//       });

//     // Reset the form after submission
//     formRef.current?.reset();
//   };

//   return (
//     <Container className="mt-5" id='contact'>
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <h2 className="text-center mb-4">Contact Me</h2>
          
//           {submitted ? (
//             <div className="text-center mt-5 mb-5">
//               <h3>Thanks for contacting me!</h3>
//               <p>I have received your message and will get back to you shortly.</p>
//             </div>
//           ) : (
//             <Form ref={formRef} onSubmit={handleSubmit} className="mb-5">
//               <Form.Group controlId="senderName" className="mb-3">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control type="text" name="senderName" required />
//               </Form.Group>

//               <Form.Group controlId="email" className="mb-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" name="email" required />
//               </Form.Group>

//               <Form.Group controlId="subject" className="mb-3">
//                 <Form.Label>Subject</Form.Label>
//                 <Form.Control type="text" name="subject" required />
//               </Form.Group>

//               <Form.Group controlId="message" className="mb-4">
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control as="textarea" name="message" rows={4} required />
//               </Form.Group>

//               <Button type="submit" variant="primary" className="w-100">Send Message</Button>
//             </Form>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };
// export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = formRef.current;
    if (!form) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Email yuborishda xatolik:", err);
      console.log("Public Key qiymati:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      console.error("EmailJS config:", {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKeyExists: Boolean(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
});
      setError("Xabar yuborilmadi. Iltimos, qayta urinib ko‘ring.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Container className="mt-5" id="contact">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Contact Me</h2>

          {submitted ? (
            <div className="text-center mt-5 mb-5">
              <h3>Thanks for contacting me!</h3>
              <p>I have received your message and will get back to you shortly.</p>
            </div>
          ) : (
            <Form ref={formRef} onSubmit={handleSubmit} className="mb-5">
              <Form.Group controlId="senderName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="senderName"
                  autoComplete="name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="subject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  required
                />
              </Form.Group>

              <Form.Group controlId="message" className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  required
                />
              </Form.Group>

              {error && <Alert variant="danger">{error}</Alert>}

              <Button
                type="submit"
                variant="primary"
                className="w-100"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      className="me-2"
                    />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;