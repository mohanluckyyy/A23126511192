import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

export function NotificationCard({ notification }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction="row" justifyContent="space-between" mb={1}>
          <Typography variant="h6">
            {notification.title}
          </Typography>

          <Chip
            label={notification.type}
            size="small"
            color={notification.read ? "success" : "primary"}
          />
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {notification.message}
        </Typography>

        <Typography
          variant="caption"
          display="block"
          sx={{ mt: 1 }}
        >
          {notification.date}
        </Typography>
      </CardContent>
    </Card>
  );
}