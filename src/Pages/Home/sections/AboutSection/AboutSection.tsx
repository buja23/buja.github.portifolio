import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import SchoolIcon from '@mui/icons-material/School';
import AnimatedContent  from "../../../../components/AnimatedContent/AnimatedContent";
import SpotlightCard from '../../../../components/SpotlightCard/SpotlightCard';
import ScrollReveal from '../../../../components/ScrollReveal/ScrollReveal';



const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        textAlign: "center",
        padding: theme.spacing(1),
        transition: "background-color 0.5s, transform 0.5s",
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Cores específicas para o modo escuro desta seção
        backgroundColor: '#1E1E1E', // Cor de "papel" escuro
        color: '#FFFFFF', // Cor do texto padrão
        border: '1px solid rgba(255, 255, 255, 0.12)', // Borda sutil
        '&:hover': {
            backgroundColor: theme.palette.secondary.light, // Este pode vir do seu tema principal
            transform: "scale(1.1)",
            color: theme.palette.getContrastText(theme.palette.secondary.light),
        },
    }));

    const skillsSet = [
        "Javascript", "Typescript", "React", "Next", "Node", "HTML", "CSS", "Laravel", "Vue", "FFmpeg", "Material UI", "Figma", "Git", "GitHub", "PHP", "MySQL", "MongoDB", "Python", "TypeScript", "Express.js",
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre mim</Typography>
                    <Typography variant="h5" textAlign="center" >Educação</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={4}>
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            duration={1}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                            >
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(214, 228, 255, 0.68)">
                                <SchoolIcon sx={{ color: "#fff"}}/>
                                <Typography textAlign="center" color="primary.contrastText" fontWeight={600}> Curso técnico </Typography>
                                <Typography textAlign="center" color="primary.contrastText">Etec Prof. Dr. Antônio E. de Toledo </Typography>
                                <Typography textAlign="center" color="primary.contrastText">Analise e Desisvolvimento de Sistemas</Typography>
                                <Typography textAlign="center" color="primary.contrastText">2021 - 2023</Typography>
                            </SpotlightCard>
                        </AnimatedContent>
                    </Grid>
                    <Grid item xs={9} md={4}>
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            duration={1}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                            >
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(14, 185, 185, 0.48)">
                                <SchoolIcon sx={{ color: "#fff"}}/>
                                <Typography textAlign="center" color="primary.contrastText" fontWeight={600}>Ensino Superior</Typography >
                                <Typography textAlign="center" color="primary.contrastText">Fatec - Presidente Prudente </Typography>
                                <Typography textAlign="center" color="primary.contrastText">Analise e Desisvolvimento de Sistemas</Typography>
                                <Typography textAlign="center" color="primary.contrastText">2024 - 2026</Typography>
                            </SpotlightCard>
                       </AnimatedContent>
                    </Grid>
                    
                </Grid>
                <Box pb={1}>
                    <ScrollReveal
                        enableBlur={true}
                        blurStrength={3}
                        baseOpacity={0.7}
                        baseRotation={0}
                    >
                        💻 Sou estudante de Análise e Desenvolvimento de Sistemas na FATEC, onde estou adquirindo conhecimentos fundamentais para me tornar um desenvolvedor completo.
                    </ScrollReveal>
                    <ScrollReveal
                        enableBlur={true}
                        blurStrength={3}
                        baseOpacity={0.7}
                        baseRotation={0}
                    >
                        🎯 Estou sempre em busca de evolução profissional, explorando diversas áreas da tecnologia, incluindo frontend, backend e bancos de dados. Minha paixão por programação me motiva a aprender continuamente e a me manter atualizado com as tendências do setor.
                    </ScrollReveal>
                    <ScrollReveal
                        enableBlur={true}
                        blurStrength={3}
                        baseOpacity={0.7}
                        baseRotation={0}
                        >
                        📚 Acredito que a prática é essencial para o aprendizado, por isso estou constantemente aplicando meus conhecimentos em projetos reaiws e desafiadores. Estou animado para enfrentar novos desafios e contribuir para soluções inovadoras no mundo da tecnologia.
                    </ScrollReveal>

                    
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
