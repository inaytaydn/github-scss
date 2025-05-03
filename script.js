document.addEventListener("DOMContentLoaded", function () {
    fetch("file.md")
      .then((response) => response.text())
      .then((text) => {
        var converter = new showdown.Converter();
        var html = converter.makeHtml(text);
        document.getElementById("readme-content").innerHTML = html;
      });
  });