import styled from "styled-components";

export const StyledButton = styled.button`
    width: 2.5rem;
    height: auto;
    outline-offset: 2px;
`;

export const StyledEllipse = styled.div<{ $isDarkMode: boolean }>`
    width: 3rem;
    height: 1.5rem;
    background-color: ${({ theme }) => theme.colors.backgroundNeutral};
    outline: 2px solid ${({ theme }) => theme.colors.textNeutral};
    padding: 1px;

    position: relative;
    border-radius: 50px;
`;

export const StyledCircle = styled.div<{ $isDarkMode: boolean }>`
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: ${({ $isDarkMode }) => ($isDarkMode ? "2px" : "calc(100% - 1.25rem - 2px)")};
    transition: left 0.3s ease;
    width: 1.25rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.logoGradient.first};
`;
