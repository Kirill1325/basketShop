import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { setSliderValue } from '..';

function valuetext(value: number) {
    return `${value}°C`;
}

export function RangeSlider() {

    // vlaue array: [0] is minValue, [1] is maxValue
    const { value } = useAppSelector(state => state.sliderSlice)
    const dispatch = useAppDispatch()

    const handleChange = (event: Event, newValue: number[]) => {
        // setValue(newValue as number[]);
        dispatch(setSliderValue(newValue))
    };

    // React.useEffect(() => {
    //     console.log(value)
    // }, [value])

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange} //error can be ignored
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                max={1000}
                sx={{ width: 285 }}
            />
        </Box>
    );
}