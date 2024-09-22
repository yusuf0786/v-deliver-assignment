import { Box, Divider, IconButton, Paper, Typography } from "@mui/material";

export function DetailsCards({icon1, title, value, icon2, score, scoreColor, scoreValue, scoreCaption}) {
    return (
        <Paper elevation={0} sx={{p:2}}>
            <Box sx={{display: "flex"}}>
                <IconButton size="large" sx={{backgroundColor:"#EAEBFF", borderRadius: "13px", mr:2}}>
                    <img src={icon1} alt={title} />
                </IconButton>
                <Box>
                    <Typography variant="caption" color="#808080" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="h5" fontWeight={500} gutterBottom>
                        {value}
                    </Typography>
                </Box>
            </Box>
            <Divider sx={{mt:1, mb:1, color: "#CCCCCC80"}} />
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Box sx={{maxWidth: "60px", mr: 2}}>
                    <img src={icon2} alt={score} width="100%" />
                </Box>
                <Box>
                    <Typography variant="caption" color="#808080" gutterBottom sx={{"span": {color: scoreColor}}}>
                        <span>{score}</span> {scoreValue}
                    </Typography>
                    <Typography variant="caption" component={"p"} color="#808080" gutterBottom>
                        {scoreCaption}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    )
}