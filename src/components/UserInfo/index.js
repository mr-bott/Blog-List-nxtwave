// Write your JS code here
import './index.css'
const UserInfo = () => {
  return (
    <div className="profile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
        alt="profile"
        className="profile-img"
      />
      <h1 className="profile-h1">Wade Warren</h1>
      <p className="profile-p">Software Developer at UK</p>
    </div>
  )
}

export default UserInfo
