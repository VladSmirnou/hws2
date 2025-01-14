import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '165px',                
                color: 'rgb(0, 204, 34)',
                '& .MuiSlider-rail': {
                    color: 'rgb(139, 139, 139)',
                    opacity: 1
                },
                '& .MuiSlider-thumb': {
                    border: '1px solid rgb(0, 204, 34)',
                    backgroundColor: 'white'
                },
                '& .MuiSlider-thumb::before': {
                    boxShadow: 'none',
                    backgroundColor: 'rgb(0, 204, 34)',
                    width: '6px',
                    height: '6px'
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
