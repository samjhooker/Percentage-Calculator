import styled from "styled-components";

const MaterialIcon = ({className, iconName, onClick}) => (
    <i className={`material-icons ${className}`} onClick={() => onClick()}>{iconName}</i>
  );
  
export const IconButton = styled(MaterialIcon)`
    font-size: 2rem !important;
    cursor: pointer;
    user-select: none;
    &:hover {
        color: var(--font-color-hovered);
    }
    &:active {
        color: var(--font-color-selected);
    }
  `;