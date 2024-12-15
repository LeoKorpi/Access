import {
  Box,
  Breadcrumbs,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Links from "../../components/Links";
import breadcrumbs from "../../links/breadcrumbs.json";
import keyboardLinks from "../../links/keyboardLinks.json";

export default function Keyboard() {
  const theme = useTheme();
  const halfSpacing = 2;
  const maxWidth = 800;
  const renderBreadCrumbs = () => (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.keyboard.map((crumb, index) =>
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

      {/* h1 Keyboard Navigation */}
      <Box component="section" sx={{ maxWidth: maxWidth }}>
        <Typography
          variant="h1"
          sx={{
            mb: theme.typography.spacing("h1"),
            letterSpacing: theme.typography.letterSpacing("h1"),
            wordSpacing: theme.typography.wordSpacing("h1"),
          }}
        >
          Keyboard Navigation
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: theme.typography.spacing("body1"),
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          Keyboard navigation, or 'Keyboard Accessible' as it is often referred
          to, means that all the functionalities of the digital content are
          operable through keyboard inputs alone. This is taken from principle
          2.1 in WCAG which states that websites should strive to{" "}
          <Link
            sx={{
              color: theme.palette.primary.link,
              fontWeight: 600,
            }}
            underline="hover"
            href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard-accessible"
            target="_blank"
            rel="noopener"
            aria-label="Read more about WCAG principle 2.1"
          >
            make all functionality available from a keyboard.
          </Link>{" "}
          This includes taking into consideration that all functionality of a
          keyboard can be accomplished by keyboard users, speech input (creating
          keyboard input), by mouse (using on screen keyboards) and other
          assistive technologies (AT) that create simulated keystrokes as their
          output. The user therefore has to be able to navigate through menus,
          activating buttons, clicking links, filling out forms and controlling
          media players without necessarily using a mouse.
        </Typography>
      </Box>

      {/* What should the keyboard do? */}
      <Box component="section" sx={{ maxWidth: maxWidth }}>
        <Typography
          variant="h2"
          sx={{
            mb: theme.typography.spacing("h2"),
            letterSpacing: theme.typography.letterSpacing("h2"),
            wordSpacing: theme.typography.wordSpacing("h2"),
          }}
        >
          What should the keyboard do?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: halfSpacing,
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          There are four success criteria in the keyboard principle that must be
          met for the website to be considered keyboard accessible:
        </Typography>
        <List sx={{ listStyleType: "disc", ml: 2.5, p: 0 }}>
          <ListItem sx={{ display: "list-item", p: 0, mb: 1.5 }}>
            <span className="text-bold">2.1.1 Keyboard:</span> Everything on the
            website can be done with with a keyboard except freehand movements.
            This will be ensured by making all pointer (mouse) actions have
            keyboard equivalents. We do this so that users who rely on keyboard
            usage can still navigate through our website.
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0, mb: 1.5 }}>
            <span className="text-bold">2.1.2 No Keyboard Trap:</span> When
            navigating with the keyboard, users dont get stuck (e.g. caught in a
            loop cycling through menu options). Since some users have no other
            avaiable means of navigating this step is crucial in ensuring that
            everyone can experience the webpage in the same way. We can
            accomplish this by testing and ensuring that users can navigate away
            from components.
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0, mb: 1.5 }}>
            <span className="text-bold">2.1.3 Keyboard (No exception):</span>{" "}
            This is an extension of criterion 2.1.1, except in this case{" "}
            <em>all</em> of the content is operable from the keyboard. No
            exceptions.
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0, mb: 3 }}>
            <span className="text-bold">2.1.4 Character Key Shortcuts: </span>If
            a keyboard shortcut can be utilized using a single letter,
            punctuation, numbers or symbol charachter, then it must either be
            able to be turned off, remapped or to only activate when it has
            focus.
          </ListItem>
        </List>
        <Typography
          variant="body1"
          sx={{
            mb: theme.typography.spacing("body1"),
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          For users who has to rely on keyboards (due to possible disabilities,
          impairments, convenience or preference) keyboard accessibility is
          vital. It ensures that they have access and can use the services
          without major issues, promoting inclusivity in digital services.
        </Typography>
      </Box>

      {/* Examples of keyboard accessibility */}
      <Box component="section" sx={{ maxWidth: maxWidth }}>
        <Typography
          variant="h2"
          sx={{
            mb: theme.typography.spacing("h2"),
            letterSpacing: theme.typography.letterSpacing("h2"),
            wordSpacing: theme.typography.wordSpacing("h2"),
          }}
        >
          Examples of keyboard accessibility
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: halfSpacing,
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          In addition to fulfilling the success-criteras of WCAG, we can also
          think about some practical examples of when a user would want to
          navigate using the keyboard.
        </Typography>
        <List sx={{ listStyleType: "disc", ml: 2.5, p: 0 }}>
          <ListItem sx={{ display: "list-item", p: 0, mb: 1.5 }}>
            <span className="text-bold">Navigating menus: </span> Users should
            be able to navigate a dropdown menu on a webpage using the
            arrow-keys and the enter-key to select items.
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0, mb: 1.5 }}>
            <span className="text-bold">Interactive elements: </span> It should
            be possible to focus on elements that can be interacted with (e.g.
            buttons, links and various form-fields) using the tab-key and
            utilize the enter-key to interact with them.
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0, mb: 3 }}>
            <span className="text-bold">Media Players: </span> Media players on
            websites should be reachable and controlable via the keyboard. Some
            common usage of keyboard shortcuts for this can be to pause, play,
            mute, adjust volume, enable caption and many more.
          </ListItem>
        </List>
      </Box>

      {/* What can I do as a developer */}
      <Box component="section" sx={{ maxWidth: maxWidth }}>
        <Typography
          variant="h2"
          sx={{
            mb: theme.typography.spacing("h2"),
            letterSpacing: theme.typography.letterSpacing("h2"),
            wordSpacing: theme.typography.wordSpacing("h2"),
          }}
        >
          What can I do as a developer?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: halfSpacing,
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          As a developer it is your efforts that allows the web to become more
          accessible. When it comes to focusable elements alot of the
          functionality is already built into the standard HTML-elements such as{" "}
          <code>&#60;button&#62;</code>, <code>&#60;a&#62;</code>,{" "}
          <code>&#60;input&#62;</code> and many more. Other elements can gain
          the ability to be focusable by using tab-index, but be careful to not
          overdo it or break the natural flow of the page.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: halfSpacing,
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          A trick that has been getting more popular as more developers embrace
          WCAG is to{" "}
          <Link
            sx={{
              color: theme.palette.primary.link,
              fontWeight: 600,
            }}
            underline="hover"
            href="https://www.w3.org/TR/WCAG20-TECHS/G1.html"
            target="_blank"
            rel="noopener"
            aria-label="Read the guide to meeting the 2.4.1 WCAG criteria."
          >
            add a link at the top of every page which skips directly to the
            main-content.
          </Link>{" "}
          This way users don't have to skim through all elements in the header
          before getting to the content they actually want to interact with.
          Navigating straight to the main content will save time, frustration
          and create a more accessible experience.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: halfSpacing,
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          Another important thing is to talk with the developers and designers
          in your team about accessibility. Ask yourselves how you would
          navigate the page if you could only use the keyboard. How would you
          wish to navigate a header containing a navbar, a menu, a section with
          links, a button and a search field. Which one should be the users
          highest priority? and what comes after?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: theme.typography.spacing("body1"),
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          All of this affects the user experience, nobody wants to repeatedly
          hit the tab-key to skip over content they're not interested in.
          Discuss with others or ask yourself about how navigating a webpage
          only using tab would look and feel like. Chances are you will learn
          something new and gain a new perspective.
        </Typography>
      </Box>

      {/* Useful Links */}
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
        <Links links={keyboardLinks} />
      </Box>
    </>
  );
}
