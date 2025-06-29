import { useState } from 'react';
import axios from 'axios';
import Toast from '../components/Toast.jsx';

export default function Quote() {
  const initial = { name:'',email:'',phone:'',vehicle:'Sedan',services:[],addons:[],datetime:'',comments:'' };
  const [form,setForm] = useState(initial);
  const [toast,setToast]=useState(false);
  const opts = {
    vehicles:['Sedan','Small SUV','Truck','Large SUV'],
    services:['Full Detail','Interior Only','Exterior Only'],
    addons:['Clay bar/Wax','Headlight Restoration','Engine Bay Cleaning','Pet Hair/Stain Removal']
  };
  const handleChange = e => setForm({...form,[e.target.name]:e.target.value});
  const handleMulti = (name,val) => {
    setForm(f=>({
      ...f,
      [name]: f[name].includes(val)
        ? f[name].filter(x=>x!==val)
        : [...f[name],val]
    }));
  };
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('/api/quote',form);
    setForm(initial); setToast(true);
  };
  return (
    <section className="container mx-auto py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Request a Quote / Book Now</h1>
      <form onSubmit={onSubmit} className="grid gap-4" aria-label="Quote form">
        <div className="grid md:grid-cols-2 gap-4">
          <label>
            <span>Name</span>
            <input name="name" required className="mt-1 w-full rounded-md" value={form.name} onChange={handleChange}/>
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" required className="mt-1 w-full rounded-md" value={form.email} onChange={handleChange}/>
          </label>
        </div>
        <label>
          <span>Phone</span>
          <input name="phone" required className="mt-1 w-full rounded-md" value={form.phone} onChange={handleChange}/>
        </label>
        <label>
          <span>Vehicle Type</span>
          <select name="vehicle" className="mt-1 w-full rounded-md" value={form.vehicle} onChange={handleChange}>
            {opts.vehicles.map(v=><option key={v}>{v}</option>)}
          </select>
        </label>
        <fieldset>
          <legend className="font-medium">Service Type</legend>
          {opts.services.map(s=>(
            <label key={s} className="block">
              <input type="checkbox" checked={form.services.includes(s)} onChange={()=>handleMulti('services',s)} /> {s}
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend className="font-medium">Add‑ons</legend>
          {opts.addons.map(a=>(
            <label key={a} className="block">
              <input type="checkbox" checked={form.addons.includes(a)} onChange={()=>handleMulti('addons',a)} /> {a}
            </label>
          ))}
        </fieldset>
        <label>
          <span>Preferred Date &amp; Time</span>
          <input type="datetime-local" name="datetime" className="mt-1 w-full rounded-md" value={form.datetime} onChange={handleChange}/>
        </label>
        <label>
          <span>Comments</span>
          <textarea name="comments" rows="4" className="mt-1 w-full rounded-md" value={form.comments} onChange={handleChange}/>
        </label>
        <button className="bg-accent text-white px-8 py-3 rounded-lg hover:opacity-90 focus-visible:ring">
          Submit
        </button>
      </form>
      <Toast show={toast} message="Quote request sent!" onClose={()=>setToast(false)} />
    </section>
  );
}
