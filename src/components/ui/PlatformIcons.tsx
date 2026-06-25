import type { CSSProperties } from "react";

type IconProps = {
  className?: string;
  style?: CSSProperties;
};

export const AppleIcon = ({ className = "h-5 w-5", style }: IconProps) => {
  return (
    <svg
      aria-hidden
      className={className}
      style={style}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M16.37 12.74c.03 3.12 2.74 4.16 2.77 4.17-.02.07-.43 1.49-1.41 2.95-.85 1.26-1.73 2.52-3.12 2.55-1.36.03-1.8-.81-3.36-.81-1.57 0-2.05.78-3.34.84-1.34.05-2.37-1.34-3.23-2.59-1.76-2.54-3.1-7.18-1.3-10.31.9-1.55 2.5-2.53 4.24-2.56 1.32-.03 2.57.89 3.36.89.79 0 2.27-1.1 3.83-.94.65.03 2.47.26 3.64 1.98-.09.05-2.18 1.27-2.16 3.83Zm-2.67-8.5c.71-.86 1.19-2.06 1.06-3.24-1.02.04-2.25.68-2.98 1.54-.65.75-1.22 1.97-1.06 3.13 1.14.09 2.28-.58 2.98-1.43Z" />
    </svg>
  );
};

export const AndroidIcon = ({ className = "h-5 w-5", style }: IconProps) => {
  return (
    <svg
      aria-hidden
      className={className}
      style={style}
      viewBox="0 0 106.23 122.88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M86.29 39c0-11-6.33-20.66-15.79-26l5.23-9.43A2.37 2.37 0 0 0 74.8.3h0a2.37 2.37 0 0 0-3.22.92l-5.36 9.68a35.84 35.84 0 0 0-26.2 0l-5.37-9.68A2.36 2.36 0 0 0 31.43.3h0a2.36 2.36 0 0 0-.92 3.22L35.74 13C26.27 18.34 20 28 20 39Zm11.2 0h0a8.74 8.74 0 0 1 8.74 8.75v31a8.74 8.74 0 0 1-8.74 8.75h0a8.75 8.75 0 0 1-8.75-8.75v-31A8.75 8.75 0 0 1 97.49 39ZM8.75 39h0a8.75 8.75 0 0 1 8.75 8.75v31a8.75 8.75 0 0 1-8.75 8.75h0A8.75 8.75 0 0 1 0 78.77v-31A8.75 8.75 0 0 1 8.75 39ZM49.47 97.73v16.4a8.75 8.75 0 0 1-8.75 8.75h0A8.74 8.74 0 0 1 32 114.13V97.73H28a8 8 0 0 1-8-8V41.63h66.29V89.71a8 8 0 0 1-8 8h-4v16.4a8.75 8.75 0 0 1-8.75 8.75h0a8.75 8.75 0 0 1-8.75-8.75V97.73Z"
      />
      <path
        fill="#fff"
        d="M39.26 24.09a1.46 1.46 0 1 0-1.45 1.46 1.45 1.45 0 0 0 1.45-1.46Z"
      />
      <path
        fill="#fff"
        d="M38 24.09a.15.15 0 0 0 0-.1h0a.18.18 0 0 0-.21 0 .18.18 0 0 0 0 .1 .14.14 0 0 0 .15.15 .18.18 0 0 0 .1 0 .15.15 0 0 0 0-.11Zm1.81-2h0a2.76 2.76 0 0 1 0 3.91 2.78 2.78 0 0 1-3.92 0h0a2.77 2.77 0 1 1 3.91-3.92Z"
      />
      <path
        fill="#fff"
        d="M69.89 24.09a1.46 1.46 0 1 0-1.46 1.46 1.46 1.46 0 0 0 1.46-1.46Z"
      />
      <path
        fill="#fff"
        d="M68.57 24.09a.15.15 0 0 0 0-.1h0a.18.18 0 0 0-.21 0 .18.18 0 0 0 0 .1 .14.14 0 0 0 .15.15 .18.18 0 0 0 .1 0 .15.15 0 0 0 0-.11Zm1.81-2h0a2.77 2.77 0 0 1-3.92 3.91h0a2.77 2.77 0 1 1 3.91-3.92Z"
      />
    </svg>
  );
};

export const ChevronDownIcon = ({ className = "h-4 w-4", style }: IconProps) => {
  return (
    <svg
      aria-hidden
      className={className}
      style={style}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const ChevronRightIcon = ({ className = "h-5 w-5", style }: IconProps) => {
  return (
    <svg
      aria-hidden
      className={className}
      style={style}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
