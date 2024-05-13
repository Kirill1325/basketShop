import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import { RangeSlider } from '../../../entities/slider';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface DenseMenuProps {
    sizesGrid?: Array<string | number>
}

export function DenseMenu({ sizesGrid }: DenseMenuProps) {
    return (
        <Paper elevation={0} sx={{ width: 320 }}>
            <MenuList dense>

                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        id="panel1-header"
                    >
                        <Typography>Brand</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
                        <FormControlLabel control={<Checkbox />} label="Nike" />
                        <FormControlLabel control={<Checkbox />} label="Adidas" />
                        <FormControlLabel control={<Checkbox />} label="Under Armour" />
                    </AccordionDetails>
                </Accordion>

                <Divider />

                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        id="panel2-header"
                    >
                        <Typography>Price</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ display: 'flex', gap: 10 }}>
                            <TextField id="outlined-basic" size="small" label="From" variant="outlined" />
                            <TextField id="outlined-basic" size="small" label="To" variant="outlined" />
                        </Box>
                        <RangeSlider />
                    </AccordionDetails>
                </Accordion>



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