import countdown from 'daisyui/components/countdown'
import React from 'react'

const Countdown = () => {
    return (
        <div>{/* For TSX uncomment the commented types below */}
            <div className="flex gap-5">
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 15 } /* as React.CSSProperties */} aria-live="polite" aria-label={countdown}>15</span>
                    </span>
                    days
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 10 } /* as React.CSSProperties */} aria-live="polite" aria-label={countdown}>10</span>
                    </span>
                    hours
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 24 } /* as React.CSSProperties */} aria-live="polite" aria-label={countdown}>24</span>
                    </span>
                    min
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 59 } /* as React.CSSProperties */} aria-live="polite" aria-label={countdown}>59</span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    )
}

export default Countdown