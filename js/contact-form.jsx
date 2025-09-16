import { h, render } from 'preact';
import ContactForm from './components/ContactForm';

const element = document.getElementById('hugo-app-preact-element__contact-form');
if (element) {
  render(<ContactForm />, element);
}
