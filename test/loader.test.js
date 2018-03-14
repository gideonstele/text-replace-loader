const compiler = require('./compiler.js');

test('Result with replaced text.', async () => {
  const stats = await compiler('./example.js');
  const output = stats.toJson().modules[0].source;
  console.log(output);
  expect(output).toBe(
`window.add = 'replacement: hello,dev !';
window.foo = 'replace again: hello,dev !';
`);
});
