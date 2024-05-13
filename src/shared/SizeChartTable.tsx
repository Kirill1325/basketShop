import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    UK: string,
    US: string,
    EU: string,
    CM: string,
) {
    return { UK, US, EU, CM};
}

const rows = [
    createData('UK 3', '3.5', '35 2 / 3', '21.8'),
    createData('UK 3.5', '4', '36', '22.1'),
    createData('UK 4', '4.5', '36 2/3', '22.5'),
    createData('UK 4.5', '5', '37 1/3', '22.9'),
    createData('UK 5', '5.5', '38', '23.3'),
    createData('UK 5.5', '6', '38 2/3', '23.8'),
    createData('UK 6', '6.5', '39 1/3', '24.2'),
    createData('UK 6.5', '7', '40', '24.6'),
    createData('UK 7', '7.5', '40 2/3', '25'),
    createData('UK 7.5', '8', '41 1/3', '25.5'),
    createData('UK 8', '8.5', '42', '25.9'),
    createData('UK 8.5', '9', '42 2/3', '26.3'),
    createData('UK 9', '9.5', '43 1/3', '26.7'),
    createData('UK 9.5', '10', '44', '27.1'),
    createData('UK 10', '10.5', '44 2/3', '27.6'),
];

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">UK</StyledTableCell>
                        <StyledTableCell align="center">US</StyledTableCell>
                        <StyledTableCell align="center">EU</StyledTableCell>
                        <StyledTableCell align="center">CM</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.UK}>
                            <StyledTableCell align="center">
                                {row.UK}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.US}</StyledTableCell>
                            <StyledTableCell align="center">{row.EU}</StyledTableCell>
                            <StyledTableCell align="center">{row.CM}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}