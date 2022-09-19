import styled from "styled-components"

export const PageWrapper = styled.main`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  place-items: center;
  
  background: linear-gradient(
    90deg, 
    var(--background-color-1), 
    var(--background-color-2), 
    var(--background-color-3)
  );
  background-size: 300% 300%;
  animation: gradient 6s alternate infinite;
  position: absolute;
  top: 0;
  left: 0;
`;