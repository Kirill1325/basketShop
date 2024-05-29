import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import { FilterByPrice } from '../../../features/filterByPrice';
import { FilterByBrandname } from '../../../features/filterByBrandname';
import { FilterBySize } from '../../../features/filterBySize';

interface DenseMenuProps {
    sizesGrid?: Array<string>
}

export function DenseMenu({ sizesGrid }: DenseMenuProps) {
    return (
        <Paper
            elevation={0}
            sx={{
                width: 330,
                display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'block'
                }
            }}>
            <MenuList dense>

                <FilterByBrandname />
                <Divider />

                <FilterByPrice />
                <Divider />
                {sizesGrid && <FilterBySize sizesGrid={sizesGrid} />}

            </MenuList>
        </Paper>
    );
}