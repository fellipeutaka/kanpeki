export type IconProps = React.ComponentProps<"svg">;
export type Icon = (props: IconProps) => React.JSX.Element;

export const Icons = {
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
