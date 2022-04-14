export function ArrowIcon (props) {
  const {up,right,down,left} = props
  
  let degree = 0
  if (up) degree = 0
  if (right) degree = 90
  if (down) degree = 180
  if (left) degree = 270

  return (
    <div className="w-5 h-5" style={{transform:`rotate(${degree}deg)`}}>
      <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2.5L3.75 8.75L4.63125 9.63125L9.375 4.89375L9.375 17.5H10.625L10.625 4.89375L15.3687 9.63125L16.25 8.75L10 2.5Z" fill="currentColor" />
      </svg>
    </div>
  )
}

export function DownloadIcon (props) {
  return (
    <div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.25 15V17.5H3.75V15H2.5V17.5C2.5 17.8315 2.6317 18.1495 2.86612 18.3839C3.10054 18.6183 3.41848 18.75 3.75 18.75H16.25C16.5815 18.75 16.8995 18.6183 17.1339 18.3839C17.3683 18.1495 17.5 17.8315 17.5 17.5V15H16.25Z" fill="currentColor" />
      <path d="M16.25 8.75L15.3687 7.86875L10.625 12.6062V1.25H9.375V12.6062L4.63125 7.86875L3.75 8.75L10 15L16.25 8.75Z" fill="currentColor" />
      </svg>
    </div>
  )
}


export function CloseIcon ({className}) {
  return (
    <div className={className}>
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4L14.6 16L8 22.6L9.4 24L16 17.4L22.6 24L24 22.6L17.4 16L24 9.4Z" fill="currentColor" />
      </svg>
    </div>
  )
}

export function MenuIcon (props) {
  return (
    <div>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 6H4V8H28V6Z" fill="currentColor"/>
      <path d="M28 24H4V26H28V24Z" fill="currentColor"/>
      <path d="M28 12H4V14H28V12Z" fill="currentColor"/>
      <path d="M28 18H4V20H28V18Z" fill="currentColor"/>
      </svg>
    </div>
  )
}

export function LaunchIcon (props) {
  return (
  <div>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.25 17.5H3.75C3.41862 17.4996 3.10093 17.3677 2.86661 17.1334C2.63229 16.8991 2.50045 16.5814 2.5 16.25V3.75C2.50045 3.41862 2.63229 3.10093 2.86661 2.86661C3.10093 2.63229 3.41862 2.50045 3.75 2.5H10V3.75H3.75V16.25H16.25V10H17.5V16.25C17.4996 16.5814 17.3677 16.8991 17.1334 17.1334C16.8991 17.3677 16.5814 17.4996 16.25 17.5Z" fill="currentColor"/>
    <path d="M12.5 1.25V2.5H16.6163L11.25 7.86625L12.1337 8.75L17.5 3.38375V7.5H18.75V1.25H12.5Z" fill="currentColor"/>
    </svg>
  </div>
  )
}