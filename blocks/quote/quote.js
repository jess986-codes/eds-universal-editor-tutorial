export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement("blockquote");
  blockquote.textContent = `block object is ${block}`;
  quoteWrapper.replaceChildren(blockquote);
}
