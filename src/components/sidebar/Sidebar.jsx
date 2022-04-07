import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">TENTANG SAYA</span>
        <img src="https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=800x600&vertical=top" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa veritatis ipsa, doloribus voluptatibus, consectetur
        </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">KATEGORI</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Kategori 1</li>
        <li className="sidebarListItem">Kategori 2</li>
        <li className="sidebarListItem">Kategori 3</li>
        <li className="sidebarListItem">Kategori 4</li>
        <li className="sidebarListItem">Kategori 5</li>
      </ul>
      </div>
      {/* <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      </div> */}
    </div>
  )
}