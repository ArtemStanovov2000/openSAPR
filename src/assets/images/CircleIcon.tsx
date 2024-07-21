import { FC } from "react"

const CircleIcon: FC = () => {
    return (
        <svg viewBox="0 0 173 173" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="77" y="73" width="20" height="20" fill="#21598C" />
            <rect x="79" y="75" width="16" height="16" fill="black" />
            <g filter="url(#filter0_d_3_20)">
                <circle cx="86.5" cy="82.5" r="80" stroke="black" stroke-width="5" shape-rendering="crispEdges" />
            </g>
            <rect x="145" y="34" width="20" height="20" fill="#21598C" />
            <rect x="147" y="36" width="16" height="16" fill="black" />
            <line x1="86.7562" y1="82.8314" x2="154.756" y2="43.8314" stroke="black" stroke-width="5" />
            <defs>
                <filter id="filter0_d_3_20" x="0" y="0" width="173" height="173" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_20" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_20" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default CircleIcon