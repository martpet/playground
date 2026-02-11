import type { ComponentChildren, HTMLAttributes, JSX } from "preact";

interface Props extends HTMLAttributes<HTMLHtmlElement> {
  head?: JSX.Element;
  children?: ComponentChildren;
}

export function Page({ head, children, ...attr }: Props) {
  return (
    <html lang="en" {...attr}>
      <head>
        <link rel="icon" href="/public/favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="/public/Page.css" />
        {head}
      </head>
      <body>{children}</body>
    </html>
  );
}
