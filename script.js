let htmlEditor = CodeMirror.fromTextArea(
  document.getElementById("htmlEditor"),
  {
    mode: "htmlmixed",
    theme: "material-darker",
    lineNumbers: true,
    autoCloseTags: true,
    extraKeys: { "Ctrl-Space": "autocomplete" },
  }
);

let cssEditor = CodeMirror.fromTextArea(document.getElementById("cssEditor"), {
  mode: "css",
  theme: "material-darker",
  lineNumbers: true,
  autoCloseTags: true,
});

let jsEditor = CodeMirror.fromTextArea(document.getElementById("jsEditor"), {
  mode: "javascript",
  theme: "material-darker",
  lineNumbers: true,
  autoCloseTags: true,
});

function runCode() {
  const html = htmlEditor.getValue();
  const css = `<style>${cssEditor.getValue()}</style>`;
  const js = `<script>${jsEditor.getValue()}<\/script>`;
  document.getElementById("output").srcdoc = html + css + js;
}

function resetEditors() {
  htmlEditor.setValue("");
  cssEditor.setValue("");
  jsEditor.setValue("");
  document.getElementById("output").srcdoc = "";
}

function downloadCode() {
  const html = htmlEditor.getValue();
  const css = cssEditor.getValue();
  const js = jsEditor.getValue();
  const blob = new Blob(
    [
      `<html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`,
    ],
    { type: "text/html" }
  );
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "codeease_project.html";
  a.click();
}

// Toggle Theme Logic
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const body = document.body;
  const icon = themeToggle.querySelector("i");

  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    icon.classList.replace("fa-moon", "fa-sun");

    htmlEditor.setOption("theme", "eclipse");
    cssEditor.setOption("theme", "eclipse");
    jsEditor.setOption("theme", "eclipse");
  } else {
    body.classList.replace("light", "dark");
    icon.classList.replace("fa-sun", "fa-moon");

    htmlEditor.setOption("theme", "material-darker");
    cssEditor.setOption("theme", "material-darker");
    jsEditor.setOption("theme", "material-darker");
  }
});





