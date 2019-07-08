// Migrate this file to typescript:
//
// ✅ Rename the file using the typescript extension
// ✅ Define and interface for the Link props
//    (hint: Use the right Event Handler type from React and set
//    the generic for the element on it)
// ✅ Use the right type information from React for the component
// ✅ Delete the propTypes

import React from "react";

interface ILinkProps {
  active: boolean;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Link: React.FC<ILinkProps> = ({ active, children, onClick }) => (
  <button onClick={onClick} disabled={active} style={{ marginLeft: "4px" }}>
    {children}
  </button>
);

export default Link;
