import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('effect', { enable })
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log(handleMove, { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enable) {
      window.addEventListener('pointermove', handleMove)
      // getEventListeners(window) para ver las suscripciones y esta limpiando
    }
    return () => {
      console.log('cleanUp', { enable })
      window.removeEventListener('pointermove', handleMove)
    }
  }
  , [enable])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enable)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enable])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnable(!enable)}>
        {enable ? 'Desactivar' : 'Activar'}
      </button>
    </>
  )
}

function App () {
  const [mounted, setMounted] = useState(true)
  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Mounted
      </button>
    </main>
  )
}
export default App
