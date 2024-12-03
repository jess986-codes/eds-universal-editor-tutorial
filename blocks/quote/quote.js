export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement("section");
  quoteWrapper.replaceChildren(blockquote);
}
