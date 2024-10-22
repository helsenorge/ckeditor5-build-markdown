/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import {
  TextTransformation,
  TableToolbar,
  Table,
  PasteFromOffice,
  Paragraph,
  Markdown,
  List,
  Link,
  Italic,
  Heading,
  Essentials,
  ClassicEditor,
  Bold,
  Autoformat,
  BlockQuote,
} from "ckeditor5";

export const Editor = async (element?: string) => {
  const editorElement = document.querySelector<HTMLElement>(
    element || "#editor"
  );
  if (!editorElement) {
    throw new Error("Element not found for selector: #editor");
  }
  try {
    return await ClassicEditor.create(editorElement, {
      plugins: [
        Autoformat,
        BlockQuote,
        Bold,
        Essentials,
        Heading,
        Italic,
        Link,
        List,
        Markdown,
        Paragraph,
        PasteFromOffice,
        Table,
        TableToolbar,
        TextTransformation,
      ],
      toolbar: {
        items: [
          "heading",
          "|",
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "|",
          "link",
          "bulletedList",
          "numberedList",
          "|",
          "undo",
          "redo",
        ],
      },
      table: {
        contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
      },
    });
  } catch (error) {
    console.error((error as Error).stack);
  }
};

export function initializeEditor(selector: string) {
  const editorElement = document.querySelector(selector);

  if (!editorElement) {
    throw new Error(`Element not found for selector: ${selector}`);
  }

  return Editor(selector);
}
