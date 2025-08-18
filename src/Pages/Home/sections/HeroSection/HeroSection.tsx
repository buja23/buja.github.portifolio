import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Typewriter from "../../../../components/Typewriter/Typewriter"
import Avatar from "../../../../assets/images/avatar2.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/pdfs/Curriculo.pdf"
import LightRays from '../../../../components/LightRays/LightRays';

const HeroSection: React.FC = () => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "50%",
        position: "relative"
    }));

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh"
        },
    }));

    const handleDownload = () => {
        console.log("download")
        const link = document.createElement('a');
        link.href = CV
        link.download = 'Curriculo.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

const handleEmail = () => {
  const emailAddress = "victor.azam10@gmail.com";
  const subject = "Contato pelo Portfólio";
  const body = "Olá Victor! Vi o seu portfólio e gostaria de conversar...";

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Tente com _blank para garantir em todos os navegadores
  window.open(mailtoLink, "_blank");

  console.log("email");
};



    return (
        <>
            <StyledHero style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 0,
                    pointerEvents: 'none'
                }}>
                    <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffff"
                    raysSpeed={1.0}
                    lightSpread={0.5}
                    rayLength={3.0}
                    fadeDistance={1}
                    saturation={1.0}
                    followMouse={true}
                    mouseInfluence={0.3}
                    noiseAmount={0}
                    distortion={0.05}
                    className="custom-rays"
                    />
                </div>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative" pb={3}>      
                                <Box textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" pb={2} textAlign="center">
                                Victor Azambuja
                            </Typography>
                            <Typewriter text="Estudante de Análise e Desenvolvimento De Sistemas" delay={120} variant="h2" color="primary.contrastText"/>
                            <Box mt={3}>
                                <Grid container spacing={3} display="flex" justifyContent="center">
                                    <Grid item xs={4} md={4}>
                                        <StyledButton onClick={handleDownload} icon={<DownloadIcon />}>
                                        Baixar CV
                                        </StyledButton>
                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <StyledButton onClick={handleEmail} icon={<EmailIcon />}>                                                
                                        Enviar Email                                        
                                        </StyledButton>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default HeroSection
