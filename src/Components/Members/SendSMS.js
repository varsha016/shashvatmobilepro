import React, { useState } from 'react'
import Heading from '../commonComps/Heading';
import SubHeading from '../commonComps/SubHeading';

const SendSMS = () => {
    
        const [selectedUser, setSelectedUser] = useState('');
        const [sendTo, setSendTo] = useState('');
        const [message, setMessage] = useState('');
      
        const handleSend = () => {
          // Add code here to send the SMS
          console.log(`Sending SMS to ${sendTo} with message: ${message}`);
        };
      
        const handleCancel = () => {
          // Add code here to cancel the SMS
          setSelectedUser('');
          setSendTo('');
          setMessage('');
        };
            
  return (
    <>
    <SubHeading heading="Send SMS" />
    <div className=" bg-sky-400 rounded-t-md text-center cursor-pointer p-2">Send SMS</div>
    <div>
      <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="">Select user</option>
        <option value="user1">User 1</option>
        <option value="user2">User 2</option>
      </select>
      <input type="text" value={sendTo} onChange={(e) => setSendTo(e.target.value)} placeholder="Send to" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
      <button onClick={handleSend}>Send</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
    
    </>
  )
}

export default SendSMS