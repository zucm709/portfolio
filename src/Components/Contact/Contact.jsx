// import React, { useState } from 'react'
// import './Contact.css'
// import theme from './../../assets/theme_pattern.svg'
// import mail_icon from './../../assets/mail_icon.svg'
// import phone_icon from './../../assets/call_icon.svg'
// import location_icon from './../../assets/location_icon.svg'


// const Contact = () => {
//   const [formData,setFormData] = useState({
//     name: '',
//     email: '',
//     message:''
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);
//     formData.append("access_key", "1a238126-59b7-4ad2-ba08-1ead72587fc9");
//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     }).then((res) => res.json());
//     if (res.success) {
//       console.log("Success", res);
//       setResult(res.message);
//       event.target.reset();
//     } else {
//       console.log("Error", res);
//       setResult(res.message);
//     }
//   };
//   return (
//     <div id='contact' className='contact'>
//       <div className="contact-title ">
//         <h1 >Get In Touch</h1>
//         <img src={theme} alt="" />
//       </div>
//       <div className="contact-section">
//         <div className="contact-left">
//             <h1>Let's Connect</h1>
//             <p>Being open to work across diverse domains like React JS, React Native, Python data analysis, and data structures and algorithms not only broadens my skill set but also fuels my passion for continuous learning and growth. Embracing this versatility allows me to tackle complex problems with creativity and efficiency, while also staying adaptable in an ever-evolving technological landscape.</p>
//              <div className="contact-details">
//                 <div className="contact-detail">
//                   <img src={mail_icon} alt="" />
//                   <p>raheemqayyuum@gmail.com</p>
//                 </div>
//                 <div className="contact-detail">
//                     <img src={phone_icon} alt="" />
//                     <p>+234 9163417945</p>
//                     </div>
//                     <div className="contact-detail">
//                     <img src={location_icon} alt="" />
//                     <p>Lagos</p>
//                     </div>
//              </div>
//         </div>
//         <form  className='contact-right' onSubmit={onSubmit}>

//           <label htmlFor="" >Your Name</label>
//           <input type="text" placeholder='Enter Your Name' name='name' value={formData.name} onChange={handleChange} />
//           <label htmlFor="">Your Email</label>
//           <input type="email" placeholder='Enter Your Name ' name="email"  value={formData.email} onChange={handleChange}/>
//           <label htmlFor="">Write Your message Here</label>
//           <textarea name="message" rows='8' placeholder='Enter your message' className='contact-textarea' value={formData.message} onChange={handleChange}>

//           </textarea>
//           <button type='submit' className='contact-submit' onSubmit={onSubmit} disable={!formData}>Submit Now</button>
//         </form> 
//         {/* <span className='sending'>{result}</span>  */}
//       </div>
//       <span className='sending'>{result}</span>
//     </div>
//   )
// }

// export default Contact
import React, { useState } from 'react'
import './Contact.css'
import theme from './../../assets/theme_pattern.svg'
import mail_icon from './../../assets/mail_icon.svg'
import phone_icon from './../../assets/call_icon.svg'
import location_icon from './../../assets/location_icon.svg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "1a238126-59b7-4ad2-ba08-1ead72587fc9");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());
    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Connect</h1>
          <p>Being open to work across diverse domains like React JS, React Native, Python data analysis, and data structures and algorithms not only broadens my skill set but also fuels my passion for continuous learning and growth. Embracing this versatility allows me to tackle complex problems with creativity and efficiency, while also staying adaptable in an ever-evolving technological landscape.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>raheemqayyuum@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone_icon} alt="" />
              <p>+234 9163417945</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Lagos</p>
            </div>
          </div>
        </div>
        <form className='contact-right' onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder='Enter Your Name' name='name' value={formData.name} onChange={handleChange} />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder='Enter Your Email' name="email" value={formData.email} onChange={handleChange} />
          <label htmlFor="message">Write Your message Here</label>
          <textarea name="message" rows='8' placeholder='Enter your message' className='contact-textarea' value={formData.message} onChange={handleChange} />
          <button type='submit' className='contact-submit' disabled={!isFormValid}>Submit Now</button>
        </form>
      </div>
      <span className='sending'>{result}</span>
    </div>
  );
}

export default Contact;
