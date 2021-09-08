import * as React from "react";
import Layout from "../../components/layout";

const textareaStyle = {
  width: "20rem",
  height: "25rem",
  resize: "none",
  margin: "0.5rem",
};

const resultTextareaStyle = {
  ...textareaStyle,
  backgroundColor: "rgb(240,240,240)",
};

const ParagraphsToHTML = () => {
  const [text, setText] = React.useState("");

  const handleChange = (event) => {
    console.log("changing...", event.target.value, typeof event.target.value);
    const htmlParagraphs = textToHTMLParagraphs(event.target.value);
    setText(htmlParagraphs);
    console.log("text", text);
  };

  return (
    <Layout pageTitle="Paragraphs to HTML">
      <textarea
        placeholder="Enter text here"
        style={textareaStyle}
        onChange={handleChange}
      ></textarea>
      <textarea style={resultTextareaStyle} value={text}></textarea>
    </Layout>
  );
};

function textToHTMLParagraphs(text) {
  const paragraphs = text.split("\n");
  let htmlParagraphs = "";

  paragraphs.forEach((item) => {
    if (item) {
      htmlParagraphs += `<p>${item}</p>\n`;
    }
  });

  return htmlParagraphs;
}

export default ParagraphsToHTML;
