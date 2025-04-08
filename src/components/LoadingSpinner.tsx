// CSS based spinner

import React from "react"

export const LoadingSpinner: React.FC = () => {
    return(
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", alignItems: "center", height: "100vh" }}>
            <div
                style={{
                    border: "4px solid #f3f3f3", /* Light grey */
                    borderTop: "4px solid #3498db", /* Blue */
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    animation: "spin 2s linear infinite",
                }}
            >
            </div>
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg);}
                    1000% { transform: rotate(360deg);}
                }
            `}</style>
        </div>
    )
}