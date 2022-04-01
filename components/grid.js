import {useWindowSize} from '../hooks/useWindowSize'

function useGridGap (value) {
  return Number.isInteger(value) ? `gap-x-${value/4}` : `gap-x-0`;
}

export function Grid (props) {
  const defaultCols = `grid-cols-4 md:grid-cols-8 lg:grid-cols-12`;
  const classes = `grid ${defaultCols} ${useGridGap(props.gap)} ${props.className} `;
  if (Number.isInteger(props.cols)) {
    const colsClass = `grid-cols-${props.cols}`
    return (
      <div className={colsClass}>
        {props.children}
      </div>
    )
  }
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export function Container (props) {
  const size = useWindowSize()

  if (props.fluid == true) {
    return (
      <section className={props.bgColor} style={{width:size.width}}>
      <div className={props.className}>
        {props.children}
      </div>
      </section>
    )
  }

  const classes = `${props.className} py-4 sm:max-w-[620px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] `
  return (
    <section className={props.bgColor} style={{width:size.width}}>
    <div className={classes}>
      {props.children}
    </div>
    </section>
  )
}