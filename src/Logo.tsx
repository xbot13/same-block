import { SVGProps } from "react";

type Props = {
    light: boolean,
} & SVGProps<SVGSVGElement>

export const Logo = ({ light, ...props }: Props) => (
    <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="1024" height="1024" fill={light ? "#F77F00" : "#6B2C39"} />
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="172" y="172" width="680" height="680">
            <circle cx="512" cy="512" r="340" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0)">
            <rect x="512" y="512" width="340" height="340" fill={light ? "#FCBF49" : "#004266"} />
            <rect x="172" y="512" width="340" height="340" fill="#D62828" />
            <rect x="512" y="172" width="340" height="340" fill={light ? "#6b2c39" : "#F77F00"} />
            <rect x="172" y="172" width="340" height="340" fill={light ? "#004266" : "#FCBF49"} />
        </g>
    </svg>)
