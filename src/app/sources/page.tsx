import fs from "node:fs/promises";
import path from "node:path";
import type React from "react";

const contentPath = path.join(process.cwd(), "src", "content", "sources.md");

type InlineTokenNode = { type: "strong" | "code" | "link"; text: string; href?: string };
type InlineToken = string | InlineTokenNode;

const renderInline = (value: string, keyPrefix: string) => {
  const tokens: InlineToken[] = [];
  let cursor = 0;
  const patterns = [
    { type: "strong" as const, regex: /\*\*(.+?)\*\*/g },
    { type: "code" as const, regex: /`([^`]+?)`/g },
    { type: "link" as const, regex: /\[([^\]]+?)\]\(([^)]+?)\)/g },
  ];

  while (cursor < value.length) {
    let nextMatch: { type: InlineTokenNode["type"]; match: RegExpExecArray } | null = null;
    for (const pattern of patterns) {
      pattern.regex.lastIndex = cursor;
      const match = pattern.regex.exec(value);
      if (match && (!nextMatch || match.index < nextMatch.match.index)) {
        nextMatch = { type: pattern.type, match };
      }
    }

    if (!nextMatch) {
      tokens.push(value.slice(cursor));
      break;
    }

    const { type, match } = nextMatch;
    if (match.index > cursor) {
      tokens.push(value.slice(cursor, match.index));
    }

    if (type === "link") {
      tokens.push({ type, text: match[1], href: match[2] });
    } else {
      tokens.push({ type, text: match[1] });
    }
    cursor = match.index + match[0].length;
  }

  return tokens.map((token, index) => {
    if (typeof token === "string") {
      return <span key={`${keyPrefix}-text-${index}`}>{token}</span>;
    }
    if (token.type === "strong") {
      return (
        <strong className="font-semibold text-[#1f2c24]" key={`${keyPrefix}-strong-${index}`}>
          {token.text}
        </strong>
      );
    }
    if (token.type === "code") {
      return (
        <code
          className="rounded-md bg-black/5 px-1.5 py-0.5 text-[0.9em] text-[#1f2c24]"
          key={`${keyPrefix}-code-${index}`}
        >
          {token.text}
        </code>
      );
    }
    return (
      <a
        className="break-all text-[#1f2c24] underline decoration-[#98b5a2] underline-offset-4"
        href={token.href}
        key={`${keyPrefix}-link-${index}`}
        rel="noreferrer"
        target="_blank"
      >
        {token.text}
      </a>
    );
  });
};

const parseMarkdown = (markdown: string) => {
  const lines = markdown.split(/\r?\n/);
  const blocks: React.ReactNode[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let listType: "ul" | "ol" | null = null;
  let quoteLines: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) {
      return;
    }
    const text = paragraph.join(" ").trim();
    if (text) {
      const keyPrefix = `p-${blocks.length}`;
      blocks.push(
        <p className="mt-4 text-[15px] leading-relaxed text-[#3b4a40] sm:text-[16px]" key={keyPrefix}>
          {renderInline(text, keyPrefix)}
        </p>
      );
    }
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length || !listType) {
      listItems = [];
      listType = null;
      return;
    }
    const keyPrefix = `list-${blocks.length}`;
    const listClass =
      listType === "ul"
        ? "mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[#3b4a40] sm:text-[16px]"
        : "mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-[#3b4a40] sm:text-[16px]";
    const ListTag = listType === "ul" ? "ul" : "ol";
    blocks.push(
      <ListTag className={listClass} key={keyPrefix}>
        {listItems.map((item, index) => (
          <li className="pl-1" key={`${keyPrefix}-item-${index}`}>
            {renderInline(item, `${keyPrefix}-item-${index}`)}
          </li>
        ))}
      </ListTag>
    );
    listItems = [];
    listType = null;
  };

  const flushQuote = () => {
    if (!quoteLines.length) {
      return;
    }
    const text = quoteLines.join(" ").trim();
    const keyPrefix = `quote-${blocks.length}`;
    blocks.push(
      <blockquote
        className="mt-4 border-l-2 border-[#ccd9cf] pl-4 text-[15px] italic text-[#4a5a4f] sm:text-[16px]"
        key={keyPrefix}
      >
        {renderInline(text, keyPrefix)}
      </blockquote>
    );
    quoteLines = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      flushQuote();
      continue;
    }

    if (trimmed.startsWith("> ")) {
      flushParagraph();
      flushList();
      quoteLines.push(trimmed.replace(/^>\s?/, ""));
      continue;
    }

    if (trimmed.startsWith("# ")) {
      flushParagraph();
      flushList();
      flushQuote();
      blocks.push(
        <h1
          className="text-3xl font-semibold tracking-tight text-[#1f2c24] sm:text-4xl"
          key={`h1-${blocks.length}`}
        >
          {renderInline(trimmed.slice(2).trim(), `h1-${blocks.length}`)}
        </h1>
      );
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      flushQuote();
      blocks.push(
        <h2 className="mt-10 text-2xl font-semibold text-[#1f2c24]" key={`h2-${blocks.length}`}>
          {renderInline(trimmed.slice(3).trim(), `h2-${blocks.length}`)}
        </h2>
      );
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      flushQuote();
      blocks.push(
        <h3 className="mt-6 text-lg font-semibold text-[#1f2c24]" key={`h3-${blocks.length}`}>
          {renderInline(trimmed.slice(4).trim(), `h3-${blocks.length}`)}
        </h3>
      );
      continue;
    }

    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      flushParagraph();
      flushQuote();
      if (listType && listType !== "ul") {
        flushList();
      }
      listType = "ul";
      listItems.push(trimmed.slice(2).trim());
      continue;
    }

    if (/^\d+\.\s/.test(trimmed)) {
      flushParagraph();
      flushQuote();
      if (listType && listType !== "ol") {
        flushList();
      }
      listType = "ol";
      listItems.push(trimmed.replace(/^\d+\.\s/, "").trim());
      continue;
    }

    if (listType) {
      listItems[listItems.length - 1] = `${listItems[listItems.length - 1]} ${trimmed}`;
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  flushQuote();

  return blocks;
};

export default async function SourcesPage() {
  const markdown = await fs.readFile(contentPath, "utf8");

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[820px] break-words px-6 py-10 sm:px-10 sm:py-14">
        {parseMarkdown(markdown)}
      </div>
    </main>
  );
}
