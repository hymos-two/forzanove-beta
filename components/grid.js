import {useWindowSize} from '../hooks/useWindowSize'



export function Grid (props) {
  
  function useGridGap (value) {
    return Number.isInteger(value) ? `gap-x-${value/4}` : `gap-x-0`;
  }

  const defaultCols = `grid-cols-4 md:grid-cols-8 lg:grid-cols-12`;
  if (Number.isInteger(props.cols)) {
    const colsClass = `grid grid-cols-${props.cols}`
    return (
      <div className={colsClass}>
        {props.children}
      </div>
    )
  }
  const classes = `grid ${defaultCols} ${useGridGap(props.gap)} ${props.className} `;
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export function Container (props) {
  const defaultClasses = `w-full ${props.className}`
  if (props.fluid == true) {
    return (
      <div className={defaultClasses}>
        {props.children}
      </div>
    )
  }
  const classes = `${defaultClasses} px-4 sm:max-w-[620px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] `
  return (
    <div className={classes} style={{margin:'auto'}}>
      {props.children}
    </div>
  )
}

export function Section (props) {
  const size = useWindowSize();
  const width = Number.isInteger(props.width) ? props.width : size.width ;
  const height = Number.isInteger(props.height) ? props.height : size.height ;
  return (
    <section className={props.className} style={{width:width,height:height}}>
      {props.children}
    </section>
  )
}