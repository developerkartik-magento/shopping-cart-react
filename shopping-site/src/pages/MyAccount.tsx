import { useState } from "react";
const MyAccount = () => {
  const firstName = localStorage.getItem('firstName') || '';
  const lastName = localStorage.getItem('lastName') || '';
  const fullName = `${firstName} ${lastName}`.trim() || 'User';
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div>
      <h1>My Account</h1>
      <p>Welcome, {fullName}!</p>
    </div>
  )
}
export default MyAccount;