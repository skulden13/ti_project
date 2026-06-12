import { Article, ArticleList, ArticleView } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

/* eslint-disable max-len */
const article = {
  id: '1',
  user: {
    id: '1',
    username: 'admin',
    avatar: '/images/rick.jpg',
  },
  title: 'Javascript news Javascript news Javascript news Javascript news',
  subtitle: "What's new in JS for 2022 year?",
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [
    'IT',
    'SCIENCE',
    'ECONOMICS',
    'POLITICS',
  ],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Block title',
      paragraphs: [
        'A program traditionally called "Hello, world!" is very simple. It outputs the phrase "Hello, world!" or a similar one using a particular programming language.',
        'JavaScript is a language whose programs can run in different environments. In our case, we are talking about browsers and the Node.js server platform. If you haven’t written a single line of JS code yet and are reading this text in a browser on a desktop computer, it means you are literally seconds away from your first JavaScript program.',
        'There are also other ways to run JS code in the browser. For example, when using JavaScript in practice, programs are loaded into the browser to make web pages work. Typically, the code is written in separate files with a .js extension and then linked to web pages, but code can also be embedded directly into the page. All this is done using the <script> tag. When the browser encounters such code, it executes it. You can find more details about the script tag on w3school.com. In particular, let’s look at an example demonstrating how JavaScript interacts with a web page from that resource. This example can also be run directly there (look for the "Try it Yourself" button), but we will do it a bit differently. Specifically, we will create a new file in a text editor (for example, VS Code or Notepad++) called hello.html and add the following code:',
      ],
    },
    {
      id: '4',
      type: 'CODE',
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: 'TEXT',
      title: 'Block title',
      paragraphs: [
        'A program traditionally called "Hello, world!" is very simple. It outputs the phrase "Hello, world!" or a similar one using a particular programming language.',
        'There are also other ways to run JS code in the browser. For example, when using JavaScript in practice, programs are loaded into the browser to make web pages work. Typically, the code is written in separate files with a .js extension and then linked to web pages, but code can also be embedded directly into the page. All this is done using the <script> tag. When the browser encounters such code, it executes it. You can find more details about the script tag on w3school.com. In particular, let’s look at an example demonstrating how JavaScript interacts with a web page from that resource. This example can also be run directly there (look for the "Try it Yourself" button), but we will do it a bit differently. Specifically, we will create a new file in a text editor (for example, VS Code or Notepad++) called hello.html and add the following code:',
      ],
    },
    {
      id: '2',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Figure 1 - website screenshot',
    },
    {
      id: '3',
      type: 'CODE',
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
    {
      id: '7',
      type: 'TEXT',
      title: 'Block title',
      paragraphs: [
        'JavaScript is a language whose programs can run in different environments. In our case, we are talking about browsers and the Node.js server platform. If you haven’t written a single line of JS code yet and are reading this text in a browser on a desktop computer, it means you are literally seconds away from your first JavaScript program.',
        'There are also other ways to run JS code in the browser. For example, when using JavaScript in practice, programs are loaded into the browser to make web pages work. Typically, the code is written in separate files with a .js extension and then linked to web pages, but code can also be embedded directly into the page. All this is done using the <script> tag. When the browser encounters such code, it executes it. You can find more details about the script tag on w3school.com. In particular, let’s look at an example demonstrating how JavaScript interacts with a web page from that resource. This example can also be run directly there (look for the "Try it Yourself" button), but we will do it a bit differently. Specifically, we will create a new file in a text editor (for example, VS Code or Notepad++) called hello.html and add the following code:',
      ],
    },
    {
      id: '8',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Figure 1 - website screenshot',
    },
    {
      id: '9',
      type: 'TEXT',
      title: 'Block title',
      paragraphs: [
        'JavaScript is a language whose programs can run in different environments. In our case, we are talking about browsers and the Node.js server platform. If you haven’t written a single line of JS code yet and are reading this text in a browser on a desktop computer, it means you are literally seconds away from your first JavaScript program.',
      ],
    },
    {
      id: '10',
      type: 'TEXT',
      title: 'Block title',
      paragraphs: [
        'JavaScript is a language whose programs can run in different environments. In our case, we are talking about browsers and the Node.js server platform. If you haven’t written a single line of JS code yet and are reading this text in a browser on a desktop computer, it means you are literally seconds away from your first JavaScript program.',
        'There are also other ways to run JS code in the browser. For example, when using JavaScript in practice, programs are loaded into the browser to make web pages work. Typically, the code is written in separate files with a .js extension and then linked to web pages, but code can also be embedded directly into the page. All this is done using the <script> tag. When the browser encounters such code, it executes it. You can find more details about the script tag on w3school.com. In particular, let’s look at an example demonstrating how JavaScript interacts with a web page from that resource. This example can also be run directly there (look for the "Try it Yourself" button), but we will do it a bit differently. Specifically, we will create a new file in a text editor (for example, VS Code or Notepad++) called hello.html and add the following code:',
      ],
    },
    {
      id: '11',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Figure 1 - website screenshot',
    },
    {
      id: '12',
      type: 'TEXT',
      title: 'Block title',
      paragraphs: [
        'JavaScript is a language whose programs can run in different environments. In our case, we are talking about browsers and the Node.js server platform. If you haven’t written a single line of JS code yet and are reading this text in a browser on a desktop computer, it means you are literally seconds away from your first JavaScript program.',
        'There are also other ways to run JS code in the browser. For example, when using JavaScript in practice, programs are loaded into the browser to make web pages work. Typically, the code is written in separate files with a .js extension and then linked to web pages, but code can also be embedded directly into the page. All this is done using the <script> tag. When the browser encounters such code, it executes it. You can find more details about the script tag on w3school.com. In particular, let’s look at an example demonstrating how JavaScript interacts with a web page from that resource. This example can also be run directly there (look for the "Try it Yourself" button), but we will do it a bit differently. Specifically, we will create a new file in a text editor (for example, VS Code or Notepad++) called hello.html and add the following code:',
      ],
    },
  ],
} as Article;
/* eslint-enable max-len */

const ArticlesPage = memo(() => {
  const { t } = useTranslation('article');

  return (
    <div>
      <h1>{t('ArticlesPage')}</h1>
      <ArticleList
        // isLoading
        view={ArticleView.EXPANDED}
        articles={
          // eslint-disable-next-line max-len
          new Array(15).fill(0).map((item, index) => ({ ...article, id: `${index + 1}` } as Article))
        }
      />
    </div>
  );
});

export default ArticlesPage;
