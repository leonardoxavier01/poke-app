import React from 'react'

const water = ({className, fill}) => (
    <svg width="11"
        height="13"
        viewBox="0 0 11 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M5.5 2.17917L2.81875 4.86042C2.28852 5.39071 1.92743 6.06632 1.78116 6.80182C1.63489 7.53732 1.71 8.29968 1.997 8.9925C2.28399 9.68531 2.76998 10.2775 3.39351 10.6941C4.01703 11.1107 4.7501 11.3331 5.5 11.3331C6.24991 11.3331 6.98297 11.1107 7.6065 10.6941C8.23003 10.2775 8.71601 9.68531 9.00301 8.9925C9.29 8.29968 9.36511 7.53732 9.21884 6.80182C9.07257 6.06632 8.71149 5.39071 8.18125 4.86042L5.5 2.17917ZM5.5 0.647339L8.94717 4.09451C9.62894 4.77629 10.0932 5.64493 10.2813 6.59059C10.4694 7.53624 10.3729 8.51644 10.0039 9.40723C9.63493 10.298 9.01009 11.0594 8.2084 11.595C7.40671 12.1307 6.46418 12.4166 5.5 12.4166C4.53582 12.4166 3.59329 12.1307 2.7916 11.595C1.98992 11.0594 1.36507 10.298 0.996095 9.40723C0.627116 8.51644 0.530571 7.53624 0.71867 6.59059C0.906768 5.64493 1.37106 4.77629 2.05284 4.09451L5.5 0.647339V0.647339Z" fill={fill || '#6493EB'} />
    </svg>
)

export default water