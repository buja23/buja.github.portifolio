import React, { ReactNode } from "react";
import { styled } from "@mui/material";

interface StyledButtonProps {
    children: ReactNode;
    onClick?: () => void;
    icon?: ReactNode;
}

const CustomButton = styled("button")({
    width: "150px",
    height: "50px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    background: "transparent",
    border: "1px solid #fff",
    borderRadius: "5px",
    boxShadow: "1px 1px 3px rgba(0,0,0,0.15)",
    position: "relative",
    overflow: "hidden",
    transition: "background 200ms",
    "&, & span": {
        transition: "200ms",
    },
    "&:hover": {
        background: "transparent",
    },
    "&:focus": {
        outline: "none",
    },
    "&:hover .text": {
        color: "transparent",
    },
    "&:hover .icon": {
        width: "140px",
        borderLeft: "none",
        transform: "translateX(0)",
    },
    "&:active .icon svg": {
        transform: "scale(0.8)",
    }
});

const Text = styled("span")({
    transform: "translateX(10px)",
    color: "white",
    fontWeight: "bold",
    transition: "200ms",
});

// linha
const IconWrapper = styled("span")({
    position: "absolute",
    borderLeft: "1px solid #ffffffff",
    transform: "translateX(107px)",
    height: "50px",
    width: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "200ms",
    "& svg": {
        width: "25px",
        fill: "#eee",
        transition: "200ms",
    }
});

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick, icon }) => (
    <CustomButton onClick={onClick}>
        <Text className="text">{children}</Text>
        <IconWrapper className="icon">{icon}</IconWrapper>
    </CustomButton>
);

export default StyledButton;
