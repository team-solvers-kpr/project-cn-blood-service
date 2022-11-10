import { Link } from "react-router-dom";

const PrimaryMenu = ({ menus }) => {
  return (
    <nav className="mainmenu__nav hidden-xs hidden-sm">
      <ul className="main__menu">
        {menus.length > 0 &&
          menus.map((menu) => (
            <li key={menu.id} className="border-b-8 hover:text-white transition-all font-bold border-red-600 w-full pt-4 cursor-pointer text-left bg-white  text-gray-700 hover:bg-red-600 focus:outline-none">
              <Link to={menu.link}>{menu.text}</Link>
                {menu?.megaMenus?.length > 0 && (
                <ul className="dropdown mega_dropdown">
                  {menu.megaMenus.map((megaMenu) => (
                    <li key={megaMenu.id}>
                      <Link to={megaMenu.link}>{megaMenu.megaMenuTitle}</Link>
                      {megaMenu.megamenuItems?.length > 0 && (
                        <ul className="mega__item">
                          {megaMenu.megamenuItems.map((megamenuItem) => (
                            <li key={megamenuItem.id}>
                              <Link to={megamenuItem.link}>{megamenuItem.text}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default PrimaryMenu;