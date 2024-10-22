import MarkdownEditor from "./ckeditor"; // Adjust the path if necessary

document.addEventListener("DOMContentLoaded", () => {
  // Select the element where CKEditor should be applied
  const editorElement = document.querySelector<HTMLElement>(".editor");

  if (!editorElement) {
    console.error("Editor element not found!");
    return;
  }

  // Initialize the editor
  MarkdownEditor.create(editorElement)
    .then((editor) => {
      console.log("Editor is ready to use!", editor);
      (
        window as Window & typeof globalThis & { editor: MarkdownEditor }
      ).editor = editor; // Optional: make editor available globally for debugging
    })
    .catch((error) => {
      console.error("There was a problem initializing the editor:", error);
    });
});
