import { ComponentProps } from "react";

export const ListsIcon = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_6_400"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="25"
      >
        <rect y="0.768066" width="24" height="24" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_6_400)">
        <path
          d="M19.75 22.7681H4.25C3.01 22.7681 2 21.7581 2 20.5181V5.01807C2 3.77807 3.01 2.76807 4.25 2.76807H19.75C20.99 2.76807 22 3.77807 22 5.01807V20.5181C22 21.7581 20.99 22.7681 19.75 22.7681ZM4.25 4.26807C3.836 4.26807 3.5 4.60507 3.5 5.01807V20.5181C3.5 20.9311 3.836 21.2681 4.25 21.2681H19.75C20.164 21.2681 20.5 20.9311 20.5 20.5181V5.01807C20.5 4.60507 20.164 4.26807 19.75 4.26807H4.25Z"
          fill="currentColor"
        />
        <path
          d="M16.75 9.26807H6.75C6.336 9.26807 6 8.93107 6 8.51807C6 8.10507 6.336 7.76807 6.75 7.76807H16.75C17.164 7.76807 17.5 8.10307 17.5 8.51807C17.5 8.93307 17.164 9.26807 16.75 9.26807ZM16.75 13.3781H6.75C6.336 13.3781 6 13.0421 6 12.6281C6 12.2141 6.336 11.8781 6.75 11.8781H16.75C17.164 11.8781 17.5 12.2141 17.5 12.6281C17.5 13.0421 17.164 13.3781 16.75 13.3781ZM11.75 17.4881H6.75C6.336 17.4881 6 17.1531 6 16.7381C6 16.3231 6.336 15.9881 6.75 15.9881H11.75C12.164 15.9881 12.5 16.3251 12.5 16.7381C12.5 17.1511 12.164 17.4881 11.75 17.4881Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
