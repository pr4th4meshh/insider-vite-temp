import React from "react"
import { Button } from "../uicomponents/ui/button"

const ButtonComponent = ({ name, onClick, className }) => {
  return (
    <div>
      <Button
        variant="outline"
        onClick={onClick}
        className={className}
      >
        {name}
      </Button>
    </div>
  )
}

export default ButtonComponent
