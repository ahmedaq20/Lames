import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Lames — We build systems that work for you'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#05070d',
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.35), transparent 60%), radial-gradient(ellipse 60% 50% at 85% 100%, rgba(147,51,234,0.25), transparent 55%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '10px 28px',
              borderRadius: 9999,
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#93c5fd',
              fontSize: 26,
              letterSpacing: 2,
            }}
          >
            DIGITAL PRODUCT ENGINEERING & AUTOMATION
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 96,
            fontWeight: 700,
            color: 'white',
            letterSpacing: -3,
          }}
        >
          We build
          <span
            style={{
              marginLeft: 24,
              backgroundImage: 'linear-gradient(90deg, #60a5fa, #c084fc)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            systems
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 96,
            fontWeight: 700,
            color: 'white',
            letterSpacing: -3,
          }}
        >
          that work for you
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 48,
            fontSize: 34,
            fontWeight: 700,
            color: '#60a5fa',
            letterSpacing: 6,
          }}
        >
          LAMES
        </div>
      </div>
    ),
    size,
  )
}
