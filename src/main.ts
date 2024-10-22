import { initializeEditor } from "./ckeditor"; // Ensure the correct path
// Initialize the CKEditor when the document is ready
import "../node_modules/ckeditor5/dist/ckeditor5.css";
import "../node_modules/ckeditor5/dist/ckeditor5-editor.css";
import "../node_modules/ckeditor5/dist/ckeditor5-content.css";

document.addEventListener("DOMContentLoaded", () => {
  initializeEditor(".editor")
    .then((editor) => {
      console.log("Editor initialized:", editor);
    })
    .catch((error) => {
      console.error("Error initializing the editor:", error);
    });
});
