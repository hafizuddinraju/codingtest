import { useState, useRef } from 'react';
import hitToast from '../helpers/hitToast';

export default function SubscriptionForm() {
  let [email, setEmail] = useState('');
  let [alertClass, setAlertClass] = useState('');
  var parentComp = useRef();

  const validate = (email) => {
    if (email.match(/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/)) {
      return true;
    } else if (email === '') {
      return false;
    }
    return false;

    
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate(email)) {
      setAlertClass('alert-validate');
      return;
    }
    fetch('https://server-user.vercel.app/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    }).then(res => res.json())
      
      .then(data => {
        console.log(data);
        if(data){
          hitToast(data.message, data.success ? 'success' : 'error')

        }
        
      }
        )
      .catch(() => hitToast('Something went wrong. Please try again.', 'error'))

    setAlertClass('');
  }

  

  return (
    <form className="w-full flex-w flex-c-m validate-form" onSubmit={handleSubmit}>
      <div ref={parentComp} className={"wrap-input100 validate-input where1 " + alertClass} data-validate="Valid email is required: user@email.domain">
        <input className="input100 placeholder0 s2-txt2" type="text" name="email" placeholder="Enter Email Address" onChange={e => setEmail(e.target.value)} />
        <span className="focus-input100"></span>
      </div>

      <button className="flex-c-m size3 s2-txt3 how-btn1 trans-04 where1">
        Subscribe
      </button>
    </form>
  );
}
