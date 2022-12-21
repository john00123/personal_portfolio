function parseMarkdown(markdown) {
    // Use a regular expression to match markdown elements
    const regex = /\[([^\]]+)\]\(([^)]+)\)|\!\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`|(#+)([^#\n]+)|\*([^\*]+)/g;
  
    // Replace matched markdown elements with corresponding HTML elements
    const html = markdown.replace(regex, (match, linkText, linkUrl, imgAlt, imgUrl, code, header, headerText, bullet) => {
      if (linkText && linkUrl) {
        // [link text](link url)
        return `<a href="${linkUrl}">${linkText}</a>`;
      } else if (imgAlt && imgUrl) {
        // ![image alt text](image url)
        return `<img alt="${imgAlt}" src="${imgUrl}"/>`;
      } else if (code) {
        // `code`
        return `<code>${code}</code>`;
      } else if (header && headerText) {
        // # Header
        // ## Subheader
        // etc.
        const level = header.length;
        return `<h${level}>${headerText}</h${level}>`;
      } else if (bullet) {
        // * Bullet
        return `<li>${bullet}</li>`;
      }
    });
  
    return html;
  }

  fetch('./bezel.md')
  .then(response => response.text())
  .then(markdown => {
    // Parse the markdown file
    const html = parseMarkdown(markdown);

    // Do something with the parsed HTML
    $(document).ready(function(){
        $('main').append(html);
    
    });
});


