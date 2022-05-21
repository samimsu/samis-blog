import * as React from 'react';
import Layout from '../../components/layout';

const textareaStyle = {
  width: '20rem',
  height: '25rem',
  resize: 'none',
  margin: '0.5rem',
};

const resultTextareaStyle = {
  ...textareaStyle,
  backgroundColor: 'rgb(240,240,240)',
};

function textToHTMLParagraphs(text) {
  const paragraphs = text.split('\n');
  let htmlParagraphs = '';

  paragraphs.forEach((item) => {
    if (item) {
      htmlParagraphs += `<p>${item}</p>\n`;
    }
  });

  return htmlParagraphs;
}

function ParagraphsToHTML() {
  const [text, setText] = React.useState('');

  const handleChange = (event) => {
    const htmlParagraphs = textToHTMLParagraphs(event.target.value);
    setText(htmlParagraphs);
  };

  return (
    <Layout pageTitle="Paragraphs to HTML">
      <p>A tool I use to convert my posts to HTML paragraphs</p>
      <textarea
        placeholder="Enter text here"
        style={textareaStyle}
        onChange={handleChange}
      />
      <textarea style={resultTextareaStyle} value={text} />
    </Layout>
  );
}

export default ParagraphsToHTML;
