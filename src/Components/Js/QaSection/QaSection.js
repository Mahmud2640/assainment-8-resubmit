import React from "react";
import "../../Css/QaSection/QaSection.css";

const QaSection = () => {
  return (
    <div className="qus-container">
      <div className="react-works">
        <h4>How react works?</h4>
        <ol>
          <li>React is one of the most popular JavaScript Library.</li>
          <li>
            React allows us to effectively re-construct our DOM in JavaScript.
          </li>
          <li>
            JSX is one of The Core Concept of React, it allows us write like
            HTML code for cleanness, it's Called Syntactical Sugar.
          </li>
          <li>
            React Virtual DOM can efficiently rerender a specified part of our
            website.
          </li>
          <li>
            React Keys help us to find out every single component for
            efficiently rerendered.
          </li>
          <li>
            React has a declarative UI structure that really performance matters
            with react
          </li>
        </ol>
      </div>
      <div className="props-states">
        <h4>Props</h4>
        <ol>
          <li>Props are used to pass data between React components.</li>
          <li>
            Props can be used to set the internal state based on a prop value in
            the constructor.
          </li>
          <li>It is Immutable (cannot be modified).</li>
          <li>Props are read-only.</li>
        </ol>
        <h4>State</h4>
        <ol>
          <li>The state represents parts of an Application that can change.</li>
          <li>The state is Mutable and It is local to the component only.</li>
          <li>State is both read and write.</li>
          <li>It is Mutable ( can be modified).</li>
        </ol>
      </div>
    </div>
  );
};

export default QaSection;
