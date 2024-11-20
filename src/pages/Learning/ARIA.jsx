import Box from "@mui/material/Box";
import { Breadcrumbs, Link, Typography } from "@mui/material";

export default function ARIA() {
  /**
   * JSX does not remove whitespace from template literals,
   * so the variable has to be declared outside of the return-statement
   */
  const codeblock = `<ul id="nav-menu-list" role="menu">        
  <li role="none"><a role="menuitem" href="...">Link 1 </a></li> 
  <li role="none"><a role="menuitem" href="...">Link 2 </a></li> 
  <li role="none"><a role="menuitem" href="...">Link 3 </a></li> 
</ul> `;

  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography sx={{ color: "text.primary" }}>ARIA</Typography>
      </Breadcrumbs>
      <h1>ARIA Roles and Attributes</h1>
      <p>
        ARIA is shorthand for{" "}
        <span className="text-bold">Accessible Rich Internet Applications</span>
        . It is a set of attributes that can be added to HTML-elements to make
        web content accessible to users who use assistive technologies
        &#40;AT&#41;. Below we'll dive deeper into what ARIA is, when to, and
        when to not use it.
      </p>
      <h2>What is ARIA?</h2>
      <p>
        Thanks to ARIA we can give semantic descriptions to content which doesnt
        natively exist in HTML or is missing full browser support. Simply put,
        ARIA was created for users who cannot use a mouse and must rely on their
        keyboard when browsing the web. When accessibility issues cannot be
        resolved with native HTML, ARIA can be utilized to patch things up.
      </p>
      <p>
        The formal name for ARIA is{" "}
        <span className="text-bold">
          Web Accessibility Initiative - Accessible Rich Internet Applications
        </span>{" "}
        &#40;WAI-ARIA&#41;. It is a technical specification published by the
        World Wide Consortiom &#40;W3C&#41; and the current recommendation to
        follow is{" "}
        <Link
          href="https://www.w3.org/TR/wai-aria/"
          target="_blank"
          rel="noopener"
          aria-label="Read more about the current ARIA recommendations"
        >
          WAI-ARIA 1.2
        </Link>
        .
      </p>
      <h2>How can I use ARIA?</h2>
      <p>
        There are three areas that ARIA can be used for:{" "}
        <span className="text-bold">Roles, States and Properties</span>.
      </p>
      <h3>Roles</h3>
      <p>
        Roles are defined and described by their characteristics. These define
        the structural function of a role, such as what a role is, concepts
        behind it and what instances the role can or must contain. Some examples
        of this are:
      </p>
      <ul>
        <li>
          <span className="text-bold">Document structure roles</span>
          <ul>
            <li role="none">
              Provides descriptions for content within a page. Users with{" "}
              <abbr title="Assisstive Technology">AT</abbr> use these roles to
              identify content while navigating through a page and provides
              context to what they're taking in.
            </li>
            <li role="none">
              Examples include <code>img</code>, <code>heading</code>,{" "}
              <code>list</code> and <code>cell</code>.
            </li>
          </ul>
        </li>
        <li>
          <span className="text-bold">Landmark roles</span>
          <ul>
            <li>
              Created for easier navigation by providing identifiable landmarks
              for sections of content within a page. A screen reader will for
              example announce the start and end of each landmark-role set on a
              page.
            </li>
            <li>
              Examples include <code>main</code>, <code>form</code>,{" "}
              <code>search</code> and <code>navigation</code>.
            </li>
          </ul>
        </li>
        <li>
          <span className="text-bold">Widget roles</span>
          <ul>
            <li>
              When naturtal HTML can't define elements widget roles are used to
              give semantic meaning to user interfaces &#40;UIs&#41;. These are
              in turn divided into standalone and composite widgets.
            </li>
            <li>
              <span className="text-bold">Standalone Widgets</span> are self
              contained, some examples are <code>button</code>,{" "}
              <code>checkbox</code>, <code>menuitem</code> and <code>tab</code>.
            </li>
            <li>
              <span className="text-bold">Composite Widgets</span> act as
              containers for standalond widgets, for example <code>menu</code>,{" "}
              <code>radiogroup</code>, <code>combobox</code> and{" "}
              <code>tablist</code>.
            </li>
          </ul>
        </li>
      </ul>
      The full documentation of roles can be found{" "}
      <Link
        href="https://www.w3.org/TR/wai-aria/#Properties"
        target="_blank"
        rel="noopener"
        aria-label="Read more about ARIA roles"
      >
        here
      </Link>
      .<h3>States and Properties</h3>
      <p>
        The terms <span className="text-bold">states</span> and{" "}
        <span className="text-bold">properties</span> assign features to
        content. They both provide specific information and are therefore ofter
        mentioned together as <span className="text-bold">attributes</span>, but
        are conceptually different due to differences in use.
      </p>
      <p>
        For example, both states and properties can hold values such as
        true/false, numbers, strings, ID references and many more. However, the
        value of a property is often less likely &#40;if ever&#41; to change
        during an application's runtime. The opposite is true for states which
        may change often due to user interaction. It is important to know that
        there are exceptions for properties &#40; e.g.{" "}
        <code>aria-activedescendant</code>&#41; since its not a rule that their
        values cannot change. This is the reason for why states and properties
        are reffered to as attributes when possible,{" "}
        <em>there are barely any occasions where the distinction matters</em>.
        W3C's own clarification of the difference can be found{" "}
        <Link
          href="https://www.w3.org/TR/wai-aria/#statevsprop"
          target="_blank"
          rel="noopener"
          aria-label="Read more about the difference between ARIA states and properties"
        >
          here
        </Link>
        .
      </p>
      <p>
        Examples of attributes are: <code>aria-label</code>,{" "}
        <code>aria-hidden</code>, <code>aria-busy</code> and{" "}
        <code>aria-controls</code>.
      </p>
      <h2>When shouldn't I use ARIA?</h2>
      <p>
        Good Question!{" "}
        <Link
          href="https://www.w3.org/TR/using-aria/#NOTES"
          target="_blank"
          rel="noopener"
          aria-label="Read more about the five rules of ARIA use"
        >
          W3C have five rules for AIRA use
        </Link>{" "}
        which you should always abide by if possible. These are:
      </p>
      <ol>
        <li>
          If you can use a native HTML element with the semantics and behaviour
          you need already built in, then do so. Not all HTML5 elements have
          accessibility support yet, you can always check the current status of
          elements{" "}
          <Link
            href="https://www.html5accessibility.com/"
            target="_blank"
            rel="noopener"
            aria-label="Read more about the accessibility support for HTML5 elements"
          >
            here
          </Link>
          .
        </li>
        <li>Do not change native semantics, unless you really have to.</li>
        <li>All interactive ARIA controls must be usable with the keyboard.</li>
        <li>
          Do not use <code>role="presentation"</code> or{" "}
          <code>aria-hidden="true"</code> on a focusable element.
        </li>
        <li>All interactive elements must have an accessible name.</li>
      </ol>
      <h2>So when should I use ARIA?</h2>
      <p>Here are some examples of where ARIA can and should be used:</p>
      <h3>Descriptive labels</h3>
      <p>
        When you need to add more descriptive labels to buttons or links, you
        can use <code>aria-label</code>!
      </p>
      <p>Before: </p>
      <p>
        <code>&#60;a href="/you/path/here"&#62;Read more&#60;/a&#62;</code>
      </p>
      <p>After: </p>
      <p>
        <code>
          &#60;a aria-label="Read more about ARIA and how to use it"
          href="/you/path/here"&#62;Read more&#60;/a&#62;
        </code>
      </p>
      <p>
        This attribute will allow{" "}
        <abbr aria-label="Assistive Technology" title="Assisstive Technology">
          AT
        </abbr>{" "}
        to read the label for the link instead of the actual link, making the
        element easier to grasp.
      </p>
      <h3>Alerts</h3>
      <p>
        In order for events to get announced to screen readers you must add ARIA
        roles to them.
      </p>
      <p>Before: </p>
      <p>
        <code>
          &#60;div class="alert-message"&#62;Error: Login not
          found.&#60;/div&#62;
        </code>
      </p>
      <p>After: </p>
      <p>
        <code>
          &#60;div class="alert-message" role="alert"&#62;Login
          Successful!&#60;/div&#62;
        </code>
      </p>
      <h3>Relationships</h3>
      <p>
        Sometimes you need to give elements ARIA attributes to create a
        relationship. The attributes should be given to each of the elements.
      </p>
      <p>Here's an example:</p>
      <pre>{codeblock}</pre>
      <h3>Forms</h3>
      <p>
        You can add ARIA Attributes to input-fields to make forms more
        accessible. This makes the fields easier to interact with.
      </p>
      <p>For example:</p>
      <code>
        &#60;label for="first-name"&#62;First name&#60;/label&#62;&#60;input
        type="text" id="first-name" aria-required="true" autocomplete="on"
        /&#62;
      </code>
      <h2>Parting words</h2>
      <p>
        My best tips for developing with ARIA is to start early and test lots.
        By navigating with only your keyboard and using a screen reader &#40;by
        utilizing an extension for your browser&#41; you'll quickly notice how
        your text is read. This will give you insights to, for example, if
        you've missed wrapping an abbreviation in a <code> &#60;abbr&#62;</code>{" "}
        tag and given it a aria-label, how lists are read with screen readers,
        that widgets are given roles and many more. Oftentimes these things can
        be missed by lighthouse reports, so{" "}
        <span className="text-bold">don't forget to test manually!</span>
      </p>
      <h2>Useful links</h2>
      <ul>
        <li>
          <Link
            href="https://www.lullabot.com/articles/what-heck-aria-beginners-guide-aria-accessibility"
            target="_blank"
            rel="noopener"
            aria-label="A beginners guide to ARIA and how to use it"
          >
            A beginners guide to ARIA and how to use it
          </Link>
        </li>
        <li>
          <Link
            href="https://web.dev/articles/semantics-aria"
            target="_blank"
            rel="noopener"
            aria-label="A short article explaining ARIA for developers"
          >
            A short article explaining ARIA for developers
          </Link>
        </li>
        <li>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques"
            target="_blank"
            rel="noopener"
            aria-label="A list of implementable ARIA-techniques that can be applied to HTML elements"
          >
            A list of implementable ARIA-techniques that can be applied to HTML
            elements
          </Link>
        </li>
        <li>
          <Link
            href="https://accessibilityinsights.io/info-examples/web/"
            target="_blank"
            rel="noopener"
            aria-label="A list of examples to increase accessibility for webpages"
          >
            A list of examples to increase accessibility for webpages
          </Link>
        </li>
        <li>
          <Link
            href="https://thepaciellogroup.github.io/AT-browser-tests/"
            target="_blank"
            rel="noopener"
            aria-label="A collection of 130 HTML-elements that have been tested for accessibility"
          >
            A collection of 130 HTML-elements that have been tested for
            accessibility
          </Link>
        </li>
        <li>
          <Link
            href="https://uxdesign.cc/a-three-layered-approach-to-accessibility-design-b6894fa15fd1"
            target="_blank"
            rel="noopener"
            aria-label="How you should think when designing a webpage with accessibility built into it"
          >
            Insights into how you should think when designing a webpage with
            accessibility built into it
          </Link>
        </li>
      </ul>
    </Box>
  );
}
