import { Breadcrumbs, Link, Typography } from "@mui/material";
import breadcrumbs from "../../links/breadcrumbs.json";

export default function Font() {
  const renderBreadCrumbs = () => (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.font.map((crumb, index) =>
        crumb.link ? (
          <Link key={index} underline="hover" color="inherit" href={crumb.link}>
            {crumb.label}
          </Link>
        ) : (
          <Typography key={index} sx={{ color: "text.primary" }}>
            {crumb.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );

  return <>{renderBreadCrumbs()}</>;
}
