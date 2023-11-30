import useUpdate from "../hooks/useUpdate"

function Client() {
  let updates = useUpdate()

  if (!updates)
    return (
      <div>hello</div>
    )


  const parsedStyling = () => {
    let style = {}
    if (!!updates.data) {
      style = JSON.parse(updates.data)
    }
    return style
  }

  const applyStyle = () => {
    try {
      let classes = Object.entries(parsedStyling())

      for (let i = 0; i < classes.length; i++) {
        let className = classes[i][0]
        let styles = Object.entries(classes[i][1])

        let elem = document.querySelector(className)

        if (elem === null) return
        for (let j = 0; j < styles.length; j++) {
          let style = styles[j]
          elem.style[style[0]] = style[1]
        }

      }
    } catch (error) {
      console.log(error)
    }

  }

  applyStyle()

  return (
    <div>
      <div className="speacial_element">hello</div>
    </div>
  )
}

export default Client