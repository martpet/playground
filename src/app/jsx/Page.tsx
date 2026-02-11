import type { ComponentChildren, HTMLAttributes, JSX } from "preact";

interface PageProps extends HTMLAttributes<HTMLHtmlElement> {
  head?: JSX.Element;
  children?: ComponentChildren;
}

export function Page({ head, children, ...htmlAttr }: PageProps) {
  return (
    <html lang="en" {...htmlAttr}>
      <head>
        <link rel="icon" href="/public/favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="/public/Page.css" />
        {head}
      </head>
      <body>{children}</body>
    </html>
  );
}
