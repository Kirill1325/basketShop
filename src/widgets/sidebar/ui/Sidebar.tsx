import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FilterByPrice } from '../../../features/filterByPrice';
import { FilterByBrandname } from '../../../features/filterByBrandname';

interface DenseMenuProps {
    sizesGrid?: Array<string | number>
}

export function DenseMenu({ sizesGrid }: DenseMenuProps) {
    return (
        <Paper elevation={0} sx={{ width: 320 }}>
            <MenuList dense>

                <FilterByBrandname />

                <Divider />

                <FilterByPrice />

                {sizesGrid &&
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            id="panel3-header"
                        >
                            <Typography>Sizes</Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ padding: 0 }}>
                            <Grid container >
                                {sizesGrid.map((size, idx) =>
                                    <Grid item key={idx}>
                                        <Button
                                            variant='outlined'
                                            size='small'
                                            sx={{
                                                padding: 0
                                            }}
                                        >{size}</Button>
                                    </Grid>
                                )}
                            </Grid>
                        </AccordionDetails>
                    </Accordion>

                }

            </MenuList>
        </Paper>
    );
}