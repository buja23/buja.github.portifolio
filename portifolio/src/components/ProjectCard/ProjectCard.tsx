import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';


export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string
    technologies: string
    websiteURL: string;
    codeURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        height: "80vw",
        padding: "10px 0",
        [theme.breakpoints.up('md')]: {
            height: "45vh",
        },
    }));

const StyledCard = styled("div")(({ theme }) => ({
    borderRadius: "12px", // bordas mais suaves
    border: `1px solid ${theme.palette.primary.contrastText}33`, // transparência no border
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    padding: "24px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)", // sombra inicial suave
    transition: "all 0.3s ease", // animação suave

    '&:hover': {
        backgroundColor: theme.palette.primary.light,
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)", // aumenta a sombra
        transform: "translateY(-4px) scale(1.02)", // efeito de elevação
    },

    // animação ao "clicar" (efeito de pressão)
    '&:active': {
        transform: "translateY(-2px) scale(0.99)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    }
}));

    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography >
                {subtitle}
            </Typography>
            <StyledImg src={srcImg} />
            <Typography>
                {description}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>
            <Grid container spacing={1} pt={2}>
                <Grid item xs={6}>
                    <StyledButton onClick={() => window.open(websiteURL)} icon={<VisibilityIcon />}>View Project</StyledButton>
                </Grid>
                <Grid item xs={6}>
                    <StyledButton onClick={() => window.open(codeURL)} icon={<GitHubIcon />}>View Code</StyledButton>
                </Grid>
            </Grid>
        </StyledCard>
    )

}

export default ProjectCard
