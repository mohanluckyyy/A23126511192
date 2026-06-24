import {Card,CardContent,Typography,Chip,Stack} from "@mui/material";

export function NotificationCard({notification}){
return(
<Card variant="outlined">
<CardContent>
<Stack direction="row" justifyContent="space-between" alignItems="center">
<Typography variant="h6">
{notification.title}
</Typography>
<Chip
label={notification.type}
color={notification.read?"success":"primary"}
size="small"
/>
</Stack>

<Typography variant="body2" sx={{mt:1}}>
{notification.message}
</Typography>

<Typography variant="caption" color="text.secondary" sx={{mt:1,display:"block"}}>
{notification.date}
</Typography>
</CardContent>
</Card>
);
}