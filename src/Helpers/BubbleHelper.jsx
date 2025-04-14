const GenerateBubble = () => ({
  id: Math.random(),
  size: Math.floor(Math.random() * 100) + 10,
  left: Math.random() * 100,
  backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
});

export default GenerateBubble;
