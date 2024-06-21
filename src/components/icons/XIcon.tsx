interface Props {
  size?: number
}

export const XIcon = ({ size = 32 }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='fill-transparent hover:fill-secondary transition-[fill] duration-150'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M4 4l11.733 16h4.267l-11.733 -16z'></path>
      <path d='M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772'></path>
    </svg>
  )
}
