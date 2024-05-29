import { Accordion, AccordionSummary, Typography, AccordionDetails, Box, TextField } from "@mui/material"
import { RangeSlider, setSliderPriceValue } from "../../../entities/slider"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppDispatch, useAppSelector } from "../../../app/store";

export const FilterByPrice = () => {

    const dispatch = useAppDispatch()
    const { priceValue } = useAppSelector(state => state.sliderSlice)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        parseInt(e.target.value) === (priceValue as number[])[0]
            ? dispatch(setSliderPriceValue([parseInt(e.target.value), (priceValue as number[])[1]]))
            : dispatch(setSliderPriceValue([(priceValue as number[])[0], parseInt(e.target.value)]))
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
                        value={(priceValue as number[])[0]}
                        onChange={(e) => handleChange(e)}
                    />
                    <TextField
                        id="maxValue"
                        size="small"
                        label="To"
                        variant="outlined"
                        value={(priceValue as number[])[1]}
                        onChange={(e) => handleChange(e)}
                    />
                </Box>
                <RangeSlider />
            </AccordionDetails>
        </Accordion>
    )
}
