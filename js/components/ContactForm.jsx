import { h } from 'preact';
import { useState } from 'preact/hooks';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // In a real app, you would send the data to your backend
      // For this example, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div class="contact-form-container">
      <h2>Contact Me</h2>
      {submitSuccess ? (
        <div class="success-message">Message sent successfully!</div>
      ) : (
        <form onSubmit={handleSubmit} class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onInput={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onInput={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitError && <div class="error-message">{submitError}</div>}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
