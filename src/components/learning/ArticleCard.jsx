import { Card, CardHeader, Typography, CardContent } from "@mui/material";

export function ArticleCard({ title, content, level }) {
  return (
    <Card variant="outlined">
      <CardHeader
        title={<Typography variant="h3">{title}</Typography>}
        subheader={`Level: ${level}`}
      />
      <CardContent>
        <div className="prose max-w-none">{content}</div>
      </CardContent>
    </Card>
  );
}
