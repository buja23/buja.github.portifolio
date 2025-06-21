import { styled, Container, Typography, Button } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png";
import Grid from "@mui/material/Grid";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
  
    const StylesImg = styled("img")(()=> ({
    width: "100%",
    borderRadius: "50%",
}))

    const StylesHero = styled("div")(()=> ({
        backgroundColor: "black",	
        height: "100vh",
    }))


  return (
    <>
        <StylesHero>
            <Container>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <StylesImg src={Avatar}/>
                    </Grid>
                    <Grid size={8}>
                        <Typography color="primary" variant="h1">Victor Azambuja</Typography>
                        <Typography color="primary" variant="h2">desenvolvedor de software</Typography>
                        <Button>
                            <FileDownloadIcon />
                            Baixar CV
                        </Button>
                        <Button>
                            <EmailIcon/>
                            Contato
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </StylesHero>


    </>
  )
}

export default Hero
