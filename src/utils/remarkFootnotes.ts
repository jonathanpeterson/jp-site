import { visit } from 'unist-util-visit';

let counter = 0;

export function remarkFootnotes() {
  return (tree: any) => {
    counter = 0;
    visit(tree, 'image', (node: any, index: number | undefined, parent: any) => {
      if (node.url !== 'fn') return;
      if (index === undefined || !parent) return;
      const id = `fn-${counter++}`;
      const label = node.alt;
      const content = node.title || '';
      parent.children[index] = {
        type: 'html',
        value: `<label for="${id}" class="fn-label">${label}</label><input type="checkbox" id="${id}" class="fn-toggle"><span class="fn-content">${content}</span>`,
      };
    });
  };
}
