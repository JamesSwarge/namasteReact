const Heading1 = React.createElement(
  "h1",
  {
    id: "title1",
    className: "title"
  },
  "Heading 1"
)

const Heading2 = React.createElement(
  "h2",
  {
    id: "title2",
    className: "title"
  },
  "Heading 2"
);

const Container = React.createElement(
  "div",
  {
    id: "container",
    className: "container"
  },
  [Heading1, Heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Container);