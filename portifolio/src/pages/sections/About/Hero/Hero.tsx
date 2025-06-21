import { styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png";

const Hero = () => {
  
    const StylesHero = styled("div")(()=> ({
        backgroundColor: "black",	
    }))

        const StylesImg = styled("img")(()=> ({
        width: "30%",
        borderRadius: "50%",
    }))

  return (
    <>
        <StylesHero>
           buja
           <StylesImg src={Avatar}/>
        </StylesHero>
       
        
    </>
  )
}

export default Hero
