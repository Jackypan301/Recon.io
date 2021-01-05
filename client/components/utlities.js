export const drawReact = (detections, ctx) => {
  detections.forEach(prediction => {
    const [x,y,width,height] = prediction['bbox'];
    const text = prediction['class'];

    const color = 'white'
    ctx.strokeSylt = color
    ctx.font = '25px Arial'
    ctx.fillstyle = color

    ctx.beginPath()
    ctx.fillText(text, x, y)
    ctx.rect(x, y, width, height)
    ctx.stroke()
  })
}