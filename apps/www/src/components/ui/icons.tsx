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

export const Icons = {
  ...PackageManagerIcons,
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
      className="lucide lucide-chevron-left"
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
} as const satisfies Record<string, Icon>;
