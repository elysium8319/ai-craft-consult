import { useEffect, useRef } from 'react'

const InteractiveBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let mouseX = -1000
    let mouseY = -1000

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const gridSpacing = 40
    const dotRadius = 2
    const maxDistance = 150
    const maxDotRadius = 8

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cols = Math.ceil(canvas.width / gridSpacing)
      const rows = Math.ceil(canvas.height / gridSpacing)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSpacing + gridSpacing / 2
          const y = j * gridSpacing + gridSpacing / 2

          const dx = mouseX - x
          const dy = mouseY - y
          const distance = Math.sqrt(dx * dx + dy * dy)

          let radius = dotRadius
          let opacity = 0.15

          if (distance < maxDistance) {
            const influence = 1 - distance / maxDistance
            radius = dotRadius + (maxDotRadius - dotRadius) * influence
            opacity = 0.15 + 0.5 * influence
          }

          ctx.fillStyle = `rgba(15, 23, 42, ${opacity})`
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ touchAction: 'none' }}
    />
  )
}

export default InteractiveBackground
