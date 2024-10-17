
import { SidebarPrincipal } from "./sidebar-principal";
import { SidebarDash } from "./sidebar-dash";
export const MenuMobile = ({onClick: toggleMenu,
  showMenu: showMenu, auth: status}) => {
   
  return (
    <aside>
      {status === 'Authenticado' ? (
        <SidebarDash onClick={toggleMenu} showMenu={showMenu} />
      ) : (
        <SidebarPrincipal onClick={toggleMenu} showMenu={showMenu} />
      )}
    </aside>
  )
}
