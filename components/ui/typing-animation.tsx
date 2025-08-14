'use client'

import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  text: string
  className?: string
  isMobile?: boolean
}

export function TypingAnimation({ text, className = '', isMobile = false }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'deleting' | 'pause'>('typing')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    console.log('Current phase:', phase, 'displayedText length:', displayedText.length, 'text length:', text.length)

    if (phase === 'typing') {
      if (displayedText.length < text.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1))
        }, 100) // 100ms per character
      } else {
        // Start waiting phase
        console.log('Starting waiting phase')
        timeoutId = setTimeout(() => {
          console.log('Starting deleting phase')
          setPhase('deleting')
        }, 3000) // Wait 3 seconds
      }
    } else if (phase === 'deleting') {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 80) // 80ms per character (slower deletion)
      } else {
        // Start pause phase
        console.log('Starting pause phase')
        timeoutId = setTimeout(() => {
          console.log('Starting typing phase again')
          setPhase('typing')
        }, 500) // Wait 0.5 seconds
      }
    } else if (phase === 'waiting') {
      // This case should not happen as we directly set deleting after waiting timeout
      // But if it does, just wait
      console.log('In waiting phase - this should not execute')
    }

    return () => clearTimeout(timeoutId)
  }, [displayedText, phase, text])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500) // Blink every 500ms

    return () => clearInterval(cursorInterval)
  }, [])

  // Format text for display
  const formatText = () => {
    if (isMobile) {
      // For mobile 3-line format
      const mobileLines = ['AI×自動化で', '業務を速く、', '正確に。']
      let currentText = displayedText
      let result = []
      let charIndex = 0
      
      for (let lineIndex = 0; lineIndex < mobileLines.length; lineIndex++) {
        const line = mobileLines[lineIndex]
        const lineEndIndex = charIndex + line.length
        const lineText = currentText.slice(charIndex, Math.min(currentText.length, lineEndIndex))
        
        if (lineText.length > 0) {
          result.push(
            <span key={lineIndex}>
              {lineText}
              {lineIndex < mobileLines.length - 1 && lineText.length === line.length && <br />}
            </span>
          )
        }
        
        charIndex = lineEndIndex
        if (charIndex >= currentText.length) break
      }
      
      return result
    }
    
    // For desktop - single line
    return displayedText
  }

  return (
    <span className={className}>
      {formatText()}
      <span 
        className={`inline-block w-0.5 ml-1 ${showCursor ? 'bg-current' : 'bg-transparent'}`}
        style={{ 
          height: '1em',
          transform: 'translateY(0.1em)'
        }}
      />
    </span>
  )
}