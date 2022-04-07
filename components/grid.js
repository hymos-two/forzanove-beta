import {useWindowSize} from '../hooks/useWindowSize'



export function Grid (props) {
  const {className,children,cols,gap} = props
  
  function useGap (value) { 
    if (value == true) return `gap-x-4 lg:gap-x-5`
    return Number.isInteger(value) ? `gap-x-${value/4}` : `gap-x-0`; 
  }

  const defaultCols = `grid-cols-4 md:grid-cols-8 lg:grid-cols-12`;
  if (Number.isInteger(cols)) {
    const colsClass = `grid grid-cols-${cols}`
    return (
      <div className={colsClass}>
        {children}
      </div>
    )
  }
  const classes = `grid ${defaultCols} ${useGap(gap)} ${className} `;
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export function Container (props) {
  const {className,children,fluid} = props

  const defaultClasses = `w-full ${className}`
  if (fluid == true) {
    return (
      <div className={defaultClasses}>
        {children}
      </div>
    )
  }
  const classes = `${defaultClasses} px-4 sm:max-w-[620px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] `
  return (
    <div className={classes} style={{margin:'auto'}}>
      {children}
    </div>
  )
}

export function Section (props) {
  const {className,children,height} = props

  const size = useWindowSize();
  const heightSize = height !== undefined ? height : size.height ;

  return (
    <section className={`overflow-hidden ${className}`} style={{width:"100%",height:heightSize}}>
      {children}
    </section>
  )
}