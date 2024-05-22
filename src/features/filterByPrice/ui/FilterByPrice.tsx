import { Accordion, AccordionSummary, Typography, AccordionDetails, Box, TextField } from "@mui/material"
import { RangeSlider, setSliderValue } from "../../../entities/slider"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppDispatch, useAppSelector } from "../../../app/store";

export const FilterByPrice = () => {

    const dispatch = useAppDispatch()
    const { value } = useAppSelector(state => state.sliderSlice)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        parseInt(e.target.value) === value[0]
            ? dispatch(setSliderValue([parseInt(e.target.value), value[1]]))
            : dispatch(setSliderValue([value[0], parseInt(e.target.value)]))
    }

    return (
        <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel2-header"
            >
                <Typography>Price</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ display: 'flex', gap: 10 }}>
                    <TextField
                        id="minValue"
                        size="small"
                        label="From"
                        variant="outlined"
                        value={value[0]}
                        onChange={(e) => handleChange(e)}
                    />
                    <TextField
                        id="maxValue"
                        size="small"
                        label="To"
                        variant="outlined"
                        value={value[1]}
                        onChange={(e) => handleChange(e)}
                    />
                </Box>
                <RangeSlider />
            </AccordionDetails>
        </Accordion>
    )
}
