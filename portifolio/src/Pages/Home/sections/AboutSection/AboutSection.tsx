import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Javascript", "Typescript", "React", "Next", "Node", "HTML", "CSS", "Laravel", "Vue", "FFmpeg", "Material UI", "Figma", "Git", "GitHub", "PHP", "MySQL", "MongoDB", "Python", "TypeScript", "Express.js",
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre mim</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Educação</Typography>
                                <Typography textAlign="center">Fatec - Presidente Prudente </Typography>
                                <Typography textAlign="center">A.D.S</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                    💻 Sou estudante de Análise e Desenvolvimento de Sistemas na FATEC, onde estou adquirindo conhecimentos fundamentais para me tornar um desenvolvedor completo.
                    </Typography>
                    <Typography>
                    🎯 Estou sempre em busca de evolução profissional, explorando diversas áreas da tecnologia, incluindo frontend, backend e bancos de dados. Minha paixão por programação me motiva a aprender continuamente e a me manter atualizado com as tendências do setor.
                    </Typography>
                    <Typography>
                    📚 Acredito que a prática é essencial para o aprendizado, por isso estou constantemente aplicando meus conhecimentos em projetos reais e desafiadores. Estou animado para enfrentar novos desafios e contribuir para soluções inovadoras no mundo da tecnologia.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Habilidades</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection
