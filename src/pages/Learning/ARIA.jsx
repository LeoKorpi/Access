import { useTheme } from "@mui/material/styles";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import Links from "../../components/layout/Links";
import content from "../../content/ariaContent.json";
import ariaLinks from "../../links/ariaLinks.json";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";

export default function Aria() {
  const theme = useTheme();
  const formattedRelationships = `<ul id="nav-menu-list" role="menu"> 
  <li role="none">
    <a role="menuitem" aria-label="..." href="..."> Link 1 </a>
  </li>
  <li role="none">
    <a role="menuitem" aria-label="..." href="..."> Link 2 </a>
  <li>
  <li role="none">
    <a role="menuitem" aria-label="..." href="..."> Link 3 </a>
  </li>
</ul>`;
  const formattedForms = `<span
  role="checkbox"
  id="checkBoxInput"
  aria-required="true"
  tabindex="0"
  aria-labelledby="chk15-label"></span>
<label id="chk15-label">Subscribe to the newsletter</label>`;
  const halfSpacing = 2;

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

      {/*h1 ARIA Roles and Attributes*/}
      <section>
        <Typography
          variant="h1"
          sx={{
            mb: theme.typography.spacing("h1"),
            letterSpacing: theme.typography.letterSpacing("h1"),
            wordSpacing: theme.typography.wordSpacing("h1"),
          }}
        >
          ARIA Roles and Attributes
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: theme.typography.spacing("body1"),
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          ARIA is shorthand for{" "}
          <span className="text-bold">
            Accessible Rich Internet Applications
          </span>
          . It is a set of attributes that can be added to HTML-elements to make
          web content accessible to users who use assistive technologies (AT).
          Below we'll dive deeper into what ARIA is, when to, and when to not
          use it.
        </Typography>
      </section>

      {/*What is ARIA?*/}
      <section>
        <Typography
          variant="h2"
          sx={{
            mb: theme.typography.spacing("h2"),
            letterSpacing: theme.typography.letterSpacing("h2"),
            wordSpacing: theme.typography.wordSpacing("h2"),
          }}
        >
          What is ARIA?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: halfSpacing,
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          Thanks to ARIA we can give semantic descriptions to content which
          doesn't natively exist in HTML or is missing full browser support.
          Simply put, ARIA was created for users who cannot use a mouse and must
          rely on their keyboard when browsing the web. When accessibility
          issues cannot be resolved with native HTML, ARIA can be utilized to
          patch things up.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: theme.typography.spacing("body1"),
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          The formal name for ARIA is{" "}
          <span className="text-bold">
            Web Accessibility Initiative - Accessible Rich Internet Applications
            (WAI-ARIA)
          </span>
          . It is a technical specification published by the World Wide
          Consortiom (W3C) and the current recommendation to follow is{" "}
          <Link
            sx={{
              color: theme.palette.primary.link,
              fontWeight: 600,
            }}
            underline="hover"
            href="https://www.w3.org/TR/wai-aria/"
            target="_blank"
            rel="noopener"
            aria-label="Read more about the current ARIA recommendations"
          >
            WAI-ARIA 1.2
          </Link>
          .
        </Typography>
      </section>

      {/*How can I use ARIA?*/}
      <section>
        <Typography
          variant="h2"
          sx={{
            mb: theme.typography.spacing("h2"),
            letterSpacing: theme.typography.letterSpacing("h2"),
            wordSpacing: theme.typography.wordSpacing("h2"),
          }}
        >
          How can I use ARIA?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: halfSpacing,
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          There are three areas that ARIA can be used for:{" "}
          <span className="text-bold">Roles, States and Properties</span>.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            mb: theme.typography.spacing("h3"),
            letterSpacing: theme.typography.letterSpacing("h3"),
            wordSpacing: theme.typography.wordSpacing("h3"),
          }}
        >
          Roles
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: halfSpacing,
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          Roles are defined and described by their characteristics. These define
          the structural function of a role, such as what a role is, concepts
          behind it and what instances the role can or must contain. Some
          examples of this are:
        </Typography>
        <List sx={{ listStyleType: "disc", ml: 2.5, p: 0 }}>
          <ListItem sx={{ display: "list-item", p: 0, mb: 1.5 }}>
            <span className="text-bold">Document structure roles</span> give
            descriptions for content within a page. Users with AT (Assisstive
            Technology) use these roles to identify content while navigating
            through a page and provides context to what they're taking in.
            Examples include: <code>&#60;img&#62;</code>,{" "}
            <code>&#60;heading&#62;</code>, <code>&#60;list&#62;</code> and{" "}
            <code>&#60;cell&#62;</code>.
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0, mb: 1.5 }}>
            <span className="text-bold">Landmark roles</span> were created for
            easier navigation by providing identifiable landmarks for sections
            of content within a page. A screen reader will for example announce
            the start and end of each landmark-role set on a page. Examples
            include: <code>&#60;main&#62;</code>, <code>&#60;form&#62;</code>,{" "}
            <code>&#60;search&#62;</code> and <code>&#60;navigation&#62;</code>.
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0, mb: 0.5 }}>
            <span className="text-bold">Widget roles</span> for when naturtal
            HTML can't define elements widget roles are used to give semantic
            meaning to user interfaces (UIs). These are in turn divided into
            standalone and composite widgets.
          </ListItem>
        </List>
        <List sx={{ listStyleType: "circle", p: 0, ml: 5 }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <span className="text-bold">Standalone Widgets</span> are self
            contained, some examples are: <code>&#60;button&#62;</code>,{" "}
            <code>&#60;checkbox&#62;</code>, <code>&#60;menuitem&#62;</code> and{" "}
            <code>&#60;tab&#62;</code>.
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0, mb: 1.5 }}>
            <span className="text-bold">Composite Widgets</span> act as
            containers for standalone widgets, for example:{" "}
            <code>&#60;menu&#62;</code>, <code>&#60;radiogroup&#62;</code>,{" "}
            <code>&#60;combobox&#62;</code> and <code>&#60;tablist&#62;</code>.
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
          You can learn alot more by{" "}
          <Link
            sx={{
              color: theme.palette.primary.link,
              fontWeight: 600,
            }}
            underline="hover"
            href="https://www.w3.org/TR/wai-aria/#Properties"
            target="_blank"
            rel="noopener"
            aria-label="Read more about ARIA roles from the W3C documentation"
          >
            reading about ARIA roles here
          </Link>
          .
        </Typography>
      </section>

      {/*When should I not use ARIA?*/}
      <section>
        <Typography
          variant="h2"
          sx={{
            mb: theme.typography.spacing("h2"),
            letterSpacing: theme.typography.letterSpacing("h2"),
            wordSpacing: theme.typography.wordSpacing("h2"),
          }}
        >
          When should I not use ARIA?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: halfSpacing,
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          Good question!{" "}
          <Link
            sx={{
              color: theme.palette.primary.link,
              fontWeight: 600,
            }}
            underline="hover"
            href="https://www.w3.org/TR/using-aria/#NOTES"
            target="_blank"
            rel="noopener"
            aria-label="Read more about the five rules of ARIA use"
          >
            W3C have five rules for ARIA usage
          </Link>{" "}
          which you should always abide by if possible. These are:
        </Typography>

        <List
          sx={{ listStyleType: "decimal", ml: 2.5, mb: halfSpacing * 2, p: 0 }}
        >
          <ListItem sx={{ display: "list-item", p: 0, mb: 1.5 }}>
            If you can use a native HTML element with the semantics and
            behaviour you need already built in, then do so. Not all HTML5
            elements have accessibility support yet, you can always{" "}
            <Link
              sx={{
                color: theme.palette.primary.link,
                fontWeight: 600,
              }}
              underline="hover"
              href="https://www.html5accessibility.com/"
              target="_blank"
              rel="noopener"
              aria-label="Read more about the accessibility support for HTML5 elements"
            >
              check the current status of elements here.
            </Link>
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0, mb: 1.5 }}>
            Do not change native semantics, unless you really have to.
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0, mb: 1.5 }}>
            All interactive ARIA controls must be usable with the keyboard.
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0, mb: 1.5 }}>
            Do not use <code>role="presentation"</code> or{" "}
            <code>aria-hidden="true"</code> on a focusable element.
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 0, mb: 1.5 }}>
            All interactive elements must have an accessible name.
          </ListItem>
        </List>
      </section>

      {/*So when can I use ARIA?*/}
      <section>
        <Typography
          variant="h2"
          sx={{
            mb: theme.typography.spacing("h2"),
            letterSpacing: theme.typography.letterSpacing("h2"),
            wordSpacing: theme.typography.wordSpacing("h2"),
          }}
        >
          So when can I use ARIA?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: halfSpacing,
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          Here are some examples of where ARIA can and should be used:
        </Typography>

        {/*Descriptive labels*/}
        <Typography
          variant="h3"
          sx={{
            mb: theme.typography.spacing("h3"),
            letterSpacing: theme.typography.letterSpacing("h3"),
            wordSpacing: theme.typography.wordSpacing("h3"),
          }}
        >
          Descriptive labels
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: theme.typography.spacing("body1"),
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          When using a screen reader it can be hard to understand where a link
          is leading you by just hearing its text content read out. "Read more"
          hardly gives a hint, <em>read more about what?</em> To be more
          descriptive you can use <code>aria-label</code>!
          <br />
          <br />
          Before:{" "}
          <code>&#60;a href="/your/path/here"&#62; Read more &#60;/a&#62;</code>
          <br />
          After:{" "}
          <code>
            &#60;a aria-label="Read more about ARIA and how to use it"
            href="/your/path/here"&#62; Read more &#60;/a&#62;
          </code>
          <br />
          <br />
          This attribute will allow{" "}
          <abbr aria-label="Assistive Technology" title="Assistive Technology">
            AT
          </abbr>{" "}
          to read the label for the link instead of the href-property for the
          link, making the element easier to grasp.
        </Typography>

        {/*Alerts*/}
        <Typography
          variant="h3"
          sx={{
            mb: theme.typography.spacing("h3"),
            letterSpacing: theme.typography.letterSpacing("h3"),
            wordSpacing: theme.typography.wordSpacing("h3"),
          }}
        >
          Alerts
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: theme.typography.spacing("body1"),
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          In order for events to get announced to screen readers you must add
          ARIA roles to them.
          <br />
          <br />
          Before:{" "}
          <code>
            &#60;div class="alert-message"&#62; Error: Login not found.
            &#60;div&#62;
          </code>
          <br />
          After:{" "}
          <code>
            &#60;div class="alert-message" role="alert"&#62; Login Successful!
            &#60;div&#62;
          </code>
        </Typography>

        {/*Relationships*/}
        <Typography
          variant="h3"
          sx={{
            mb: theme.typography.spacing("h3"),
            letterSpacing: theme.typography.letterSpacing("h3"),
            wordSpacing: theme.typography.wordSpacing("h3"),
          }}
        >
          Relationships
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: halfSpacing,
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          Sometimes you need to give elements ARIA attributes to create a
          relationship. The attributes should be given to each of the elements.
          For example, here all of the <code>&#60;a&#62;</code> elements have
          roles that are related to the &#60;ul&#62; element which is the
          parent.
        </Typography>
        {/* saved as a variable because prettier tries to reformat <pre>-content but not template literals */}
        <pre>{formattedRelationships}</pre>

        {/*Forms*/}
        <Typography
          variant="h3"
          sx={{
            mb: theme.typography.spacing("h3"),
            letterSpacing: theme.typography.letterSpacing("h3"),
            wordSpacing: theme.typography.wordSpacing("h3"),
          }}
        >
          Forms
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: halfSpacing,
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          When it comes to elements like <code>&#60;input&#62;</code>,{" "}
          <code>&#60;select&#62;</code> and <code>&#60;textarea&#62;</code> they
          already have their built in semantics with the <code>required</code>{" "}
          property. However, if you create form-elements with non-semantic
          elements like <code>&#60;div&#62;</code> and give it{" "}
          <code>role="checkbox"</code>, you should also add{" "}
          <code>aria-required="true"</code> to signal that the field is
          required. For example:
        </Typography>
        <pre>{formattedForms}</pre>
        <Typography
          variant="body1"
          sx={{
            mb: theme.typography.spacing("body1"),
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          Checkboxes are actually pretty odd since they can also have the{" "}
          <Link
            sx={{
              color: theme.palette.primary.link,
              fontWeight: 600,
            }}
            underline="hover"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes"
            target="_blank"
            rel="noopener"
            aria-label="Learn more about the indeterminate state for checkboxes"
          >
            Indeterminate state
          </Link>{" "}
          in addition to being checked or unchecked. The aria equivalent to this
          is <code>aria-checked="mixed"</code>.
        </Typography>
      </section>

      {/*Lessons learned*/}
      <section>
        <Typography
          variant="h2"
          sx={{
            mb: theme.typography.spacing("h2"),
            letterSpacing: theme.typography.letterSpacing("h2"),
            wordSpacing: theme.typography.wordSpacing("h2"),
          }}
        >
          Lessons learned
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: theme.typography.spacing("body1"),
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          My best tips for developing with ARIA is to start early and test lots.
          By navigating with only your keyboard and using a screen reader (by
          utilizing an extension for your browser) you'll quickly notice how
          your text is read. This will give you tons of insights into how users
          with vision disabilites process information of your website. Some
          things I have learned are for example are missing to wrap an
          abbreviation in a <code>&#60;abbr&#62;</code> tag and give it a
          aria-label, how lists are read with screen readers, that widgets are
          given roles and many more. Oftentimes these things can be missed by
          lighthouse reports, so{" "}
          <span className="text-bold">don't forget to test manually!</span>
        </Typography>
      </section>

      {/*Useful links*/}
      <section>
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
        <Links links={ariaLinks}></Links>
      </section>
    </>
  );
}
