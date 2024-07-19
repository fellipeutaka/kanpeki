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
} as const satisfies Record<string, Icon>;
