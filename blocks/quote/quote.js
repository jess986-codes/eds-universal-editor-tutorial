export default function decorate(block) {
  const [quoteWrapper] = block.children;

  console.log(`block object is ${block}`);
  console.log(`quote wrapper object is ${quoteWrapper}`);
  console.log(`quote wrapper text content is ${quoteWrapper.textContent}`);

  const blockquote = document.createElement("blockquote");
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);
}
