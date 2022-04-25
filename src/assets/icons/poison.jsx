import React from 'react'

const poison = ({ className, fill }) => (
    <svg width="11"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M5.49999 0.583313C8.49162 0.583313 10.9167 3.00835 10.9167 5.99998V8.03881C10.9167 8.24004 10.8606 8.43729 10.7548 8.60844C10.649 8.7796 10.4976 8.91791 10.3176 9.00785L8.74999 9.79165V10.3333C8.75002 10.7478 8.59165 11.1466 8.3073 11.4482C8.02295 11.7498 7.6341 11.9313 7.22033 11.9556L7.09791 11.9583C7.10982 11.8993 7.11778 11.8396 7.12174 11.7796L7.12499 11.6875V11.4166C7.12508 11.1433 7.02186 10.8801 6.83602 10.6797C6.65018 10.4793 6.39545 10.3565 6.12291 10.336L6.04166 10.3333H4.95833C4.68502 10.3332 4.42177 10.4365 4.22136 10.6223C4.02096 10.8081 3.8982 11.0629 3.8777 11.3354L3.87499 11.4166V11.6875C3.87499 11.7801 3.8842 11.8711 3.90208 11.9583H3.87499C3.44402 11.9583 3.03069 11.7871 2.72595 11.4824C2.4212 11.1776 2.24999 10.7643 2.24999 10.3333V9.79165L0.682412 9.00785C0.502326 8.91787 0.350878 8.77948 0.245058 8.60821C0.139239 8.43695 0.0832346 8.23959 0.0833284 8.03827V5.99998C0.0833284 3.00835 2.50837 0.583313 5.49999 0.583313ZM5.49999 1.66665C4.37418 1.66666 3.29256 2.10482 2.48415 2.88836C1.67575 3.6719 1.20401 4.7393 1.16883 5.86456L1.16666 5.99998V8.03881L3.33333 9.12215V9.98394L3.37395 9.93844C3.75762 9.5266 4.28675 9.28059 4.84891 9.25269L4.95833 9.24998L6.0812 9.25052L6.20199 9.25594C6.74312 9.29602 7.22574 9.53219 7.58324 9.89348L7.66666 9.98394V9.12215L9.83333 8.03881V5.99998C9.83333 4.85071 9.37678 3.74851 8.56412 2.93585C7.75147 2.12319 6.64927 1.66665 5.49999 1.66665ZM3.33333 5.45831C3.62065 5.45831 3.8962 5.57245 4.09936 5.77561C4.30252 5.97878 4.41666 6.25433 4.41666 6.54165C4.41666 6.82896 4.30252 7.10451 4.09936 7.30768C3.8962 7.51084 3.62065 7.62498 3.33333 7.62498C3.04601 7.62498 2.77046 7.51084 2.5673 7.30768C2.36413 7.10451 2.24999 6.82896 2.24999 6.54165C2.24999 6.25433 2.36413 5.97878 2.5673 5.77561C2.77046 5.57245 3.04601 5.45831 3.33333 5.45831ZM7.66666 5.45831C7.95398 5.45831 8.22953 5.57245 8.43269 5.77561C8.63586 5.97878 8.74999 6.25433 8.74999 6.54165C8.74999 6.82896 8.63586 7.10451 8.43269 7.30768C8.22953 7.51084 7.95398 7.62498 7.66666 7.62498C7.37934 7.62498 7.10379 7.51084 6.90063 7.30768C6.69746 7.10451 6.58333 6.82896 6.58333 6.54165C6.58333 6.25433 6.69746 5.97878 6.90063 5.77561C7.10379 5.57245 7.37934 5.45831 7.66666 5.45831Z" fill={fill || '#A43E9E'} />
    </svg>
)

export default poison