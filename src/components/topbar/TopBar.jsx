import './topbar.css'

export default function TopBar() {
  return (
    <div className='top'>
      <div className="topLeft">left</div>
      <div className="topCenter">
        <div className="topList">
          <div className="topListItem">HOME</div>
          <div className="topListItem">ABOUT</div>
          <div className="topListItem">CONTACT</div>
          <div className="topListItem"></div>
        </div>
      </div>
      <div className="topRight">
      <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}