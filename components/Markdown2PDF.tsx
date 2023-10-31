import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import { Spinner } from "react-bootstrap";
// syntax hightlighting:
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
interface CodeBlockProps {
  language: string;
  value: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={solarizedlight} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const Loader = () => (
  <div className="editor-loader">
    <Spinner animation="grow" />
    <p className="lead">please wait...</p>
  </div>
);
const components = {
  code: ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <CodeBlock
        language={match[1]}
        value={String(children).replace(/\n$/, "")}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const Markdown2PDF: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");
  useEffect(() => {
    (async () => {
      const content = (await fetch("/defaultcontent.json")).json();
      content.then((v) => {
        setMarkdown(v.md);
      });
    })();
  }, []);
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setShowLoader(false);
  }, []);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <div className="md-2pdf">
          <div className="editor">
            <CodeEditor onChange={setMarkdown} />
          </div>
          <div className="react-markdown-container">
            <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
          </div>
        </div>
      )}
    </>
  );
};

export default Markdown2PDF;
