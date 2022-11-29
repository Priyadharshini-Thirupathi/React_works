import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Submenu.css";
function Submenu(props) {
  const { menuItems } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className="menu--container">
      <div className="menu--header" onClick={() => setOpen(!open)}>
        Animals
      </div>
      {open && <List1 menuItems={menuItems} position={"menu--items--bottom"} />}
    </div>
  );
}

function List1(props) {
  const { menuItems, position } = props;
  const [selected, setSelected] = useState(null);

  return (
    <div className={position}>
      {menuItems.map((item) => {
        const Active = item.title === selected;
        return (
          <List2
            subMenu={item}
            selected={selected}
            position={position}
            Active={Active}
            onClick={() => setSelected(item.title)}
          />
        );
      })}
    </div>
  );
}

function List2(props) {
  const { subMenu, Active, position, onClick } = props;
  return (
    <div className="menu--item" onClick={onClick}>
      {subMenu.title}
      {subMenu.list?.length > 0 && Active && (
        <List1 menuItems={subMenu.list} position={"menu--items--right"} />
      )}
    </div>
  );
}

List1.defaultProps = {
  position: "menu--items--bottom",
};
List2.defaultProps = {
  position: "menu--items--right",
};
Submenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
};
List1.propTypes = {
  menuItems: PropTypes.array.isRequired,
};
List2.propTypes = {
  subMenu: PropTypes.array.isRequired,
  Active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Submenu;
