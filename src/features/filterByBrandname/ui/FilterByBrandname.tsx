import { Accordion, AccordionSummary, Typography, AccordionDetails, FormControlLabel, Checkbox } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { toggleBrandnameFilterValue } from "..";
import { useEffect } from "react";

export const FilterByBrandname = () => {

    const dispatch = useAppDispatch()
    const { brandnameSortValue } = useAppSelector(state => state.filterByBrandNameSlice)

    const handleChange = (brandname: string) => {
        dispatch(toggleBrandnameFilterValue(brandname))
    }


    return (

        <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel1-header"
            >
                <Typography>Brand</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
                <FormControlLabel
                    control={<Checkbox />}
                    checked={brandnameSortValue["Nike"]}
                    label="Nike"
                    onChange={() => handleChange("Nike")}
                />
                <FormControlLabel
                    control={<Checkbox />}
                    checked={brandnameSortValue["Adidas"]}
                    label="Adidas"
                    onChange={() => handleChange("Adidas")}
                />
                <FormControlLabel
                    control={<Checkbox />}
                    checked={brandnameSortValue["Under Armour"]}
                    label="Under Armour"
                    onChange={() => handleChange("Under Armour")}
                />
            </AccordionDetails>
        </Accordion>
    )
}
