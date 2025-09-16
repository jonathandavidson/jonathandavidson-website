import { h } from 'preact';
import { useState } from 'preact/hooks';

const inputClassName = 'hx:focus:hextra-focus hx:block hx:w-full hx:appearance-none hx:rounded-lg hx:px-3 hx:py-2 hx:transition-colors hx:text-base hx:leading-tight hx:md:text-sm hx:bg-black/[.05] hx:dark:bg-gray-50/10 hx:focus:bg-white hx:dark:focus:bg-dark hx:placeholder:text-gray-500 hx:dark:placeholder:text-gray-400 hx:contrast-more:border hx:contrast-more:border-current';

const buttonClassName = 'not-prose hx:font-medium hx:cursor-pointer hx:px-6 hx:py-3 hx:rounded-full hx:text-center hx:text-white hx:inline-block hx:bg-primary-600 hx:hover:bg-primary-700 hx:focus:outline-hidden hx:focus:ring-4 hx:focus:ring-primary-300 hx:dark:bg-primary-600 hx:dark:hover:bg-primary-700 hx:dark:focus:ring-primary-800 hx:transition-all hx:ease-in hx:duration-200';

const formGroupClassName = 'hx:mb-4';

const labelClassName = 'hx:block hx:mb-2 hx:text-sm hx:font-medium hx:text-gray-900 hx:dark:text-gray-300';

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
      {submitSuccess ? (
        <div class="success-message">Message sent successfully!</div>
      ) : (
        <form onSubmit={handleSubmit} class="contact-form">
          <div className={formGroupClassName}>
            <label className={labelClassName} for="name">Your name</label>
            <input
              className={inputClassName}
              type="text"
              id="name"
              value={name}
              onInput={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div class={formGroupClassName}>
            <label className={labelClassName} for="email">Your email</label>
            <input
              className={inputClassName}
              type="email"
              id="email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div class={formGroupClassName}>
            <label className={labelClassName} for="message">Message</label>
            <textarea
              className={inputClassName}
              id="message"
              rows="5"
              value={message}
              onInput={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          
          <button type="submit" disabled={isSubmitting}>
            <a className={buttonClassName}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </a>
          </button>
          
          {submitError && <div class="error-message">{submitError}</div>}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
