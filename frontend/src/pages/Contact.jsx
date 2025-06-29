import { useState } from 'react';
import axios from 'axios';
import Toast from '../components/Toast.jsx';

export default function Contact() {
  const [form, setForm] = useState({ name:'',email:'',message:'' });
  const [toast, setToast] = useState(false);
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('/api/contact', form);
    setForm({ name:'',email:'',message:'' });
    setToast(true);
  };
  return (
    <section className="container mx-auto py-16 max-w-lg">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={onSubmit} className="space-y-4" aria-label="Contact form">
        <label>
          <span className="block">Name</span>
          <input
            name="name"
            required
            className="mt-1 block w-full rounded-md"
            value={form.name}
            onChange={onChange}
          />
        </label>
        <label>
          <span className="block">Email</span>
          <input
            name="email"
            type="email"
            required
            className="mt-1 block w-full rounded-md"
            value={form.email}
            onChange={onChange}
          />
        </label>
        <label>
          <span className="block">Message</span>
          <textarea
            name="message"
            required
            rows="5"
            className="mt-1 block w-full rounded-md"
            value={form.message}
            onChange={onChange}
          />
        </label>
        <button
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent focus-visible:ring"
        >
          Send
        </button>
      </form>
      <Toast show={toast} message="Message sent!" onClose={()=>setToast(false)} />
    </section>
  );
}
