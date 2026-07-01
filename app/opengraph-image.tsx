import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Otávio Sanchez — Engenheiro de Software Sênior'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#5652CC',
          padding: '60px 80px',
          justifyContent: 'space-between',
        }}
      >
        {/* Top accent */}
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ width: 40, height: 40, backgroundColor: '#FC780B', transform: 'rotate(45deg)' }} />
          <div style={{ width: 20, height: 20, backgroundColor: '#ffffff', opacity: 0.3, transform: 'rotate(45deg)', marginTop: 10 }} />
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 20, color: '#A3A9D0', letterSpacing: 6, textTransform: 'uppercase' }}>
            Engenheiro de Software Sênior
          </div>
          <div style={{ fontSize: 88, fontWeight: 800, color: '#ffffff', lineHeight: 1, letterSpacing: -2 }}>
            Otávio
          </div>
          <div style={{ fontSize: 88, fontWeight: 800, color: '#FC780B', lineHeight: 1, letterSpacing: -2 }}>
            Sanchez
          </div>
          <div style={{ fontSize: 22, color: '#ffffff', opacity: 0.75, marginTop: 12, maxWidth: 700 }}>
            10+ anos criando produtos digitais — Lista do Lar, OctaVerse, NeckChart
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 18, color: '#A3A9D0', letterSpacing: 2 }}>
            otaviosanchez.com
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 10, height: 10, backgroundColor: '#FC780B', borderRadius: '50%' }} />
            <div style={{ fontSize: 16, color: '#ffffff', opacity: 0.6 }}>React · Node.js · AWS</div>
          </div>
        </div>
      </div>
    ),
    size
  )
}
