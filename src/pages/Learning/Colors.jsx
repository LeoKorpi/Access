import { Breadcrumbs, Link, Typography } from "@mui/material";
import content from "../../content/colorBlindnessContent.json";
import Section from "../../components/layout/Section";

export default function Colors() {
  const renderBreadCrumbs = () => (
    <Breadcrumbs aria-label="breadcrumb">
      {content.breadcrumb.map((crumb, index) =>
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

  return (
    <>
      {renderBreadCrumbs()}
      {content.sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </>
  );
}
