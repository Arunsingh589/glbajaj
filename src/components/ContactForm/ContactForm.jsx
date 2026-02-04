import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    city: '',
    course: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });
  const [admissionNumber, setAdmissionNumber] = useState('');

  const courses = [
  'Computer Science & Engineering',
  'CSE (Artificial Intelligence)',
  'CSE (Data Science)',
  'CSE (Artificial Intelligence & Machine Learning)',
  'Information Technology',
  'Electronics & Communication Engineering',
  'Electrical & Electronics Engineering',
  'Mechanical Engineering',
  'MCA (Master of Computer Applications)',
  'MBA (Master of Business Administration)',
  'M.Tech (Master of Technology)',
  'PGDM (Post Graduate Diploma in Management)',
  'BBA (Bachelor of Business Administration)',
  'BCA (Bachelor of Computer Applications)',
  'B.Com. LLB (Bachelor of Commerce & Bachelor of Legislative Law)',
  'B.A. LLB (Bachelor of Arts & Bachelor of Legislative Law)',
  'LLB (Bachelor of Legislative Law)',
];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    try {
      // Generate a temporary ID for admission number
      const tempId = Date.now().toString(36) + Math.random().toString(36).substr(2);
      const generatedAdmissionNumber = `ADM-${tempId}`;
      
      // Add document to Firebase Firestore with admission number
      const docRef = await addDoc(collection(db, 'admissions'), {
        ...formData,
        admissionNumber: generatedAdmissionNumber,
        timestamp: Timestamp.now(),
        createdAt: new Date().toISOString()
      });
      
      setAdmissionNumber(generatedAdmissionNumber);

      // Send email notification to admin using EmailJS
      try {
        await emailjs.send(
          'service_fq50inh',      
          'template_yx01h1e',     
          {
            to_name: 'Admin',
            from_name: formData.firstName,
            from_email: formData.email,
            phone: formData.phone,
            city: formData.city,
            course: formData.course,
            admission_number: generatedAdmissionNumber,
            submission_date: new Date().toLocaleString()
          },
          'dJ0_5VUPgIt1xyWAg'     
        );
        console.log('Admin notification email sent successfully');
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Continue even if email fails - form is already submitted to Firestore
      }

      // Show success message
      setSubmitMessage({
        type: 'success',
        text: 'Form submitted successfully! We will contact you soon.'
      });

      // Reset form
      setFormData({
        firstName: '',
        email: '',
        phone: '',
        city: '',
        course: ''
      });

      // Clear success message and admission number after 30 seconds
      setTimeout(() => {
        setSubmitMessage({ type: '', text: '' });
        setAdmissionNumber('');
      }, 30000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Failed to submit form. Please try again.'
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitMessage({ type: '', text: '' });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">ADMISSIONS OPEN</h2>
      
      {admissionNumber && (
        <div className="admission-success-box">
          <h3 className="success-title">✓ Form Submitted Successfully!</h3>
          <p className="success-message">Your Admission Number</p>
          <div className="admission-number">{admissionNumber}</div>
          <p className="success-note">Please save this for future reference</p>
        </div>
      )}

      {submitMessage.text && !admissionNumber && (
        <div className={`submit-message ${submitMessage.type}`}>
          {submitMessage.text}
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <span className="form-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </span>
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <span className="form-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </span>
          <input
            type="email"
            name="email"
            placeholder="email id*"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <span className="form-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
            </svg>
          </span>
          <input
            type="tel"
            name="phone"
            placeholder="Phone No*"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <span className="form-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </span>
          <input
            type="text"
            name="city"
            placeholder="CITY"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <span className="form-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </span>
          <select 
            name="course"
            className="form-input form-select" 
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>{course}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
