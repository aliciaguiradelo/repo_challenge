import { NavLink } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './style.css'

export default function Sidebar() {
    return(
        <aside id='sidebar'>
            { SidebarData.map((item, index) => {
                return(
                    <NavLink key={index} className="item_sidebar" to={item.path}>
                        {item.icon}
                        {item.title}
                    </NavLink>
                )
            }) }
        </aside>
    )
}