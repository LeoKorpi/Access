import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Links from "../../components/Links";
import breadcrumbs from "../../links/breadcrumbs.json";
import textLinks from "../../links/textLinks.json";

export default function Text() {
  const theme = useTheme();
  const halfSpacing = 2.5;
  const maxWidth = 800;

  const renderBreadCrumbs = () => (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.text.map((crumb, index) =>
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

      {/*h1 Text and Accessability */}
      <Box component="section" sx={{ maxWidth: maxWidth }}>
        <Typography
          variant="h1"
          sx={{
            mb: theme.typography.spacing("h1"),
            letterSpacing: theme.typography.letterSpacing("h1"),
            wordSpacing: theme.typography.wordSpacing("h1"),
          }}
        >
          Text and Accessibility
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: halfSpacing,
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          A majority of all information we process from the internet comes in
          the form of text. Just take this website for example! With text being
          the biggest source of information on a webpage, we need to secure that
          it is presented in a way that is clear and easy to process.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: halfSpacing,
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          One of the ways to achieve this is to have adequate text spacing. This
          includes line height, space between letters and words, as well as
          enough space following paragraphs. All of this is connected to{" "}
          <Link
            sx={{
              color: theme.palette.primary.link,
              fontWeight: 600,
            }}
            underline="hover"
            href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing"
            target="_blank"
            rel="noopener"
            aria-label="Read more WCAG criteria 1.4.12 which deals with text spacing"
          >
            WCAG criteria 1.4.12
          </Link>{" "}
          which has the technical specifics for how much spacing should be
          added. Remmeber or try to add a css-ruiling that apply these changes
          to all of your text.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: theme.typography.spacing("body1"),
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          Another important thing to to with your text is to{" "}
          <Link
            sx={{
              color: theme.palette.primary.link,
              fontWeight: 600,
            }}
            underline="hover"
            href=" https://www.w3.org/WAI/WCAG21/Understanding/resize-text"
            target="_blank"
            rel="noopener"
            aria-label="Read more about WCAG critera 1.4.4, Resize text"
          >
            make sure that they're resizable.
          </Link>{" "}
          This is important since you can never for cetrain know which device a
          person is going to view your website from. Text on a computer screen
          naturally needs to bigger because the distance between the users eyes
          and the screen is longer than compared to holding a phone. Bigger text
          is easier to differentiate and reduces strain on the eyes to read. But
          more imporantly{" "}
          <em>
            you need to use units such as rem or percentage for fonts to make
            them adjust to the font-size of the users web browser or their zoom
            scaling.{" "}
          </em>
          Luckily you can make custom functions in some frameworks such as
          material UI or utilize {""}
          <Link
            sx={{
              color: theme.palette.primary.link,
              fontWeight: 600,
            }}
            underline="hover"
            href=" https://developer.mozilla.org/en-US/docs/Web/CSS/clamp"
            target="_blank"
            rel="noopener"
            aria-label="Read more on the MDN docs about Clamp and how to use it"
          >
            the css class clamp
          </Link>{" "}
          to make your fonts and their spacings responsive.{" "}
        </Typography>
      </Box>

      {/*Useful links*/}
      <Box component="section" sx={{ maxWidth: maxWidth }}>
        <Typography
          variant="h2"
          sx={{
            mb: theme.typography.spacing("h2"),
            letterSpacing: theme.typography.letterSpacing("h2"),
            wordSpacing: theme.typography.wordSpacing("h2"),
          }}
        >
          Useful links
        </Typography>
        <Links links={textLinks}></Links>
      </Box>
    </>
  );
}
