import { Box, Divider, MenuList, Modal, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../app/store"
import { toggleMobileFilterBarModal } from "../model/mobileFilterBarSlice"
import { FilterByBrandname } from "../../../features/filterByBrandname";
import { FilterByPrice } from "../../../features/filterByPrice";

const style = {
    position: 'absolute' as 'absolute',
    right: 0,
    height: '100%',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
};

export const MobileFilterBar = () => {

    const { isMobileFilterBarOpened } = useAppSelector(state => state.mobileFilterBarSlice)
    const dispatch = useAppDispatch()

    return (
        <Modal
            open={isMobileFilterBarOpened}
            onClose={() => dispatch(toggleMobileFilterBarModal())}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '2em'
                }}>
                    FILTER
                </Typography>
                <Divider variant="fullWidth" />
                <MenuList dense>

                    <FilterByBrandname />
                    <Divider />

                    <FilterByPrice />
                    <Divider />
                    {/* {sizesGrid && <FilterBySize sizesGrid={sizesGrid} />} */}

                </MenuList>
            </Box>
        </Modal>
    )
}
