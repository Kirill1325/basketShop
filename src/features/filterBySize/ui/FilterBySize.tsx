import { Accordion, AccordionSummary, Typography, AccordionDetails, Grid, Button } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { toggleSizeFilterValue } from "../model/filterBySizeSlice";

interface FilterBySizeProps {
    sizesGrid: (string)[]
}

export const FilterBySize = ({ sizesGrid }: FilterBySizeProps) => {

    const dispatch = useAppDispatch()
    const { sizeSortValue } = useAppSelector(state => state.filterBySizeSlice)

    const handleChooseSizeClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const choseSize = e.currentTarget.value
        dispatch(toggleSizeFilterValue(choseSize))
    }

    return (
        <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel3-header"
            >
                <Typography>Sizes</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ padding: 0 }}>
                <Grid container spacing={0.5} >
                    {sizesGrid.map((size, idx) =>
                        <Grid item xs={4} key={idx}>
                            <Button
                                value={size}
                                onClick={(e) => handleChooseSizeClick(e)}
                                variant='outlined'
                                sx={{
                                    width: 105,
                                    height: 40,
                                    border: sizeSortValue[size] ? '1px solid black' : '1px solid rgb(195, 195, 195)',
                                    color: 'black',
                                    borderRadius: 0,
                                    "&:hover": {
                                        color: 'rgb(195, 195, 195)',
                                        backgroundColor: 'white',
                                        border: '1px solid rgb(195, 195, 195)'
                                    }
                                }}
                            >{size}</Button>
                        </Grid>
                    )}
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}
