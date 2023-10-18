import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://easy-fly-umbrella.cyclic.cloud/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setSent(true);
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

    return (
        <>
        <article id="Contact">
        <h2><span>Reach Me</span></h2>
        </article>
        <div id="reach-me">
        <p className="contact">📨: clintengineer@gmail.com</p>
        <p className="contact">💻: <a href="https://techtruth.dev" target="_blank" rel="noreferrer">Tech Truth</a></p>
        </div>
        <h2 id='interview-ctc'>Set Up An Interview</h2>
      {sent ? (
        <p>Message sent successfully!</p>
      ) : (
        <div id='ctc-form'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Your E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <br />
          <button id='send-btn' title='Send E-mail' type="submit">Send</button>
        </form>
        </div>
      )}
        </>
    )
}

export default Contact;