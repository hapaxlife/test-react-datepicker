import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>test-react-datepicker</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/4.23.0/react-datepicker.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />

      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
