import type React from 'react'
import type { SVG } from '../../types/svg-types'

const SVGElement: React.FC<SVG> = ( { element} ): React.JSX.Element => {
  
  
  return(
    <div className="svg">
      {element}
    </div>
  )
}

export default SVGElement