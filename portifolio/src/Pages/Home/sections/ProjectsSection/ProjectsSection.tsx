import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimatedContent/AnimatedContent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Jogo para Transtorno do Espectro Autista (Alita: Mountain Aventure)",
            subtitle: "Fev 2023 - Out 2023",
            srcImg: "/src/assets/images/alita.png",
            description: "Desenvolvimento de um jogo para auxiliar no tratamento de crianças com Transtorno do Espectro Autista (TEA). O jogo é uma aventura em 2D, onde o jogador controla a personagem Alita, que deve coletar itens e completar missões para ajudar seus amigos. (Codigo feito todo em GML no GameMaker Studio 2).",
            technologies: "Technologies: Gamemaker Studio 2, GML, Piskel.",
            websiteURL: ".",
            codeURL: ".",
        },
        {
            title: "Editor de Vídeo Creator4All ",
            subtitle: "Jun 2024 - Em andamento",
            srcImg: "/src/assets/images/editor.png",
            description: "Editor de vídeo desenvolvido para facilitar a criação de vídeos para professores da plataforma do Creator4all. E um editor de video simples para ser implementado a plataforma do Creator4all, onde o professor pode criar vídeos de forma simples e rápida, sem precisar de conhecimentos técnicos avançados.",
            technologies: "Technologies: vue, ffmpeg, electron, figma.",
            websiteURL: "https://dev.azure.com/fatec-ams-equipe1/Fatec%20AMS%20Equipe%201-2024/_boards/board/t/Fatec%20AMS%20Equipe%201-2024%20Team/Backlog%20items",
            codeURL: "https://github.com/Arthur-Nonaka-Oda/Fatec-AMS-Equipe-1-2024",
        },
        {
            title: "Sistema de Controle de Vendas",
            subtitle: "Mar 2025 - Em andamento",
            srcImg: "/src/assets/images/bjtech.png",
            description: "Sistema de controle de vendas desenvolvido para auxiliar no gerenciamento de vendas e estoque de uma loja. O sistema permite o cadastro de produtos, clientes e vendas, além de gerar relatórios e gráficos para análise de desempenho.",
            technologies: "Technologies: React, Node.js, Express, MongoDB ",
            websiteURL: "https://trello.com/b/aUsQtRUC/bgbj",
            codeURL: "https://github.com/buja23/BG-BJ-tec",
        },
        {
            title: "Chamada digital Jiu Jitsu 1.0",
            subtitle: "Fev 2025 - Mar 2025",
            srcImg: "/src/assets/images/jiu.png",
            description: "Uma chamada digital simples para academias de jiu jitsu, para ajudar o instituto que o jiu jitsu participa. porem a o sistema tera atualizações para ser ultilizado espeficamente em celulares",
            technologies: "Technologies: php, mysql, html, css,",
            websiteURL: ".",
            codeURL: "https://github.com/Diogordo08/ChamadaOnlineJiu",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3} alignItems={"stretch"}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index} display={"flex"}>
                            <AnimationComponent style={{ width: "100%" }}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
