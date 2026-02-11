const express = require('express');
const app = express();
app.use(express.json());

app.post('/markdown/to-html', (req, res) => {
    res.json({ html: `<h1>${req.body.text}</h1>` });
});

app.post('/markdown/extract-links', (req, res) => {
    res.json({ links: ['https://example.com'] });
});

app.post('/markdown/strip', (req, res) => {
    res.json({ text: req.body.markdown.replace(/#/g, '') });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
