export type IconProps = React.ComponentProps<"svg">;
export type Icon = (props: IconProps) => React.JSX.Element;

const PackageManagerIcons = {
  Npm: (props) => (
    <svg
      role="img"
      aria-label="NPM"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#cb3837"
        d="M2 10.555h28v9.335H16v1.556H9.778v-1.557H2zm1.556 7.779h3.111v-4.668h1.555v4.667h1.556v-6.222H3.556zm7.778-6.223v7.779h3.111v-1.556h3.111v-6.223zm3.111 1.556H16v3.112h-1.556zm4.667-1.556v6.223h3.111v-4.668h1.556v4.667h1.556v-4.667h1.556v4.667h1.556v-6.222z"
      />
    </svg>
  ),
  Yarn: (props) => (
    <svg
      role="img"
      aria-label="Yarn"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#2188b6"
        d="M28.208 24.409a10.493 10.493 0 00-3.959 1.822 23.743 23.743 0 01-5.835 2.642 1.632 1.632 0 01-.983.55 62.228 62.228 0 01-6.447.577c-1.163.009-1.876-.3-2.074-.776a1.573 1.573 0 01.866-2.074 3.759 3.759 0 01-.514-.379c-.171-.171-.352-.514-.406-.388-.225.55-.343 1.894-.947 2.5-.83.839-2.4.559-3.328.072-1.019-.541.072-1.813.072-1.813a.73.73 0 01-.992-.343 4.847 4.847 0 01-.667-2.949 5.374 5.374 0 011.749-2.895 9.334 9.334 0 01.658-4.4 10.445 10.445 0 013.165-3.661S6.628 10.747 7.35 8.817c.469-1.262.658-1.253.812-1.308a3.633 3.633 0 001.452-.857 5.265 5.265 0 014.41-1.7S15.2 1.4 16.277 2.09a18.349 18.349 0 011.533 2.886s1.281-.748 1.425-.469a11.334 11.334 0 01.523 6.132 14.01 14.01 0 01-2.6 5.411c-.135.225 1.551.938 2.615 3.887.983 2.7.108 4.96.262 5.212.027.045.036.063.036.063s1.127.09 3.391-1.308a8.5 8.5 0 014.277-1.604 1.081 1.081 0 01.469 2.11z"
      />
    </svg>
  ),
  Pnpm: (props) => (
    <svg
      role="img"
      aria-label="PNPM"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#f9ad00"
        d="M30 10.75h-8.749V2H30zm-9.626 0h-8.75V2h8.75zm-9.625 0H2V2h8.749zM30 20.375h-8.749v-8.75H30z"
      />
      <path
        fill="#4e4e4e"
        d="M20.374 20.375h-8.75v-8.75h8.75zm0 9.625h-8.75v-8.75h8.75zM30 30h-8.749v-8.75H30zm-19.251 0H2v-8.75h8.749z"
      />
    </svg>
  ),
  Bun: (props) => (
    <svg
      role="img"
      aria-label="Bun"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#fbf0df"
        d="M29 17c0 5.65-5.82 10.23-13 10.23S3 22.61 3 17c0-3.5 2.24-6.6 5.66-8.44S14.21 4.81 16 4.81s3.32 1.54 7.34 3.71C26.76 10.36 29 13.46 29 17"
      />
      <path
        fill="none"
        stroke="#000"
        d="M16 27.65c7.32 0 13.46-4.65 13.46-10.65 0-3.72-2.37-7-5.89-8.85-1.39-.75-2.46-1.41-3.37-2l-1.13-.69A6.14 6.14 0 0016 4.35a6.88 6.88 0 00-3.3 1.23c-.42.24-.86.51-1.32.8-.87.54-1.83 1.13-3 1.73C4.91 10 2.54 13.24 2.54 17c0 6 6.14 10.65 13.46 10.65z"
      />
      <ellipse cx={21.65} cy={18.62} fill="#febbd0" rx={2.17} ry={1.28} />
      <ellipse cx={10.41} cy={18.62} fill="#febbd0" rx={2.17} ry={1.28} />
      <path
        fillRule="evenodd"
        d="M11.43 18.11a2 2 0 10-2-2.05 2.05 2.05 0 002 2.05m9.2 0a2 2 0 10-2-2.05 2 2 0 002 2.05"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M10.79 16.19a.77.77 0 10-.76-.77.76.76 0 00.76.77m9.2 0a.77.77 0 100-1.53.77.77 0 000 1.53"
      />
      <path
        fill="#b71422"
        stroke="#000"
        strokeWidth={0.75}
        d="M18.62 19.67a3.3 3.3 0 01-1.09 1.75 2.48 2.48 0 01-1.5.69 2.53 2.53 0 01-1.5-.69 3.28 3.28 0 01-1.08-1.75.26.26 0 01.29-.3h4.58a.27.27 0 01.3.3z"
      />
      <path
        fill="#ccbea7"
        fillRule="evenodd"
        d="M14.93 5.75a6.09 6.09 0 01-2.09 4.62c-.1.09 0 .27.11.22 1.25-.49 2.94-1.94 2.23-4.88-.03-.15-.25-.11-.25.04m.85 0a6 6 0 01.57 5c0 .13.12.24.21.13.83-1 1.54-3.11-.59-5.31-.1-.11-.27.04-.19.17zm1-.06a6.09 6.09 0 012.53 4.38c0 .14.21.17.24 0 .34-1.3.15-3.51-2.66-4.66-.12-.02-.21.18-.09.27zM9.94 9.55a6.27 6.27 0 003.89-3.33c.07-.13.28-.08.25.07-.64 3-2.79 3.59-4.13 3.51-.14-.01-.14-.21-.01-.25"
      />
    </svg>
  ),
} as const satisfies Record<string, Icon>;

const TechnologiesIcons = {
  Adobe: (props) => (
    <svg
      role="img"
      aria-label="Adobe"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624z"
      />
    </svg>
  ),
  Css: (props) => (
    <svg
      role="img"
      aria-label="CSS"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#1572b6"
        d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30z"
      />
      <path fill="#33a9dc" d="M16 27.858l8.17-2.265 1.922-21.532H16z" />
      <path
        fill="#fff"
        d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829-.759 8.518H16z"
      />
      <path
        fill="#ebebeb"
        d="M16.019 21.218l-.014.004-3.442-.93-.22-2.465H9.24l.433 4.853 6.331 1.758.015-.004z"
      />
      <path
        fill="#fff"
        d="M19.827 16.151l-.372 4.139-3.447.93v3.216l6.336-1.756.047-.522.537-6.007z"
      />
      <path
        fill="#ebebeb"
        d="M16.011 6.935v3.091H8.545l-.062-.695-.141-1.567-.074-.829zM16 13.191v3.091h-3.399l-.062-.695-.14-1.567-.074-.829z"
      />
    </svg>
  ),
  React: (props) => (
    <svg
      role="img"
      aria-label="React"
      viewBox="0 0 128 128"
      fill="#149eca"
      {...props}
    >
      <circle cx="64" cy="64" r="11.4" />
      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
    </svg>
  ),
  RadixUI: (props) => (
    <svg
      role="img"
      aria-label="Radix UI"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5.5a2.5 2.5 0 105 0 2.5 2.5 0 10-5 0M6 3h5v5H6zm5 8v10a5 5 0 01-.217-9.995z"
      />
    </svg>
  ),
  NextJS: (props) => (
    <svg
      role="img"
      aria-label="Next.js"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 128 128"
      {...props}
    >
      <circle cx={64} cy={64} r={64} />
      <path
        fill="url(#next_gradient)"
        d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 006.763-5.209"
      />
      <path fill="url(#next_gradient2)" d="M81.778 38.4h8.533v51.2h-8.533z" />
      <defs>
        <linearGradient
          id="next_gradient"
          x1={109}
          x2={144.5}
          y1={116.5}
          y2={160.5}
          gradientTransform="scale(.71111)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="next_gradient2"
          x1={121}
          x2={120.799}
          y1={54}
          y2={106.875}
          gradientTransform="scale(.71111)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  ),
  JavaScript: (props) => (
    <svg
      role="img"
      aria-label="JavaScript"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 128 128"
      {...props}
    >
      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
      <path
        fill="#323330"
        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"
      />
    </svg>
  ),
  Json: (props) => (
    <svg
      role="img"
      aria-label="JSON"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#f5de19"
        d="M4.014 14.976a2.5 2.5 0 001.567-.518 2.38 2.38 0 00.805-1.358 15.3 15.3 0 00.214-2.944q.012-2.085.075-2.747a5.2 5.2 0 01.418-1.686 3 3 0 01.755-1.018A3.05 3.05 0 019 4.125 6.8 6.8 0 0110.544 4h.7v1.96h-.387a2.34 2.34 0 00-1.723.468 3.4 3.4 0 00-.425 2.092 36 36 0 01-.137 4.133 4.7 4.7 0 01-.768 2.06A4.6 4.6 0 016.1 16a3.8 3.8 0 011.992 1.754 8.9 8.9 0 01.618 3.865q0 2.435.05 2.9a1.76 1.76 0 00.504 1.181 2.64 2.64 0 001.592.337h.387V28h-.7a5.7 5.7 0 01-1.773-.2 2.97 2.97 0 01-1.324-.93 3.35 3.35 0 01-.681-1.63 24 24 0 01-.165-3.234 16.5 16.5 0 00-.214-3.106 2.4 2.4 0 00-.805-1.361 2.5 2.5 0 00-1.567-.524zm23.972 2.035a2.5 2.5 0 00-1.567.524 2.4 2.4 0 00-.805 1.361 16.5 16.5 0 00-.212 3.109 24 24 0 01-.169 3.234 3.35 3.35 0 01-.681 1.63 2.97 2.97 0 01-1.324.93 5.7 5.7 0 01-1.773.2h-.7V26.04h.387a2.64 2.64 0 001.592-.337 1.76 1.76 0 00.506-1.186q.05-.462.05-2.9a8.9 8.9 0 01.618-3.865A3.8 3.8 0 0125.9 16a4.6 4.6 0 01-1.7-1.286 4.7 4.7 0 01-.768-2.06 36 36 0 01-.137-4.133 3.4 3.4 0 00-.425-2.092 2.34 2.34 0 00-1.723-.468h-.387V4h.7a6.8 6.8 0 011.54.125 3.05 3.05 0 011.149.581 3 3 0 01.755 1.018 5.2 5.2 0 01.418 1.686q.062.662.075 2.747a15.3 15.3 0 00.212 2.947 2.38 2.38 0 00.805 1.355 2.5 2.5 0 001.567.518z"
      />
    </svg>
  ),
  TypeScript: (props) => (
    <svg
      role="img"
      aria-label="TypeScript"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 128 128"
      {...props}
    >
      <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
      <path
        fill="#007acc"
        d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
      />
    </svg>
  ),
  TailwindCSS: (props) => (
    <svg
      role="img"
      aria-label="Tailwind CSS"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#38bdf8"
        d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"
      />
    </svg>
  ),
  Mdx: (props) => (
    <svg
      role="img"
      aria-label="MDX"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20.3 16.5l-3.9 3.9-4-3.9 1.1-1.1 2.1 2.1v-5.7h1.5v5.8l2.1-2.1zm-16.8-.8l2.7 2.7L9 15.7v4.4h1.5V12l-4.3 4.3L2 12v8.1h1.5z"
      />
      <path
        fill="#f9ac00"
        d="M28.8 20l-3.1-3.1-3.1 3.1-1-1.1 3.1-3.1-3.2-3.2 1.1-1 3.1 3.2 3.2-3.2 1.1 1-3.2 3.2 3.1 3.1z"
      />
    </svg>
  ),
} as const satisfies Record<string, Icon>;

export const Icons = {
  ...PackageManagerIcons,
  ...TechnologiesIcons,
  ExternalLink: (props) => (
    <svg
      role="img"
      aria-label="External Link"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    </svg>
  ),
  Logo: (props) => (
    <svg
      role="img"
      aria-label="Logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="5 5 90 90"
      fill="currentColor"
      {...props}
    >
      <path d="M60.033 21.233C29.688 21.233 5 45.921 5 76.267a2.5 2.5 0 105 0c0-27.588 22.445-50.033 50.033-50.033C76.557 26.233 90 39.677 90 56.201c0 9.686-7.88 17.566-17.566 17.566-5.459 0-9.901-4.442-9.901-9.901a5.17 5.17 0 015.165-5.165 2.24 2.24 0 012.237 2.237 2.5 2.5 0 105 0c0-3.99-3.247-7.237-7.237-7.237-5.605 0-10.165 4.56-10.165 10.165 0 8.217 6.685 14.901 14.901 14.901C84.877 78.767 95 68.644 95 56.201c0-19.282-15.686-34.968-34.967-34.968z" />
    </svg>
  ),
  Loader: (props) => (
    <svg
      role="img"
      aria-label="Loader"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 11-6.219-8.56" />
    </svg>
  ),
  GitHub: (props) => (
    <svg
      role="img"
      aria-label="GitHub"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="currentColor"
        d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
      />
    </svg>
  ),
  Twitter: (props) => (
    <svg
      role="img"
      aria-label="Twitter"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="currentColor"
        d="M75.916 54.2L122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2zM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793z"
      />
    </svg>
  ),
  Sparkles: (props) => (
    <svg
      role="img"
      aria-label="Sparkles"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.937 15.5A2 2 0 008.5 14.063l-6.135-1.582a.5.5 0 010-.962L8.5 9.936A2 2 0 009.937 8.5l1.582-6.135a.5.5 0 01.963 0L14.063 8.5A2 2 0 0015.5 9.937l6.135 1.581a.5.5 0 010 .964L15.5 14.063a2 2 0 00-1.437 1.437l-1.582 6.135a.5.5 0 01-.963 0zM20 3v4M22 5h-4M4 17v2M5 18H3" />
    </svg>
  ),
  Copy: (props) => (
    <svg
      role="img"
      aria-label="Copy"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width={14} height={14} x={8} y={8} rx={2} ry={2} />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  ),
  Check: (props) => (
    <svg
      role="img"
      aria-label="Check"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  ChevronLeft: (props) => (
    <svg
      role="img"
      aria-label="Chevron Left"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  ),
  ChevronRight: (props) => (
    <svg
      role="img"
      aria-label="Chevron Right"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  ),
  Link: (props) => (
    <svg
      role="img"
      aria-label="Link"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  ),
  Search: (props) => (
    <svg
      role="img"
      aria-label="Search"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx={11} cy={11} r={8} />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  ),
  File: (props) => (
    <svg
      role="img"
      aria-label="File"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7z" />
      <path d="M14 2v4a2 2 0 002 2h4" />
    </svg>
  ),
  Circle: (props) => (
    <svg
      role="img"
      aria-label="Circle"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
    </svg>
  ),
  Sun: (props) => (
    <svg
      role="img"
      aria-label="Sun"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx={12} cy={12} r={4} />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  ),
  Moon: (props) => (
    <svg
      role="img"
      aria-label="Moon"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3a6 6 0 009 9 9 9 0 11-9-9z" />
    </svg>
  ),
  Laptop: (props) => (
    <svg
      role="img"
      aria-label="Laptop"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 16V7a2 2 0 00-2-2H6a2 2 0 00-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 01-.9 1.45H3.62a1 1 0 01-.9-1.45L4 16" />
    </svg>
  ),
  Terminal: (props) => (
    <svg
      role="img"
      aria-label="Terminal"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 17L10 11 4 5" />
      <path d="M12 19L20 19" />
    </svg>
  ),
} as const satisfies Record<string, Icon>;
