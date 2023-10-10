import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"

const MeterGuage = ({ value }: { value: number }) => {
    return (
        <div>
            <div>
                <ReactSpeedometer
                    width={500}
                    maxValue={400}
                    needleHeightRatio={0.7}
                    value={value}
                    customSegmentStops={[0, 100, 200, 300, 400]}
                    segmentColors={['#9400FF', '#A8DF8E', '#FF4B91', '#C70039']}
                    currentValueText="You Are"
                    customSegmentLabels={[
                        {
                            text: 'Under Weight',
                            position: "INSIDE",
                            color: '#FFFFFF',
                        },
                        {
                            text: 'Normal',
                            position: 'INSIDE',
                            color: '#FFFFFF',
                        },
                        {
                            text: 'Over Weight',
                            position: 'INSIDE',
                            color: '#FFFFFF',
                        },
                        {
                            text: 'Obese',
                            position: 'INSIDE',
                            color: '#FFFFFF',
                        },
                    ]}
                    ringWidth={47}
                    needleTransitionDuration={3333}
                    needleTransition={"easeElastic"}
                    needleColor={'#141E46'}
                    textColor={'#FF6969'}
                />
            </div>
        </div >
    )
}

export default MeterGuage